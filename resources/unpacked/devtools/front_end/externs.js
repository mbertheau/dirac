/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/* eslint-disable no-unused-vars */

// Blink Web Facing API

/**
 * @param {!Object} object
 * @param {!Function} callback
 */
Object.observe = function(object, callback) {};

/** @type {boolean} */
Event.prototype.isMetaOrCtrlForTest;

/** @type {string} */
Event.prototype.code;

/**
 * TODO(luoe): MouseEvent properties movementX and movementY from the
 * PointerLock API are not yet standard. Once they are included in
 * Closure Compiler, these custom externs can be removed.
 */
/** @type {number} */
MouseEvent.prototype.movementX;

/** @type {number} */
MouseEvent.prototype.movementY;

/**
 * @type {number}
 */
KeyboardEvent.DOM_KEY_LOCATION_NUMPAD;

/**
 * @param {!T} value
 * @param {boolean=} onlyFirst
 * @this {Array.<T>}
 * @template T
 */
Array.prototype.remove = function(value, onlyFirst) {};
/**
 * @param {!Array.<!T>} array
 * @this {Array.<!T>}
 * @template T
 */
Array.prototype.pushAll = function(array) {};
/**
 * @return {!Object.<string, boolean>}
 * @this {Array.<T>}
 * @template T
 */
Array.prototype.keySet = function() {};
/**
 * @param {number} index
 * @return {!Array.<!T>}
 * @this {Array.<T>}
 * @template T
 */
Array.prototype.rotate = function(index) {};
/**
 * @this {Array.<number>}
 */
Array.prototype.sortNumbers = function() {};
/**
 * @param {!S} object
 * @param {function(!S,!T):number=} comparator
 * @param {number=} left
 * @param {number=} right
 * @return {number}
 * @this {Array.<T>}
 * @template S
 */
Array.prototype.lowerBound = function(object, comparator, left, right) {};
/**
 * @param {!S} object
 * @param {function(!S,!T):number=} comparator
 * @param {number=} left
 * @param {number=} right
 * @return {number}
 * @this {Array.<T>}
 * @template S
 */
Array.prototype.upperBound = function(object, comparator, left, right) {};
/**
 * @param {!S} value
 * @param {function(!S,!T):number} comparator
 * @return {number}
 * @this {Array.<T>}
 * @template S
 */
Array.prototype.binaryIndexOf = function(value, comparator) {};
/**
 * @param {function(number, number): number} comparator
 * @param {number} leftBound
 * @param {number} rightBound
 * @param {number} sortWindowLeft
 * @param {number} sortWindowRight
 * @return {!Array.<number>}
 * @this {Array.<number>}
 */
Array.prototype.sortRange = function(comparator, leftBound, rightBound, sortWindowLeft, sortWindowRight) {};

/**
 * @this {Array.<number>}
 * @param {function(number,number):boolean} comparator
 * @param {number} left
 * @param {number} right
 * @param {number} pivotIndex
 * @return {number}
 */
Array.prototype.partition = function(comparator, left, right, pivotIndex) {};

/**
 * @param {string} field
 * @return {!Array.<!T>}
 * @this {Array.<!Object.<string,T>>}
 * @template T
 */
Array.prototype.select = function(field) {};

/**
 * @return {!T|undefined}
 * @this {Array.<T>}
 * @template T
 */
Array.prototype.peekLast = function() {};

/**
 * @param {!Array.<T>} array
 * @param {function(T,T):number} comparator
 * @return {!Array.<T>}
 * @this {!Array.<T>}
 * @template T
 */
Array.prototype.intersectOrdered = function(array, comparator) {};

/**
 * @param {!Array.<T>} array
 * @param {function(T,T):number} comparator
 * @return {!Array.<T>}
 * @this {!Array.<T>}
 * @template T
 */
Array.prototype.mergeOrdered = function(array, comparator) {};

/**
 * @param {number} object
 * @param {function(number, number):number=} comparator
 * @param {number=} left
 * @param {number=} right
 * @return {number}
 */
Int32Array.prototype.lowerBound = function(object, comparator, left, right) {};

// TODO(luoe): remove these BigInt and ArrayLike types once closure supports them.
/**
 * @param {number|string} value
 */
const BigInt = function(value) {};

/** @typedef {*} */
const bigint = null;

/** @typedef {Array|NodeList|Arguments|{length: number}} */
let ArrayLike;

// File System API
/**
 * @constructor
 */
function DOMFileSystem() {
}

/**
 * @type {DirectoryEntry}
 */
DOMFileSystem.prototype.root = null;

/**
 * @type {*}
 */
window.domAutomationController;

const DevToolsHost = function() {};

/** @typedef {{type:string, id:(number|undefined),
              label:(string|undefined), enabled:(boolean|undefined), checked:(boolean|undefined),
              subItems:(!Array.<!DevToolsHost.ContextMenuDescriptor>|undefined)}} */
