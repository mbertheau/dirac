// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


WebInspector.TimelineJSProfileProcessor = { };

/**
 * @param {!WebInspector.TracingTimelineModel} timelineModel
 * @param {!ProfilerAgent.CPUProfile} jsProfile
 * @return {!Array.<!WebInspector.TracingModel.Event>}
 */
WebInspector.TimelineJSProfileProcessor.generateTracingEventsFromCpuProfile = function(timelineModel, jsProfile)
{
    if (!jsProfile.samples)
        return [];
    var jsProfileModel = new WebInspector.CPUProfileDataModel(jsProfile);
    var idleNode = jsProfileModel.idleNode;
    var programNode = jsProfileModel.programNode;
    var gcNode = jsProfileModel.gcNode;
    var samples = jsProfileModel.samples;
    var timestamps = jsProfileModel.timestamps;
    var jsEvents = [];
    var mainThread = timelineModel.mainThreadEvents()[0].thread;
    for (var i = 0; i < samples.length; ++i) {
        var node = jsProfileModel.nodeByIndex(i);
        if (node === programNode || node === gcNode || node === idleNode)
            continue;
        var stackTrace = node._stackTraceArray;
        if (!stackTrace) {
            stackTrace = /** @type {!ConsoleAgent.StackTrace} */ (new Array(node.depth + 1));
            node._stackTraceArray = stackTrace;
            for (var j = 0; node.parent; node = node.parent)
                stackTrace[j++] = /** @type {!ConsoleAgent.CallFrame} */ (node);
        }
        var jsEvent = new WebInspector.TracingModel.Event(WebInspector.TracingModel.DevToolsMetadataEventCategory, WebInspector.TracingTimelineModel.RecordType.JSSample,
            WebInspector.TracingModel.Phase.Instant, timestamps[i], mainThread);
        jsEvent.stackTrace = stackTrace;
        jsEvents.push(jsEvent);
    }
    return jsEvents;
}

/**
 * @param {!Array.<!WebInspector.TracingModel.Event>} events
 * @return {!Array.<!WebInspector.TracingModel.Event>}
 */
WebInspector.TimelineJSProfileProcessor.generateJSFrameEvents = function(events)
{
    function equalFrames(frame1, frame2)
    {
        return frame1.scriptId === frame2.scriptId && frame1.functionName === frame2.functionName;
    }

    function eventEndTime(e)
    {
        return e.endTime || e.startTime;
    }

    function isJSInvocationEvent(e)
    {
        switch (e.name) {
        case WebInspector.TracingTimelineModel.RecordType.FunctionCall:
        case WebInspector.TracingTimelineModel.RecordType.EvaluateScript:
            return true;
        }
        return false;
    }

    var jsFrameEvents = [];
    var jsFramesStack = [];
    var coalesceThresholdMs = WebInspector.TimelineFlameChartDataProvider.JSFrameCoalesceThresholdMs;

    function onStartEvent(e)
    {
        extractStackTrace(e);
    }

    function onInstantEvent(e, top)
    {
        if (e.name === WebInspector.TracingTimelineModel.RecordType.JSSample && top && !isJSInvocationEvent(top))
            return;
        extractStackTrace(e);
    }

    function onEndEvent(e)
    {
        if (isJSInvocationEvent(e))
            jsFramesStack.length = 0;
    }

    function extractStackTrace(e)
    {
        if (!e.stackTrace)
            return;
        while (jsFramesStack.length && eventEndTime(jsFramesStack.peekLast()) + coalesceThresholdMs <= e.startTime)
            jsFramesStack.pop();
        var endTime = eventEndTime(e);
        var numFrames = e.stackTrace.length;
        var minFrames = Math.min(numFrames, jsFramesStack.length);
        var j;
        for (j = 0; j < minFrames; ++j) {
            var newFrame = e.stackTrace[numFrames - 1 - j];
            var oldFrame = jsFramesStack[j].args["data"];
            if (!equalFrames(newFrame, oldFrame))
                break;
            jsFramesStack[j].setEndTime(Math.max(jsFramesStack[j].endTime, endTime));
        }
        jsFramesStack.length = j;
        for (; j < numFrames; ++j) {
            var frame = e.stackTrace[numFrames - 1 - j];
            var jsFrameEvent = new WebInspector.TracingModel.Event(WebInspector.TracingModel.DevToolsMetadataEventCategory, WebInspector.TracingTimelineModel.RecordType.JSFrame,
                WebInspector.TracingModel.Phase.Complete, e.startTime, e.thread);
            jsFrameEvent.addArgs({ data: frame });
            jsFrameEvent.setEndTime(endTime);
            jsFramesStack.push(jsFrameEvent);
            jsFrameEvents.push(jsFrameEvent);
        }
    }

    var stack = [];
    for (var i = 0; i < events.length; ++i) {
        var e = events[i];
        var top = stack.peekLast();
        if (top && top.endTime <= e.startTime)
            onEndEvent(stack.pop());
        if (e.duration) {
            onStartEvent(e);
            stack.push(e);
        } else {
            onInstantEvent(e, stack.peekLast());
        }
    }
    while (stack.length)
        onEndEvent(stack.pop());

    return jsFrameEvents;
}