DevToolsHost.ContextMenuDescriptor;

/**
 * @return {number}
 */
DevToolsHost.zoomFactor = function() {};

/**
 * @param {string} text
 */
DevToolsHost.copyText = function(text) {};

/**
 * @return {string}
 */
DevToolsHost.platform = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {!Array.<!DevToolsHost.ContextMenuDescriptor>} items
 * @param {!Document} document
 */
DevToolsHost.showContextMenuAtPoint = function(x, y, items, document) {};

/**
 * @param {string} message
 */
DevToolsHost.sendMessageToEmbedder = function(message) {};

/**
 * @return {string}
 */
DevToolsHost.getSelectionBackgroundColor = function() {};

/**
 * @return {string}
 */
DevToolsHost.getSelectionForegroundColor = function() {};

/**
 * @return {string}
 */
DevToolsHost.getInactiveSelectionBackgroundColor = function() {};

/**
 * @return {string}
 */
DevToolsHost.getInactiveSelectionForegroundColor = function() {};

/**
 * @return {boolean}
 */
DevToolsHost.isHostedMode = function() {};

/**
 * @param {string} fileSystemId
 * @param {string} registeredName
 * @return {?DOMFileSystem}
 */
DevToolsHost.isolatedFileSystem = function(fileSystemId, registeredName) {};

/**
 * @param {!FileSystem} fileSystem
 */
DevToolsHost.upgradeDraggedFileSystemPermissions = function(fileSystem) {};

/** Extensions API */

/** @constructor */
function EventSink() {
}
/** @constructor */
function ExtensionSidebarPane() {
}
/** @constructor */
function Panel() {
}
/** @constructor */
function PanelWithSidebar() {
}
/** @constructor */
function Resource() {
}

let extensionServer;

/**
 * @constructor
 */
function ExtensionDescriptor() {
  this.startPage = '';
  this.name = '';
  this.exposeExperimentalAPIs = false;
}

/**
 * @constructor
 */
function ExtensionReloadOptions() {
  this.ignoreCache = false;
  this.injectedScript = '';
  this.userAgent = '';
}

const Adb = {};
/** @typedef {{id: string, name: string, url: string, attached: boolean}} */
Adb.Page;
/** @typedef {{id: string, adbBrowserChromeVersion: string, compatibleVersion: boolean, adbBrowserName: string, source: string, adbBrowserVersion: string, pages: !Array<!Adb.Page>}} */
Adb.Browser;
/** @typedef {{id: string, adbModel: string, adbSerial: string, browsers: !Array.<!Adb.Browser>, adbPortStatus: !Array.<number>, adbConnected: boolean}} */
Adb.Device;
/** @typedef {!Object.<string, string>} */
Adb.PortForwardingConfig;
/** @typedef {!{port: string, address: string}} */
Adb.PortForwardingRule;
/** @typedef {{ports: !Object<string, number>, browserId: string}} */
Adb.DevicePortForwardingStatus;
/** @typedef {!Object<string, !Adb.DevicePortForwardingStatus>} */
Adb.PortForwardingStatus;
/** @typedef {!Array<string>} */
Adb.NetworkDiscoveryConfig;
/**
 * @typedef {!{
 *   discoverUsbDevices: boolean,
 *   portForwardingEnabled: boolean,
 *   portForwardingConfig: !Adb.PortForwardingConfig,
 *   networkDiscoveryEnabled: boolean,
 *   networkDiscoveryConfig: !Adb.NetworkDiscoveryConfig
 * }}
 */
Adb.Config;

/** @const */
const module = {};

/**
 * @constructor
 */
function diff_match_patch() {
}

diff_match_patch.prototype = {
  /**
   * @param {string} text1
   * @param {string} text2
   * @return {!Array.<!{0: number, 1: string}>}
   */
  diff_main: function(text1, text2) {},

  /**
   * @param {!Array.<!{0: number, 1: string}>} diff
   */
  diff_cleanupSemantic(diff) {}
};

var dirac = {
    /** @type {boolean} */
    _DEBUG_EVAL: true,
    /** @type {boolean} */
    hasFeature: true,
    /** @type {boolean} */
    hasREPL: true,
    /** @type {boolean} */
    hasParinfer: true,
    /** @type {boolean} */
    hasFriendlyLocals: true,
    /** @type {boolean} */
    hasClusteredLocals: true,
    /** @type {boolean} */
    hasInlineCFs: true,
    /** @type {boolean} */
    hasWelcomeMessage: true,
    /** @type {boolean} */
    hasCleanUrls: true,
    /** @type {boolean} */
    hasBeautifyFunctionNames: true,
    /** @type {boolean} */
    hasLinkActions: true,
    /** @type {?Object.<string, dirac.NamespaceDescriptor>} */
    _namespacesCache: null,
    /**
    * @param {string} code
    * @return {string}
    */
    codeAsString: function (code) {},
    /**
    * @param {string} string
    * @return {string}
    */
    stringEscape: function (string) {},
    /**
    * @param {string} action
    */
    dispatchEventsForAction: function(action) {},
    /**
    * @param {Node} node
    * @param {string} query
    */
    querySelectionAllDeep: function(node, query) {},
    lookupCurrentContext: function() {},
    /**
    * @param {string} code
    * @param {boolean} silent
    * @param {?} callback
    */
    evalInCurrentContext: function(code, silent, callback) {},
    /**
    * @param {string} code
    * @param {boolean} silent
    * @param {?} callback
    */
    evalInDefaultContext: function(code, silent, callback) {},
    /**
    * @return {boolean}
    */
    hasCurrentContext: function() {},
    /**
    * @return {boolean}
    */
    hasDefaultContext: function() {},

    /**
     * @param {?} callback
     * @return {boolean}
     * @this {Object}
     */
    subscribeDebuggerEvents: function(callback) {},
    /**
     * @param {?} callback
     * @return {boolean}
     */
    unsubscribeDebuggerEvents: function(callback) {},

    /**
    * @param {?} callFrame
    * @return {!Promise<!dirac.ScopeInfo>}
    */
    extractScopeInfoFromScopeChainAsync: function(callFrame) {},
    /**
    * @param {string} namespaceName
    * @return {!Promise<Array.<string>>}
    */
    extractNamespaceSymbolsAsync: function(namespaceName) {},
    /**
     * @param {string} namespaceName
     * @return {!Promise<Array.<string>>}
     */
    extractMacroNamespaceSymbolsAsync: function(namespaceName) {},
    /**
    * @return {!Promise<!Object.<string, dirac.NamespaceDescriptor>>}
    */
    extractNamespacesAsync: function() {},

    startListeningForWorkspaceChanges: function() {},
    stopListeningForWorkspaceChanges: function() {},
    /**
    * @param {string=} namespaceName
    */
    invalidateNamespaceSymbolsCache: function (namespaceName) {},
    invalidateNamespacesCache: function() {},

    /**
     * @param {Object.<string, dirac.NamespaceDescriptor>} namespaces
     * @return {Array.<string>}
     */
    getMacroNamespaceNames: function(namespaces) {},

    /**
    * @param {!Object} action
    */
    registerDiracLinkAction: function(action) {},

    /**
     * @param {Array.<T>} coll
     * @param {function(T):string=} keyFn
     * @return {Array.<T>}
     * @template T
     */
    deduplicate: function(coll, keyFn) {},

    /**
     * @param {Array.<T>} array
     * @param {function(T, T):number} comparator
     * @return {Array.<T>}
     * @template T
     */
    stableSort: function(array, comparator) {},

    /**
     * @param {string=} namespaceName
     * @return {?dirac.NamespaceDescriptor}
     */
    getNamespace: function(namespaceName) {},

    /**
     * @param {string} type
     * @param {string} level
     * @param {string} text
     * @param {Array.<*>=} parameters
     */
    addConsoleMessageToMainTarget: function(type, level, text, parameters) {},

    // -- these are dynamically added by dirac.implant namespace ------------------------------------------------------------

    initConsole: function() {},
    initRepl: function() {},
    /**
     * @param {string} panelId
     */
    notifyPanelSwitch: function(panelId) {},
    notifyFrontendInitialized: function() {},
    getVersion: function() {},
    getRuntimeTag: function() {},
    /**
     * @param {Element} textAreaElement
     * @param {boolean} useParinfer
     * @return {!CodeMirror}
     */
    adoptPrompt: function(textAreaElement, useParinfer) {},
    /**
     * @param {number} requestId
     * @param {string} code
     * @param {dirac.ScopeInfo} scopeInfo
     */
    sendEvalRequest: function(requestId, code, scopeInfo) {},
    /**
     * @param {string} ns
     * @param {string} ext
     * @return {string}
     */
    nsToRelpath: function(ns, ext) {},

    triggerInternalError: function() {},
    triggerInternalErrorInPromise: function() {},
    triggerInternalErrorAsErrorLog: function() {},
    /**
     * @param {string} name
     * @return {string}
     */
    getFunctionName: function(name) {},

    /**
     * @param {string} name
     * @return {string}
     */
    getFullFunctionName: function(name) {},

    /**
     * @return {!Promise.<!Array.<string>>}
     */
    getReplSpecialsAsync: function() {},

    /**
     * @param {string} source
     * @return {?dirac.NamespaceDescriptor}
     */
    parseNsFromSource: function(source) {},

    isIntercomReady: function() {},

    reportNamespacesCacheMutation: function() {},

    /**
     * @param {string} text
     */
    feedback: function(text) {}
};

/**
 * @typedef {{name:!string, identifier:?string}}
 */
dirac.ScopeFrameProp;

/**
 * @typedef {{title:?string, props:?Array.<!dirac.ScopeFrameProp>}}
 */
dirac.ScopeFrame;

/**
 * @typedef {{frames:!Array.<!dirac.ScopeFrame>}}
 */
dirac.ScopeInfo;

/**
 * @typedef {{
 *        name:!string,
 *        url:!string,
 *        pseudo:?boolean,
 *        namespaceAliases:?Object.<string, string>,
 *        namespaceRefers:?Object.<string, string>,
 *        macroNamespaceAliases:?Object.<string, string>,
 *        macroRefers:?Object.<string, string>,
 *        detectedMacroNamespaces:?Array.<string>
 *     }}
 */
dirac.NamespaceDescriptor;


var Keysim = {
    Keyboard: {
        US_ENGLISH: {}
    },

    /**
     * Fires the correct sequence of events on the given target as if the given
     * action was undertaken by a human.
     *
     * @param {string} action e.g. "alt+shift+left" or "backspace"
     * @param {HTMLElement} target
     * @param {?function()} callback
     */
    dispatchEventsForAction: function(action, target, callback) {
    },

    /**
     * Fires the correct sequence of events on the given target as if the given
     * input had been typed by a human.
     *
     * @param {string} input
     * @param {HTMLElement} target
     * @param {?function()} callback
     */
    dispatchEventsForInput: function(input, target, callback) {
    }
};

/** @constructor */
const Doc = function() {};
Doc.prototype = {
  /** @type {number} */
  scrollLeft: 0,
  /** @type {number} */
  scrollTop: 0
};

/** @constructor */
const CodeMirror = function(element, config) {};
CodeMirror.on = function(obj, type, handler) {};
CodeMirror.prototype = {
  /** @type {!Doc} */
  doc: null,
  addKeyMap: function(map) {},
  addLineClass: function(handle, where, cls) {},
  /**
   * @param {?Object=} options
   * @return {!CodeMirror.LineWidget}
   */
  addLineWidget: function(handle, node, options) {},
  /**
   * @param {string|!Object} spec
   * @param {!Object=} options
   */
  addOverlay: function(spec, options) {},
  addWidget: function(pos, node, scroll, vert, horiz) {},
  /** @param {boolean=} isClosed bv */
  changeGeneration: function(isClosed) {},
  charCoords: function(pos, mode) {},
  clearGutter: function(gutterID) {},
  clearHistory: function() {},
  clipPos: function(pos) {},
  /** @param {string=} mode */
  coordsChar: function(coords, mode) {},
  /** @param {string=} mode */
  cursorCoords: function(start, mode) {},
  defaultCharWidth: function() {},
  defaultTextHeight: function() {},
  deleteH: function(dir, unit) {},
  /**
   * @param {*=} to
   * @param {*=} op
   */
  eachLine: function(from, to, op) {},
  execCommand: function(cmd) {},
  extendSelection: function(from, to) {},
  findMarks: function(from, to) {},
  findMarksAt: function(pos) {},
  /**
   * @param {!CodeMirror.Pos} from
   * @param {boolean=} strict
   * @param {Object=} config
   */
  findMatchingBracket: function(from, strict, config) {},
  findPosH: function(from, amount, unit, visually) {},
  findPosV: function(from, amount, unit, goalColumn) {},
  firstLine: function() {},
  focus: function() {},
  getAllMarks: function() {},
  /** @param {string=} start */
  getCursor: function(start) {},
  getDoc: function() {},
  getGutterElement: function() {},
  getHistory: function() {},
  getInputField: function() {},
  getLine: function(line) {},
  /**
   * @return {!{wrapClass: string, height: number}}
   */
  getLineHandle: function(line) {},
  getLineNumber: function(line) {},
  /**
   * @return {!{token: function(CodeMirror.StringStream, Object):string}}
   */
  getMode: function() {},
  getOption: function(option) {},
  /** @param {*=} lineSep */
  getRange: function(from, to, lineSep) {},
  /**
   * @return {!{left: number, top: number, width: number, height: number, clientWidth: number, clientHeight: number}}
   */
  getScrollInfo: function() {},
  getScrollerElement: function() {},
  getSelection: function() {},
  getSelections: function() {},
  getStateAfter: function(line) {},
  getTokenAt: function(pos) {},
  /** @param {*=} lineSep */
  getValue: function(lineSep) {},
  getViewport: function() {},
  getWrapperElement: function() {},
  hasFocus: function() {},
  historySize: function() {},
  indentLine: function(n, dir, aggressive) {},
  indentSelection: function(how) {},
  indexFromPos: function(coords) {},
  /** @param {number=} generation */
  isClean: function(generation) {},
  iterLinkedDocs: function(f) {},
  lastLine: function() {},
  lineCount: function() {},
  lineInfo: function(line) {},
  /**
   * @param {number} height
   * @param {string=} mode
   */
  lineAtHeight: function(height, mode) {},
  linkedDoc: function(options) {},
  listSelections: function() {},
  markClean: function() {},
  markText: function(from, to, options) {},
  moveH: function(dir, unit) {},
  moveV: function(dir, unit) {},
  off: function(type, f) {},
  on: function(type, f) {},
  operation: function(f) {},
  posFromIndex: function(off) {},
  redo: function() {},
  refresh: function() {},
  removeKeyMap: function(map) {},
  removeLine: function(line) {},
  removeLineClass: function(handle, where, cls) {},
  removeLineWidget: function(widget) {},
  removeOverlay: function(spec) {},
  /** @param {*=} origin */
  replaceRange: function(code, from, to, origin) {},
  /**
   * @param {string} replacement
   * @param {string=} select
   */
  replaceSelection: function(replacement, select) {},
  /**
   * @param {!Array.<string>} textPerSelection
   */
  replaceSelections: function(textPerSelection) {},
  /** @param {*=} margin */
  scrollIntoView: function(pos, margin) {},
  scrollTo: function(x, y) {},
  setBookmark: function(pos, options) {},
  setCursor: function(line, ch, extend) {},
  setExtending: function(val) {},
  setGutterMarker: function(line, gutterID, value) {},
  setHistory: function(histData) {},
  setLine: function(line, text) {},
  setOption: function(option, value) {},
  setSelection: function(anchor, head, options) {},
  /**
   * @param {number=} primaryIndex
   * @param {?Object=} config
   */
  setSelections: function(selections, primaryIndex, config) {},
  setSize: function(width, height) {},
  setValue: function(code) {},
  somethingSelected: function() {},
  swapDoc: function(doc) {},
  undo: function() {},
  unlinkDoc: function(other) {}
};
/** @type {!{cursorDiv: Element, lineDiv: Element, lineSpace: Element, gutters: Element}} */
CodeMirror.prototype.display;
/** @type {!{devtoolsAccessibleName: string, mode: string, lineWrapping: boolean}} */
CodeMirror.prototype.options;
/** @type {!Object} */
CodeMirror.Pass;
CodeMirror.showHint = function(codeMirror, hintintFunction) {};
CodeMirror.commands = {};
CodeMirror.modes = {};
CodeMirror.mimeModes = {};
CodeMirror.getMode = function(options, spec) {};
CodeMirror.overlayMode = function(mode1, mode2, squashSpans) {};
CodeMirror.defineMode = function(modeName, modeConstructor) {};
CodeMirror.startState = function(mode) {};
CodeMirror.runMode = function(string, modespec, callback, options) {};
CodeMirror.copyState = function(mode, state) {};
CodeMirror.inputStyles = {};
CodeMirror.inputStyles.textarea = class {
  constructor() {
    /** @type {!HTMLTextAreaElement} */
    this.textarea;
    this.prevInput = '';
    this.composing = false;
    this.contextMenuPending = false;
    /** @type {!CodeMirror} */
    this.cm;
  }
  /**
   * @param {!Object} display
   */
  init(display) {
  }

  /**
   * @param {boolean=} typing
   */
  reset(typing) {
  }

  /**
   * @return {boolean}
   */
  poll() {
    return false;
  }
};

/** @typedef {{canceled: boolean, from: !CodeMirror.Pos, to: !CodeMirror.Pos, text: string, origin: string, cancel: function()}} */
CodeMirror.BeforeChangeObject;

/** @typedef {{from: !CodeMirror.Pos, to: !CodeMirror.Pos, origin: string, text: !Array.<string>, removed: !Array.<string>}} */
CodeMirror.ChangeObject;

/** @constructor */
CodeMirror.Pos = function(line, ch) {};
/** @type {number} */
CodeMirror.Pos.prototype.line;
/** @type {number} */
CodeMirror.Pos.prototype.ch;

/**
 * @param {!CodeMirror.Pos} pos1
 * @param {!CodeMirror.Pos} pos2
 * @return {number}
 */
CodeMirror.cmpPos = function(pos1, pos2) {};

/** @constructor */
CodeMirror.StringStream = function(line) {
  this.pos = 0;
  this.start = 0;
};
CodeMirror.StringStream.prototype = {
  backUp: function(n) {},
  column: function() {},
  current: function() {},
  eat: function(match) {},
  eatSpace: function() {},
  eatWhile: function(match) {},
  eol: function() {},
  indentation: function() {},
  /**
   * @param {!RegExp|string} pattern
   * @param {boolean=} consume
   * @param {boolean=} caseInsensitive
   */
  match: function(pattern, consume, caseInsensitive) {},
  next: function() {},
  peek: function() {},
  skipTo: function(ch) {},
  skipToEnd: function() {},
  sol: function() {}
};

/** @constructor */
CodeMirror.TextMarker = function(doc, type) {};
CodeMirror.TextMarker.prototype = {
  clear: function() {},
  find: function() {},
  changed: function() {}
};

/** @constructor */
CodeMirror.LineWidget = function() {};
CodeMirror.LineWidget.prototype = {
  clear: function() {}
};

/** @type {Object.<string, !Object.<string, string>>} */
CodeMirror.keyMap;

/** @type {{scrollLeft: number, scrollTop: number}} */
CodeMirror.doc;

/**
 * @param {string} mime
 * @param {string} mode
 */
CodeMirror.defineMIME = function(mime, mode) {};

/** @type {boolean} */
window.dispatchStandaloneTestRunnerMessages;

/**
 * Inserts the given HTML Element into the node at the location.
 * @param {string} where Where to insert the HTML text, one of 'beforeBegin',
 *     'afterBegin', 'beforeEnd', 'afterEnd'.
 * @param {!Element} element DOM Element to insert.
 * @return {?Element} The element that was inserted, or null, if the
 *     insertion failed.
 * @see https://dom.spec.whatwg.org/#dom-element-insertadjacentelement
 */
Node.prototype.insertAdjacentElement = function(where, element) {};

/**
 * @param {Array.<Object>} keyframes
 * @param {number|Object} timing
 * @return {Object}
 */
Element.prototype.animate = function(keyframes, timing) {};

/**
 * @param {...!Node} nodes
 * @return {undefined}
 * @see https://dom.spec.whatwg.org/#dom-parentnode-append
 */
Element.prototype.append = function(nodes) {};

/**
 * @param {...!Node} nodes
 * @return {undefined}
 * @see https://dom.spec.whatwg.org/#dom-parentnode-prepend
 */
Element.prototype.prepend = function(nodes) {};

/**
 * @override
 * @param {string} type
 * @param {(!EventListener|!function (!Event): (boolean|undefined)|null)} listener
 * @param {(boolean|!{capture: (boolean|undefined), once: (boolean|undefined), passive: (boolean|undefined)})=} options
 * @this {EventTarget}
 */
Element.prototype.addEventListener = function(type, listener, options) {};

/**
 * @override
 * @param {string} type
 * @param {(!EventListener|!function (!Event): (boolean|undefined)|null)} listener
 * @param {(boolean|!{capture: (boolean|undefined), once: (boolean|undefined), passive: (boolean|undefined)})=} options
 * @this {EventTarget}
 */
Element.prototype.removeEventListener = function(type, listener, options) {};

const acorn = {
  /**
   * @param {string} text
   * @param {Object.<string, boolean>} options
   * @return {!ESTree.Node}
   */
  parse: function(text, options) {},

  /**
   * @param {string} text
   * @param {Object.<string, boolean>} options
   * @return {!Acorn.Tokenizer}
   */
  tokenizer: function(text, options) {},

  tokTypes: {
    _true: new Acorn.TokenType(),
    _false: new Acorn.TokenType(),
    _null: new Acorn.TokenType(),
    num: new Acorn.TokenType(),
    regexp: new Acorn.TokenType(),
    string: new Acorn.TokenType(),
    name: new Acorn.TokenType(),
    eof: new Acorn.TokenType()
  }
};

acorn.loose = {};

/**
 * @param {string} text
 * @param {Object.<string, boolean>} options
 * @return {!ESTree.Node}
 */
acorn.loose.parse = function(text, options) {};

const Acorn = {};
/**
 * @constructor
 */
Acorn.Tokenizer = function() {
  /** @type {function():!Acorn.Token} */
  this.getToken;
};

/**
 * @constructor
 */
Acorn.TokenType = function() {
  /** @type {string} */
  this.label;
  /** @type {(string|undefined)} */
  this.keyword;
};

/**
 * @typedef {{type: !Acorn.TokenType, value: string, start: number, end: number}}
 */
Acorn.Token;

/**
 * @typedef {{type: string, value: string, start: number, end: number}}
 */
Acorn.Comment;

/**
 * @typedef {(!Acorn.Token|!Acorn.Comment)}
 */
Acorn.TokenOrComment;

const ESTree = {};

/**
 * @constructor
 */
ESTree.Node = function() {
  /** @type {number} */
  this.start;
  /** @type {number} */
  this.end;
  /** @type {string} */
  this.type;
  /** @type {(!ESTree.Node|undefined)} */
  this.body;
  /** @type {(!Array.<!ESTree.Node>|undefined)} */
  this.declarations;
  /** @type {(!Array.<!ESTree.Node>|undefined)} */
  this.properties;
  /** @type {(!ESTree.Node|undefined)} */
  this.init;
  /** @type {(!Array.<!ESTree.Node>|undefined)} */
  this.params;
  /** @type {(string|undefined)} */
  this.name;
  /** @type {(?ESTree.Node|undefined)} */
  this.id;
  /** @type {(number|undefined)} */
  this.length;
  /** @type {(?ESTree.Node|undefined)} */
  this.argument;
  /** @type {(string|undefined)} */
  this.operator;
  /** @type {(!ESTree.Node|undefined)} */
  this.right;
  /** @type {(!ESTree.Node|undefined)} */
  this.left;
  /** @type {(string|undefined)} */
  this.kind;
  /** @type {(!ESTree.Node|undefined)} */
  this.property;
  /** @type {(!ESTree.Node|undefined)} */
  this.object;
  /** @type {(string|undefined)} */
  this.raw;
  /** @type {(boolean|undefined)} */
  this.computed;
};

/**
 * @extends {ESTree.Node}
 * @constructor
 */
ESTree.TemplateLiteralNode = function() {
  /** @type {!Array.<!ESTree.Node>} */
  this.quasis;
  /** @type {!Array.<!ESTree.Node>} */
  this.expressions;
};

/**
 * @type {string}
 * @see http://heycam.github.io/webidl/#es-DOMException-prototype-object
 * TODO(jsbell): DOMException should be a subclass of Error.
 */
DOMException.prototype.message;
/** @type {number} */
DOMException.ABORT_ERR;

/**
 * @constructor
 * @param {!Object} params
 */
const Terminal = function(params) {};

Terminal.prototype = {
  fit: function() {},
  linkify: function() {},
  /** @param {!Element} element */
  open: function(element) {},
  /** @param {string} eventName * @param {!Function} handler */
  on: function(eventName, handler) {}
};

/**
 * @param {string} context
 * @return {!Console}
 */
Console.prototype.context = function(context) {};

// Globally defined functions

/**
 * @param {!Array<string>|string} strings
 * @param {...*} vararg
 * @return {string}
 */
const ls = function(strings, vararg) {};

/**
* @param {string} tagName
* @param {string=} customElementType
* @return {!Element}
*/
const createElement = function(tagName, customElementType) {};

/**
 * @param {number|string} data
 * @return {!Text}
 */
const createTextNode = function(data) {};

/**
 * @param {string} elementName
 * @param {string=} className
 * @param {string=} customElementType
 * @return {!Element}
 */
const createElementWithClass = function(elementName, className, customElementType) {};

/**
 * @param {string} childType
 * @param {string=} className
 * @return {!Element}
 */
const createSVGElement = function(childType, className) {};

/**
 * @return {!DocumentFragment}
 */
const createDocumentFragment = function() {};

/**
 * @param {!Event} event
 * @return {boolean}
 */
const isEnterKey = function(event) {};

/**
 * @param {!Event} event
 * @return {boolean}
 */
const isEnterOrSpaceKey = function(event) {};

/**
 * @param {!Event} event
 * @return {boolean}
 */
const isEscKey = function(event) {};

/**
 * @param {!ExtensionDescriptor} extensionInfo
 * @param {string} inspectedTabId
 * @param {string} themeName
 * @param {!Array<number>} keysToForward
 * @param {function(!Object, !Object)|undefined} testHook
 * @return {string}
 */
const buildExtensionAPIInjectedScript = function(extensionInfo, inspectedTabId, themeName, keysToForward, testHook) {};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const mod = function(m, n) {};

/**
 * @param {string} query
 * @param {boolean} caseSensitive
 * @param {boolean} isRegex
 * @return {!RegExp}
 */
const createSearchRegex = function(query, caseSensitive, isRegex) {};

/**
 * @param {string} query
 * @param {string=} flags
 * @return {!RegExp}
 */
const createPlainTextSearchRegex = function(query, flags) {};

/**
 * @param {!RegExp} regex
 * @param {string} content
 * @return {number}
 */
const countRegexMatches = function(regex, content) {};

/**
 * @param {number} spacesCount
 * @return {string}
 */
const spacesPadding = function(spacesCount) {};

/**
 * @param {number} value
 * @param {number} symbolsCount
 * @return {string}
 */
const numberToStringWithSpacesPadding = function(value, symbolsCount) {};

/**
 * @param {string} url
 * @return {!Promise.<string>}
 */
const loadXHR = function(url) {};

/**
 * @param {*} value
 */
const suppressUnused = function(value) {};

/**
 * TODO: move into its own module
 * @param {function()} callback
 */
const runOnWindowLoad = function(callback) {};

/**
 * @template T
 * @param {function(new:T, ...)} constructorFunction
 * @return {!T}
 */
const singleton = function(constructorFunction) {};

/**
 * @param {?string} content
 * @return {number}
 */
const base64ToSize = function(content) {};

/**
 * @constructor
 * @param {function(!Array<*>)} callback
 */
const ResizeObserver = function(callback) {};


// Lighthouse Report Renderer

/**
 * @constructor
 * @param {!Document} document
 */
const DOM = function(document) {};

/**
 * @constructor
 * @param {!DOM} dom
 */
const ReportRenderer = function(dom) {};

ReportRenderer.prototype = {
  /**
   * @param {!ReportRenderer.ReportJSON} report
   * @param {!Element} container Parent element to render the report into.
   */
  renderReport: function(report, container) {},

  /**
   * @param {!Document|!Element} context
   */
  setTemplateContext: function(context) {},

};

/**
 * @constructor
 * @param {!DOM} dom
 */
const ReportUIFeatures = function(dom) {
  /** @type {!ReportRenderer.ReportJSON} */
  this.json;

  /** @type {!Document} */
  this._document;
};

ReportUIFeatures.prototype = {
  /**
   * @param {!Document|!Element} context
   */
  setTemplateContext: function(context) {},

  /**
   * @param {!ReportRenderer.ReportJSON} report
   */
  initFeatures: function(report) {},

  _resetUIState: function() {},
};

/**
 * @typedef {{
 *     rawValue: (number|boolean|undefined),
 *     id: string,
 *     title: string,
 *     description: string,
 *     explanation: (string|undefined),
 *     errorMessage: (string|undefined),
 *     displayValue: (string|Array<string|number>|undefined),
 *     scoreDisplayMode: string,
 *     error: boolean,
 *     score: (number|null),
 *     details: (!DetailsRenderer.DetailsJSON|undefined),
 * }}
 */
ReportRenderer.AuditResultJSON;

/**
 * @typedef {{
 *     id: string,
 *     score: (number|null),
 *     weight: number,
 *     group: (string|undefined),
 *     result: ReportRenderer.AuditResultJSON
 * }}
 */
ReportRenderer.AuditJSON;

/**
 * @typedef {{
 *     title: string,
 *     id: string,
 *     score: (number|null),
 *     description: (string|undefined),
 *     manualDescription: string,
 *     auditRefs: !Array<!ReportRenderer.AuditJSON>
 * }}
 */
ReportRenderer.CategoryJSON;

/**
 * @typedef {{
 *     title: string,
 *     description: (string|undefined),
 * }}
 */
ReportRenderer.GroupJSON;

/**
 * @typedef {{
 *     lighthouseVersion: string,
 *     userAgent: string,
 *     fetchTime: string,
 *     timing: {total: number},
 *     requestedUrl: string,
 *     finalUrl: string,
 *     runWarnings: (!Array<string>|undefined),
 *     artifacts: {traces: {defaultPass: {traceEvents: !Array}}},
 *     audits: !Object<string, !ReportRenderer.AuditResultJSON>,
 *     categories: !Object<string, !ReportRenderer.CategoryJSON>,
 *     categoryGroups: !Object<string, !ReportRenderer.GroupJSON>,
 * }}
 */
ReportRenderer.ReportJSON;

/**
 * @typedef {{
 *     traces: {defaultPass: {traceEvents: !Array}},
 * }}
 */
ReportRenderer.RunnerResultArtifacts;

/**
 * @typedef {{
 *     lhr: !ReportRenderer.ReportJSON,
 *     artifacts: ReportRenderer.RunnerResultArtifacts,
 *     report: string
 * }}
 */
ReportRenderer.RunnerResult;


/**
 * @constructor
 * @param {!DOM} dom
 * @param {!DetailsRenderer} detailsRenderer
 */
const CategoryRenderer = function(dom, detailsRenderer) {};


/**
 * @constructor
 * @param {!DOM} dom
 */
const DetailsRenderer = function(dom) {};

DetailsRenderer.prototype = {
  /**
   * @param {!DetailsRenderer.NodeDetailsJSON} item
   * @return {!Element}
   */
  renderNode: function(item) {},
};

/**
 * @typedef {{
 *     type: string,
 *     value: (string|number|undefined),
 *     summary: (DetailsRenderer.OpportunitySummary|undefined),
 *     granularity: (number|undefined),
 *     displayUnit: (string|undefined)
 * }}
 */
DetailsRenderer.DetailsJSON;

/**
 * @typedef {{
 *     type: string,
 *     path: (string|undefined),
 *     selector: (string|undefined),
 *     snippet:(string|undefined)
 * }}
 */
DetailsRenderer.NodeDetailsJSON;

/** @typedef {{
 *     wastedMs: (number|undefined),
 *     wastedBytes: (number|undefined),
 * }}
 */
DetailsRenderer.OpportunitySummary;


// Clipboard API

/** @constructor */
const Clipboard = function() {};
/**
 * @param {string} data
 * @return {!Promise}
 */
Clipboard.prototype.writeText = function(data) {};

/** @type {Clipboard} */
Navigator.prototype.clipboard;

const Lighthouse = {};

Lighthouse.ReportGenerator = {};

/**
 * @param {!ReportRenderer.ReportJSON} lhr
 * @return {string}
 */
Lighthouse.ReportGenerator.generateReportHtml;

/**
 * @param {string} source
 * @param {Array<{search: string, replacement: string}>} replacements
 * @return {string}
 */
Lighthouse.ReportGenerator.replaceStrings;
