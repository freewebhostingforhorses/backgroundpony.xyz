function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var Module = typeof Module != "undefined" ? Module : {};
if (typeof Object.assign == "undefined") {
  Object.assign = function (target, source) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      if (!source) continue;
      for (var key in source) {
        if (source.hasOwnProperty(key)) target[key] = source[key];
      }
    }
    return target;
  };
}
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function () {
  if (Module["ENVIRONMENT_IS_PTHREAD"] || Module["$ww"]) return;
  var loadPackage = function loadPackage(metadata) {
    var PACKAGE_PATH = "";
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") {
      PACKAGE_PATH = window["encodeURIComponent"](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/");
    } else if (typeof process === "undefined" && typeof location !== "undefined") {
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
    }
    var PACKAGE_NAME = "index.data";
    var REMOTE_PACKAGE_BASE = "index.data";
    if (typeof Module["locateFilePackage"] === "function" && !Module["locateFile"]) {
      Module["locateFile"] = Module["locateFilePackage"];
      err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)");
    }
    var REMOTE_PACKAGE_NAME = Module["locateFile"] ? Module["locateFile"](REMOTE_PACKAGE_BASE, "") : REMOTE_PACKAGE_BASE;
    var REMOTE_PACKAGE_SIZE = metadata["remote_package_size"];
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && _typeof(process.versions) === "object" && typeof process.versions.node === "string") {
        require("fs").readFile(packageName, function (err, contents) {
          if (err) {
            errback(err);
          } else {
            callback(contents.buffer);
          }
        });
        return;
      }
      var xhr = new XMLHttpRequest();
      xhr.open("GET", packageName, true);
      xhr.responseType = "arraybuffer";
      xhr.onprogress = function (event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads / num);
          if (Module["setStatus"]) Module["setStatus"]("Downloading data... (".concat(loaded, "/").concat(total, ")"));
        } else if (!Module.dataFileDownloads) {
          if (Module["setStatus"]) Module["setStatus"]("Downloading data...");
        }
      };
      xhr.onerror = function (event) {
        throw new Error("NetworkError for: " + packageName);
      };
      xhr.onload = function (event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || xhr.status == 0 && xhr.response) {
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    }
    function handleError(error) {
      console.error("package error:", error);
    }
    var fetchedCallback = null;
    var fetched = Module["getPreloadedPackage"] ? Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;
    if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function (data) {
      if (fetchedCallback) {
        fetchedCallback(data);
        fetchedCallback = null;
      } else {
        fetched = data;
      }
    }, handleError);
    function runWithFS() {
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
      Module["FS_createPath"]("/", "data", true, true);
      Module["FS_createPath"]("/data", "levels", true, true);
      function DataRequest(start, end, audio) {
        this.start = start;
        this.end = end;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function open(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module["addRunDependency"]("fp ".concat(this.name));
        },
        send: function send() {},
        onload: function onload() {
          var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
        },
        finish: function finish(byteArray) {
          var that = this;
          Module["FS_createDataFile"](this.name, null, byteArray, true, true, true);
          Module["removeRunDependency"]("fp ".concat(that.name));
          this.requests[this.name] = null;
        }
      };
      var files = metadata["files"];
      for (var i = 0; i < files.length; ++i) {
        new DataRequest(files[i]["start"], files[i]["end"], files[i]["audio"] || 0).open("GET", files[i]["filename"]);
      }
      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, "Loading data file failed.");
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, "bad input to processPackageData");
        var byteArray = new Uint8Array(arrayBuffer);
        DataRequest.prototype.byteArray = byteArray;
        var files = metadata["files"];
        for (var i = 0; i < files.length; ++i) {
          DataRequest.prototype.requests[files[i].filename].onload();
        }
        Module["removeRunDependency"]("datafile_index.data");
      }
      Module["addRunDependency"]("datafile_index.data");
      if (!Module.preloadResults) Module.preloadResults = {};
      Module.preloadResults[PACKAGE_NAME] = {
        fromCache: false
      };
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    }
    if (Module["calledRun"]) {
      runWithFS();
    } else {
      if (!Module["preRun"]) Module["preRun"] = [];
      Module["preRun"].push(runWithFS);
    }
  };
  loadPackage({
    "files": [{
      "filename": "/data/char.png",
      "start": 0,
      "end": 1832
    }, {
      "filename": "/data/clouds.png",
      "start": 1832,
      "end": 7412
    }, {
      "filename": "/data/default.gif",
      "start": 7412,
      "end": 10186
    }, {
      "filename": "/data/dirt.png",
      "start": 10186,
      "end": 11197
    }, {
      "filename": "/data/grass.png",
      "start": 11197,
      "end": 12390
    }, {
      "filename": "/data/levels/levels.txt",
      "start": 12390,
      "end": 12400
    }, {
      "filename": "/data/rock.png",
      "start": 12400,
      "end": 13457
    }, {
      "filename": "/data/tallterrain.png",
      "start": 13457,
      "end": 18299
    }, {
      "filename": "/data/terrain.png",
      "start": 18299,
      "end": 28417
    }, {
      "filename": "/data/water.png",
      "start": 28417,
      "end": 28723
    }],
    "remote_package_size": 28723
  });
})();
var moduleOverrides = Object.assign({}, Module);
var arguments_ = [];
var thisProgram = "./this.program";
var quit_ = function quit_(status, toThrow) {
  throw toThrow;
};
var ENVIRONMENT_IS_WEB = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object";
var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
var ENVIRONMENT_IS_NODE = (typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && _typeof(process.versions) == "object" && typeof process.versions.node == "string";
var scriptDirectory = "";
function locateFile(path) {
  if (Module["locateFile"]) {
    return Module["locateFile"](path, scriptDirectory);
  }
  return scriptDirectory + path;
}
var read_, readAsync, readBinary;
if (ENVIRONMENT_IS_NODE) {
  var fs = require("fs");
  var nodePath = require("path");
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
  } else {
    scriptDirectory = __dirname + "/";
  }
  read_ = function read_(filename, binary) {
    filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
    return fs.readFileSync(filename, binary ? undefined : "utf8");
  };
  readBinary = function readBinary(filename) {
    var ret = read_(filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    return ret;
  };
  readAsync = function readAsync(filename, onload, onerror) {
    var binary = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
    fs.readFile(filename, binary ? undefined : "utf8", function (err, data) {
      if (err) onerror(err);else onload(binary ? data.buffer : data);
    });
  };
  if (!Module["thisProgram"] && process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, "/");
  }
  arguments_ = process.argv.slice(2);
  if (typeof module != "undefined") {
    module["exports"] = Module;
  }
  process.on("uncaughtException", function (ex) {
    if (ex !== "unwind" && !(ex instanceof ExitStatus) && !(ex.context instanceof ExitStatus)) {
      throw ex;
    }
  });
  var nodeMajor = process.versions.node.split(".")[0];
  if (nodeMajor < 15) {
    process.on("unhandledRejection", function (reason) {
      throw reason;
    });
  }
  quit_ = function quit_(status, toThrow) {
    process.exitCode = status;
    throw toThrow;
  };
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = self.location.href;
  } else if (typeof document != "undefined" && document.currentScript) {
    scriptDirectory = document.currentScript.src;
  }
  if (scriptDirectory.startsWith("blob:")) {
    scriptDirectory = "";
  } else {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
  }
  {
    read_ = function read_(url) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send(null);
      return xhr.responseText;
    };
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    readAsync = function readAsync(url, onload, onerror) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function () {
        if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
          onload(xhr.response);
          return;
        }
        onerror();
      };
      xhr.onerror = onerror;
      xhr.send(null);
    };
  }
} else {}
var out = Module["print"] || console.log.bind(console);
var err = Module["printErr"] || console.error.bind(console);
Object.assign(Module, moduleOverrides);
moduleOverrides = null;
if (Module["arguments"]) arguments_ = Module["arguments"];
if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
if (Module["quit"]) quit_ = Module["quit"];
var wasmBinary;
if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) != "object") {
  abort("no native wasm support detected");
}
if (typeof atob == "undefined") {
  if (typeof global != "undefined" && typeof globalThis == "undefined") {
    globalThis = global;
  }
  globalThis.atob = function (input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    do {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 !== 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 !== 64) {
        output = output + String.fromCharCode(chr3);
      }
    } while (i < input.length);
    return output;
  };
}
var wasmMemory;
var ABORT = false;
var EXITSTATUS;
function assert(condition, text) {
  if (!condition) {
    abort(text);
  }
}
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module["HEAP8"] = HEAP8 = new Int8Array(b);
  Module["HEAP16"] = HEAP16 = new Int16Array(b);
  Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
  Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
  Module["HEAP32"] = HEAP32 = new Int32Array(b);
  Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
  Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
  Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
}
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATMAIN__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;
function preRun() {
  if (Module["preRun"]) {
    if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
    while (Module["preRun"].length) {
      addOnPreRun(Module["preRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}
function initRuntime() {
  runtimeInitialized = true;
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
  FS.ignorePermissions = false;
  TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}
function postRun() {
  if (Module["postRun"]) {
    if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
    while (Module["postRun"].length) {
      addOnPostRun(Module["postRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
if (!Math.imul || Math.imul(4294967295, 5) !== -5) Math.imul = function (a, b) {
  var ah = a >>> 16;
  var al = a & 65535;
  var bh = b >>> 16;
  var bl = b & 65535;
  return al * bl + (ah * bl + al * bh << 16) | 0;
};
if (!Math.fround) {
  var froundBuffer = new Float32Array(1);
  Math.fround = function (x) {
    froundBuffer[0] = x;
    return froundBuffer[0];
  };
}
Math.clz32 || (Math.clz32 = function (x) {
  var n = 32;
  var y = x >> 16;
  if (y) {
    n -= 16;
    x = y;
  }
  y = x >> 8;
  if (y) {
    n -= 8;
    x = y;
  }
  y = x >> 4;
  if (y) {
    n -= 4;
    x = y;
  }
  y = x >> 2;
  if (y) {
    n -= 2;
    x = y;
  }
  y = x >> 1;
  if (y) return n - 2;
  return n - x;
});
Math.trunc || (Math.trunc = function (x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
});
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;
function getUniqueRunDependency(id) {
  return id;
}
function addRunDependency(id) {
  var _Module$monitorRunDep;
  runDependencies++;
  (_Module$monitorRunDep = Module["monitorRunDependencies"]) === null || _Module$monitorRunDep === void 0 || _Module$monitorRunDep.call(Module, runDependencies);
}
function removeRunDependency(id) {
  var _Module$monitorRunDep2;
  runDependencies--;
  (_Module$monitorRunDep2 = Module["monitorRunDependencies"]) === null || _Module$monitorRunDep2 === void 0 || _Module$monitorRunDep2.call(Module, runDependencies);
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
}
function abort(what) {
  var _Module$onAbort;
  (_Module$onAbort = Module["onAbort"]) === null || _Module$onAbort === void 0 || _Module$onAbort.call(Module, what);
  what = "Aborted(" + what + ")";
  err(what);
  ABORT = true;
  EXITSTATUS = 1;
  what += ". Build with -sASSERTIONS for more info.";
  var e = new WebAssembly.RuntimeError(what);
  throw e;
}
var dataURIPrefix = "data:application/octet-stream;base64,";
var isDataURI = function isDataURI(filename) {
  return filename.startsWith(dataURIPrefix);
};
var isFileURI = function isFileURI(filename) {
  return filename.startsWith("file://");
};
var wasmBinaryFile;
wasmBinaryFile = "index.wasm";
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}
function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw "both async and sync fetching of the wasm failed";
}
function getBinaryPromise(binaryFile) {
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == "function" && !isFileURI(binaryFile)) {
      return fetch(binaryFile, {
        credentials: "same-origin"
      }).then(function (response) {
        if (!response["ok"]) {
          throw "failed to load wasm binary file at '".concat(binaryFile, "'");
        }
        return response["arrayBuffer"]();
      })["catch"](function () {
        return getBinarySync(binaryFile);
      });
    } else if (readAsync) {
      return new Promise(function (resolve, reject) {
        readAsync(binaryFile, function (response) {
          return resolve(new Uint8Array(response));
        }, reject);
      });
    }
  }
  return Promise.resolve().then(function () {
    return getBinarySync(binaryFile);
  });
}
function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then(function (binary) {
    return WebAssembly.instantiate(binary, imports);
  }).then(function (instance) {
    return instance;
  }).then(receiver, function (reason) {
    err("failed to asynchronously prepare wasm: ".concat(reason));
    abort(reason);
  });
}
function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
    return fetch(binaryFile, {
      credentials: "same-origin"
    }).then(function (response) {
      var result = WebAssembly.instantiateStreaming(response, imports);
      return result.then(callback, function (reason) {
        err("wasm streaming compile failed: ".concat(reason));
        err("falling back to ArrayBuffer instantiation");
        return instantiateArrayBuffer(binaryFile, imports, callback);
      });
    });
  }
  return instantiateArrayBuffer(binaryFile, imports, callback);
}
function createWasm() {
  var info = {
    "a": wasmImports
  };
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;
    wasmExports = Asyncify.instrumentWasmExports(wasmExports);
    wasmMemory = wasmExports["We"];
    updateMemoryViews();
    addOnInit(wasmExports["Xe"]);
    removeRunDependency("wasm-instantiate");
    return wasmExports;
  }
  addRunDependency("wasm-instantiate");
  function receiveInstantiationResult(result) {
    receiveInstance(result["instance"]);
  }
  if (Module["instantiateWasm"]) {
    try {
      return Module["instantiateWasm"](info, receiveInstance);
    } catch (e) {
      err("Module.instantiateWasm callback failed with error: ".concat(e));
      return false;
    }
  }
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult);
  return {};
}
var tempDouble;
var tempI64;
var ASM_CONSTS = {
  103016: function _() {
    document.exitPointerLock();
  },
  103048: function _() {
    document.activeElement.blur();
  },
  103083: function _() {
    document.exitPointerLock();
  },
  103115: function _() {
    document.activeElement.blur();
  }
};
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(".concat(status, ")");
  this.status = status;
}
var callRuntimeCallbacks = function callRuntimeCallbacks(callbacks) {
  while (callbacks.length > 0) {
    callbacks.shift()(Module);
  }
};
var noExitRuntime = Module["noExitRuntime"] || true;
var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
var UTF8ArrayToString = function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
  }
  var str = "";
  while (idx < endPtr) {
    var u0 = heapOrArray[idx++];
    if (!(u0 & 128)) {
      str += String.fromCharCode(u0);
      continue;
    }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 224) == 192) {
      str += String.fromCharCode((u0 & 31) << 6 | u1);
      continue;
    }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 240) == 224) {
      u0 = (u0 & 15) << 12 | u1 << 6 | u2;
    } else {
      u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
    }
    if (u0 < 65536) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 65536;
      str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
    }
  }
  return str;
};
var UTF8ToString = function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
};
var ___assert_fail = function ___assert_fail(condition, filename, line, func) {
  abort("Assertion failed: ".concat(UTF8ToString(condition), ", at: ") + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
};
var ExceptionInfo = /*#__PURE__*/function () {
  "use strict";

  function ExceptionInfo(excPtr) {
    _classCallCheck(this, ExceptionInfo);
    this.excPtr = excPtr;
    this.ptr = excPtr - 24;
  }
  _createClass(ExceptionInfo, [{
    key: "set_type",
    value: function set_type(type) {
      HEAPU32[this.ptr + 4 >> 2] = type;
    }
  }, {
    key: "get_type",
    value: function get_type() {
      return HEAPU32[this.ptr + 4 >> 2];
    }
  }, {
    key: "set_destructor",
    value: function set_destructor(destructor) {
      HEAPU32[this.ptr + 8 >> 2] = destructor;
    }
  }, {
    key: "get_destructor",
    value: function get_destructor() {
      return HEAPU32[this.ptr + 8 >> 2];
    }
  }, {
    key: "set_caught",
    value: function set_caught(caught) {
      caught = caught ? 1 : 0;
      HEAP8[this.ptr + 12 >> 0] = caught;
    }
  }, {
    key: "get_caught",
    value: function get_caught() {
      return HEAP8[this.ptr + 12 >> 0] != 0;
    }
  }, {
    key: "set_rethrown",
    value: function set_rethrown(rethrown) {
      rethrown = rethrown ? 1 : 0;
      HEAP8[this.ptr + 13 >> 0] = rethrown;
    }
  }, {
    key: "get_rethrown",
    value: function get_rethrown() {
      return HEAP8[this.ptr + 13 >> 0] != 0;
    }
  }, {
    key: "init",
    value: function init(type, destructor) {
      this.set_adjusted_ptr(0);
      this.set_type(type);
      this.set_destructor(destructor);
    }
  }, {
    key: "set_adjusted_ptr",
    value: function set_adjusted_ptr(adjustedPtr) {
      HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
    }
  }, {
    key: "get_adjusted_ptr",
    value: function get_adjusted_ptr() {
      return HEAPU32[this.ptr + 16 >> 2];
    }
  }, {
    key: "get_exception_ptr",
    value: function get_exception_ptr() {
      var isPointer = _cxa_is_pointer_type(this.get_type());
      if (isPointer) {
        return HEAPU32[this.excPtr >> 2];
      }
      var adjusted = this.get_adjusted_ptr();
      if (adjusted !== 0) return adjusted;
      return this.excPtr;
    }
  }]);
  return ExceptionInfo;
}();
var exceptionLast = 0;
var uncaughtExceptionCount = 0;
var ___cxa_throw = function ___cxa_throw(ptr, type, destructor) {
  var info = new ExceptionInfo(ptr);
  info.init(type, destructor);
  exceptionLast = ptr;
  uncaughtExceptionCount++;
  throw exceptionLast;
};
var PATH = {
  isAbs: function isAbs(path) {
    return path.charAt(0) === "/";
  },
  splitPath: function splitPath(filename) {
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    return splitPathRe.exec(filename).slice(1);
  },
  normalizeArray: function normalizeArray(parts, allowAboveRoot) {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === ".") {
        parts.splice(i, 1);
      } else if (last === "..") {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up; up--) {
        parts.unshift("..");
      }
    }
    return parts;
  },
  normalize: function normalize(path) {
    var isAbsolute = PATH.isAbs(path),
      trailingSlash = path.substr(-1) === "/";
    path = PATH.normalizeArray(path.split("/").filter(function (p) {
      return !!p;
    }), !isAbsolute).join("/");
    if (!path && !isAbsolute) {
      path = ".";
    }
    if (path && trailingSlash) {
      path += "/";
    }
    return (isAbsolute ? "/" : "") + path;
  },
  dirname: function dirname(path) {
    var result = PATH.splitPath(path),
      root = result[0],
      dir = result[1];
    if (!root && !dir) {
      return ".";
    }
    if (dir) {
      dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
  },
  basename: function basename(path) {
    if (path === "/") return "/";
    path = PATH.normalize(path);
    path = path.replace(/\/$/, "");
    var lastSlash = path.lastIndexOf("/");
    if (lastSlash === -1) return path;
    return path.substr(lastSlash + 1);
  },
  join: function join() {
    var paths = Array.prototype.slice.call(arguments);
    return PATH.normalize(paths.join("/"));
  },
  join2: function join2(l, r) {
    return PATH.normalize(l + "/" + r);
  }
};
var initRandomFill = function initRandomFill() {
  if ((typeof crypto === "undefined" ? "undefined" : _typeof(crypto)) == "object" && typeof crypto["getRandomValues"] == "function") {
    return function (view) {
      return crypto.getRandomValues(view);
    };
  } else if (ENVIRONMENT_IS_NODE) {
    try {
      var crypto_module = require("crypto");
      var randomFillSync = crypto_module["randomFillSync"];
      if (randomFillSync) {
        return function (view) {
          return crypto_module["randomFillSync"](view);
        };
      }
      var randomBytes = crypto_module["randomBytes"];
      return function (view) {
        return view.set(randomBytes(view.byteLength)), view;
      };
    } catch (e) {}
  }
  abort("initRandomDevice");
};
var _randomFill = function randomFill(view) {
  return (_randomFill = initRandomFill())(view);
};
var PATH_FS = {
  resolve: function resolve() {
    var resolvedPath = "",
      resolvedAbsolute = false;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? arguments[i] : FS.cwd();
      if (typeof path != "string") {
        throw new TypeError("Arguments to path.resolve must be strings");
      } else if (!path) {
        return "";
      }
      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = PATH.isAbs(path);
    }
    resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function (p) {
      return !!p;
    }), !resolvedAbsolute).join("/");
    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
  },
  relative: function relative(from, to) {
    from = PATH_FS.resolve(from).substr(1);
    to = PATH_FS.resolve(to).substr(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== "") break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== "") break;
      }
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split("/"));
    var toParts = trim(to.split("/"));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push("..");
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join("/");
  }
};
var FS_stdin_getChar_buffer = [];
var lengthBytesUTF8 = function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var c = str.charCodeAt(i);
    if (c <= 127) {
      len++;
    } else if (c <= 2047) {
      len += 2;
    } else if (c >= 55296 && c <= 57343) {
      len += 4;
      ++i;
    } else {
      len += 3;
    }
  }
  return len;
};
var stringToUTF8Array = function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343) {
      var u1 = str.charCodeAt(++i);
      u = 65536 + ((u & 1023) << 10) | u1 & 1023;
    }
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 192 | u >> 6;
      heap[outIdx++] = 128 | u & 63;
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 224 | u >> 12;
      heap[outIdx++] = 128 | u >> 6 & 63;
      heap[outIdx++] = 128 | u & 63;
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 240 | u >> 18;
      heap[outIdx++] = 128 | u >> 12 & 63;
      heap[outIdx++] = 128 | u >> 6 & 63;
      heap[outIdx++] = 128 | u & 63;
    }
  }
  heap[outIdx] = 0;
  return outIdx - startIdx;
};
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
var FS_stdin_getChar = function FS_stdin_getChar() {
  if (!FS_stdin_getChar_buffer.length) {
    var result = null;
    if (ENVIRONMENT_IS_NODE) {
      var BUFSIZE = 256;
      var buf = Buffer.alloc(BUFSIZE);
      var bytesRead = 0;
      var fd = process.stdin.fd;
      try {
        bytesRead = fs.readSync(fd, buf);
      } catch (e) {
        if (e.toString().includes("EOF")) bytesRead = 0;else throw e;
      }
      if (bytesRead > 0) {
        result = buf.slice(0, bytesRead).toString("utf-8");
      } else {
        result = null;
      }
    } else if (typeof window != "undefined" && typeof window.prompt == "function") {
      result = window.prompt("Input: ");
      if (result !== null) {
        result += "\n";
      }
    } else if (typeof readline == "function") {
      result = readline();
      if (result !== null) {
        result += "\n";
      }
    }
    if (!result) {
      return null;
    }
    FS_stdin_getChar_buffer = intArrayFromString(result, true);
  }
  return FS_stdin_getChar_buffer.shift();
};
var TTY = {
  ttys: [],
  init: function init() {},
  shutdown: function shutdown() {},
  register: function register(dev, ops) {
    TTY.ttys[dev] = {
      input: [],
      output: [],
      ops: ops
    };
    FS.registerDevice(dev, TTY.stream_ops);
  },
  stream_ops: {
    open: function open(stream) {
      var tty = TTY.ttys[stream.node.rdev];
      if (!tty) {
        throw new FS.ErrnoError(43);
      }
      stream.tty = tty;
      stream.seekable = false;
    },
    close: function close(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    fsync: function fsync(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    read: function read(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.get_char) {
        throw new FS.ErrnoError(60);
      }
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = stream.tty.ops.get_char(stream.tty);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        if (result === undefined && bytesRead === 0) {
          throw new FS.ErrnoError(6);
        }
        if (result === null || result === undefined) break;
        bytesRead++;
        buffer[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.timestamp = Date.now();
      }
      return bytesRead;
    },
    write: function write(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.put_char) {
        throw new FS.ErrnoError(60);
      }
      try {
        for (var i = 0; i < length; i++) {
          stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
        }
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
      if (length) {
        stream.node.timestamp = Date.now();
      }
      return i;
    }
  },
  default_tty_ops: {
    get_char: function get_char(tty) {
      return FS_stdin_getChar();
    },
    put_char: function put_char(tty, val) {
      if (val === null || val === 10) {
        out(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync: function fsync(tty) {
      if (tty.output && tty.output.length > 0) {
        out(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      }
    },
    ioctl_tcgets: function ioctl_tcgets(tty) {
      return {
        c_iflag: 25856,
        c_oflag: 5,
        c_cflag: 191,
        c_lflag: 35387,
        c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      };
    },
    ioctl_tcsets: function ioctl_tcsets(tty, optional_actions, data) {
      return 0;
    },
    ioctl_tiocgwinsz: function ioctl_tiocgwinsz(tty) {
      return [24, 80];
    }
  },
  default_tty1_ops: {
    put_char: function put_char(tty, val) {
      if (val === null || val === 10) {
        err(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync: function fsync(tty) {
      if (tty.output && tty.output.length > 0) {
        err(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      }
    }
  }
};
var mmapAlloc = function mmapAlloc(size) {
  abort();
};
var MEMFS = {
  ops_table: null,
  mount: function mount(_mount) {
    return MEMFS.createNode(null, "/", 16384 | 511, 0);
  },
  createNode: function createNode(parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(63);
    }
    MEMFS.ops_table || (MEMFS.ops_table = {
      dir: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          lookup: MEMFS.node_ops.lookup,
          mknod: MEMFS.node_ops.mknod,
          rename: MEMFS.node_ops.rename,
          unlink: MEMFS.node_ops.unlink,
          rmdir: MEMFS.node_ops.rmdir,
          readdir: MEMFS.node_ops.readdir,
          symlink: MEMFS.node_ops.symlink
        },
        stream: {
          llseek: MEMFS.stream_ops.llseek
        }
      },
      file: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr
        },
        stream: {
          llseek: MEMFS.stream_ops.llseek,
          read: MEMFS.stream_ops.read,
          write: MEMFS.stream_ops.write,
          allocate: MEMFS.stream_ops.allocate,
          mmap: MEMFS.stream_ops.mmap,
          msync: MEMFS.stream_ops.msync
        }
      },
      link: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          readlink: MEMFS.node_ops.readlink
        },
        stream: {}
      },
      chrdev: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr
        },
        stream: FS.chrdev_stream_ops
      }
    });
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = MEMFS.ops_table.dir.node;
      node.stream_ops = MEMFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      node.node_ops = MEMFS.ops_table.file.node;
      node.stream_ops = MEMFS.ops_table.file.stream;
      node.usedBytes = 0;
      node.contents = null;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = MEMFS.ops_table.link.node;
      node.stream_ops = MEMFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = MEMFS.ops_table.chrdev.node;
      node.stream_ops = MEMFS.ops_table.chrdev.stream;
    }
    node.timestamp = Date.now();
    if (parent) {
      parent.contents[name] = node;
      parent.timestamp = node.timestamp;
    }
    return node;
  },
  getFileDataAsTypedArray: function getFileDataAsTypedArray(node) {
    if (!node.contents) return new Uint8Array(0);
    if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
    return new Uint8Array(node.contents);
  },
  expandFileStorage: function expandFileStorage(node, newCapacity) {
    var prevCapacity = node.contents ? node.contents.length : 0;
    if (prevCapacity >= newCapacity) return;
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
    var oldContents = node.contents;
    node.contents = new Uint8Array(newCapacity);
    if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
  },
  resizeFileStorage: function resizeFileStorage(node, newSize) {
    if (node.usedBytes == newSize) return;
    if (newSize == 0) {
      node.contents = null;
      node.usedBytes = 0;
    } else {
      var oldContents = node.contents;
      node.contents = new Uint8Array(newSize);
      if (oldContents) {
        node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
      }
      node.usedBytes = newSize;
    }
  },
  node_ops: {
    getattr: function getattr(node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.usedBytes;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.timestamp);
      attr.mtime = new Date(node.timestamp);
      attr.ctime = new Date(node.timestamp);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr: function setattr(node, attr) {
      if (attr.mode !== undefined) {
        node.mode = attr.mode;
      }
      if (attr.timestamp !== undefined) {
        node.timestamp = attr.timestamp;
      }
      if (attr.size !== undefined) {
        MEMFS.resizeFileStorage(node, attr.size);
      }
    },
    lookup: function lookup(parent, name) {
      throw FS.genericErrors[44];
    },
    mknod: function mknod(parent, name, mode, dev) {
      return MEMFS.createNode(parent, name, mode, dev);
    },
    rename: function rename(old_node, new_dir, new_name) {
      if (FS.isDir(old_node.mode)) {
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {}
        if (new_node) {
          for (var i in new_node.contents) {
            throw new FS.ErrnoError(55);
          }
        }
      }
      delete old_node.parent.contents[old_node.name];
      old_node.parent.timestamp = Date.now();
      old_node.name = new_name;
      new_dir.contents[new_name] = old_node;
      new_dir.timestamp = old_node.parent.timestamp;
      old_node.parent = new_dir;
    },
    unlink: function unlink(parent, name) {
      delete parent.contents[name];
      parent.timestamp = Date.now();
    },
    rmdir: function rmdir(parent, name) {
      var node = FS.lookupNode(parent, name);
      for (var i in node.contents) {
        throw new FS.ErrnoError(55);
      }
      delete parent.contents[name];
      parent.timestamp = Date.now();
    },
    readdir: function readdir(node) {
      var entries = [".", ".."];
      for (var _i = 0, _Object$keys = Object.keys(node.contents); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        entries.push(key);
      }
      return entries;
    },
    symlink: function symlink(parent, newname, oldpath) {
      var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
      node.link = oldpath;
      return node;
    },
    readlink: function readlink(node) {
      if (!FS.isLink(node.mode)) {
        throw new FS.ErrnoError(28);
      }
      return node.link;
    }
  },
  stream_ops: {
    read: function read(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= stream.node.usedBytes) return 0;
      var size = Math.min(stream.node.usedBytes - position, length);
      if (size > 8 && contents.subarray) {
        buffer.set(contents.subarray(position, position + size), offset);
      } else {
        for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
      }
      return size;
    },
    write: function write(stream, buffer, offset, length, position, canOwn) {
      if (buffer.buffer === HEAP8.buffer) {
        canOwn = false;
      }
      if (!length) return 0;
      var node = stream.node;
      node.timestamp = Date.now();
      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
        if (canOwn) {
          node.contents = buffer.subarray(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (node.usedBytes === 0 && position === 0) {
          node.contents = buffer.slice(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (position + length <= node.usedBytes) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
          return length;
        }
      }
      MEMFS.expandFileStorage(node, position + length);
      if (node.contents.subarray && buffer.subarray) {
        node.contents.set(buffer.subarray(offset, offset + length), position);
      } else {
        for (var i = 0; i < length; i++) {
          node.contents[position + i] = buffer[offset + i];
        }
      }
      node.usedBytes = Math.max(node.usedBytes, position + length);
      return length;
    },
    llseek: function llseek(stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(28);
      }
      return position;
    },
    allocate: function allocate(stream, offset, length) {
      MEMFS.expandFileStorage(stream.node, offset + length);
      stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
    },
    mmap: function mmap(stream, length, position, prot, flags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      var ptr;
      var allocated;
      var contents = stream.node.contents;
      if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
        allocated = false;
        ptr = contents.byteOffset;
      } else {
        if (position > 0 || position + length < contents.length) {
          if (contents.subarray) {
            contents = contents.subarray(position, position + length);
          } else {
            contents = Array.prototype.slice.call(contents, position, position + length);
          }
        }
        allocated = true;
        ptr = mmapAlloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(48);
        }
        HEAP8.set(contents, ptr);
      }
      return {
        ptr: ptr,
        allocated: allocated
      };
    },
    msync: function msync(stream, buffer, offset, length, mmapFlags) {
      MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
      return 0;
    }
  }
};
var asyncLoad = function asyncLoad(url, onload, onerror, noRunDep) {
  var dep = !noRunDep ? getUniqueRunDependency("al ".concat(url)) : "";
  readAsync(url, function (arrayBuffer) {
    onload(new Uint8Array(arrayBuffer));
    if (dep) removeRunDependency(dep);
  }, function (event) {
    if (onerror) {
      onerror();
    } else {
      throw "Loading data file \"".concat(url, "\" failed.");
    }
  });
  if (dep) addRunDependency(dep);
};
var FS_createDataFile = function FS_createDataFile(parent, name, fileData, canRead, canWrite, canOwn) {
  FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
};
var preloadPlugins = Module["preloadPlugins"] || [];
var FS_handledByPreloadPlugin = function FS_handledByPreloadPlugin(byteArray, fullname, finish, onerror) {
  if (typeof Browser != "undefined") Browser.init();
  var handled = false;
  preloadPlugins.forEach(function (plugin) {
    if (handled) return;
    if (plugin["canHandle"](fullname)) {
      plugin["handle"](byteArray, fullname, finish, onerror);
      handled = true;
    }
  });
  return handled;
};
var FS_createPreloadedFile = function FS_createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency("cp ".concat(fullname));
  function processData(byteArray) {
    function finish(byteArray) {
      preFinish === null || preFinish === void 0 || preFinish();
      if (!dontCreateFile) {
        FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
      }
      onload === null || onload === void 0 || onload();
      removeRunDependency(dep);
    }
    if (FS_handledByPreloadPlugin(byteArray, fullname, finish, function () {
      onerror === null || onerror === void 0 || onerror();
      removeRunDependency(dep);
    })) {
      return;
    }
    finish(byteArray);
  }
  addRunDependency(dep);
  if (typeof url == "string") {
    asyncLoad(url, processData, onerror);
  } else {
    processData(url);
  }
};
var FS_modeStringToFlags = function FS_modeStringToFlags(str) {
  var flagModes = {
    "r": 0,
    "r+": 2,
    "w": 512 | 64 | 1,
    "w+": 512 | 64 | 2,
    "a": 1024 | 64 | 1,
    "a+": 1024 | 64 | 2
  };
  var flags = flagModes[str];
  if (typeof flags == "undefined") {
    throw new Error("Unknown file open mode: ".concat(str));
  }
  return flags;
};
var FS_getMode = function FS_getMode(canRead, canWrite) {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
};
var FS = {
  root: null,
  mounts: [],
  devices: {},
  streams: [],
  nextInode: 1,
  nameTable: null,
  currentPath: "/",
  initialized: false,
  ignorePermissions: true,
  ErrnoError: /*#__PURE__*/_createClass(function ErrnoError(errno) {
    "use strict";

    _classCallCheck(this, ErrnoError);
    this.name = "ErrnoError";
    this.errno = errno;
  }),
  genericErrors: {},
  filesystems: null,
  syncFSRequests: 0,
  lookupPath: function lookupPath(path) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    path = PATH_FS.resolve(path);
    if (!path) return {
      path: "",
      node: null
    };
    var defaults = {
      follow_mount: true,
      recurse_count: 0
    };
    opts = Object.assign(defaults, opts);
    if (opts.recurse_count > 8) {
      throw new FS.ErrnoError(32);
    }
    var parts = path.split("/").filter(function (p) {
      return !!p;
    });
    var current = FS.root;
    var current_path = "/";
    for (var i = 0; i < parts.length; i++) {
      var islast = i === parts.length - 1;
      if (islast && opts.parent) {
        break;
      }
      current = FS.lookupNode(current, parts[i]);
      current_path = PATH.join2(current_path, parts[i]);
      if (FS.isMountpoint(current)) {
        if (!islast || islast && opts.follow_mount) {
          current = current.mounted.root;
        }
      }
      if (!islast || opts.follow) {
        var count = 0;
        while (FS.isLink(current.mode)) {
          var link = FS.readlink(current_path);
          current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
          var lookup = FS.lookupPath(current_path, {
            recurse_count: opts.recurse_count + 1
          });
          current = lookup.node;
          if (count++ > 40) {
            throw new FS.ErrnoError(32);
          }
        }
      }
    }
    return {
      path: current_path,
      node: current
    };
  },
  getPath: function getPath(node) {
    var path;
    while (true) {
      if (FS.isRoot(node)) {
        var mount = node.mount.mountpoint;
        if (!path) return mount;
        return mount[mount.length - 1] !== "/" ? "".concat(mount, "/").concat(path) : mount + path;
      }
      path = path ? "".concat(node.name, "/").concat(path) : node.name;
      node = node.parent;
    }
  },
  hashName: function hashName(parentid, name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
    }
    return (parentid + hash >>> 0) % FS.nameTable.length;
  },
  hashAddNode: function hashAddNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    node.name_next = FS.nameTable[hash];
    FS.nameTable[hash] = node;
  },
  hashRemoveNode: function hashRemoveNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    if (FS.nameTable[hash] === node) {
      FS.nameTable[hash] = node.name_next;
    } else {
      var current = FS.nameTable[hash];
      while (current) {
        if (current.name_next === node) {
          current.name_next = node.name_next;
          break;
        }
        current = current.name_next;
      }
    }
  },
  lookupNode: function lookupNode(parent, name) {
    var errCode = FS.mayLookup(parent);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    var hash = FS.hashName(parent.id, name);
    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
      var nodeName = node.name;
      if (node.parent.id === parent.id && nodeName === name) {
        return node;
      }
    }
    return FS.lookup(parent, name);
  },
  createNode: function createNode(parent, name, mode, rdev) {
    var node = new FS.FSNode(parent, name, mode, rdev);
    FS.hashAddNode(node);
    return node;
  },
  destroyNode: function destroyNode(node) {
    FS.hashRemoveNode(node);
  },
  isRoot: function isRoot(node) {
    return node === node.parent;
  },
  isMountpoint: function isMountpoint(node) {
    return !!node.mounted;
  },
  isFile: function isFile(mode) {
    return (mode & 61440) === 32768;
  },
  isDir: function isDir(mode) {
    return (mode & 61440) === 16384;
  },
  isLink: function isLink(mode) {
    return (mode & 61440) === 40960;
  },
  isChrdev: function isChrdev(mode) {
    return (mode & 61440) === 8192;
  },
  isBlkdev: function isBlkdev(mode) {
    return (mode & 61440) === 24576;
  },
  isFIFO: function isFIFO(mode) {
    return (mode & 61440) === 4096;
  },
  isSocket: function isSocket(mode) {
    return (mode & 49152) === 49152;
  },
  flagsToPermissionString: function flagsToPermissionString(flag) {
    var perms = ["r", "w", "rw"][flag & 3];
    if (flag & 512) {
      perms += "w";
    }
    return perms;
  },
  nodePermissions: function nodePermissions(node, perms) {
    if (FS.ignorePermissions) {
      return 0;
    }
    if (perms.includes("r") && !(node.mode & 292)) {
      return 2;
    } else if (perms.includes("w") && !(node.mode & 146)) {
      return 2;
    } else if (perms.includes("x") && !(node.mode & 73)) {
      return 2;
    }
    return 0;
  },
  mayLookup: function mayLookup(dir) {
    if (!FS.isDir(dir.mode)) return 54;
    var errCode = FS.nodePermissions(dir, "x");
    if (errCode) return errCode;
    if (!dir.node_ops.lookup) return 2;
    return 0;
  },
  mayCreate: function mayCreate(dir, name) {
    try {
      var node = FS.lookupNode(dir, name);
      return 20;
    } catch (e) {}
    return FS.nodePermissions(dir, "wx");
  },
  mayDelete: function mayDelete(dir, name, isdir) {
    var node;
    try {
      node = FS.lookupNode(dir, name);
    } catch (e) {
      return e.errno;
    }
    var errCode = FS.nodePermissions(dir, "wx");
    if (errCode) {
      return errCode;
    }
    if (isdir) {
      if (!FS.isDir(node.mode)) {
        return 54;
      }
      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
        return 10;
      }
    } else {
      if (FS.isDir(node.mode)) {
        return 31;
      }
    }
    return 0;
  },
  mayOpen: function mayOpen(node, flags) {
    if (!node) {
      return 44;
    }
    if (FS.isLink(node.mode)) {
      return 32;
    } else if (FS.isDir(node.mode)) {
      if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
        return 31;
      }
    }
    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
  },
  MAX_OPEN_FDS: 4096,
  nextfd: function nextfd() {
    for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
      if (!FS.streams[fd]) {
        return fd;
      }
    }
    throw new FS.ErrnoError(33);
  },
  getStreamChecked: function getStreamChecked(fd) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    return stream;
  },
  getStream: function getStream(fd) {
    return FS.streams[fd];
  },
  createStream: function createStream(stream) {
    var fd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    if (!FS.FSStream) {
      FS.FSStream = function () {
        this.shared = {};
      };
      FS.FSStream.prototype = {};
      Object.defineProperties(FS.FSStream.prototype, {
        object: {
          get: function get() {
            return this.node;
          },
          set: function set(val) {
            this.node = val;
          }
        },
        isRead: {
          get: function get() {
            return (this.flags & 2097155) !== 1;
          }
        },
        isWrite: {
          get: function get() {
            return (this.flags & 2097155) !== 0;
          }
        },
        isAppend: {
          get: function get() {
            return this.flags & 1024;
          }
        },
        flags: {
          get: function get() {
            return this.shared.flags;
          },
          set: function set(val) {
            this.shared.flags = val;
          }
        },
        position: {
          get: function get() {
            return this.shared.position;
          },
          set: function set(val) {
            this.shared.position = val;
          }
        }
      });
    }
    stream = Object.assign(new FS.FSStream(), stream);
    if (fd == -1) {
      fd = FS.nextfd();
    }
    stream.fd = fd;
    FS.streams[fd] = stream;
    return stream;
  },
  closeStream: function closeStream(fd) {
    FS.streams[fd] = null;
  },
  chrdev_stream_ops: {
    open: function open(stream) {
      var _stream$stream_ops$op, _stream$stream_ops;
      var device = FS.getDevice(stream.node.rdev);
      stream.stream_ops = device.stream_ops;
      (_stream$stream_ops$op = (_stream$stream_ops = stream.stream_ops).open) === null || _stream$stream_ops$op === void 0 || _stream$stream_ops$op.call(_stream$stream_ops, stream);
    },
    llseek: function llseek() {
      throw new FS.ErrnoError(70);
    }
  },
  major: function major(dev) {
    return dev >> 8;
  },
  minor: function minor(dev) {
    return dev & 255;
  },
  makedev: function makedev(ma, mi) {
    return ma << 8 | mi;
  },
  registerDevice: function registerDevice(dev, ops) {
    FS.devices[dev] = {
      stream_ops: ops
    };
  },
  getDevice: function getDevice(dev) {
    return FS.devices[dev];
  },
  getMounts: function getMounts(mount) {
    var mounts = [];
    var check = [mount];
    while (check.length) {
      var m = check.pop();
      mounts.push(m);
      check.push.apply(check, m.mounts);
    }
    return mounts;
  },
  syncfs: function syncfs(populate, callback) {
    if (typeof populate == "function") {
      callback = populate;
      populate = false;
    }
    FS.syncFSRequests++;
    if (FS.syncFSRequests > 1) {
      err("warning: ".concat(FS.syncFSRequests, " FS.syncfs operations in flight at once, probably just doing extra work"));
    }
    var mounts = FS.getMounts(FS.root.mount);
    var completed = 0;
    function doCallback(errCode) {
      FS.syncFSRequests--;
      return callback(errCode);
    }
    function done(errCode) {
      if (errCode) {
        if (!done.errored) {
          done.errored = true;
          return doCallback(errCode);
        }
        return;
      }
      if (++completed >= mounts.length) {
        doCallback(null);
      }
    }
    mounts.forEach(function (mount) {
      if (!mount.type.syncfs) {
        return done(null);
      }
      mount.type.syncfs(mount, populate, done);
    });
  },
  mount: function mount(type, opts, mountpoint) {
    var root = mountpoint === "/";
    var pseudo = !mountpoint;
    var node;
    if (root && FS.root) {
      throw new FS.ErrnoError(10);
    } else if (!root && !pseudo) {
      var lookup = FS.lookupPath(mountpoint, {
        follow_mount: false
      });
      mountpoint = lookup.path;
      node = lookup.node;
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      if (!FS.isDir(node.mode)) {
        throw new FS.ErrnoError(54);
      }
    }
    var mount = {
      type: type,
      opts: opts,
      mountpoint: mountpoint,
      mounts: []
    };
    var mountRoot = type.mount(mount);
    mountRoot.mount = mount;
    mount.root = mountRoot;
    if (root) {
      FS.root = mountRoot;
    } else if (node) {
      node.mounted = mount;
      if (node.mount) {
        node.mount.mounts.push(mount);
      }
    }
    return mountRoot;
  },
  unmount: function unmount(mountpoint) {
    var lookup = FS.lookupPath(mountpoint, {
      follow_mount: false
    });
    if (!FS.isMountpoint(lookup.node)) {
      throw new FS.ErrnoError(28);
    }
    var node = lookup.node;
    var mount = node.mounted;
    var mounts = FS.getMounts(mount);
    Object.keys(FS.nameTable).forEach(function (hash) {
      var current = FS.nameTable[hash];
      while (current) {
        var next = current.name_next;
        if (mounts.includes(current.mount)) {
          FS.destroyNode(current);
        }
        current = next;
      }
    });
    node.mounted = null;
    var idx = node.mount.mounts.indexOf(mount);
    node.mount.mounts.splice(idx, 1);
  },
  lookup: function lookup(parent, name) {
    return parent.node_ops.lookup(parent, name);
  },
  mknod: function mknod(path, mode, dev) {
    var lookup = FS.lookupPath(path, {
      parent: true
    });
    var parent = lookup.node;
    var name = PATH.basename(path);
    if (!name || name === "." || name === "..") {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.mayCreate(parent, name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.mknod) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.mknod(parent, name, mode, dev);
  },
  create: function create(path, mode) {
    mode = mode !== undefined ? mode : 438;
    mode &= 4095;
    mode |= 32768;
    return FS.mknod(path, mode, 0);
  },
  mkdir: function mkdir(path, mode) {
    mode = mode !== undefined ? mode : 511;
    mode &= 511 | 512;
    mode |= 16384;
    return FS.mknod(path, mode, 0);
  },
  mkdirTree: function mkdirTree(path, mode) {
    var dirs = path.split("/");
    var d = "";
    for (var i = 0; i < dirs.length; ++i) {
      if (!dirs[i]) continue;
      d += "/" + dirs[i];
      try {
        FS.mkdir(d, mode);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
    }
  },
  mkdev: function mkdev(path, mode, dev) {
    if (typeof dev == "undefined") {
      dev = mode;
      mode = 438;
    }
    mode |= 8192;
    return FS.mknod(path, mode, dev);
  },
  symlink: function symlink(oldpath, newpath) {
    if (!PATH_FS.resolve(oldpath)) {
      throw new FS.ErrnoError(44);
    }
    var lookup = FS.lookupPath(newpath, {
      parent: true
    });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var newname = PATH.basename(newpath);
    var errCode = FS.mayCreate(parent, newname);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.symlink) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.symlink(parent, newname, oldpath);
  },
  rename: function rename(old_path, new_path) {
    var old_dirname = PATH.dirname(old_path);
    var new_dirname = PATH.dirname(new_path);
    var old_name = PATH.basename(old_path);
    var new_name = PATH.basename(new_path);
    var lookup, old_dir, new_dir;
    lookup = FS.lookupPath(old_path, {
      parent: true
    });
    old_dir = lookup.node;
    lookup = FS.lookupPath(new_path, {
      parent: true
    });
    new_dir = lookup.node;
    if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
    if (old_dir.mount !== new_dir.mount) {
      throw new FS.ErrnoError(75);
    }
    var old_node = FS.lookupNode(old_dir, old_name);
    var relative = PATH_FS.relative(old_path, new_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(28);
    }
    relative = PATH_FS.relative(new_path, old_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(55);
    }
    var new_node;
    try {
      new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (old_node === new_node) {
      return;
    }
    var isdir = FS.isDir(old_node.mode);
    var errCode = FS.mayDelete(old_dir, old_name, isdir);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!old_dir.node_ops.rename) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
      throw new FS.ErrnoError(10);
    }
    if (new_dir !== old_dir) {
      errCode = FS.nodePermissions(old_dir, "w");
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    FS.hashRemoveNode(old_node);
    try {
      old_dir.node_ops.rename(old_node, new_dir, new_name);
    } catch (e) {
      throw e;
    } finally {
      FS.hashAddNode(old_node);
    }
  },
  rmdir: function rmdir(path) {
    var lookup = FS.lookupPath(path, {
      parent: true
    });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, true);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.rmdir) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.rmdir(parent, name);
    FS.destroyNode(node);
  },
  readdir: function readdir(path) {
    var lookup = FS.lookupPath(path, {
      follow: true
    });
    var node = lookup.node;
    if (!node.node_ops.readdir) {
      throw new FS.ErrnoError(54);
    }
    return node.node_ops.readdir(node);
  },
  unlink: function unlink(path) {
    var lookup = FS.lookupPath(path, {
      parent: true
    });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, false);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.unlink) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.unlink(parent, name);
    FS.destroyNode(node);
  },
  readlink: function readlink(path) {
    var lookup = FS.lookupPath(path);
    var link = lookup.node;
    if (!link) {
      throw new FS.ErrnoError(44);
    }
    if (!link.node_ops.readlink) {
      throw new FS.ErrnoError(28);
    }
    return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
  },
  stat: function stat(path, dontFollow) {
    var lookup = FS.lookupPath(path, {
      follow: !dontFollow
    });
    var node = lookup.node;
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (!node.node_ops.getattr) {
      throw new FS.ErrnoError(63);
    }
    return node.node_ops.getattr(node);
  },
  lstat: function lstat(path) {
    return FS.stat(path, true);
  },
  chmod: function chmod(path, mode, dontFollow) {
    var node;
    if (typeof path == "string") {
      var lookup = FS.lookupPath(path, {
        follow: !dontFollow
      });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    node.node_ops.setattr(node, {
      mode: mode & 4095 | node.mode & ~4095,
      timestamp: Date.now()
    });
  },
  lchmod: function lchmod(path, mode) {
    FS.chmod(path, mode, true);
  },
  fchmod: function fchmod(fd, mode) {
    var stream = FS.getStreamChecked(fd);
    FS.chmod(stream.node, mode);
  },
  chown: function chown(path, uid, gid, dontFollow) {
    var node;
    if (typeof path == "string") {
      var lookup = FS.lookupPath(path, {
        follow: !dontFollow
      });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    node.node_ops.setattr(node, {
      timestamp: Date.now()
    });
  },
  lchown: function lchown(path, uid, gid) {
    FS.chown(path, uid, gid, true);
  },
  fchown: function fchown(fd, uid, gid) {
    var stream = FS.getStreamChecked(fd);
    FS.chown(stream.node, uid, gid);
  },
  truncate: function truncate(path, len) {
    if (len < 0) {
      throw new FS.ErrnoError(28);
    }
    var node;
    if (typeof path == "string") {
      var lookup = FS.lookupPath(path, {
        follow: true
      });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isDir(node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!FS.isFile(node.mode)) {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.nodePermissions(node, "w");
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    node.node_ops.setattr(node, {
      size: len,
      timestamp: Date.now()
    });
  },
  ftruncate: function ftruncate(fd, len) {
    var stream = FS.getStreamChecked(fd);
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(28);
    }
    FS.truncate(stream.node, len);
  },
  utime: function utime(path, atime, mtime) {
    var lookup = FS.lookupPath(path, {
      follow: true
    });
    var node = lookup.node;
    node.node_ops.setattr(node, {
      timestamp: Math.max(atime, mtime)
    });
  },
  open: function open(path, flags, mode) {
    if (path === "") {
      throw new FS.ErrnoError(44);
    }
    flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
    mode = typeof mode == "undefined" ? 438 : mode;
    if (flags & 64) {
      mode = mode & 4095 | 32768;
    } else {
      mode = 0;
    }
    var node;
    if (_typeof(path) == "object") {
      node = path;
    } else {
      path = PATH.normalize(path);
      try {
        var lookup = FS.lookupPath(path, {
          follow: !(flags & 131072)
        });
        node = lookup.node;
      } catch (e) {}
    }
    var created = false;
    if (flags & 64) {
      if (node) {
        if (flags & 128) {
          throw new FS.ErrnoError(20);
        }
      } else {
        node = FS.mknod(path, mode, 0);
        created = true;
      }
    }
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (FS.isChrdev(node.mode)) {
      flags &= ~512;
    }
    if (flags & 65536 && !FS.isDir(node.mode)) {
      throw new FS.ErrnoError(54);
    }
    if (!created) {
      var errCode = FS.mayOpen(node, flags);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    if (flags & 512 && !created) {
      FS.truncate(node, 0);
    }
    flags &= ~(128 | 512 | 131072);
    var stream = FS.createStream({
      node: node,
      path: FS.getPath(node),
      flags: flags,
      seekable: true,
      position: 0,
      stream_ops: node.stream_ops,
      ungotten: [],
      error: false
    });
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
    if (Module["logReadFiles"] && !(flags & 1)) {
      if (!FS.readFiles) FS.readFiles = {};
      if (!(path in FS.readFiles)) {
        FS.readFiles[path] = 1;
      }
    }
    return stream;
  },
  close: function close(stream) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (stream.getdents) stream.getdents = null;
    try {
      if (stream.stream_ops.close) {
        stream.stream_ops.close(stream);
      }
    } catch (e) {
      throw e;
    } finally {
      FS.closeStream(stream.fd);
    }
    stream.fd = null;
  },
  isClosed: function isClosed(stream) {
    return stream.fd === null;
  },
  llseek: function llseek(stream, offset, whence) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (!stream.seekable || !stream.stream_ops.llseek) {
      throw new FS.ErrnoError(70);
    }
    if (whence != 0 && whence != 1 && whence != 2) {
      throw new FS.ErrnoError(28);
    }
    stream.position = stream.stream_ops.llseek(stream, offset, whence);
    stream.ungotten = [];
    return stream.position;
  },
  read: function read(stream, buffer, offset, length, position) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.read) {
      throw new FS.ErrnoError(28);
    }
    var seeking = typeof position != "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
    if (!seeking) stream.position += bytesRead;
    return bytesRead;
  },
  write: function write(stream, buffer, offset, length, position, canOwn) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.write) {
      throw new FS.ErrnoError(28);
    }
    if (stream.seekable && stream.flags & 1024) {
      FS.llseek(stream, 0, 2);
    }
    var seeking = typeof position != "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
    if (!seeking) stream.position += bytesWritten;
    return bytesWritten;
  },
  allocate: function allocate(stream, offset, length) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (offset < 0 || length <= 0) {
      throw new FS.ErrnoError(28);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (!stream.stream_ops.allocate) {
      throw new FS.ErrnoError(138);
    }
    stream.stream_ops.allocate(stream, offset, length);
  },
  mmap: function mmap(stream, length, position, prot, flags) {
    if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
      throw new FS.ErrnoError(2);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(2);
    }
    if (!stream.stream_ops.mmap) {
      throw new FS.ErrnoError(43);
    }
    return stream.stream_ops.mmap(stream, length, position, prot, flags);
  },
  msync: function msync(stream, buffer, offset, length, mmapFlags) {
    if (!stream.stream_ops.msync) {
      return 0;
    }
    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
  },
  munmap: function munmap(stream) {
    return 0;
  },
  ioctl: function ioctl(stream, cmd, arg) {
    if (!stream.stream_ops.ioctl) {
      throw new FS.ErrnoError(59);
    }
    return stream.stream_ops.ioctl(stream, cmd, arg);
  },
  readFile: function readFile(path) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    opts.flags = opts.flags || 0;
    opts.encoding = opts.encoding || "binary";
    if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
      throw new Error("Invalid encoding type \"".concat(opts.encoding, "\""));
    }
    var ret;
    var stream = FS.open(path, opts.flags);
    var stat = FS.stat(path);
    var length = stat.size;
    var buf = new Uint8Array(length);
    FS.read(stream, buf, 0, length, 0);
    if (opts.encoding === "utf8") {
      ret = UTF8ArrayToString(buf, 0);
    } else if (opts.encoding === "binary") {
      ret = buf;
    }
    FS.close(stream);
    return ret;
  },
  writeFile: function writeFile(path, data) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    opts.flags = opts.flags || 577;
    var stream = FS.open(path, opts.flags, opts.mode);
    if (typeof data == "string") {
      var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
      var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
      FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
    } else if (ArrayBuffer.isView(data)) {
      FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
    } else {
      throw new Error("Unsupported data type");
    }
    FS.close(stream);
  },
  cwd: function cwd() {
    return FS.currentPath;
  },
  chdir: function chdir(path) {
    var lookup = FS.lookupPath(path, {
      follow: true
    });
    if (lookup.node === null) {
      throw new FS.ErrnoError(44);
    }
    if (!FS.isDir(lookup.node.mode)) {
      throw new FS.ErrnoError(54);
    }
    var errCode = FS.nodePermissions(lookup.node, "x");
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.currentPath = lookup.path;
  },
  createDefaultDirectories: function createDefaultDirectories() {
    FS.mkdir("/tmp");
    FS.mkdir("/home");
    FS.mkdir("/home/web_user");
  },
  createDefaultDevices: function createDefaultDevices() {
    FS.mkdir("/dev");
    FS.registerDevice(FS.makedev(1, 3), {
      read: function read() {
        return 0;
      },
      write: function write(stream, buffer, offset, length, pos) {
        return length;
      }
    });
    FS.mkdev("/dev/null", FS.makedev(1, 3));
    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
    FS.mkdev("/dev/tty", FS.makedev(5, 0));
    FS.mkdev("/dev/tty1", FS.makedev(6, 0));
    var randomBuffer = new Uint8Array(1024),
      randomLeft = 0;
    var randomByte = function randomByte() {
      if (randomLeft === 0) {
        randomLeft = _randomFill(randomBuffer).byteLength;
      }
      return randomBuffer[--randomLeft];
    };
    FS.createDevice("/dev", "random", randomByte);
    FS.createDevice("/dev", "urandom", randomByte);
    FS.mkdir("/dev/shm");
    FS.mkdir("/dev/shm/tmp");
  },
  createSpecialDirectories: function createSpecialDirectories() {
    FS.mkdir("/proc");
    var proc_self = FS.mkdir("/proc/self");
    FS.mkdir("/proc/self/fd");
    FS.mount({
      mount: function mount() {
        var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
        node.node_ops = {
          lookup: function lookup(parent, name) {
            var fd = +name;
            var stream = FS.getStreamChecked(fd);
            var ret = {
              parent: null,
              mount: {
                mountpoint: "fake"
              },
              node_ops: {
                readlink: function readlink() {
                  return stream.path;
                }
              }
            };
            ret.parent = ret;
            return ret;
          }
        };
        return node;
      }
    }, {}, "/proc/self/fd");
  },
  createStandardStreams: function createStandardStreams() {
    if (Module["stdin"]) {
      FS.createDevice("/dev", "stdin", Module["stdin"]);
    } else {
      FS.symlink("/dev/tty", "/dev/stdin");
    }
    if (Module["stdout"]) {
      FS.createDevice("/dev", "stdout", null, Module["stdout"]);
    } else {
      FS.symlink("/dev/tty", "/dev/stdout");
    }
    if (Module["stderr"]) {
      FS.createDevice("/dev", "stderr", null, Module["stderr"]);
    } else {
      FS.symlink("/dev/tty1", "/dev/stderr");
    }
    var stdin = FS.open("/dev/stdin", 0);
    var stdout = FS.open("/dev/stdout", 1);
    var stderr = FS.open("/dev/stderr", 1);
  },
  staticInit: function staticInit() {
    [44].forEach(function (code) {
      FS.genericErrors[code] = new FS.ErrnoError(code);
      FS.genericErrors[code].stack = "<generic error, no stack>";
    });
    FS.nameTable = new Array(4096);
    FS.mount(MEMFS, {}, "/");
    FS.createDefaultDirectories();
    FS.createDefaultDevices();
    FS.createSpecialDirectories();
    FS.filesystems = {
      "MEMFS": MEMFS
    };
  },
  init: function init(input, output, error) {
    FS.init.initialized = true;
    Module["stdin"] = input || Module["stdin"];
    Module["stdout"] = output || Module["stdout"];
    Module["stderr"] = error || Module["stderr"];
    FS.createStandardStreams();
  },
  quit: function quit() {
    FS.init.initialized = false;
    for (var i = 0; i < FS.streams.length; i++) {
      var stream = FS.streams[i];
      if (!stream) {
        continue;
      }
      FS.close(stream);
    }
  },
  findObject: function findObject(path, dontResolveLastLink) {
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (!ret.exists) {
      return null;
    }
    return ret.object;
  },
  analyzePath: function analyzePath(path, dontResolveLastLink) {
    try {
      var lookup = FS.lookupPath(path, {
        follow: !dontResolveLastLink
      });
      path = lookup.path;
    } catch (e) {}
    var ret = {
      isRoot: false,
      exists: false,
      error: 0,
      name: null,
      path: null,
      object: null,
      parentExists: false,
      parentPath: null,
      parentObject: null
    };
    try {
      var lookup = FS.lookupPath(path, {
        parent: true
      });
      ret.parentExists = true;
      ret.parentPath = lookup.path;
      ret.parentObject = lookup.node;
      ret.name = PATH.basename(path);
      lookup = FS.lookupPath(path, {
        follow: !dontResolveLastLink
      });
      ret.exists = true;
      ret.path = lookup.path;
      ret.object = lookup.node;
      ret.name = lookup.node.name;
      ret.isRoot = lookup.path === "/";
    } catch (e) {
      ret.error = e.errno;
    }
    return ret;
  },
  createPath: function createPath(parent, path, canRead, canWrite) {
    parent = typeof parent == "string" ? parent : FS.getPath(parent);
    var parts = path.split("/").reverse();
    while (parts.length) {
      var part = parts.pop();
      if (!part) continue;
      var current = PATH.join2(parent, part);
      try {
        FS.mkdir(current);
      } catch (e) {}
      parent = current;
    }
    return current;
  },
  createFile: function createFile(parent, name, properties, canRead, canWrite) {
    var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
    var mode = FS_getMode(canRead, canWrite);
    return FS.create(path, mode);
  },
  createDataFile: function createDataFile(parent, name, data, canRead, canWrite, canOwn) {
    var path = name;
    if (parent) {
      parent = typeof parent == "string" ? parent : FS.getPath(parent);
      path = name ? PATH.join2(parent, name) : parent;
    }
    var mode = FS_getMode(canRead, canWrite);
    var node = FS.create(path, mode);
    if (data) {
      if (typeof data == "string") {
        var arr = new Array(data.length);
        for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
        data = arr;
      }
      FS.chmod(node, mode | 146);
      var stream = FS.open(node, 577);
      FS.write(stream, data, 0, data.length, 0, canOwn);
      FS.close(stream);
      FS.chmod(node, mode);
    }
  },
  createDevice: function createDevice(parent, name, input, output) {
    var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
    var mode = FS_getMode(!!input, !!output);
    if (!FS.createDevice.major) FS.createDevice.major = 64;
    var dev = FS.makedev(FS.createDevice.major++, 0);
    FS.registerDevice(dev, {
      open: function open(stream) {
        stream.seekable = false;
      },
      close: function close(stream) {
        var _output$buffer;
        if (output !== null && output !== void 0 && (_output$buffer = output.buffer) !== null && _output$buffer !== void 0 && _output$buffer.length) {
          output(10);
        }
      },
      read: function read(stream, buffer, offset, length, pos) {
        var bytesRead = 0;
        for (var i = 0; i < length; i++) {
          var result;
          try {
            result = input();
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (result === undefined && bytesRead === 0) {
            throw new FS.ErrnoError(6);
          }
          if (result === null || result === undefined) break;
          bytesRead++;
          buffer[offset + i] = result;
        }
        if (bytesRead) {
          stream.node.timestamp = Date.now();
        }
        return bytesRead;
      },
      write: function write(stream, buffer, offset, length, pos) {
        for (var i = 0; i < length; i++) {
          try {
            output(buffer[offset + i]);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
        if (length) {
          stream.node.timestamp = Date.now();
        }
        return i;
      }
    });
    return FS.mkdev(path, mode, dev);
  },
  forceLoadFile: function forceLoadFile(obj) {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
    if (typeof XMLHttpRequest != "undefined") {
      throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    } else if (read_) {
      try {
        obj.contents = intArrayFromString(read_(obj.url), true);
        obj.usedBytes = obj.contents.length;
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
    } else {
      throw new Error("Cannot load without read() or XMLHttpRequest.");
    }
  },
  createLazyFile: function createLazyFile(parent, name, url, canRead, canWrite) {
    function LazyUint8Array() {
      this.lengthKnown = false;
      this.chunks = [];
    }
    LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
      if (idx > this.length - 1 || idx < 0) {
        return undefined;
      }
      var chunkOffset = idx % this.chunkSize;
      var chunkNum = idx / this.chunkSize | 0;
      return this.getter(chunkNum)[chunkOffset];
    };
    LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
      this.getter = getter;
    };
    LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", url, false);
      xhr.send(null);
      if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
      var datalength = Number(xhr.getResponseHeader("Content-length"));
      var header;
      var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
      var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
      var chunkSize = 1024 * 1024;
      if (!hasByteServing) chunkSize = datalength;
      var doXHR = function doXHR(from, to) {
        if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
        if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
        xhr.responseType = "arraybuffer";
        if (xhr.overrideMimeType) {
          xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
        xhr.send(null);
        if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
        if (xhr.response !== undefined) {
          return new Uint8Array(xhr.response || []);
        }
        return intArrayFromString(xhr.responseText || "", true);
      };
      var lazyArray = this;
      lazyArray.setDataGetter(function (chunkNum) {
        var start = chunkNum * chunkSize;
        var end = (chunkNum + 1) * chunkSize - 1;
        end = Math.min(end, datalength - 1);
        if (typeof lazyArray.chunks[chunkNum] == "undefined") {
          lazyArray.chunks[chunkNum] = doXHR(start, end);
        }
        if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
        return lazyArray.chunks[chunkNum];
      });
      if (usesGzip || !datalength) {
        chunkSize = datalength = 1;
        datalength = this.getter(0).length;
        chunkSize = datalength;
        out("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this._length = datalength;
      this._chunkSize = chunkSize;
      this.lengthKnown = true;
    };
    if (typeof XMLHttpRequest != "undefined") {
      if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      var lazyArray = new LazyUint8Array();
      Object.defineProperties(lazyArray, {
        length: {
          get: function get() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          }
        },
        chunkSize: {
          get: function get() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          }
        }
      });
      var properties = {
        isDevice: false,
        contents: lazyArray
      };
    } else {
      var properties = {
        isDevice: false,
        url: url
      };
    }
    var node = FS.createFile(parent, name, properties, canRead, canWrite);
    if (properties.contents) {
      node.contents = properties.contents;
    } else if (properties.url) {
      node.contents = null;
      node.url = properties.url;
    }
    Object.defineProperties(node, {
      usedBytes: {
        get: function get() {
          return this.contents.length;
        }
      }
    });
    var stream_ops = {};
    var keys = Object.keys(node.stream_ops);
    keys.forEach(function (key) {
      var fn = node.stream_ops[key];
      stream_ops[key] = function forceLoadLazyFile() {
        FS.forceLoadFile(node);
        return fn.apply(null, arguments);
      };
    });
    function writeChunks(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= contents.length) return 0;
      var size = Math.min(contents.length - position, length);
      if (contents.slice) {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents[position + i];
        }
      } else {
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents.get(position + i);
        }
      }
      return size;
    }
    stream_ops.read = function (stream, buffer, offset, length, position) {
      FS.forceLoadFile(node);
      return writeChunks(stream, buffer, offset, length, position);
    };
    stream_ops.mmap = function (stream, length, position, prot, flags) {
      FS.forceLoadFile(node);
      var ptr = mmapAlloc(length);
      if (!ptr) {
        throw new FS.ErrnoError(48);
      }
      writeChunks(stream, HEAP8, ptr, length, position);
      return {
        ptr: ptr,
        allocated: true
      };
    };
    node.stream_ops = stream_ops;
    return node;
  }
};
var SYSCALLS = {
  DEFAULT_POLLMASK: 5,
  calculateAt: function calculateAt(dirfd, path, allowEmpty) {
    if (PATH.isAbs(path)) {
      return path;
    }
    var dir;
    if (dirfd === -100) {
      dir = FS.cwd();
    } else {
      var dirstream = SYSCALLS.getStreamFromFD(dirfd);
      dir = dirstream.path;
    }
    if (path.length == 0) {
      if (!allowEmpty) {
        throw new FS.ErrnoError(44);
      }
      return dir;
    }
    return PATH.join2(dir, path);
  },
  doStat: function doStat(func, path, buf) {
    var stat = func(path);
    HEAP32[buf >> 2] = stat.dev;
    HEAP32[buf + 4 >> 2] = stat.mode;
    HEAPU32[buf + 8 >> 2] = stat.nlink;
    HEAP32[buf + 12 >> 2] = stat.uid;
    HEAP32[buf + 16 >> 2] = stat.gid;
    HEAP32[buf + 20 >> 2] = stat.rdev;
    tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 24 >> 2] = tempI64[0], HEAP32[buf + 28 >> 2] = tempI64[1];
    HEAP32[buf + 32 >> 2] = 4096;
    HEAP32[buf + 36 >> 2] = stat.blocks;
    var atime = stat.atime.getTime();
    var mtime = stat.mtime.getTime();
    var ctime = stat.ctime.getTime();
    tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
    HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3;
    tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
    HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3;
    tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
    HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3;
    tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
    return 0;
  },
  doMsync: function doMsync(addr, stream, len, flags, offset) {
    if (!FS.isFile(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (flags & 2) {
      return 0;
    }
    var buffer = HEAPU8.slice(addr, addr + len);
    FS.msync(stream, buffer, offset, len, flags);
  },
  varargs: undefined,
  get: function get() {
    var ret = HEAP32[+SYSCALLS.varargs >> 2];
    SYSCALLS.varargs += 4;
    return ret;
  },
  getp: function getp() {
    return SYSCALLS.get();
  },
  getStr: function getStr(ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  },
  getStreamFromFD: function getStreamFromFD(fd) {
    var stream = FS.getStreamChecked(fd);
    return stream;
  }
};
function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (cmd) {
      case 0:
        {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          while (FS.streams[arg]) {
            arg++;
          }
          var newStream;
          newStream = FS.createStream(stream, arg);
          return newStream.fd;
        }
      case 1:
      case 2:
        return 0;
      case 3:
        return stream.flags;
      case 4:
        {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
      case 12:
        {
          var arg = SYSCALLS.getp();
          var offset = 0;
          HEAP16[arg + offset >> 1] = 2;
          return 0;
        }
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}
var stringToUTF8 = function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
};
function ___syscall_getcwd(buf, size) {
  try {
    if (size === 0) return -28;
    var cwd = FS.cwd();
    var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
    if (size < cwdLengthInBytes) return -68;
    stringToUTF8(cwd, buf, size);
    return cwdLengthInBytes;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}
function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (op) {
      case 21509:
        {
          if (!stream.tty) return -59;
          return 0;
        }
      case 21505:
        {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcgets) {
            var termios = stream.tty.ops.ioctl_tcgets(stream);
            var argp = SYSCALLS.getp();
            HEAP32[argp >> 2] = termios.c_iflag || 0;
            HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
            HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
            HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
            for (var i = 0; i < 32; i++) {
              HEAP8[argp + i + 17 >> 0] = termios.c_cc[i] || 0;
            }
            return 0;
          }
          return 0;
        }
      case 21510:
      case 21511:
      case 21512:
        {
          if (!stream.tty) return -59;
          return 0;
        }
      case 21506:
      case 21507:
      case 21508:
        {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcsets) {
            var argp = SYSCALLS.getp();
            var c_iflag = HEAP32[argp >> 2];
            var c_oflag = HEAP32[argp + 4 >> 2];
            var c_cflag = HEAP32[argp + 8 >> 2];
            var c_lflag = HEAP32[argp + 12 >> 2];
            var c_cc = [];
            for (var i = 0; i < 32; i++) {
              c_cc.push(HEAP8[argp + i + 17 >> 0]);
            }
            return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
              c_iflag: c_iflag,
              c_oflag: c_oflag,
              c_cflag: c_cflag,
              c_lflag: c_lflag,
              c_cc: c_cc
            });
          }
          return 0;
        }
      case 21519:
        {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.getp();
          HEAP32[argp >> 2] = 0;
          return 0;
        }
      case 21520:
        {
          if (!stream.tty) return -59;
          return -28;
        }
      case 21531:
        {
          var argp = SYSCALLS.getp();
          return FS.ioctl(stream, op, argp);
        }
      case 21523:
        {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tiocgwinsz) {
            var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
            var argp = SYSCALLS.getp();
            HEAP16[argp >> 1] = winsize[0];
            HEAP16[argp + 2 >> 1] = winsize[1];
          }
          return 0;
        }
      case 21524:
        {
          if (!stream.tty) return -59;
          return 0;
        }
      case 21515:
        {
          if (!stream.tty) return -59;
          return 0;
        }
      default:
        return -28;
    }
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}
function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
    path = SYSCALLS.getStr(path);
    path = SYSCALLS.calculateAt(dirfd, path);
    var mode = varargs ? SYSCALLS.get() : 0;
    return FS.open(path, flags, mode).fd;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}
var nowIsMonotonic = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && performance && typeof performance["now"] == "function" || ENVIRONMENT_IS_NODE;
var __emscripten_get_now_is_monotonic = function __emscripten_get_now_is_monotonic() {
  return nowIsMonotonic;
};
var _abort = function _abort() {
  abort("");
};
var readEmAsmArgsArray = [];
var readEmAsmArgs = function readEmAsmArgs(sigPtr, buf) {
  readEmAsmArgsArray.length = 0;
  var ch;
  while (ch = HEAPU8[sigPtr++]) {
    var wide = ch != 105;
    wide &= ch != 112;
    buf += wide && buf % 8 ? 4 : 0;
    readEmAsmArgsArray.push(ch == 112 ? HEAPU32[buf >> 2] : ch == 105 ? HEAP32[buf >> 2] : HEAPF64[buf >> 3]);
    buf += wide ? 8 : 4;
  }
  return readEmAsmArgsArray;
};
var runEmAsmFunction = function runEmAsmFunction(code, sigPtr, argbuf) {
  var args = readEmAsmArgs(sigPtr, argbuf);
  return ASM_CONSTS[code].apply(null, args);
};
var _emscripten_asm_const_int = function _emscripten_asm_const_int(code, sigPtr, argbuf) {
  return runEmAsmFunction(code, sigPtr, argbuf);
};
var _emscripten_date_now = function _emscripten_date_now() {
  return Date.now();
};
var _emscripten_get_now;
if (ENVIRONMENT_IS_NODE) {
  global.performance = require("perf_hooks").performance;
}
if (typeof performance != "undefined" && performance.now) {
  _emscripten_get_now = function _emscripten_get_now() {
    return performance.now();
  };
} else {
  _emscripten_get_now = Date.now;
}
var webgl_enable_ANGLE_instanced_arrays = function webgl_enable_ANGLE_instanced_arrays(ctx) {
  var ext = ctx.getExtension("ANGLE_instanced_arrays");
  if (ext) {
    ctx["vertexAttribDivisor"] = function (index, divisor) {
      return ext["vertexAttribDivisorANGLE"](index, divisor);
    };
    ctx["drawArraysInstanced"] = function (mode, first, count, primcount) {
      return ext["drawArraysInstancedANGLE"](mode, first, count, primcount);
    };
    ctx["drawElementsInstanced"] = function (mode, count, type, indices, primcount) {
      return ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
    };
    return 1;
  }
};
var webgl_enable_OES_vertex_array_object = function webgl_enable_OES_vertex_array_object(ctx) {
  var ext = ctx.getExtension("OES_vertex_array_object");
  if (ext) {
    ctx["createVertexArray"] = function () {
      return ext["createVertexArrayOES"]();
    };
    ctx["deleteVertexArray"] = function (vao) {
      return ext["deleteVertexArrayOES"](vao);
    };
    ctx["bindVertexArray"] = function (vao) {
      return ext["bindVertexArrayOES"](vao);
    };
    ctx["isVertexArray"] = function (vao) {
      return ext["isVertexArrayOES"](vao);
    };
    return 1;
  }
};
var webgl_enable_WEBGL_draw_buffers = function webgl_enable_WEBGL_draw_buffers(ctx) {
  var ext = ctx.getExtension("WEBGL_draw_buffers");
  if (ext) {
    ctx["drawBuffers"] = function (n, bufs) {
      return ext["drawBuffersWEBGL"](n, bufs);
    };
    return 1;
  }
};
var webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance = function webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
  return !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
};
var webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance = function webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
  return !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
};
var webgl_enable_WEBGL_multi_draw = function webgl_enable_WEBGL_multi_draw(ctx) {
  return !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"));
};
var getEmscriptenSupportedExtensions = function getEmscriptenSupportedExtensions(ctx) {
  var supportedExtensions = ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_disjoint_timer_query", "EXT_frag_depth", "EXT_shader_texture_lod", "EXT_sRGB", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_depth_texture", "WEBGL_draw_buffers", "EXT_color_buffer_float", "EXT_disjoint_timer_query_webgl2", "EXT_texture_norm16", "WEBGL_clip_cull_distance", "EXT_color_buffer_half_float", "EXT_float_blend", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "KHR_parallel_shader_compile", "OES_texture_float_linear", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders", "WEBGL_lose_context", "WEBGL_multi_draw"];
  return (ctx.getSupportedExtensions() || []).filter(function (ext) {
    return supportedExtensions.includes(ext);
  });
};
var GL = {
  counter: 1,
  buffers: [],
  mappedBuffers: {},
  programs: [],
  framebuffers: [],
  renderbuffers: [],
  textures: [],
  shaders: [],
  vaos: [],
  contexts: [],
  offscreenCanvases: {},
  queries: [],
  samplers: [],
  transformFeedbacks: [],
  syncs: [],
  byteSizeByTypeRoot: 5120,
  byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
  stringCache: {},
  stringiCache: {},
  unpackAlignment: 4,
  recordError: function recordError(errorCode) {
    if (!GL.lastError) {
      GL.lastError = errorCode;
    }
  },
  getNewId: function getNewId(table) {
    var ret = GL.counter++;
    for (var i = table.length; i < ret; i++) {
      table[i] = null;
    }
    return ret;
  },
  MAX_TEMP_BUFFER_SIZE: 2097152,
  numTempVertexBuffersPerSize: 64,
  log2ceilLookup: function log2ceilLookup(i) {
    return 32 - Math.clz32(i === 0 ? 0 : i - 1);
  },
  generateTempBuffers: function generateTempBuffers(quads, context) {
    var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
    context.tempVertexBufferCounters1 = [];
    context.tempVertexBufferCounters2 = [];
    context.tempVertexBufferCounters1.length = context.tempVertexBufferCounters2.length = largestIndex + 1;
    context.tempVertexBuffers1 = [];
    context.tempVertexBuffers2 = [];
    context.tempVertexBuffers1.length = context.tempVertexBuffers2.length = largestIndex + 1;
    context.tempIndexBuffers = [];
    context.tempIndexBuffers.length = largestIndex + 1;
    for (var i = 0; i <= largestIndex; ++i) {
      context.tempIndexBuffers[i] = null;
      context.tempVertexBufferCounters1[i] = context.tempVertexBufferCounters2[i] = 0;
      var ringbufferLength = GL.numTempVertexBuffersPerSize;
      context.tempVertexBuffers1[i] = [];
      context.tempVertexBuffers2[i] = [];
      var ringbuffer1 = context.tempVertexBuffers1[i];
      var ringbuffer2 = context.tempVertexBuffers2[i];
      ringbuffer1.length = ringbuffer2.length = ringbufferLength;
      for (var j = 0; j < ringbufferLength; ++j) {
        ringbuffer1[j] = ringbuffer2[j] = null;
      }
    }
    if (quads) {
      context.tempQuadIndexBuffer = GLctx.createBuffer();
      context.GLctx.bindBuffer(34963, context.tempQuadIndexBuffer);
      var numIndexes = GL.MAX_TEMP_BUFFER_SIZE >> 1;
      var quadIndexes = new Uint16Array(numIndexes);
      var i = 0,
        v = 0;
      while (1) {
        quadIndexes[i++] = v;
        if (i >= numIndexes) break;
        quadIndexes[i++] = v + 1;
        if (i >= numIndexes) break;
        quadIndexes[i++] = v + 2;
        if (i >= numIndexes) break;
        quadIndexes[i++] = v;
        if (i >= numIndexes) break;
        quadIndexes[i++] = v + 2;
        if (i >= numIndexes) break;
        quadIndexes[i++] = v + 3;
        if (i >= numIndexes) break;
        v += 4;
      }
      context.GLctx.bufferData(34963, quadIndexes, 35044);
      context.GLctx.bindBuffer(34963, null);
    }
  },
  getTempVertexBuffer: function getTempVertexBuffer(sizeBytes) {
    var idx = GL.log2ceilLookup(sizeBytes);
    var ringbuffer = GL.currentContext.tempVertexBuffers1[idx];
    var nextFreeBufferIndex = GL.currentContext.tempVertexBufferCounters1[idx];
    GL.currentContext.tempVertexBufferCounters1[idx] = GL.currentContext.tempVertexBufferCounters1[idx] + 1 & GL.numTempVertexBuffersPerSize - 1;
    var vbo = ringbuffer[nextFreeBufferIndex];
    if (vbo) {
      return vbo;
    }
    var prevVBO = GLctx.getParameter(34964);
    ringbuffer[nextFreeBufferIndex] = GLctx.createBuffer();
    GLctx.bindBuffer(34962, ringbuffer[nextFreeBufferIndex]);
    GLctx.bufferData(34962, 1 << idx, 35048);
    GLctx.bindBuffer(34962, prevVBO);
    return ringbuffer[nextFreeBufferIndex];
  },
  getTempIndexBuffer: function getTempIndexBuffer(sizeBytes) {
    var idx = GL.log2ceilLookup(sizeBytes);
    var ibo = GL.currentContext.tempIndexBuffers[idx];
    if (ibo) {
      return ibo;
    }
    var prevIBO = GLctx.getParameter(34965);
    GL.currentContext.tempIndexBuffers[idx] = GLctx.createBuffer();
    GLctx.bindBuffer(34963, GL.currentContext.tempIndexBuffers[idx]);
    GLctx.bufferData(34963, 1 << idx, 35048);
    GLctx.bindBuffer(34963, prevIBO);
    return GL.currentContext.tempIndexBuffers[idx];
  },
  newRenderingFrameStarted: function newRenderingFrameStarted() {
    if (!GL.currentContext) {
      return;
    }
    var vb = GL.currentContext.tempVertexBuffers1;
    GL.currentContext.tempVertexBuffers1 = GL.currentContext.tempVertexBuffers2;
    GL.currentContext.tempVertexBuffers2 = vb;
    vb = GL.currentContext.tempVertexBufferCounters1;
    GL.currentContext.tempVertexBufferCounters1 = GL.currentContext.tempVertexBufferCounters2;
    GL.currentContext.tempVertexBufferCounters2 = vb;
    var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
    for (var i = 0; i <= largestIndex; ++i) {
      GL.currentContext.tempVertexBufferCounters1[i] = 0;
    }
  },
  getSource: function getSource(shader, count, string, length) {
    var source = "";
    for (var i = 0; i < count; ++i) {
      var len = length ? HEAPU32[length + i * 4 >> 2] : undefined;
      source += UTF8ToString(HEAPU32[string + i * 4 >> 2], len);
    }
    return source;
  },
  calcBufLength: function calcBufLength(size, type, stride, count) {
    if (stride > 0) {
      return count * stride;
    }
    var typeSize = GL.byteSizeByType[type - GL.byteSizeByTypeRoot];
    return size * typeSize * count;
  },
  usedTempBuffers: [],
  preDrawHandleClientVertexAttribBindings: function preDrawHandleClientVertexAttribBindings(count) {
    GL.resetBufferBinding = false;
    for (var i = 0; i < GL.currentContext.maxVertexAttribs; ++i) {
      var cb = GL.currentContext.clientBuffers[i];
      if (!cb.clientside || !cb.enabled) continue;
      GL.resetBufferBinding = true;
      var size = GL.calcBufLength(cb.size, cb.type, cb.stride, count);
      var buf = GL.getTempVertexBuffer(size);
      GLctx.bindBuffer(34962, buf);
      GLctx.bufferSubData(34962, 0, HEAPU8.subarray(cb.ptr, cb.ptr + size));
      cb.vertexAttribPointerAdaptor.call(GLctx, i, cb.size, cb.type, cb.normalized, cb.stride, 0);
    }
  },
  postDrawHandleClientVertexAttribBindings: function postDrawHandleClientVertexAttribBindings() {
    if (GL.resetBufferBinding) {
      GLctx.bindBuffer(34962, GL.buffers[GLctx.currentArrayBufferBinding]);
    }
  },
  createContext: function createContext(canvas, webGLContextAttributes) {
    function getChromeVersion() {
      var chromeVersion = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
      if (chromeVersion) return chromeVersion[2] | 0;
    }
    if (!canvas.getContextSafariWebGL2Fixed) {
      var fixedGetContext = function fixedGetContext(ver, attrs) {
        var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
        return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null;
      };
      canvas.getContextSafariWebGL2Fixed = canvas.getContext;
      canvas.getContext = fixedGetContext;
    }
    var ctx = webGLContextAttributes.majorVersion > 1 ? !(getChromeVersion() <= 57) && canvas.getContext("webgl2", webGLContextAttributes) : canvas.getContext("webgl", webGLContextAttributes) || canvas.getContext("experimental-webgl", webGLContextAttributes);
    if (!ctx) return 0;
    var handle = GL.registerContext(ctx, webGLContextAttributes);
    return handle;
  },
  registerContext: function registerContext(ctx, webGLContextAttributes) {
    var handle = GL.getNewId(GL.contexts);
    var context = {
      handle: handle,
      attributes: webGLContextAttributes,
      version: webGLContextAttributes.majorVersion,
      GLctx: ctx
    };
    if (ctx.canvas) ctx.canvas.GLctxObject = context;
    GL.contexts[handle] = context;
    if (typeof webGLContextAttributes.enableExtensionsByDefault == "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
      GL.initExtensions(context);
    }
    context.maxVertexAttribs = context.GLctx.getParameter(34921);
    context.clientBuffers = [];
    for (var i = 0; i < context.maxVertexAttribs; i++) {
      context.clientBuffers[i] = {
        enabled: false,
        clientside: false,
        size: 0,
        type: 0,
        normalized: 0,
        stride: 0,
        ptr: 0,
        vertexAttribPointerAdaptor: null
      };
    }
    GL.generateTempBuffers(false, context);
    return handle;
  },
  makeContextCurrent: function makeContextCurrent(contextHandle) {
    var _GL$currentContext;
    GL.currentContext = GL.contexts[contextHandle];
    Module.ctx = GLctx = (_GL$currentContext = GL.currentContext) === null || _GL$currentContext === void 0 ? void 0 : _GL$currentContext.GLctx;
    return !(contextHandle && !GLctx);
  },
  getContext: function getContext(contextHandle) {
    return GL.contexts[contextHandle];
  },
  deleteContext: function deleteContext(contextHandle) {
    if (GL.currentContext === GL.contexts[contextHandle]) {
      GL.currentContext = null;
    }
    if ((typeof JSEvents === "undefined" ? "undefined" : _typeof(JSEvents)) == "object") {
      JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
    }
    if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) {
      GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
    }
    GL.contexts[contextHandle] = null;
  },
  initExtensions: function initExtensions(context) {
    context || (context = GL.currentContext);
    if (context.initExtensionsDone) return;
    context.initExtensionsDone = true;
    var GLctx = context.GLctx;
    webgl_enable_ANGLE_instanced_arrays(GLctx);
    webgl_enable_OES_vertex_array_object(GLctx);
    webgl_enable_WEBGL_draw_buffers(GLctx);
    webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
    webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
    if (context.version >= 2) {
      GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
    }
    if (context.version < 2 || !GLctx.disjointTimerQueryExt) {
      GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
    }
    webgl_enable_WEBGL_multi_draw(GLctx);
    getEmscriptenSupportedExtensions(GLctx).forEach(function (ext) {
      if (!ext.includes("lose_context") && !ext.includes("debug")) {
        GLctx.getExtension(ext);
      }
    });
  }
};
function _glActiveTexture(x0) {
  GLctx.activeTexture(x0);
}
var _emscripten_glActiveTexture = _glActiveTexture;
var _glAttachShader = function _glAttachShader(program, shader) {
  GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
};
var _emscripten_glAttachShader = _glAttachShader;
var _glBeginQuery = function _glBeginQuery(target, id) {
  GLctx.beginQuery(target, GL.queries[id]);
};
var _emscripten_glBeginQuery = _glBeginQuery;
var _glBeginQueryEXT = function _glBeginQueryEXT(target, id) {
  GLctx.disjointTimerQueryExt["beginQueryEXT"](target, GL.queries[id]);
};
var _emscripten_glBeginQueryEXT = _glBeginQueryEXT;
function _glBeginTransformFeedback(x0) {
  GLctx.beginTransformFeedback(x0);
}
var _emscripten_glBeginTransformFeedback = _glBeginTransformFeedback;
var _glBindAttribLocation = function _glBindAttribLocation(program, index, name) {
  GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
};
var _emscripten_glBindAttribLocation = _glBindAttribLocation;
var _glBindBuffer = function _glBindBuffer(target, buffer) {
  if (target == 34962) {
    GLctx.currentArrayBufferBinding = buffer;
  } else if (target == 34963) {
    GLctx.currentElementArrayBufferBinding = buffer;
  }
  if (target == 35051) {
    GLctx.currentPixelPackBufferBinding = buffer;
  } else if (target == 35052) {
    GLctx.currentPixelUnpackBufferBinding = buffer;
  }
  GLctx.bindBuffer(target, GL.buffers[buffer]);
};
var _emscripten_glBindBuffer = _glBindBuffer;
var _glBindBufferBase = function _glBindBufferBase(target, index, buffer) {
  GLctx.bindBufferBase(target, index, GL.buffers[buffer]);
};
var _emscripten_glBindBufferBase = _glBindBufferBase;
var _glBindBufferRange = function _glBindBufferRange(target, index, buffer, offset, ptrsize) {
  GLctx.bindBufferRange(target, index, GL.buffers[buffer], offset, ptrsize);
};
var _emscripten_glBindBufferRange = _glBindBufferRange;
var _glBindFramebuffer = function _glBindFramebuffer(target, framebuffer) {
  GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer]);
};
var _emscripten_glBindFramebuffer = _glBindFramebuffer;
var _glBindRenderbuffer = function _glBindRenderbuffer(target, renderbuffer) {
  GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
};
var _emscripten_glBindRenderbuffer = _glBindRenderbuffer;
var _glBindSampler = function _glBindSampler(unit, sampler) {
  GLctx.bindSampler(unit, GL.samplers[sampler]);
};
var _emscripten_glBindSampler = _glBindSampler;
var _glBindTexture = function _glBindTexture(target, texture) {
  GLctx.bindTexture(target, GL.textures[texture]);
};
var _emscripten_glBindTexture = _glBindTexture;
var _glBindTransformFeedback = function _glBindTransformFeedback(target, id) {
  GLctx.bindTransformFeedback(target, GL.transformFeedbacks[id]);
};
var _emscripten_glBindTransformFeedback = _glBindTransformFeedback;
var _glBindVertexArray = function _glBindVertexArray(vao) {
  GLctx.bindVertexArray(GL.vaos[vao]);
  var ibo = GLctx.getParameter(34965);
  GLctx.currentElementArrayBufferBinding = ibo ? ibo.name | 0 : 0;
};
var _emscripten_glBindVertexArray = _glBindVertexArray;
var _glBindVertexArrayOES = _glBindVertexArray;
var _emscripten_glBindVertexArrayOES = _glBindVertexArrayOES;
function _glBlendColor(x0, x1, x2, x3) {
  GLctx.blendColor(x0, x1, x2, x3);
}
var _emscripten_glBlendColor = _glBlendColor;
function _glBlendEquation(x0) {
  GLctx.blendEquation(x0);
}
var _emscripten_glBlendEquation = _glBlendEquation;
function _glBlendEquationSeparate(x0, x1) {
  GLctx.blendEquationSeparate(x0, x1);
}
var _emscripten_glBlendEquationSeparate = _glBlendEquationSeparate;
function _glBlendFunc(x0, x1) {
  GLctx.blendFunc(x0, x1);
}
var _emscripten_glBlendFunc = _glBlendFunc;
function _glBlendFuncSeparate(x0, x1, x2, x3) {
  GLctx.blendFuncSeparate(x0, x1, x2, x3);
}
var _emscripten_glBlendFuncSeparate = _glBlendFuncSeparate;
function _glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
  GLctx.blitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9);
}
var _emscripten_glBlitFramebuffer = _glBlitFramebuffer;
var _glBufferData = function _glBufferData(target, size, data, usage) {
  if (GL.currentContext.version >= 2) {
    if (data && size) {
      GLctx.bufferData(target, HEAPU8, usage, data, size);
    } else {
      GLctx.bufferData(target, size, usage);
    }
  } else {
    GLctx.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage);
  }
};
var _emscripten_glBufferData = _glBufferData;
var _glBufferSubData = function _glBufferSubData(target, offset, size, data) {
  if (GL.currentContext.version >= 2) {
    size && GLctx.bufferSubData(target, offset, HEAPU8, data, size);
    return;
  }
  GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data + size));
};
var _emscripten_glBufferSubData = _glBufferSubData;
function _glCheckFramebufferStatus(x0) {
  return GLctx.checkFramebufferStatus(x0);
}
var _emscripten_glCheckFramebufferStatus = _glCheckFramebufferStatus;
function _glClear(x0) {
  GLctx.clear(x0);
}
var _emscripten_glClear = _glClear;
function _glClearBufferfi(x0, x1, x2, x3) {
  GLctx.clearBufferfi(x0, x1, x2, x3);
}
var _emscripten_glClearBufferfi = _glClearBufferfi;
var _glClearBufferfv = function _glClearBufferfv(buffer, drawbuffer, value) {
  GLctx.clearBufferfv(buffer, drawbuffer, HEAPF32, value >> 2);
};
var _emscripten_glClearBufferfv = _glClearBufferfv;
var _glClearBufferiv = function _glClearBufferiv(buffer, drawbuffer, value) {
  GLctx.clearBufferiv(buffer, drawbuffer, HEAP32, value >> 2);
};
var _emscripten_glClearBufferiv = _glClearBufferiv;
var _glClearBufferuiv = function _glClearBufferuiv(buffer, drawbuffer, value) {
  GLctx.clearBufferuiv(buffer, drawbuffer, HEAPU32, value >> 2);
};
var _emscripten_glClearBufferuiv = _glClearBufferuiv;
function _glClearColor(x0, x1, x2, x3) {
  GLctx.clearColor(x0, x1, x2, x3);
}
var _emscripten_glClearColor = _glClearColor;
function _glClearDepthf(x0) {
  GLctx.clearDepth(x0);
}
var _emscripten_glClearDepthf = _glClearDepthf;
function _glClearStencil(x0) {
  GLctx.clearStencil(x0);
}
var _emscripten_glClearStencil = _glClearStencil;
var convertI32PairToI53 = function convertI32PairToI53(lo, hi) {
  return (lo >>> 0) + hi * 4294967296;
};
var _glClientWaitSync = function _glClientWaitSync(sync, flags, timeout_low, timeout_high) {
  var timeout = convertI32PairToI53(timeout_low, timeout_high);
  return GLctx.clientWaitSync(GL.syncs[sync], flags, timeout);
};
var _emscripten_glClientWaitSync = _glClientWaitSync;
var _glColorMask = function _glColorMask(red, green, blue, alpha) {
  GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
};
var _emscripten_glColorMask = _glColorMask;
var _glCompileShader = function _glCompileShader(shader) {
  GLctx.compileShader(GL.shaders[shader]);
};
var _emscripten_glCompileShader = _glCompileShader;
var _glCompressedTexImage2D = function _glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
  if (GL.currentContext.version >= 2) {
    if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
      GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data);
    } else {
      GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
    }
    return;
  }
  GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, data ? HEAPU8.subarray(data, data + imageSize) : null);
};
var _emscripten_glCompressedTexImage2D = _glCompressedTexImage2D;
var _glCompressedTexImage3D = function _glCompressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data) {
  if (GLctx.currentPixelUnpackBufferBinding) {
    GLctx.compressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data);
  } else {
    GLctx.compressedTexImage3D(target, level, internalFormat, width, height, depth, border, HEAPU8, data, imageSize);
  }
};
var _emscripten_glCompressedTexImage3D = _glCompressedTexImage3D;
var _glCompressedTexSubImage2D = function _glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
  if (GL.currentContext.version >= 2) {
    if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
      GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data);
    } else {
      GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
    }
    return;
  }
  GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray(data, data + imageSize) : null);
};
var _emscripten_glCompressedTexSubImage2D = _glCompressedTexSubImage2D;
var _glCompressedTexSubImage3D = function _glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
  if (GLctx.currentPixelUnpackBufferBinding) {
    GLctx.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
  } else {
    GLctx.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize);
  }
};
var _emscripten_glCompressedTexSubImage3D = _glCompressedTexSubImage3D;
function _glCopyBufferSubData(x0, x1, x2, x3, x4) {
  GLctx.copyBufferSubData(x0, x1, x2, x3, x4);
}
var _emscripten_glCopyBufferSubData = _glCopyBufferSubData;
function _glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
  GLctx.copyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7);
}
var _emscripten_glCopyTexImage2D = _glCopyTexImage2D;
function _glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
  GLctx.copyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7);
}
var _emscripten_glCopyTexSubImage2D = _glCopyTexSubImage2D;
function _glCopyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8) {
  GLctx.copyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8);
}
var _emscripten_glCopyTexSubImage3D = _glCopyTexSubImage3D;
var _glCreateProgram = function _glCreateProgram() {
  var id = GL.getNewId(GL.programs);
  var program = GLctx.createProgram();
  program.name = id;
  program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
  program.uniformIdCounter = 1;
  GL.programs[id] = program;
  return id;
};
var _emscripten_glCreateProgram = _glCreateProgram;
var _glCreateShader = function _glCreateShader(shaderType) {
  var id = GL.getNewId(GL.shaders);
  GL.shaders[id] = GLctx.createShader(shaderType);
  return id;
};
var _emscripten_glCreateShader = _glCreateShader;
function _glCullFace(x0) {
  GLctx.cullFace(x0);
}
var _emscripten_glCullFace = _glCullFace;
var _glDeleteBuffers = function _glDeleteBuffers(n, buffers) {
  for (var i = 0; i < n; i++) {
    var id = HEAP32[buffers + i * 4 >> 2];
    var buffer = GL.buffers[id];
    if (!buffer) continue;
    GLctx.deleteBuffer(buffer);
    buffer.name = 0;
    GL.buffers[id] = null;
    if (id == GLctx.currentArrayBufferBinding) GLctx.currentArrayBufferBinding = 0;
    if (id == GLctx.currentElementArrayBufferBinding) GLctx.currentElementArrayBufferBinding = 0;
    if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
    if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
  }
};
var _emscripten_glDeleteBuffers = _glDeleteBuffers;
var _glDeleteFramebuffers = function _glDeleteFramebuffers(n, framebuffers) {
  for (var i = 0; i < n; ++i) {
    var id = HEAP32[framebuffers + i * 4 >> 2];
    var framebuffer = GL.framebuffers[id];
    if (!framebuffer) continue;
    GLctx.deleteFramebuffer(framebuffer);
    framebuffer.name = 0;
    GL.framebuffers[id] = null;
  }
};
var _emscripten_glDeleteFramebuffers = _glDeleteFramebuffers;
var _glDeleteProgram = function _glDeleteProgram(id) {
  if (!id) return;
  var program = GL.programs[id];
  if (!program) {
    GL.recordError(1281);
    return;
  }
  GLctx.deleteProgram(program);
  program.name = 0;
  GL.programs[id] = null;
};
var _emscripten_glDeleteProgram = _glDeleteProgram;
var _glDeleteQueries = function _glDeleteQueries(n, ids) {
  for (var i = 0; i < n; i++) {
    var id = HEAP32[ids + i * 4 >> 2];
    var query = GL.queries[id];
    if (!query) continue;
    GLctx.deleteQuery(query);
    GL.queries[id] = null;
  }
};
var _emscripten_glDeleteQueries = _glDeleteQueries;
var _glDeleteQueriesEXT = function _glDeleteQueriesEXT(n, ids) {
  for (var i = 0; i < n; i++) {
    var id = HEAP32[ids + i * 4 >> 2];
    var query = GL.queries[id];
    if (!query) continue;
    GLctx.disjointTimerQueryExt["deleteQueryEXT"](query);
    GL.queries[id] = null;
  }
};
var _emscripten_glDeleteQueriesEXT = _glDeleteQueriesEXT;
var _glDeleteRenderbuffers = function _glDeleteRenderbuffers(n, renderbuffers) {
  for (var i = 0; i < n; i++) {
    var id = HEAP32[renderbuffers + i * 4 >> 2];
    var renderbuffer = GL.renderbuffers[id];
    if (!renderbuffer) continue;
    GLctx.deleteRenderbuffer(renderbuffer);
    renderbuffer.name = 0;
    GL.renderbuffers[id] = null;
  }
};
var _emscripten_glDeleteRenderbuffers = _glDeleteRenderbuffers;
var _glDeleteSamplers = function _glDeleteSamplers(n, samplers) {
  for (var i = 0; i < n; i++) {
    var id = HEAP32[samplers + i * 4 >> 2];
    var sampler = GL.samplers[id];
    if (!sampler) continue;
    GLctx.deleteSampler(sampler);
    sampler.name = 0;
    GL.samplers[id] = null;
  }
};
var _emscripten_glDeleteSamplers = _glDeleteSamplers;
var _glDeleteShader = function _glDeleteShader(id) {
  if (!id) return;
  var shader = GL.shaders[id];
  if (!shader) {
    GL.recordError(1281);
    return;
  }
  GLctx.deleteShader(shader);
  GL.shaders[id] = null;
};
var _emscripten_glDeleteShader = _glDeleteShader;
var _glDeleteSync = function _glDeleteSync(id) {
  if (!id) return;
  var sync = GL.syncs[id];
  if (!sync) {
    GL.recordError(1281);
    return;
  }
  GLctx.deleteSync(sync);
  sync.name = 0;
  GL.syncs[id] = null;
};
var _emscripten_glDeleteSync = _glDeleteSync;
var _glDeleteTextures = function _glDeleteTextures(n, textures) {
  for (var i = 0; i < n; i++) {
    var id = HEAP32[textures + i * 4 >> 2];
    var texture = GL.textures[id];
    if (!texture) continue;
    GLctx.deleteTexture(texture);
    texture.name = 0;
    GL.textures[id] = null;
  }
};
var _emscripten_glDeleteTextures = _glDeleteTextures;
var _glDeleteTransformFeedbacks = function _glDeleteTransformFeedbacks(n, ids) {
  for (var i = 0; i < n; i++) {
    var id = HEAP32[ids + i * 4 >> 2];
    var transformFeedback = GL.transformFeedbacks[id];
    if (!transformFeedback) continue;
    GLctx.deleteTransformFeedback(transformFeedback);
    transformFeedback.name = 0;
    GL.transformFeedbacks[id] = null;
  }
};
var _emscripten_glDeleteTransformFeedbacks = _glDeleteTransformFeedbacks;
var _glDeleteVertexArrays = function _glDeleteVertexArrays(n, vaos) {
  for (var i = 0; i < n; i++) {
    var id = HEAP32[vaos + i * 4 >> 2];
    GLctx.deleteVertexArray(GL.vaos[id]);
    GL.vaos[id] = null;
  }
};
var _emscripten_glDeleteVertexArrays = _glDeleteVertexArrays;
var _glDeleteVertexArraysOES = _glDeleteVertexArrays;
var _emscripten_glDeleteVertexArraysOES = _glDeleteVertexArraysOES;
function _glDepthFunc(x0) {
  GLctx.depthFunc(x0);
}
var _emscripten_glDepthFunc = _glDepthFunc;
var _glDepthMask = function _glDepthMask(flag) {
  GLctx.depthMask(!!flag);
};
var _emscripten_glDepthMask = _glDepthMask;
function _glDepthRangef(x0, x1) {
  GLctx.depthRange(x0, x1);
}
var _emscripten_glDepthRangef = _glDepthRangef;
var _glDetachShader = function _glDetachShader(program, shader) {
  GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
};
var _emscripten_glDetachShader = _glDetachShader;
function _glDisable(x0) {
  GLctx.disable(x0);
}
var _emscripten_glDisable = _glDisable;
var _glDisableVertexAttribArray = function _glDisableVertexAttribArray(index) {
  var cb = GL.currentContext.clientBuffers[index];
  cb.enabled = false;
  GLctx.disableVertexAttribArray(index);
};
var _emscripten_glDisableVertexAttribArray = _glDisableVertexAttribArray;
var _glDrawArrays = function _glDrawArrays(mode, first, count) {
  GL.preDrawHandleClientVertexAttribBindings(first + count);
  GLctx.drawArrays(mode, first, count);
  GL.postDrawHandleClientVertexAttribBindings();
};
var _emscripten_glDrawArrays = _glDrawArrays;
var _glDrawArraysInstanced = function _glDrawArraysInstanced(mode, first, count, primcount) {
  GLctx.drawArraysInstanced(mode, first, count, primcount);
};
var _emscripten_glDrawArraysInstanced = _glDrawArraysInstanced;
var _glDrawArraysInstancedANGLE = _glDrawArraysInstanced;
var _emscripten_glDrawArraysInstancedANGLE = _glDrawArraysInstancedANGLE;
var _glDrawArraysInstancedARB = _glDrawArraysInstanced;
var _emscripten_glDrawArraysInstancedARB = _glDrawArraysInstancedARB;
var _glDrawArraysInstancedEXT = _glDrawArraysInstanced;
var _emscripten_glDrawArraysInstancedEXT = _glDrawArraysInstancedEXT;
var _glDrawArraysInstancedNV = _glDrawArraysInstanced;
var _emscripten_glDrawArraysInstancedNV = _glDrawArraysInstancedNV;
var tempFixedLengthArray = [];
var _glDrawBuffers = function _glDrawBuffers(n, bufs) {
  var bufArray = tempFixedLengthArray[n];
  for (var i = 0; i < n; i++) {
    bufArray[i] = HEAP32[bufs + i * 4 >> 2];
  }
  GLctx.drawBuffers(bufArray);
};
var _emscripten_glDrawBuffers = _glDrawBuffers;
var _glDrawBuffersEXT = _glDrawBuffers;
var _emscripten_glDrawBuffersEXT = _glDrawBuffersEXT;
var _glDrawBuffersWEBGL = _glDrawBuffers;
var _emscripten_glDrawBuffersWEBGL = _glDrawBuffersWEBGL;
var _glDrawElements = function _glDrawElements(mode, count, type, indices) {
  var buf;
  if (!GLctx.currentElementArrayBufferBinding) {
    var size = GL.calcBufLength(1, type, 0, count);
    buf = GL.getTempIndexBuffer(size);
    GLctx.bindBuffer(34963, buf);
    GLctx.bufferSubData(34963, 0, HEAPU8.subarray(indices, indices + size));
    indices = 0;
  }
  GL.preDrawHandleClientVertexAttribBindings(count);
  GLctx.drawElements(mode, count, type, indices);
  GL.postDrawHandleClientVertexAttribBindings(count);
  if (!GLctx.currentElementArrayBufferBinding) {
    GLctx.bindBuffer(34963, null);
  }
};
var _emscripten_glDrawElements = _glDrawElements;
var _glDrawElementsInstanced = function _glDrawElementsInstanced(mode, count, type, indices, primcount) {
  GLctx.drawElementsInstanced(mode, count, type, indices, primcount);
};
var _emscripten_glDrawElementsInstanced = _glDrawElementsInstanced;
var _glDrawElementsInstancedANGLE = _glDrawElementsInstanced;
var _emscripten_glDrawElementsInstancedANGLE = _glDrawElementsInstancedANGLE;
var _glDrawElementsInstancedARB = _glDrawElementsInstanced;
var _emscripten_glDrawElementsInstancedARB = _glDrawElementsInstancedARB;
var _glDrawElementsInstancedEXT = _glDrawElementsInstanced;
var _emscripten_glDrawElementsInstancedEXT = _glDrawElementsInstancedEXT;
var _glDrawElementsInstancedNV = _glDrawElementsInstanced;
var _emscripten_glDrawElementsInstancedNV = _glDrawElementsInstancedNV;
var _glDrawRangeElements = function _glDrawRangeElements(mode, start, end, count, type, indices) {
  _glDrawElements(mode, count, type, indices);
};
var _emscripten_glDrawRangeElements = _glDrawRangeElements;
function _glEnable(x0) {
  GLctx.enable(x0);
}
var _emscripten_glEnable = _glEnable;
var _glEnableVertexAttribArray = function _glEnableVertexAttribArray(index) {
  var cb = GL.currentContext.clientBuffers[index];
  cb.enabled = true;
  GLctx.enableVertexAttribArray(index);
};
var _emscripten_glEnableVertexAttribArray = _glEnableVertexAttribArray;
function _glEndQuery(x0) {
  GLctx.endQuery(x0);
}
var _emscripten_glEndQuery = _glEndQuery;
var _glEndQueryEXT = function _glEndQueryEXT(target) {
  GLctx.disjointTimerQueryExt["endQueryEXT"](target);
};
var _emscripten_glEndQueryEXT = _glEndQueryEXT;
function _glEndTransformFeedback() {
  GLctx.endTransformFeedback();
}
var _emscripten_glEndTransformFeedback = _glEndTransformFeedback;
var _glFenceSync = function _glFenceSync(condition, flags) {
  var sync = GLctx.fenceSync(condition, flags);
  if (sync) {
    var id = GL.getNewId(GL.syncs);
    sync.name = id;
    GL.syncs[id] = sync;
    return id;
  }
  return 0;
};
var _emscripten_glFenceSync = _glFenceSync;
function _glFinish() {
  GLctx.finish();
}
var _emscripten_glFinish = _glFinish;
function _glFlush() {
  GLctx.flush();
}
var _emscripten_glFlush = _glFlush;
var emscriptenWebGLGetBufferBinding = function emscriptenWebGLGetBufferBinding(target) {
  switch (target) {
    case 34962:
      target = 34964;
      break;
    case 34963:
      target = 34965;
      break;
    case 35051:
      target = 35053;
      break;
    case 35052:
      target = 35055;
      break;
    case 35982:
      target = 35983;
      break;
    case 36662:
      target = 36662;
      break;
    case 36663:
      target = 36663;
      break;
    case 35345:
      target = 35368;
      break;
  }
  var buffer = GLctx.getParameter(target);
  if (buffer) return buffer.name | 0;else return 0;
};
var emscriptenWebGLValidateMapBufferTarget = function emscriptenWebGLValidateMapBufferTarget(target) {
  switch (target) {
    case 34962:
    case 34963:
    case 36662:
    case 36663:
    case 35051:
    case 35052:
    case 35882:
    case 35982:
    case 35345:
      return true;
    default:
      return false;
  }
};
var _glFlushMappedBufferRange = function _glFlushMappedBufferRange(target, offset, length) {
  if (!emscriptenWebGLValidateMapBufferTarget(target)) {
    GL.recordError(1280);
    err("GL_INVALID_ENUM in glFlushMappedBufferRange");
    return;
  }
  var mapping = GL.mappedBuffers[emscriptenWebGLGetBufferBinding(target)];
  if (!mapping) {
    GL.recordError(1282);
    err("buffer was never mapped in glFlushMappedBufferRange");
    return;
  }
  if (!(mapping.access & 16)) {
    GL.recordError(1282);
    err("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
    return;
  }
  if (offset < 0 || length < 0 || offset + length > mapping.length) {
    GL.recordError(1281);
    err("invalid range in glFlushMappedBufferRange");
    return;
  }
  GLctx.bufferSubData(target, mapping.offset, HEAPU8.subarray(mapping.mem + offset, mapping.mem + offset + length));
};
var _emscripten_glFlushMappedBufferRange = _glFlushMappedBufferRange;
var _glFramebufferRenderbuffer = function _glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
  GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer]);
};
var _emscripten_glFramebufferRenderbuffer = _glFramebufferRenderbuffer;
var _glFramebufferTexture2D = function _glFramebufferTexture2D(target, attachment, textarget, texture, level) {
  GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level);
};
var _emscripten_glFramebufferTexture2D = _glFramebufferTexture2D;
var _glFramebufferTextureLayer = function _glFramebufferTextureLayer(target, attachment, texture, level, layer) {
  GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
};
var _emscripten_glFramebufferTextureLayer = _glFramebufferTextureLayer;
function _glFrontFace(x0) {
  GLctx.frontFace(x0);
}
var _emscripten_glFrontFace = _glFrontFace;
var __glGenObject = function __glGenObject(n, buffers, createFunction, objectTable) {
  for (var i = 0; i < n; i++) {
    var buffer = GLctx[createFunction]();
    var id = buffer && GL.getNewId(objectTable);
    if (buffer) {
      buffer.name = id;
      objectTable[id] = buffer;
    } else {
      GL.recordError(1282);
    }
    HEAP32[buffers + i * 4 >> 2] = id;
  }
};
var _glGenBuffers = function _glGenBuffers(n, buffers) {
  __glGenObject(n, buffers, "createBuffer", GL.buffers);
};
var _emscripten_glGenBuffers = _glGenBuffers;
var _glGenFramebuffers = function _glGenFramebuffers(n, ids) {
  __glGenObject(n, ids, "createFramebuffer", GL.framebuffers);
};
var _emscripten_glGenFramebuffers = _glGenFramebuffers;
var _glGenQueries = function _glGenQueries(n, ids) {
  __glGenObject(n, ids, "createQuery", GL.queries);
};
var _emscripten_glGenQueries = _glGenQueries;
var _glGenQueriesEXT = function _glGenQueriesEXT(n, ids) {
  for (var i = 0; i < n; i++) {
    var query = GLctx.disjointTimerQueryExt["createQueryEXT"]();
    if (!query) {
      GL.recordError(1282);
      while (i < n) HEAP32[ids + i++ * 4 >> 2] = 0;
      return;
    }
    var id = GL.getNewId(GL.queries);
    query.name = id;
    GL.queries[id] = query;
    HEAP32[ids + i * 4 >> 2] = id;
  }
};
var _emscripten_glGenQueriesEXT = _glGenQueriesEXT;
var _glGenRenderbuffers = function _glGenRenderbuffers(n, renderbuffers) {
  __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers);
};
var _emscripten_glGenRenderbuffers = _glGenRenderbuffers;
var _glGenSamplers = function _glGenSamplers(n, samplers) {
  __glGenObject(n, samplers, "createSampler", GL.samplers);
};
var _emscripten_glGenSamplers = _glGenSamplers;
var _glGenTextures = function _glGenTextures(n, textures) {
  __glGenObject(n, textures, "createTexture", GL.textures);
};
var _emscripten_glGenTextures = _glGenTextures;
var _glGenTransformFeedbacks = function _glGenTransformFeedbacks(n, ids) {
  __glGenObject(n, ids, "createTransformFeedback", GL.transformFeedbacks);
};
var _emscripten_glGenTransformFeedbacks = _glGenTransformFeedbacks;
function _glGenVertexArrays(n, arrays) {
  __glGenObject(n, arrays, "createVertexArray", GL.vaos);
}
var _emscripten_glGenVertexArrays = _glGenVertexArrays;
var _glGenVertexArraysOES = _glGenVertexArrays;
var _emscripten_glGenVertexArraysOES = _glGenVertexArraysOES;
function _glGenerateMipmap(x0) {
  GLctx.generateMipmap(x0);
}
var _emscripten_glGenerateMipmap = _glGenerateMipmap;
var __glGetActiveAttribOrUniform = function __glGetActiveAttribOrUniform(funcName, program, index, bufSize, length, size, type, name) {
  program = GL.programs[program];
  var info = GLctx[funcName](program, index);
  if (info) {
    var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
    if (size) HEAP32[size >> 2] = info.size;
    if (type) HEAP32[type >> 2] = info.type;
  }
};
var _glGetActiveAttrib = function _glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
  __glGetActiveAttribOrUniform("getActiveAttrib", program, index, bufSize, length, size, type, name);
};
var _emscripten_glGetActiveAttrib = _glGetActiveAttrib;
var _glGetActiveUniform = function _glGetActiveUniform(program, index, bufSize, length, size, type, name) {
  __glGetActiveAttribOrUniform("getActiveUniform", program, index, bufSize, length, size, type, name);
};
var _emscripten_glGetActiveUniform = _glGetActiveUniform;
var _glGetActiveUniformBlockName = function _glGetActiveUniformBlockName(program, uniformBlockIndex, bufSize, length, uniformBlockName) {
  program = GL.programs[program];
  var result = GLctx.getActiveUniformBlockName(program, uniformBlockIndex);
  if (!result) return;
  if (uniformBlockName && bufSize > 0) {
    var numBytesWrittenExclNull = stringToUTF8(result, uniformBlockName, bufSize);
    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
  } else {
    if (length) HEAP32[length >> 2] = 0;
  }
};
var _emscripten_glGetActiveUniformBlockName = _glGetActiveUniformBlockName;
var _glGetActiveUniformBlockiv = function _glGetActiveUniformBlockiv(program, uniformBlockIndex, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  program = GL.programs[program];
  if (pname == 35393) {
    var name = GLctx.getActiveUniformBlockName(program, uniformBlockIndex);
    HEAP32[params >> 2] = name.length + 1;
    return;
  }
  var result = GLctx.getActiveUniformBlockParameter(program, uniformBlockIndex, pname);
  if (result === null) return;
  if (pname == 35395) {
    for (var i = 0; i < result.length; i++) {
      HEAP32[params + i * 4 >> 2] = result[i];
    }
  } else {
    HEAP32[params >> 2] = result;
  }
};
var _emscripten_glGetActiveUniformBlockiv = _glGetActiveUniformBlockiv;
var _glGetActiveUniformsiv = function _glGetActiveUniformsiv(program, uniformCount, uniformIndices, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  if (uniformCount > 0 && uniformIndices == 0) {
    GL.recordError(1281);
    return;
  }
  program = GL.programs[program];
  var ids = [];
  for (var i = 0; i < uniformCount; i++) {
    ids.push(HEAP32[uniformIndices + i * 4 >> 2]);
  }
  var result = GLctx.getActiveUniforms(program, ids, pname);
  if (!result) return;
  var len = result.length;
  for (var i = 0; i < len; i++) {
    HEAP32[params + i * 4 >> 2] = result[i];
  }
};
var _emscripten_glGetActiveUniformsiv = _glGetActiveUniformsiv;
var _glGetAttachedShaders = function _glGetAttachedShaders(program, maxCount, count, shaders) {
  var result = GLctx.getAttachedShaders(GL.programs[program]);
  var len = result.length;
  if (len > maxCount) {
    len = maxCount;
  }
  HEAP32[count >> 2] = len;
  for (var i = 0; i < len; ++i) {
    var id = GL.shaders.indexOf(result[i]);
    HEAP32[shaders + i * 4 >> 2] = id;
  }
};
var _emscripten_glGetAttachedShaders = _glGetAttachedShaders;
var _glGetAttribLocation = function _glGetAttribLocation(program, name) {
  return GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
};
var _emscripten_glGetAttribLocation = _glGetAttribLocation;
var writeI53ToI64 = function writeI53ToI64(ptr, num) {
  HEAPU32[ptr >> 2] = num;
  var lower = HEAPU32[ptr >> 2];
  HEAPU32[ptr + 4 >> 2] = (num - lower) / 4294967296;
};
var webglGetExtensions = function $webglGetExtensions() {
  var exts = getEmscriptenSupportedExtensions(GLctx);
  exts = exts.concat(exts.map(function (e) {
    return "GL_" + e;
  }));
  return exts;
};
var emscriptenWebGLGet = function emscriptenWebGLGet(name_, p, type) {
  if (!p) {
    GL.recordError(1281);
    return;
  }
  var ret = undefined;
  switch (name_) {
    case 36346:
      ret = 1;
      break;
    case 36344:
      if (type != 0 && type != 1) {
        GL.recordError(1280);
      }
      return;
    case 34814:
    case 36345:
      ret = 0;
      break;
    case 34466:
      var formats = GLctx.getParameter(34467);
      ret = formats ? formats.length : 0;
      break;
    case 33309:
      if (GL.currentContext.version < 2) {
        GL.recordError(1282);
        return;
      }
      ret = webglGetExtensions().length;
      break;
    case 33307:
    case 33308:
      if (GL.currentContext.version < 2) {
        GL.recordError(1280);
        return;
      }
      ret = name_ == 33307 ? 3 : 0;
      break;
  }
  if (ret === undefined) {
    var result = GLctx.getParameter(name_);
    switch (_typeof(result)) {
      case "number":
        ret = result;
        break;
      case "boolean":
        ret = result ? 1 : 0;
        break;
      case "string":
        GL.recordError(1280);
        return;
      case "object":
        if (result === null) {
          switch (name_) {
            case 34964:
            case 35725:
            case 34965:
            case 36006:
            case 36007:
            case 32873:
            case 34229:
            case 36662:
            case 36663:
            case 35053:
            case 35055:
            case 36010:
            case 35097:
            case 35869:
            case 32874:
            case 36389:
            case 35983:
            case 35368:
            case 34068:
              {
                ret = 0;
                break;
              }
            default:
              {
                GL.recordError(1280);
                return;
              }
          }
        } else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
          for (var i = 0; i < result.length; ++i) {
            switch (type) {
              case 0:
                HEAP32[p + i * 4 >> 2] = result[i];
                break;
              case 2:
                HEAPF32[p + i * 4 >> 2] = result[i];
                break;
              case 4:
                HEAP8[p + i >> 0] = result[i] ? 1 : 0;
                break;
            }
          }
          return;
        } else {
          try {
            ret = result.name | 0;
          } catch (e) {
            GL.recordError(1280);
            err("GL_INVALID_ENUM in glGet".concat(type, "v: Unknown object returned from WebGL getParameter(").concat(name_, ")! (error: ").concat(e, ")"));
            return;
          }
        }
        break;
      default:
        GL.recordError(1280);
        err("GL_INVALID_ENUM in glGet".concat(type, "v: Native code calling glGet").concat(type, "v(").concat(name_, ") and it returns ").concat(result, " of type ").concat(_typeof(result), "!"));
        return;
    }
  }
  switch (type) {
    case 1:
      writeI53ToI64(p, ret);
      break;
    case 0:
      HEAP32[p >> 2] = ret;
      break;
    case 2:
      HEAPF32[p >> 2] = ret;
      break;
    case 4:
      HEAP8[p >> 0] = ret ? 1 : 0;
      break;
  }
};
var _glGetBooleanv = function _glGetBooleanv(name_, p) {
  return emscriptenWebGLGet(name_, p, 4);
};
var _emscripten_glGetBooleanv = _glGetBooleanv;
var _glGetBufferParameteri64v = function _glGetBufferParameteri64v(target, value, data) {
  if (!data) {
    GL.recordError(1281);
    return;
  }
  writeI53ToI64(data, GLctx.getBufferParameter(target, value));
};
var _emscripten_glGetBufferParameteri64v = _glGetBufferParameteri64v;
var _glGetBufferParameteriv = function _glGetBufferParameteriv(target, value, data) {
  if (!data) {
    GL.recordError(1281);
    return;
  }
  HEAP32[data >> 2] = GLctx.getBufferParameter(target, value);
};
var _emscripten_glGetBufferParameteriv = _glGetBufferParameteriv;
var _glGetBufferPointerv = function _glGetBufferPointerv(target, pname, params) {
  if (pname == 35005) {
    var ptr = 0;
    var mappedBuffer = GL.mappedBuffers[emscriptenWebGLGetBufferBinding(target)];
    if (mappedBuffer) {
      ptr = mappedBuffer.mem;
    }
    HEAP32[params >> 2] = ptr;
  } else {
    GL.recordError(1280);
    err("GL_INVALID_ENUM in glGetBufferPointerv");
  }
};
var _emscripten_glGetBufferPointerv = _glGetBufferPointerv;
var _glGetError = function _glGetError() {
  var error = GLctx.getError() || GL.lastError;
  GL.lastError = 0;
  return error;
};
var _emscripten_glGetError = _glGetError;
var _glGetFloatv = function _glGetFloatv(name_, p) {
  return emscriptenWebGLGet(name_, p, 2);
};
var _emscripten_glGetFloatv = _glGetFloatv;
var _glGetFragDataLocation = function _glGetFragDataLocation(program, name) {
  return GLctx.getFragDataLocation(GL.programs[program], UTF8ToString(name));
};
var _emscripten_glGetFragDataLocation = _glGetFragDataLocation;
var _glGetFramebufferAttachmentParameteriv = function _glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
  var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
  if (result instanceof WebGLRenderbuffer || result instanceof WebGLTexture) {
    result = result.name | 0;
  }
  HEAP32[params >> 2] = result;
};
var _emscripten_glGetFramebufferAttachmentParameteriv = _glGetFramebufferAttachmentParameteriv;
var emscriptenWebGLGetIndexed = function emscriptenWebGLGetIndexed(target, index, data, type) {
  if (!data) {
    GL.recordError(1281);
    return;
  }
  var result = GLctx.getIndexedParameter(target, index);
  var ret;
  switch (_typeof(result)) {
    case "boolean":
      ret = result ? 1 : 0;
      break;
    case "number":
      ret = result;
      break;
    case "object":
      if (result === null) {
        switch (target) {
          case 35983:
          case 35368:
            ret = 0;
            break;
          default:
            {
              GL.recordError(1280);
              return;
            }
        }
      } else if (result instanceof WebGLBuffer) {
        ret = result.name | 0;
      } else {
        GL.recordError(1280);
        return;
      }
      break;
    default:
      GL.recordError(1280);
      return;
  }
  switch (type) {
    case 1:
      writeI53ToI64(data, ret);
      break;
    case 0:
      HEAP32[data >> 2] = ret;
      break;
    case 2:
      HEAPF32[data >> 2] = ret;
      break;
    case 4:
      HEAP8[data >> 0] = ret ? 1 : 0;
      break;
    default:
      throw "internal emscriptenWebGLGetIndexed() error, bad type: " + type;
  }
};
var _glGetInteger64i_v = function _glGetInteger64i_v(target, index, data) {
  return emscriptenWebGLGetIndexed(target, index, data, 1);
};
var _emscripten_glGetInteger64i_v = _glGetInteger64i_v;
var _glGetInteger64v = function _glGetInteger64v(name_, p) {
  emscriptenWebGLGet(name_, p, 1);
};
var _emscripten_glGetInteger64v = _glGetInteger64v;
var _glGetIntegeri_v = function _glGetIntegeri_v(target, index, data) {
  return emscriptenWebGLGetIndexed(target, index, data, 0);
};
var _emscripten_glGetIntegeri_v = _glGetIntegeri_v;
var _glGetIntegerv = function _glGetIntegerv(name_, p) {
  return emscriptenWebGLGet(name_, p, 0);
};
var _emscripten_glGetIntegerv = _glGetIntegerv;
var _glGetInternalformativ = function _glGetInternalformativ(target, internalformat, pname, bufSize, params) {
  if (bufSize < 0) {
    GL.recordError(1281);
    return;
  }
  if (!params) {
    GL.recordError(1281);
    return;
  }
  var ret = GLctx.getInternalformatParameter(target, internalformat, pname);
  if (ret === null) return;
  for (var i = 0; i < ret.length && i < bufSize; ++i) {
    HEAP32[params + i * 4 >> 2] = ret[i];
  }
};
var _emscripten_glGetInternalformativ = _glGetInternalformativ;
var _glGetProgramBinary = function _glGetProgramBinary(program, bufSize, length, binaryFormat, binary) {
  GL.recordError(1282);
};
var _emscripten_glGetProgramBinary = _glGetProgramBinary;
var _glGetProgramInfoLog = function _glGetProgramInfoLog(program, maxLength, length, infoLog) {
  var log = GLctx.getProgramInfoLog(GL.programs[program]);
  if (log === null) log = "(unknown error)";
  var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
  if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
};
var _emscripten_glGetProgramInfoLog = _glGetProgramInfoLog;
var _glGetProgramiv = function _glGetProgramiv(program, pname, p) {
  if (!p) {
    GL.recordError(1281);
    return;
  }
  if (program >= GL.counter) {
    GL.recordError(1281);
    return;
  }
  program = GL.programs[program];
  if (pname == 35716) {
    var log = GLctx.getProgramInfoLog(program);
    if (log === null) log = "(unknown error)";
    HEAP32[p >> 2] = log.length + 1;
  } else if (pname == 35719) {
    if (!program.maxUniformLength) {
      for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
        program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1);
      }
    }
    HEAP32[p >> 2] = program.maxUniformLength;
  } else if (pname == 35722) {
    if (!program.maxAttributeLength) {
      for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
        program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1);
      }
    }
    HEAP32[p >> 2] = program.maxAttributeLength;
  } else if (pname == 35381) {
    if (!program.maxUniformBlockNameLength) {
      for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
        program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length + 1);
      }
    }
    HEAP32[p >> 2] = program.maxUniformBlockNameLength;
  } else {
    HEAP32[p >> 2] = GLctx.getProgramParameter(program, pname);
  }
};
var _emscripten_glGetProgramiv = _glGetProgramiv;
var _glGetQueryObjecti64vEXT = function _glGetQueryObjecti64vEXT(id, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  var query = GL.queries[id];
  var param;
  if (GL.currentContext.version < 2) {
    param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
  } else {
    param = GLctx.getQueryParameter(query, pname);
  }
  var ret;
  if (typeof param == "boolean") {
    ret = param ? 1 : 0;
  } else {
    ret = param;
  }
  writeI53ToI64(params, ret);
};
var _emscripten_glGetQueryObjecti64vEXT = _glGetQueryObjecti64vEXT;
var _glGetQueryObjectivEXT = function _glGetQueryObjectivEXT(id, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  var query = GL.queries[id];
  var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
  var ret;
  if (typeof param == "boolean") {
    ret = param ? 1 : 0;
  } else {
    ret = param;
  }
  HEAP32[params >> 2] = ret;
};
var _emscripten_glGetQueryObjectivEXT = _glGetQueryObjectivEXT;
var _glGetQueryObjectui64vEXT = _glGetQueryObjecti64vEXT;
var _emscripten_glGetQueryObjectui64vEXT = _glGetQueryObjectui64vEXT;
var _glGetQueryObjectuiv = function _glGetQueryObjectuiv(id, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  var query = GL.queries[id];
  var param = GLctx.getQueryParameter(query, pname);
  var ret;
  if (typeof param == "boolean") {
    ret = param ? 1 : 0;
  } else {
    ret = param;
  }
  HEAP32[params >> 2] = ret;
};
var _emscripten_glGetQueryObjectuiv = _glGetQueryObjectuiv;
var _glGetQueryObjectuivEXT = _glGetQueryObjectivEXT;
var _emscripten_glGetQueryObjectuivEXT = _glGetQueryObjectuivEXT;
var _glGetQueryiv = function _glGetQueryiv(target, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  HEAP32[params >> 2] = GLctx.getQuery(target, pname);
};
var _emscripten_glGetQueryiv = _glGetQueryiv;
var _glGetQueryivEXT = function _glGetQueryivEXT(target, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  HEAP32[params >> 2] = GLctx.disjointTimerQueryExt["getQueryEXT"](target, pname);
};
var _emscripten_glGetQueryivEXT = _glGetQueryivEXT;
var _glGetRenderbufferParameteriv = function _glGetRenderbufferParameteriv(target, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  HEAP32[params >> 2] = GLctx.getRenderbufferParameter(target, pname);
};
var _emscripten_glGetRenderbufferParameteriv = _glGetRenderbufferParameteriv;
var _glGetSamplerParameterfv = function _glGetSamplerParameterfv(sampler, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  HEAPF32[params >> 2] = GLctx.getSamplerParameter(GL.samplers[sampler], pname);
};
var _emscripten_glGetSamplerParameterfv = _glGetSamplerParameterfv;
var _glGetSamplerParameteriv = function _glGetSamplerParameteriv(sampler, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  HEAP32[params >> 2] = GLctx.getSamplerParameter(GL.samplers[sampler], pname);
};
var _emscripten_glGetSamplerParameteriv = _glGetSamplerParameteriv;
var _glGetShaderInfoLog = function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
  var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
  if (log === null) log = "(unknown error)";
  var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
  if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
};
var _emscripten_glGetShaderInfoLog = _glGetShaderInfoLog;
var _glGetShaderPrecisionFormat = function _glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
  var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
  HEAP32[range >> 2] = result.rangeMin;
  HEAP32[range + 4 >> 2] = result.rangeMax;
  HEAP32[precision >> 2] = result.precision;
};
var _emscripten_glGetShaderPrecisionFormat = _glGetShaderPrecisionFormat;
var _glGetShaderSource = function _glGetShaderSource(shader, bufSize, length, source) {
  var result = GLctx.getShaderSource(GL.shaders[shader]);
  if (!result) return;
  var numBytesWrittenExclNull = bufSize > 0 && source ? stringToUTF8(result, source, bufSize) : 0;
  if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
};
var _emscripten_glGetShaderSource = _glGetShaderSource;
var _glGetShaderiv = function _glGetShaderiv(shader, pname, p) {
  if (!p) {
    GL.recordError(1281);
    return;
  }
  if (pname == 35716) {
    var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
    if (log === null) log = "(unknown error)";
    var logLength = log ? log.length + 1 : 0;
    HEAP32[p >> 2] = logLength;
  } else if (pname == 35720) {
    var source = GLctx.getShaderSource(GL.shaders[shader]);
    var sourceLength = source ? source.length + 1 : 0;
    HEAP32[p >> 2] = sourceLength;
  } else {
    HEAP32[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname);
  }
};
var _emscripten_glGetShaderiv = _glGetShaderiv;
var stringToNewUTF8 = function stringToNewUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc2(size);
  if (ret) stringToUTF8(str, ret, size);
  return ret;
};
var _glGetString = function _glGetString(name_) {
  var ret = GL.stringCache[name_];
  if (!ret) {
    switch (name_) {
      case 7939:
        ret = stringToNewUTF8(webglGetExtensions().join(" "));
        break;
      case 7936:
      case 7937:
      case 37445:
      case 37446:
        var s = GLctx.getParameter(name_);
        if (!s) {
          GL.recordError(1280);
        }
        ret = s ? stringToNewUTF8(s) : 0;
        break;
      case 7938:
        var glVersion = GLctx.getParameter(7938);
        if (GL.currentContext.version >= 2) glVersion = "OpenGL ES 3.0 (".concat(glVersion, ")");else {
          glVersion = "OpenGL ES 2.0 (".concat(glVersion, ")");
        }
        ret = stringToNewUTF8(glVersion);
        break;
      case 35724:
        var glslVersion = GLctx.getParameter(35724);
        var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
        var ver_num = glslVersion.match(ver_re);
        if (ver_num !== null) {
          if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
          glslVersion = "OpenGL ES GLSL ES ".concat(ver_num[1], " (").concat(glslVersion, ")");
        }
        ret = stringToNewUTF8(glslVersion);
        break;
      default:
        GL.recordError(1280);
    }
    GL.stringCache[name_] = ret;
  }
  return ret;
};
var _emscripten_glGetString = _glGetString;
var _glGetStringi = function _glGetStringi(name, index) {
  if (GL.currentContext.version < 2) {
    GL.recordError(1282);
    return 0;
  }
  var stringiCache = GL.stringiCache[name];
  if (stringiCache) {
    if (index < 0 || index >= stringiCache.length) {
      GL.recordError(1281);
      return 0;
    }
    return stringiCache[index];
  }
  switch (name) {
    case 7939:
      var exts = webglGetExtensions().map(stringToNewUTF8);
      stringiCache = GL.stringiCache[name] = exts;
      if (index < 0 || index >= stringiCache.length) {
        GL.recordError(1281);
        return 0;
      }
      return stringiCache[index];
    default:
      GL.recordError(1280);
      return 0;
  }
};
var _emscripten_glGetStringi = _glGetStringi;
var _glGetSynciv = function _glGetSynciv(sync, pname, bufSize, length, values) {
  if (bufSize < 0) {
    GL.recordError(1281);
    return;
  }
  if (!values) {
    GL.recordError(1281);
    return;
  }
  var ret = GLctx.getSyncParameter(GL.syncs[sync], pname);
  if (ret !== null) {
    HEAP32[values >> 2] = ret;
    if (length) HEAP32[length >> 2] = 1;
  }
};
var _emscripten_glGetSynciv = _glGetSynciv;
var _glGetTexParameterfv = function _glGetTexParameterfv(target, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  HEAPF32[params >> 2] = GLctx.getTexParameter(target, pname);
};
var _emscripten_glGetTexParameterfv = _glGetTexParameterfv;
var _glGetTexParameteriv = function _glGetTexParameteriv(target, pname, params) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  HEAP32[params >> 2] = GLctx.getTexParameter(target, pname);
};
var _emscripten_glGetTexParameteriv = _glGetTexParameteriv;
var _glGetTransformFeedbackVarying = function _glGetTransformFeedbackVarying(program, index, bufSize, length, size, type, name) {
  program = GL.programs[program];
  var info = GLctx.getTransformFeedbackVarying(program, index);
  if (!info) return;
  if (name && bufSize > 0) {
    var numBytesWrittenExclNull = stringToUTF8(info.name, name, bufSize);
    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
  } else {
    if (length) HEAP32[length >> 2] = 0;
  }
  if (size) HEAP32[size >> 2] = info.size;
  if (type) HEAP32[type >> 2] = info.type;
};
var _emscripten_glGetTransformFeedbackVarying = _glGetTransformFeedbackVarying;
var _glGetUniformBlockIndex = function _glGetUniformBlockIndex(program, uniformBlockName) {
  return GLctx.getUniformBlockIndex(GL.programs[program], UTF8ToString(uniformBlockName));
};
var _emscripten_glGetUniformBlockIndex = _glGetUniformBlockIndex;
var _glGetUniformIndices = function _glGetUniformIndices(program, uniformCount, uniformNames, uniformIndices) {
  if (!uniformIndices) {
    GL.recordError(1281);
    return;
  }
  if (uniformCount > 0 && (uniformNames == 0 || uniformIndices == 0)) {
    GL.recordError(1281);
    return;
  }
  program = GL.programs[program];
  var names = [];
  for (var i = 0; i < uniformCount; i++) names.push(UTF8ToString(HEAP32[uniformNames + i * 4 >> 2]));
  var result = GLctx.getUniformIndices(program, names);
  if (!result) return;
  var len = result.length;
  for (var i = 0; i < len; i++) {
    HEAP32[uniformIndices + i * 4 >> 2] = result[i];
  }
};
var _emscripten_glGetUniformIndices = _glGetUniformIndices;
var jstoi_q = function jstoi_q(str) {
  return parseInt(str);
};
var webglGetLeftBracePos = function webglGetLeftBracePos(name) {
  return name.slice(-1) == "]" && name.lastIndexOf("[");
};
var webglPrepareUniformLocationsBeforeFirstUse = function webglPrepareUniformLocationsBeforeFirstUse(program) {
  var uniformLocsById = program.uniformLocsById,
    uniformSizeAndIdsByName = program.uniformSizeAndIdsByName,
    i,
    j;
  if (!uniformLocsById) {
    program.uniformLocsById = uniformLocsById = {};
    program.uniformArrayNamesById = {};
    for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
      var u = GLctx.getActiveUniform(program, i);
      var nm = u.name;
      var sz = u.size;
      var lb = webglGetLeftBracePos(nm);
      var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
      var id = program.uniformIdCounter;
      program.uniformIdCounter += sz;
      uniformSizeAndIdsByName[arrayName] = [sz, id];
      for (j = 0; j < sz; ++j) {
        uniformLocsById[id] = j;
        program.uniformArrayNamesById[id++] = arrayName;
      }
    }
  }
};
var _glGetUniformLocation = function _glGetUniformLocation(program, name) {
  name = UTF8ToString(name);
  if (program = GL.programs[program]) {
    webglPrepareUniformLocationsBeforeFirstUse(program);
    var uniformLocsById = program.uniformLocsById;
    var arrayIndex = 0;
    var uniformBaseName = name;
    var leftBrace = webglGetLeftBracePos(name);
    if (leftBrace > 0) {
      arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
      uniformBaseName = name.slice(0, leftBrace);
    }
    var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
    if (sizeAndId && arrayIndex < sizeAndId[0]) {
      arrayIndex += sizeAndId[1];
      if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
        return arrayIndex;
      }
    }
  } else {
    GL.recordError(1281);
  }
  return -1;
};
var _emscripten_glGetUniformLocation = _glGetUniformLocation;
var webglGetUniformLocation = function webglGetUniformLocation(location) {
  var p = GLctx.currentProgram;
  if (p) {
    var webglLoc = p.uniformLocsById[location];
    if (typeof webglLoc == "number") {
      p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? "[".concat(webglLoc, "]") : ""));
    }
    return webglLoc;
  } else {
    GL.recordError(1282);
  }
};
var emscriptenWebGLGetUniform = function emscriptenWebGLGetUniform(program, location, params, type) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  program = GL.programs[program];
  webglPrepareUniformLocationsBeforeFirstUse(program);
  var data = GLctx.getUniform(program, webglGetUniformLocation(location));
  if (typeof data == "number" || typeof data == "boolean") {
    switch (type) {
      case 0:
        HEAP32[params >> 2] = data;
        break;
      case 2:
        HEAPF32[params >> 2] = data;
        break;
    }
  } else {
    for (var i = 0; i < data.length; i++) {
      switch (type) {
        case 0:
          HEAP32[params + i * 4 >> 2] = data[i];
          break;
        case 2:
          HEAPF32[params + i * 4 >> 2] = data[i];
          break;
      }
    }
  }
};
var _glGetUniformfv = function _glGetUniformfv(program, location, params) {
  emscriptenWebGLGetUniform(program, location, params, 2);
};
var _emscripten_glGetUniformfv = _glGetUniformfv;
var _glGetUniformiv = function _glGetUniformiv(program, location, params) {
  emscriptenWebGLGetUniform(program, location, params, 0);
};
var _emscripten_glGetUniformiv = _glGetUniformiv;
var _glGetUniformuiv = function _glGetUniformuiv(program, location, params) {
  return emscriptenWebGLGetUniform(program, location, params, 0);
};
var _emscripten_glGetUniformuiv = _glGetUniformuiv;
var emscriptenWebGLGetVertexAttrib = function emscriptenWebGLGetVertexAttrib(index, pname, params, type) {
  if (!params) {
    GL.recordError(1281);
    return;
  }
  if (GL.currentContext.clientBuffers[index].enabled) {
    err("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
  }
  var data = GLctx.getVertexAttrib(index, pname);
  if (pname == 34975) {
    HEAP32[params >> 2] = data && data["name"];
  } else if (typeof data == "number" || typeof data == "boolean") {
    switch (type) {
      case 0:
        HEAP32[params >> 2] = data;
        break;
      case 2:
        HEAPF32[params >> 2] = data;
        break;
      case 5:
        HEAP32[params >> 2] = Math.fround(data);
        break;
    }
  } else {
    for (var i = 0; i < data.length; i++) {
      switch (type) {
        case 0:
          HEAP32[params + i * 4 >> 2] = data[i];
          break;
        case 2:
          HEAPF32[params + i * 4 >> 2] = data[i];
          break;
        case 5:
          HEAP32[params + i * 4 >> 2] = Math.fround(data[i]);
          break;
      }
    }
  }
};
var _glGetVertexAttribIiv = function _glGetVertexAttribIiv(index, pname, params) {
  emscriptenWebGLGetVertexAttrib(index, pname, params, 0);
};
var _emscripten_glGetVertexAttribIiv = _glGetVertexAttribIiv;
var _glGetVertexAttribIuiv = _glGetVertexAttribIiv;
var _emscripten_glGetVertexAttribIuiv = _glGetVertexAttribIuiv;
var _glGetVertexAttribPointerv = function _glGetVertexAttribPointerv(index, pname, pointer) {
  if (!pointer) {
    GL.recordError(1281);
    return;
  }
  if (GL.currentContext.clientBuffers[index].enabled) {
    err("glGetVertexAttribPointer on client-side array: not supported, bad data returned");
  }
  HEAP32[pointer >> 2] = GLctx.getVertexAttribOffset(index, pname);
};
var _emscripten_glGetVertexAttribPointerv = _glGetVertexAttribPointerv;
var _glGetVertexAttribfv = function _glGetVertexAttribfv(index, pname, params) {
  emscriptenWebGLGetVertexAttrib(index, pname, params, 2);
};
var _emscripten_glGetVertexAttribfv = _glGetVertexAttribfv;
var _glGetVertexAttribiv = function _glGetVertexAttribiv(index, pname, params) {
  emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
};
var _emscripten_glGetVertexAttribiv = _glGetVertexAttribiv;
function _glHint(x0, x1) {
  GLctx.hint(x0, x1);
}
var _emscripten_glHint = _glHint;
var _glInvalidateFramebuffer = function _glInvalidateFramebuffer(target, numAttachments, attachments) {
  var list = tempFixedLengthArray[numAttachments];
  for (var i = 0; i < numAttachments; i++) {
    list[i] = HEAP32[attachments + i * 4 >> 2];
  }
  GLctx.invalidateFramebuffer(target, list);
};
var _emscripten_glInvalidateFramebuffer = _glInvalidateFramebuffer;
var _glInvalidateSubFramebuffer = function _glInvalidateSubFramebuffer(target, numAttachments, attachments, x, y, width, height) {
  var list = tempFixedLengthArray[numAttachments];
  for (var i = 0; i < numAttachments; i++) {
    list[i] = HEAP32[attachments + i * 4 >> 2];
  }
  GLctx.invalidateSubFramebuffer(target, list, x, y, width, height);
};
var _emscripten_glInvalidateSubFramebuffer = _glInvalidateSubFramebuffer;
var _glIsBuffer = function _glIsBuffer(buffer) {
  var b = GL.buffers[buffer];
  if (!b) return 0;
  return GLctx.isBuffer(b);
};
var _emscripten_glIsBuffer = _glIsBuffer;
function _glIsEnabled(x0) {
  return GLctx.isEnabled(x0);
}
var _emscripten_glIsEnabled = _glIsEnabled;
var _glIsFramebuffer = function _glIsFramebuffer(framebuffer) {
  var fb = GL.framebuffers[framebuffer];
  if (!fb) return 0;
  return GLctx.isFramebuffer(fb);
};
var _emscripten_glIsFramebuffer = _glIsFramebuffer;
var _glIsProgram = function _glIsProgram(program) {
  program = GL.programs[program];
  if (!program) return 0;
  return GLctx.isProgram(program);
};
var _emscripten_glIsProgram = _glIsProgram;
var _glIsQuery = function _glIsQuery(id) {
  var query = GL.queries[id];
  if (!query) return 0;
  return GLctx.isQuery(query);
};
var _emscripten_glIsQuery = _glIsQuery;
var _glIsQueryEXT = function _glIsQueryEXT(id) {
  var query = GL.queries[id];
  if (!query) return 0;
  return GLctx.disjointTimerQueryExt["isQueryEXT"](query);
};
var _emscripten_glIsQueryEXT = _glIsQueryEXT;
var _glIsRenderbuffer = function _glIsRenderbuffer(renderbuffer) {
  var rb = GL.renderbuffers[renderbuffer];
  if (!rb) return 0;
  return GLctx.isRenderbuffer(rb);
};
var _emscripten_glIsRenderbuffer = _glIsRenderbuffer;
var _glIsSampler = function _glIsSampler(id) {
  var sampler = GL.samplers[id];
  if (!sampler) return 0;
  return GLctx.isSampler(sampler);
};
var _emscripten_glIsSampler = _glIsSampler;
var _glIsShader = function _glIsShader(shader) {
  var s = GL.shaders[shader];
  if (!s) return 0;
  return GLctx.isShader(s);
};
var _emscripten_glIsShader = _glIsShader;
var _glIsSync = function _glIsSync(sync) {
  return GLctx.isSync(GL.syncs[sync]);
};
var _emscripten_glIsSync = _glIsSync;
var _glIsTexture = function _glIsTexture(id) {
  var texture = GL.textures[id];
  if (!texture) return 0;
  return GLctx.isTexture(texture);
};
var _emscripten_glIsTexture = _glIsTexture;
var _glIsTransformFeedback = function _glIsTransformFeedback(id) {
  return GLctx.isTransformFeedback(GL.transformFeedbacks[id]);
};
var _emscripten_glIsTransformFeedback = _glIsTransformFeedback;
var _glIsVertexArray = function _glIsVertexArray(array) {
  var vao = GL.vaos[array];
  if (!vao) return 0;
  return GLctx.isVertexArray(vao);
};
var _emscripten_glIsVertexArray = _glIsVertexArray;
var _glIsVertexArrayOES = _glIsVertexArray;
var _emscripten_glIsVertexArrayOES = _glIsVertexArrayOES;
function _glLineWidth(x0) {
  GLctx.lineWidth(x0);
}
var _emscripten_glLineWidth = _glLineWidth;
var _glLinkProgram = function _glLinkProgram(program) {
  program = GL.programs[program];
  GLctx.linkProgram(program);
  program.uniformLocsById = 0;
  program.uniformSizeAndIdsByName = {};
};
var _emscripten_glLinkProgram = _glLinkProgram;
var _glMapBufferRange = function _glMapBufferRange(target, offset, length, access) {
  if ((access & (1 | 32)) != 0) {
    err("glMapBufferRange access does not support MAP_READ or MAP_UNSYNCHRONIZED");
    return 0;
  }
  if ((access & 2) == 0) {
    err("glMapBufferRange access must include MAP_WRITE");
    return 0;
  }
  if ((access & (4 | 8)) == 0) {
    err("glMapBufferRange access must include INVALIDATE_BUFFER or INVALIDATE_RANGE");
    return 0;
  }
  if (!emscriptenWebGLValidateMapBufferTarget(target)) {
    GL.recordError(1280);
    err("GL_INVALID_ENUM in glMapBufferRange");
    return 0;
  }
  var mem = _malloc2(length),
    binding = emscriptenWebGLGetBufferBinding(target);
  if (!mem) return 0;
  if (!GL.mappedBuffers[binding]) GL.mappedBuffers[binding] = {};
  binding = GL.mappedBuffers[binding];
  binding.offset = offset;
  binding.length = length;
  binding.mem = mem;
  binding.access = access;
  return mem;
};
var _emscripten_glMapBufferRange = _glMapBufferRange;
function _glPauseTransformFeedback() {
  GLctx.pauseTransformFeedback();
}
var _emscripten_glPauseTransformFeedback = _glPauseTransformFeedback;
var _glPixelStorei = function _glPixelStorei(pname, param) {
  if (pname == 3317) {
    GL.unpackAlignment = param;
  }
  GLctx.pixelStorei(pname, param);
};
var _emscripten_glPixelStorei = _glPixelStorei;
function _glPolygonOffset(x0, x1) {
  GLctx.polygonOffset(x0, x1);
}
var _emscripten_glPolygonOffset = _glPolygonOffset;
var _glProgramBinary = function _glProgramBinary(program, binaryFormat, binary, length) {
  GL.recordError(1280);
};
var _emscripten_glProgramBinary = _glProgramBinary;
var _glProgramParameteri = function _glProgramParameteri(program, pname, value) {
  GL.recordError(1280);
};
var _emscripten_glProgramParameteri = _glProgramParameteri;
var _glQueryCounterEXT = function _glQueryCounterEXT(id, target) {
  GLctx.disjointTimerQueryExt["queryCounterEXT"](GL.queries[id], target);
};
var _emscripten_glQueryCounterEXT = _glQueryCounterEXT;
function _glReadBuffer(x0) {
  GLctx.readBuffer(x0);
}
var _emscripten_glReadBuffer = _glReadBuffer;
var computeUnpackAlignedImageSize = function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
  function roundedToNextMultipleOf(x, y) {
    return x + y - 1 & -y;
  }
  var plainRowSize = width * sizePerPixel;
  var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
  return height * alignedRowSize;
};
var colorChannelsInGlTextureFormat = function colorChannelsInGlTextureFormat(format) {
  var colorChannels = {
    5: 3,
    6: 4,
    8: 2,
    29502: 3,
    29504: 4,
    26917: 2,
    26918: 2,
    29846: 3,
    29847: 4
  };
  return colorChannels[format - 6402] || 1;
};
var heapObjectForWebGLType = function heapObjectForWebGLType(type) {
  type -= 5120;
  if (type == 0) return HEAP8;
  if (type == 1) return HEAPU8;
  if (type == 2) return HEAP16;
  if (type == 4) return HEAP32;
  if (type == 6) return HEAPF32;
  if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return HEAPU32;
  return HEAPU16;
};
var heapAccessShiftForWebGLHeap = function heapAccessShiftForWebGLHeap(heap) {
  return 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
};
var emscriptenWebGLGetTexPixelData = function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
  var heap = heapObjectForWebGLType(type);
  var shift = heapAccessShiftForWebGLHeap(heap);
  var byteSize = 1 << shift;
  var sizePerPixel = colorChannelsInGlTextureFormat(format) * byteSize;
  var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
  return heap.subarray(pixels >> shift, pixels + bytes >> shift);
};
var _glReadPixels = function _glReadPixels(x, y, width, height, format, type, pixels) {
  if (GL.currentContext.version >= 2) {
    if (GLctx.currentPixelPackBufferBinding) {
      GLctx.readPixels(x, y, width, height, format, type, pixels);
    } else {
      var heap = heapObjectForWebGLType(type);
      GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
    }
    return;
  }
  var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
  if (!pixelData) {
    GL.recordError(1280);
    return;
  }
  GLctx.readPixels(x, y, width, height, format, type, pixelData);
};
var _emscripten_glReadPixels = _glReadPixels;
var _glReleaseShaderCompiler = function _glReleaseShaderCompiler() {};
var _emscripten_glReleaseShaderCompiler = _glReleaseShaderCompiler;
function _glRenderbufferStorage(x0, x1, x2, x3) {
  GLctx.renderbufferStorage(x0, x1, x2, x3);
}
var _emscripten_glRenderbufferStorage = _glRenderbufferStorage;
function _glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) {
  GLctx.renderbufferStorageMultisample(x0, x1, x2, x3, x4);
}
var _emscripten_glRenderbufferStorageMultisample = _glRenderbufferStorageMultisample;
function _glResumeTransformFeedback() {
  GLctx.resumeTransformFeedback();
}
var _emscripten_glResumeTransformFeedback = _glResumeTransformFeedback;
var _glSampleCoverage = function _glSampleCoverage(value, invert) {
  GLctx.sampleCoverage(value, !!invert);
};
var _emscripten_glSampleCoverage = _glSampleCoverage;
var _glSamplerParameterf = function _glSamplerParameterf(sampler, pname, param) {
  GLctx.samplerParameterf(GL.samplers[sampler], pname, param);
};
var _emscripten_glSamplerParameterf = _glSamplerParameterf;
var _glSamplerParameterfv = function _glSamplerParameterfv(sampler, pname, params) {
  var param = HEAPF32[params >> 2];
  GLctx.samplerParameterf(GL.samplers[sampler], pname, param);
};
var _emscripten_glSamplerParameterfv = _glSamplerParameterfv;
var _glSamplerParameteri = function _glSamplerParameteri(sampler, pname, param) {
  GLctx.samplerParameteri(GL.samplers[sampler], pname, param);
};
var _emscripten_glSamplerParameteri = _glSamplerParameteri;
var _glSamplerParameteriv = function _glSamplerParameteriv(sampler, pname, params) {
  var param = HEAP32[params >> 2];
  GLctx.samplerParameteri(GL.samplers[sampler], pname, param);
};
var _emscripten_glSamplerParameteriv = _glSamplerParameteriv;
function _glScissor(x0, x1, x2, x3) {
  GLctx.scissor(x0, x1, x2, x3);
}
var _emscripten_glScissor = _glScissor;
var _glShaderBinary = function _glShaderBinary(count, shaders, binaryformat, binary, length) {
  GL.recordError(1280);
};
var _emscripten_glShaderBinary = _glShaderBinary;
var _glShaderSource = function _glShaderSource(shader, count, string, length) {
  var source = GL.getSource(shader, count, string, length);
  GLctx.shaderSource(GL.shaders[shader], source);
};
var _emscripten_glShaderSource = _glShaderSource;
function _glStencilFunc(x0, x1, x2) {
  GLctx.stencilFunc(x0, x1, x2);
}
var _emscripten_glStencilFunc = _glStencilFunc;
function _glStencilFuncSeparate(x0, x1, x2, x3) {
  GLctx.stencilFuncSeparate(x0, x1, x2, x3);
}
var _emscripten_glStencilFuncSeparate = _glStencilFuncSeparate;
function _glStencilMask(x0) {
  GLctx.stencilMask(x0);
}
var _emscripten_glStencilMask = _glStencilMask;
function _glStencilMaskSeparate(x0, x1) {
  GLctx.stencilMaskSeparate(x0, x1);
}
var _emscripten_glStencilMaskSeparate = _glStencilMaskSeparate;
function _glStencilOp(x0, x1, x2) {
  GLctx.stencilOp(x0, x1, x2);
}
var _emscripten_glStencilOp = _glStencilOp;
function _glStencilOpSeparate(x0, x1, x2, x3) {
  GLctx.stencilOpSeparate(x0, x1, x2, x3);
}
var _emscripten_glStencilOpSeparate = _glStencilOpSeparate;
var _glTexImage2D = function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
  if (GL.currentContext.version >= 2) {
    if (GLctx.currentPixelUnpackBufferBinding) {
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
    } else if (pixels) {
      var heap = heapObjectForWebGLType(type);
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
    } else {
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
    }
    return;
  }
  GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
};
var _emscripten_glTexImage2D = _glTexImage2D;
var _glTexImage3D = function _glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
  if (GLctx.currentPixelUnpackBufferBinding) {
    GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels);
  } else if (pixels) {
    var heap = heapObjectForWebGLType(type);
    GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
  } else {
    GLctx.texImage3D(target, level, internalFormat, width, height, depth, border, format, type, null);
  }
};
var _emscripten_glTexImage3D = _glTexImage3D;
function _glTexParameterf(x0, x1, x2) {
  GLctx.texParameterf(x0, x1, x2);
}
var _emscripten_glTexParameterf = _glTexParameterf;
var _glTexParameterfv = function _glTexParameterfv(target, pname, params) {
  var param = HEAPF32[params >> 2];
  GLctx.texParameterf(target, pname, param);
};
var _emscripten_glTexParameterfv = _glTexParameterfv;
function _glTexParameteri(x0, x1, x2) {
  GLctx.texParameteri(x0, x1, x2);
}
var _emscripten_glTexParameteri = _glTexParameteri;
var _glTexParameteriv = function _glTexParameteriv(target, pname, params) {
  var param = HEAP32[params >> 2];
  GLctx.texParameteri(target, pname, param);
};
var _emscripten_glTexParameteriv = _glTexParameteriv;
function _glTexStorage2D(x0, x1, x2, x3, x4) {
  GLctx.texStorage2D(x0, x1, x2, x3, x4);
}
var _emscripten_glTexStorage2D = _glTexStorage2D;
function _glTexStorage3D(x0, x1, x2, x3, x4, x5) {
  GLctx.texStorage3D(x0, x1, x2, x3, x4, x5);
}
var _emscripten_glTexStorage3D = _glTexStorage3D;
var _glTexSubImage2D = function _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
  if (GL.currentContext.version >= 2) {
    if (GLctx.currentPixelUnpackBufferBinding) {
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
    } else if (pixels) {
      var heap = heapObjectForWebGLType(type);
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
    } else {
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
    }
    return;
  }
  var pixelData = null;
  if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
  GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
};
var _emscripten_glTexSubImage2D = _glTexSubImage2D;
var _glTexSubImage3D = function _glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
  if (GLctx.currentPixelUnpackBufferBinding) {
    GLctx.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
  } else if (pixels) {
    var heap = heapObjectForWebGLType(type);
    GLctx.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
  } else {
    GLctx.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
  }
};
var _emscripten_glTexSubImage3D = _glTexSubImage3D;
var _glTransformFeedbackVaryings = function _glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
  program = GL.programs[program];
  var vars = [];
  for (var i = 0; i < count; i++) vars.push(UTF8ToString(HEAP32[varyings + i * 4 >> 2]));
  GLctx.transformFeedbackVaryings(program, vars, bufferMode);
};
var _emscripten_glTransformFeedbackVaryings = _glTransformFeedbackVaryings;
var _glUniform1f = function _glUniform1f(location, v0) {
  GLctx.uniform1f(webglGetUniformLocation(location), v0);
};
var _emscripten_glUniform1f = _glUniform1f;
var miniTempWebGLFloatBuffers = [];
var _glUniform1fv = function _glUniform1fv(location, count, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniform1fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count);
    return;
  }
  if (count <= 288) {
    var view = miniTempWebGLFloatBuffers[count - 1];
    for (var i = 0; i < count; ++i) {
      view[i] = HEAPF32[value + 4 * i >> 2];
    }
  } else {
    var view = HEAPF32.subarray(value >> 2, value + count * 4 >> 2);
  }
  GLctx.uniform1fv(webglGetUniformLocation(location), view);
};
var _emscripten_glUniform1fv = _glUniform1fv;
var _glUniform1i = function _glUniform1i(location, v0) {
  GLctx.uniform1i(webglGetUniformLocation(location), v0);
};
var _emscripten_glUniform1i = _glUniform1i;
var miniTempWebGLIntBuffers = [];
var _glUniform1iv = function _glUniform1iv(location, count, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniform1iv(webglGetUniformLocation(location), HEAP32, value >> 2, count);
    return;
  }
  if (count <= 288) {
    var view = miniTempWebGLIntBuffers[count - 1];
    for (var i = 0; i < count; ++i) {
      view[i] = HEAP32[value + 4 * i >> 2];
    }
  } else {
    var view = HEAP32.subarray(value >> 2, value + count * 4 >> 2);
  }
  GLctx.uniform1iv(webglGetUniformLocation(location), view);
};
var _emscripten_glUniform1iv = _glUniform1iv;
var _glUniform1ui = function _glUniform1ui(location, v0) {
  GLctx.uniform1ui(webglGetUniformLocation(location), v0);
};
var _emscripten_glUniform1ui = _glUniform1ui;
var _glUniform1uiv = function _glUniform1uiv(location, count, value) {
  count && GLctx.uniform1uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count);
};
var _emscripten_glUniform1uiv = _glUniform1uiv;
var _glUniform2f = function _glUniform2f(location, v0, v1) {
  GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
};
var _emscripten_glUniform2f = _glUniform2f;
var _glUniform2fv = function _glUniform2fv(location, count, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniform2fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 2);
    return;
  }
  if (count <= 144) {
    var view = miniTempWebGLFloatBuffers[2 * count - 1];
    for (var i = 0; i < 2 * count; i += 2) {
      view[i] = HEAPF32[value + 4 * i >> 2];
      view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
    }
  } else {
    var view = HEAPF32.subarray(value >> 2, value + count * 8 >> 2);
  }
  GLctx.uniform2fv(webglGetUniformLocation(location), view);
};
var _emscripten_glUniform2fv = _glUniform2fv;
var _glUniform2i = function _glUniform2i(location, v0, v1) {
  GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
};
var _emscripten_glUniform2i = _glUniform2i;
var _glUniform2iv = function _glUniform2iv(location, count, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniform2iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 2);
    return;
  }
  if (count <= 144) {
    var view = miniTempWebGLIntBuffers[2 * count - 1];
    for (var i = 0; i < 2 * count; i += 2) {
      view[i] = HEAP32[value + 4 * i >> 2];
      view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
    }
  } else {
    var view = HEAP32.subarray(value >> 2, value + count * 8 >> 2);
  }
  GLctx.uniform2iv(webglGetUniformLocation(location), view);
};
var _emscripten_glUniform2iv = _glUniform2iv;
var _glUniform2ui = function _glUniform2ui(location, v0, v1) {
  GLctx.uniform2ui(webglGetUniformLocation(location), v0, v1);
};
var _emscripten_glUniform2ui = _glUniform2ui;
var _glUniform2uiv = function _glUniform2uiv(location, count, value) {
  count && GLctx.uniform2uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 2);
};
var _emscripten_glUniform2uiv = _glUniform2uiv;
var _glUniform3f = function _glUniform3f(location, v0, v1, v2) {
  GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
};
var _emscripten_glUniform3f = _glUniform3f;
var _glUniform3fv = function _glUniform3fv(location, count, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 3);
    return;
  }
  if (count <= 96) {
    var view = miniTempWebGLFloatBuffers[3 * count - 1];
    for (var i = 0; i < 3 * count; i += 3) {
      view[i] = HEAPF32[value + 4 * i >> 2];
      view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
      view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
    }
  } else {
    var view = HEAPF32.subarray(value >> 2, value + count * 12 >> 2);
  }
  GLctx.uniform3fv(webglGetUniformLocation(location), view);
};
var _emscripten_glUniform3fv = _glUniform3fv;
var _glUniform3i = function _glUniform3i(location, v0, v1, v2) {
  GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
};
var _emscripten_glUniform3i = _glUniform3i;
var _glUniform3iv = function _glUniform3iv(location, count, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniform3iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 3);
    return;
  }
  if (count <= 96) {
    var view = miniTempWebGLIntBuffers[3 * count - 1];
    for (var i = 0; i < 3 * count; i += 3) {
      view[i] = HEAP32[value + 4 * i >> 2];
      view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
      view[i + 2] = HEAP32[value + (4 * i + 8) >> 2];
    }
  } else {
    var view = HEAP32.subarray(value >> 2, value + count * 12 >> 2);
  }
  GLctx.uniform3iv(webglGetUniformLocation(location), view);
};
var _emscripten_glUniform3iv = _glUniform3iv;
var _glUniform3ui = function _glUniform3ui(location, v0, v1, v2) {
  GLctx.uniform3ui(webglGetUniformLocation(location), v0, v1, v2);
};
var _emscripten_glUniform3ui = _glUniform3ui;
var _glUniform3uiv = function _glUniform3uiv(location, count, value) {
  count && GLctx.uniform3uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 3);
};
var _emscripten_glUniform3uiv = _glUniform3uiv;
var _glUniform4f = function _glUniform4f(location, v0, v1, v2, v3) {
  GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
};
var _emscripten_glUniform4f = _glUniform4f;
var _glUniform4fv = function _glUniform4fv(location, count, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniform4fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 4);
    return;
  }
  if (count <= 72) {
    var view = miniTempWebGLFloatBuffers[4 * count - 1];
    var heap = HEAPF32;
    value >>= 2;
    for (var i = 0; i < 4 * count; i += 4) {
      var dst = value + i;
      view[i] = heap[dst];
      view[i + 1] = heap[dst + 1];
      view[i + 2] = heap[dst + 2];
      view[i + 3] = heap[dst + 3];
    }
  } else {
    var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2);
  }
  GLctx.uniform4fv(webglGetUniformLocation(location), view);
};
var _emscripten_glUniform4fv = _glUniform4fv;
var _glUniform4i = function _glUniform4i(location, v0, v1, v2, v3) {
  GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
};
var _emscripten_glUniform4i = _glUniform4i;
var _glUniform4iv = function _glUniform4iv(location, count, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniform4iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 4);
    return;
  }
  if (count <= 72) {
    var view = miniTempWebGLIntBuffers[4 * count - 1];
    for (var i = 0; i < 4 * count; i += 4) {
      view[i] = HEAP32[value + 4 * i >> 2];
      view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
      view[i + 2] = HEAP32[value + (4 * i + 8) >> 2];
      view[i + 3] = HEAP32[value + (4 * i + 12) >> 2];
    }
  } else {
    var view = HEAP32.subarray(value >> 2, value + count * 16 >> 2);
  }
  GLctx.uniform4iv(webglGetUniformLocation(location), view);
};
var _emscripten_glUniform4iv = _glUniform4iv;
var _glUniform4ui = function _glUniform4ui(location, v0, v1, v2, v3) {
  GLctx.uniform4ui(webglGetUniformLocation(location), v0, v1, v2, v3);
};
var _emscripten_glUniform4ui = _glUniform4ui;
var _glUniform4uiv = function _glUniform4uiv(location, count, value) {
  count && GLctx.uniform4uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 4);
};
var _emscripten_glUniform4uiv = _glUniform4uiv;
var _glUniformBlockBinding = function _glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
  program = GL.programs[program];
  GLctx.uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding);
};
var _emscripten_glUniformBlockBinding = _glUniformBlockBinding;
var _glUniformMatrix2fv = function _glUniformMatrix2fv(location, count, transpose, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 4);
    return;
  }
  if (count <= 72) {
    var view = miniTempWebGLFloatBuffers[4 * count - 1];
    for (var i = 0; i < 4 * count; i += 4) {
      view[i] = HEAPF32[value + 4 * i >> 2];
      view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
      view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
      view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
    }
  } else {
    var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2);
  }
  GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
};
var _emscripten_glUniformMatrix2fv = _glUniformMatrix2fv;
var _glUniformMatrix2x3fv = function _glUniformMatrix2x3fv(location, count, transpose, value) {
  count && GLctx.uniformMatrix2x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 6);
};
var _emscripten_glUniformMatrix2x3fv = _glUniformMatrix2x3fv;
var _glUniformMatrix2x4fv = function _glUniformMatrix2x4fv(location, count, transpose, value) {
  count && GLctx.uniformMatrix2x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 8);
};
var _emscripten_glUniformMatrix2x4fv = _glUniformMatrix2x4fv;
var _glUniformMatrix3fv = function _glUniformMatrix3fv(location, count, transpose, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 9);
    return;
  }
  if (count <= 32) {
    var view = miniTempWebGLFloatBuffers[9 * count - 1];
    for (var i = 0; i < 9 * count; i += 9) {
      view[i] = HEAPF32[value + 4 * i >> 2];
      view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
      view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
      view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
      view[i + 4] = HEAPF32[value + (4 * i + 16) >> 2];
      view[i + 5] = HEAPF32[value + (4 * i + 20) >> 2];
      view[i + 6] = HEAPF32[value + (4 * i + 24) >> 2];
      view[i + 7] = HEAPF32[value + (4 * i + 28) >> 2];
      view[i + 8] = HEAPF32[value + (4 * i + 32) >> 2];
    }
  } else {
    var view = HEAPF32.subarray(value >> 2, value + count * 36 >> 2);
  }
  GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
};
var _emscripten_glUniformMatrix3fv = _glUniformMatrix3fv;
var _glUniformMatrix3x2fv = function _glUniformMatrix3x2fv(location, count, transpose, value) {
  count && GLctx.uniformMatrix3x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 6);
};
var _emscripten_glUniformMatrix3x2fv = _glUniformMatrix3x2fv;
var _glUniformMatrix3x4fv = function _glUniformMatrix3x4fv(location, count, transpose, value) {
  count && GLctx.uniformMatrix3x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 12);
};
var _emscripten_glUniformMatrix3x4fv = _glUniformMatrix3x4fv;
var _glUniformMatrix4fv = function _glUniformMatrix4fv(location, count, transpose, value) {
  if (GL.currentContext.version >= 2) {
    count && GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 16);
    return;
  }
  if (count <= 18) {
    var view = miniTempWebGLFloatBuffers[16 * count - 1];
    var heap = HEAPF32;
    value >>= 2;
    for (var i = 0; i < 16 * count; i += 16) {
      var dst = value + i;
      view[i] = heap[dst];
      view[i + 1] = heap[dst + 1];
      view[i + 2] = heap[dst + 2];
      view[i + 3] = heap[dst + 3];
      view[i + 4] = heap[dst + 4];
      view[i + 5] = heap[dst + 5];
      view[i + 6] = heap[dst + 6];
      view[i + 7] = heap[dst + 7];
      view[i + 8] = heap[dst + 8];
      view[i + 9] = heap[dst + 9];
      view[i + 10] = heap[dst + 10];
      view[i + 11] = heap[dst + 11];
      view[i + 12] = heap[dst + 12];
      view[i + 13] = heap[dst + 13];
      view[i + 14] = heap[dst + 14];
      view[i + 15] = heap[dst + 15];
    }
  } else {
    var view = HEAPF32.subarray(value >> 2, value + count * 64 >> 2);
  }
  GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
};
var _emscripten_glUniformMatrix4fv = _glUniformMatrix4fv;
var _glUniformMatrix4x2fv = function _glUniformMatrix4x2fv(location, count, transpose, value) {
  count && GLctx.uniformMatrix4x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 8);
};
var _emscripten_glUniformMatrix4x2fv = _glUniformMatrix4x2fv;
var _glUniformMatrix4x3fv = function _glUniformMatrix4x3fv(location, count, transpose, value) {
  count && GLctx.uniformMatrix4x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 12);
};
var _emscripten_glUniformMatrix4x3fv = _glUniformMatrix4x3fv;
var _glUnmapBuffer = function _glUnmapBuffer(target) {
  if (!emscriptenWebGLValidateMapBufferTarget(target)) {
    GL.recordError(1280);
    err("GL_INVALID_ENUM in glUnmapBuffer");
    return 0;
  }
  var buffer = emscriptenWebGLGetBufferBinding(target);
  var mapping = GL.mappedBuffers[buffer];
  if (!mapping || !mapping.mem) {
    GL.recordError(1282);
    err("buffer was never mapped in glUnmapBuffer");
    return 0;
  }
  if (!(mapping.access & 16)) if (GL.currentContext.version >= 2) {
    GLctx.bufferSubData(target, mapping.offset, HEAPU8, mapping.mem, mapping.length);
  } else {
    GLctx.bufferSubData(target, mapping.offset, HEAPU8.subarray(mapping.mem, mapping.mem + mapping.length));
  }
  _free2(mapping.mem);
  mapping.mem = 0;
  return 1;
};
var _emscripten_glUnmapBuffer = _glUnmapBuffer;
var _glUseProgram = function _glUseProgram(program) {
  program = GL.programs[program];
  GLctx.useProgram(program);
  GLctx.currentProgram = program;
};
var _emscripten_glUseProgram = _glUseProgram;
var _glValidateProgram = function _glValidateProgram(program) {
  GLctx.validateProgram(GL.programs[program]);
};
var _emscripten_glValidateProgram = _glValidateProgram;
function _glVertexAttrib1f(x0, x1) {
  GLctx.vertexAttrib1f(x0, x1);
}
var _emscripten_glVertexAttrib1f = _glVertexAttrib1f;
var _glVertexAttrib1fv = function _glVertexAttrib1fv(index, v) {
  GLctx.vertexAttrib1f(index, HEAPF32[v >> 2]);
};
var _emscripten_glVertexAttrib1fv = _glVertexAttrib1fv;
function _glVertexAttrib2f(x0, x1, x2) {
  GLctx.vertexAttrib2f(x0, x1, x2);
}
var _emscripten_glVertexAttrib2f = _glVertexAttrib2f;
var _glVertexAttrib2fv = function _glVertexAttrib2fv(index, v) {
  GLctx.vertexAttrib2f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2]);
};
var _emscripten_glVertexAttrib2fv = _glVertexAttrib2fv;
function _glVertexAttrib3f(x0, x1, x2, x3) {
  GLctx.vertexAttrib3f(x0, x1, x2, x3);
}
var _emscripten_glVertexAttrib3f = _glVertexAttrib3f;
var _glVertexAttrib3fv = function _glVertexAttrib3fv(index, v) {
  GLctx.vertexAttrib3f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2]);
};
var _emscripten_glVertexAttrib3fv = _glVertexAttrib3fv;
function _glVertexAttrib4f(x0, x1, x2, x3, x4) {
  GLctx.vertexAttrib4f(x0, x1, x2, x3, x4);
}
var _emscripten_glVertexAttrib4f = _glVertexAttrib4f;
var _glVertexAttrib4fv = function _glVertexAttrib4fv(index, v) {
  GLctx.vertexAttrib4f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2], HEAPF32[v + 12 >> 2]);
};
var _emscripten_glVertexAttrib4fv = _glVertexAttrib4fv;
var _glVertexAttribDivisor = function _glVertexAttribDivisor(index, divisor) {
  GLctx.vertexAttribDivisor(index, divisor);
};
var _emscripten_glVertexAttribDivisor = _glVertexAttribDivisor;
var _glVertexAttribDivisorANGLE = _glVertexAttribDivisor;
var _emscripten_glVertexAttribDivisorANGLE = _glVertexAttribDivisorANGLE;
var _glVertexAttribDivisorARB = _glVertexAttribDivisor;
var _emscripten_glVertexAttribDivisorARB = _glVertexAttribDivisorARB;
var _glVertexAttribDivisorEXT = _glVertexAttribDivisor;
var _emscripten_glVertexAttribDivisorEXT = _glVertexAttribDivisorEXT;
var _glVertexAttribDivisorNV = _glVertexAttribDivisor;
var _emscripten_glVertexAttribDivisorNV = _glVertexAttribDivisorNV;
function _glVertexAttribI4i(x0, x1, x2, x3, x4) {
  GLctx.vertexAttribI4i(x0, x1, x2, x3, x4);
}
var _emscripten_glVertexAttribI4i = _glVertexAttribI4i;
var _glVertexAttribI4iv = function _glVertexAttribI4iv(index, v) {
  GLctx.vertexAttribI4i(index, HEAP32[v >> 2], HEAP32[v + 4 >> 2], HEAP32[v + 8 >> 2], HEAP32[v + 12 >> 2]);
};
var _emscripten_glVertexAttribI4iv = _glVertexAttribI4iv;
function _glVertexAttribI4ui(x0, x1, x2, x3, x4) {
  GLctx.vertexAttribI4ui(x0, x1, x2, x3, x4);
}
var _emscripten_glVertexAttribI4ui = _glVertexAttribI4ui;
var _glVertexAttribI4uiv = function _glVertexAttribI4uiv(index, v) {
  GLctx.vertexAttribI4ui(index, HEAPU32[v >> 2], HEAPU32[v + 4 >> 2], HEAPU32[v + 8 >> 2], HEAPU32[v + 12 >> 2]);
};
var _emscripten_glVertexAttribI4uiv = _glVertexAttribI4uiv;
var _glVertexAttribIPointer = function _glVertexAttribIPointer(index, size, type, stride, ptr) {
  var cb = GL.currentContext.clientBuffers[index];
  if (!GLctx.currentArrayBufferBinding) {
    cb.size = size;
    cb.type = type;
    cb.normalized = false;
    cb.stride = stride;
    cb.ptr = ptr;
    cb.clientside = true;
    cb.vertexAttribPointerAdaptor = function (index, size, type, normalized, stride, ptr) {
      this.vertexAttribIPointer(index, size, type, stride, ptr);
    };
    return;
  }
  cb.clientside = false;
  GLctx.vertexAttribIPointer(index, size, type, stride, ptr);
};
var _emscripten_glVertexAttribIPointer = _glVertexAttribIPointer;
var _glVertexAttribPointer = function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
  var cb = GL.currentContext.clientBuffers[index];
  if (!GLctx.currentArrayBufferBinding) {
    cb.size = size;
    cb.type = type;
    cb.normalized = normalized;
    cb.stride = stride;
    cb.ptr = ptr;
    cb.clientside = true;
    cb.vertexAttribPointerAdaptor = function (index, size, type, normalized, stride, ptr) {
      this.vertexAttribPointer(index, size, type, normalized, stride, ptr);
    };
    return;
  }
  cb.clientside = false;
  GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
};
var _emscripten_glVertexAttribPointer = _glVertexAttribPointer;
function _glViewport(x0, x1, x2, x3) {
  GLctx.viewport(x0, x1, x2, x3);
}
var _emscripten_glViewport = _glViewport;
var _glWaitSync = function _glWaitSync(sync, flags, timeout_low, timeout_high) {
  var timeout = convertI32PairToI53(timeout_low, timeout_high);
  GLctx.waitSync(GL.syncs[sync], flags, timeout);
};
var _emscripten_glWaitSync = _glWaitSync;
var _emscripten_memcpy_js = Uint8Array.prototype.copyWithin ? function (dest, src, num) {
  return HEAPU8.copyWithin(dest, src, src + num);
} : function (dest, src, num) {
  return HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
};
var getHeapMax = function getHeapMax() {
  return 2147483648;
};
var growMemory = function growMemory(size) {
  var b = wasmMemory.buffer;
  var pages = (size - b.byteLength + 65535) / 65536;
  try {
    wasmMemory.grow(pages);
    updateMemoryViews();
    return 1;
  } catch (e) {}
};
var _emscripten_resize_heap = function _emscripten_resize_heap(requestedSize) {
  var oldSize = HEAPU8.length;
  requestedSize >>>= 0;
  var maxHeapSize = getHeapMax();
  if (requestedSize > maxHeapSize) {
    return false;
  }
  var alignUp = function alignUp(x, multiple) {
    return x + (multiple - x % multiple) % multiple;
  };
  for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
    var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
    var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
    var replacement = growMemory(newSize);
    if (replacement) {
      return true;
    }
  }
  return false;
};
var _emscripten_run_script_int = function _emscripten_run_script_int(ptr) {
  return eval(UTF8ToString(ptr)) | 0;
};
var handleException = function handleException(e) {
  if (e instanceof ExitStatus || e == "unwind") {
    return EXITSTATUS;
  }
  quit_(1, e);
};
var runtimeKeepaliveCounter = 0;
var keepRuntimeAlive = function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
};
var _proc_exit = function _proc_exit(code) {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    var _Module$onExit;
    (_Module$onExit = Module["onExit"]) === null || _Module$onExit === void 0 || _Module$onExit.call(Module, code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
};
var exitJS = function exitJS(status, implicit) {
  EXITSTATUS = status;
  _proc_exit(status);
};
var _exit = exitJS;
var maybeExit = function maybeExit() {
  if (!keepRuntimeAlive()) {
    try {
      _exit(EXITSTATUS);
    } catch (e) {
      handleException(e);
    }
  }
};
var callUserCallback = function callUserCallback(func) {
  if (ABORT) {
    return;
  }
  try {
    func();
    maybeExit();
  } catch (e) {
    handleException(e);
  }
};
var _safeSetTimeout = function safeSetTimeout(func, timeout) {
  return setTimeout(function () {
    callUserCallback(func);
  }, timeout);
};
var warnOnce = function warnOnce(text) {
  warnOnce.shown || (warnOnce.shown = {});
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    if (ENVIRONMENT_IS_NODE) text = "warning: " + text;
    err(text);
  }
};
var Browser = {
  mainLoop: {
    running: false,
    scheduler: null,
    method: "",
    currentlyRunningMainloop: 0,
    func: null,
    arg: 0,
    timingMode: 0,
    timingValue: 0,
    currentFrameNumber: 0,
    queue: [],
    pause: function pause() {
      Browser.mainLoop.scheduler = null;
      Browser.mainLoop.currentlyRunningMainloop++;
    },
    resume: function resume() {
      Browser.mainLoop.currentlyRunningMainloop++;
      var timingMode = Browser.mainLoop.timingMode;
      var timingValue = Browser.mainLoop.timingValue;
      var func = Browser.mainLoop.func;
      Browser.mainLoop.func = null;
      setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
      _emscripten_set_main_loop_timing(timingMode, timingValue);
      Browser.mainLoop.scheduler();
    },
    updateStatus: function updateStatus() {
      if (Module["setStatus"]) {
        var message = Module["statusMessage"] || "Please wait...";
        var remaining = Browser.mainLoop.remainingBlockers;
        var expected = Browser.mainLoop.expectedBlockers;
        if (remaining) {
          if (remaining < expected) {
            Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")");
          } else {
            Module["setStatus"](message);
          }
        } else {
          Module["setStatus"]("");
        }
      }
    },
    runIter: function runIter(func) {
      var _Module$postMainLoop;
      if (ABORT) return;
      if (Module["preMainLoop"]) {
        var preRet = Module["preMainLoop"]();
        if (preRet === false) {
          return;
        }
      }
      callUserCallback(func);
      (_Module$postMainLoop = Module["postMainLoop"]) === null || _Module$postMainLoop === void 0 || _Module$postMainLoop.call(Module);
    }
  },
  isFullscreen: false,
  pointerLock: false,
  moduleContextCreatedCallbacks: [],
  workers: [],
  init: function init() {
    if (Browser.initted) return;
    Browser.initted = true;
    var imagePlugin = {};
    imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
      return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
    };
    imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
      var b = new Blob([byteArray], {
        type: Browser.getMimetype(name)
      });
      if (b.size !== byteArray.length) {
        b = new Blob([new Uint8Array(byteArray).buffer], {
          type: Browser.getMimetype(name)
        });
      }
      var url = URL.createObjectURL(b);
      var img = new Image();
      img.onload = function () {
        assert(img.complete, "Image ".concat(name, " could not be decoded"));
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        preloadedImages[name] = canvas;
        URL.revokeObjectURL(url);
        onload === null || onload === void 0 || onload(byteArray);
      };
      img.onerror = function (event) {
        err("Image ".concat(url, " could not be decoded"));
        onerror === null || onerror === void 0 || onerror();
      };
      img.src = url;
    };
    preloadPlugins.push(imagePlugin);
    var audioPlugin = {};
    audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
      return !Module.noAudioDecoding && name.substr(-4) in {
        ".ogg": 1,
        ".wav": 1,
        ".mp3": 1
      };
    };
    audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
      var done = false;
      function finish(audio) {
        if (done) return;
        done = true;
        preloadedAudios[name] = audio;
        onload === null || onload === void 0 || onload(byteArray);
      }
      var b = new Blob([byteArray], {
        type: Browser.getMimetype(name)
      });
      var url = URL.createObjectURL(b);
      var audio = new Audio();
      audio.addEventListener("canplaythrough", function () {
        return finish(audio);
      }, false);
      audio.onerror = function audio_onerror(event) {
        if (done) return;
        err("warning: browser could not fully decode audio ".concat(name, ", trying slower base64 approach"));
        function encode64(data) {
          var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          var PAD = "=";
          var ret = "";
          var leftchar = 0;
          var leftbits = 0;
          for (var i = 0; i < data.length; i++) {
            leftchar = leftchar << 8 | data[i];
            leftbits += 8;
            while (leftbits >= 6) {
              var curr = leftchar >> leftbits - 6 & 63;
              leftbits -= 6;
              ret += BASE[curr];
            }
          }
          if (leftbits == 2) {
            ret += BASE[(leftchar & 3) << 4];
            ret += PAD + PAD;
          } else if (leftbits == 4) {
            ret += BASE[(leftchar & 15) << 2];
            ret += PAD;
          }
          return ret;
        }
        audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
        finish(audio);
      };
      audio.src = url;
      _safeSetTimeout(function () {
        finish(audio);
      }, 1e4);
    };
    preloadPlugins.push(audioPlugin);
    function pointerLockChange() {
      Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"];
    }
    var canvas = Module["canvas"];
    if (canvas) {
      canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || function () {};
      canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function () {};
      canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
      document.addEventListener("pointerlockchange", pointerLockChange, false);
      document.addEventListener("mozpointerlockchange", pointerLockChange, false);
      document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
      document.addEventListener("mspointerlockchange", pointerLockChange, false);
      if (Module["elementPointerLock"]) {
        canvas.addEventListener("click", function (ev) {
          if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
            Module["canvas"].requestPointerLock();
            ev.preventDefault();
          }
        }, false);
      }
    }
  },
  createContext: function createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
    if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
    var ctx;
    var contextHandle;
    if (useWebGL) {
      var contextAttributes = {
        antialias: false,
        alpha: false,
        majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1
      };
      if (webGLContextAttributes) {
        for (var attribute in webGLContextAttributes) {
          contextAttributes[attribute] = webGLContextAttributes[attribute];
        }
      }
      if (typeof GL != "undefined") {
        contextHandle = GL.createContext(canvas, contextAttributes);
        if (contextHandle) {
          ctx = GL.getContext(contextHandle).GLctx;
        }
      }
    } else {
      ctx = canvas.getContext("2d");
    }
    if (!ctx) return null;
    if (setInModule) {
      if (!useWebGL) assert(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
      Module.ctx = ctx;
      if (useWebGL) GL.makeContextCurrent(contextHandle);
      Module.useWebGL = useWebGL;
      Browser.moduleContextCreatedCallbacks.forEach(function (callback) {
        return callback();
      });
      Browser.init();
    }
    return ctx;
  },
  destroyContext: function destroyContext(canvas, useWebGL, setInModule) {},
  fullscreenHandlersInstalled: false,
  lockPointer: undefined,
  resizeCanvas: undefined,
  requestFullscreen: function requestFullscreen(lockPointer, resizeCanvas) {
    Browser.lockPointer = lockPointer;
    Browser.resizeCanvas = resizeCanvas;
    if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
    if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
    var canvas = Module["canvas"];
    function fullscreenChange() {
      var _Module$onFullScreen, _Module$onFullscreen;
      Browser.isFullscreen = false;
      var canvasContainer = canvas.parentNode;
      if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
        canvas.exitFullscreen = Browser.exitFullscreen;
        if (Browser.lockPointer) canvas.requestPointerLock();
        Browser.isFullscreen = true;
        if (Browser.resizeCanvas) {
          Browser.setFullscreenCanvasSize();
        } else {
          Browser.updateCanvasDimensions(canvas);
        }
      } else {
        canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
        canvasContainer.parentNode.removeChild(canvasContainer);
        if (Browser.resizeCanvas) {
          Browser.setWindowedCanvasSize();
        } else {
          Browser.updateCanvasDimensions(canvas);
        }
      }
      (_Module$onFullScreen = Module["onFullScreen"]) === null || _Module$onFullScreen === void 0 || _Module$onFullScreen.call(Module, Browser.isFullscreen);
      (_Module$onFullscreen = Module["onFullscreen"]) === null || _Module$onFullscreen === void 0 || _Module$onFullscreen.call(Module, Browser.isFullscreen);
    }
    if (!Browser.fullscreenHandlersInstalled) {
      Browser.fullscreenHandlersInstalled = true;
      document.addEventListener("fullscreenchange", fullscreenChange, false);
      document.addEventListener("mozfullscreenchange", fullscreenChange, false);
      document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
      document.addEventListener("MSFullscreenChange", fullscreenChange, false);
    }
    var canvasContainer = document.createElement("div");
    canvas.parentNode.insertBefore(canvasContainer, canvas);
    canvasContainer.appendChild(canvas);
    canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? function () {
      return canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
    } : null) || (canvasContainer["webkitRequestFullScreen"] ? function () {
      return canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
    } : null);
    canvasContainer.requestFullscreen();
  },
  exitFullscreen: function exitFullscreen() {
    if (!Browser.isFullscreen) {
      return false;
    }
    var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function () {};
    CFS.apply(document, []);
    return true;
  },
  nextRAF: 0,
  fakeRequestAnimationFrame: function fakeRequestAnimationFrame(func) {
    var now = Date.now();
    if (Browser.nextRAF === 0) {
      Browser.nextRAF = now + 1e3 / 60;
    } else {
      while (now + 2 >= Browser.nextRAF) {
        Browser.nextRAF += 1e3 / 60;
      }
    }
    var delay = Math.max(Browser.nextRAF - now, 0);
    setTimeout(func, delay);
  },
  requestAnimationFrame: function (_requestAnimationFrame) {
    function requestAnimationFrame(_x) {
      return _requestAnimationFrame.apply(this, arguments);
    }
    requestAnimationFrame.toString = function () {
      return _requestAnimationFrame.toString();
    };
    return requestAnimationFrame;
  }(function (func) {
    if (typeof requestAnimationFrame == "function") {
      requestAnimationFrame(func);
      return;
    }
    var RAF = Browser.fakeRequestAnimationFrame;
    if (typeof window != "undefined") {
      RAF = window["requestAnimationFrame"] || window["mozRequestAnimationFrame"] || window["webkitRequestAnimationFrame"] || window["msRequestAnimationFrame"] || window["oRequestAnimationFrame"] || RAF;
    }
    RAF(func);
  }),
  safeSetTimeout: function safeSetTimeout(func, timeout) {
    return _safeSetTimeout(func, timeout);
  },
  safeRequestAnimationFrame: function safeRequestAnimationFrame(func) {
    return Browser.requestAnimationFrame(function () {
      callUserCallback(func);
    });
  },
  getMimetype: function getMimetype(name) {
    return {
      "jpg": "image/jpeg",
      "jpeg": "image/jpeg",
      "png": "image/png",
      "bmp": "image/bmp",
      "ogg": "audio/ogg",
      "wav": "audio/wav",
      "mp3": "audio/mpeg"
    }[name.substr(name.lastIndexOf(".") + 1)];
  },
  getUserMedia: function getUserMedia(func) {
    var _window;
    (_window = window).getUserMedia || (_window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"]);
    window.getUserMedia(func);
  },
  getMovementX: function getMovementX(event) {
    return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
  },
  getMovementY: function getMovementY(event) {
    return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
  },
  getMouseWheelDelta: function getMouseWheelDelta(event) {
    var delta = 0;
    switch (event.type) {
      case "DOMMouseScroll":
        delta = event.detail / 3;
        break;
      case "mousewheel":
        delta = event.wheelDelta / 120;
        break;
      case "wheel":
        delta = event.deltaY;
        switch (event.deltaMode) {
          case 0:
            delta /= 100;
            break;
          case 1:
            delta /= 3;
            break;
          case 2:
            delta *= 80;
            break;
          default:
            throw "unrecognized mouse wheel delta mode: " + event.deltaMode;
        }
        break;
      default:
        throw "unrecognized mouse wheel event: " + event.type;
    }
    return delta;
  },
  mouseX: 0,
  mouseY: 0,
  mouseMovementX: 0,
  mouseMovementY: 0,
  touches: {},
  lastTouches: {},
  calculateMouseCoords: function calculateMouseCoords(pageX, pageY) {
    var rect = Module["canvas"].getBoundingClientRect();
    var cw = Module["canvas"].width;
    var ch = Module["canvas"].height;
    var scrollX = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
    var scrollY = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
    var adjustedX = pageX - (scrollX + rect.left);
    var adjustedY = pageY - (scrollY + rect.top);
    adjustedX = adjustedX * (cw / rect.width);
    adjustedY = adjustedY * (ch / rect.height);
    return {
      x: adjustedX,
      y: adjustedY
    };
  },
  setMouseCoords: function setMouseCoords(pageX, pageY) {
    var _Browser$calculateMou = Browser.calculateMouseCoords(pageX, pageY),
      x = _Browser$calculateMou.x,
      y = _Browser$calculateMou.y;
    Browser.mouseMovementX = x - Browser.mouseX;
    Browser.mouseMovementY = y - Browser.mouseY;
    Browser.mouseX = x;
    Browser.mouseY = y;
  },
  calculateMouseEvent: function calculateMouseEvent(event) {
    if (Browser.pointerLock) {
      if (event.type != "mousemove" && "mozMovementX" in event) {
        Browser.mouseMovementX = Browser.mouseMovementY = 0;
      } else {
        Browser.mouseMovementX = Browser.getMovementX(event);
        Browser.mouseMovementY = Browser.getMovementY(event);
      }
      if (typeof SDL != "undefined") {
        Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
        Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
      } else {
        Browser.mouseX += Browser.mouseMovementX;
        Browser.mouseY += Browser.mouseMovementY;
      }
    } else {
      if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
        var touch = event.touch;
        if (touch === undefined) {
          return;
        }
        var coords = Browser.calculateMouseCoords(touch.pageX, touch.pageY);
        if (event.type === "touchstart") {
          Browser.lastTouches[touch.identifier] = coords;
          Browser.touches[touch.identifier] = coords;
        } else if (event.type === "touchend" || event.type === "touchmove") {
          var last = Browser.touches[touch.identifier];
          last || (last = coords);
          Browser.lastTouches[touch.identifier] = last;
          Browser.touches[touch.identifier] = coords;
        }
        return;
      }
      Browser.setMouseCoords(event.pageX, event.pageY);
    }
  },
  resizeListeners: [],
  updateResizeListeners: function updateResizeListeners() {
    var canvas = Module["canvas"];
    Browser.resizeListeners.forEach(function (listener) {
      return listener(canvas.width, canvas.height);
    });
  },
  setCanvasSize: function setCanvasSize(width, height, noUpdates) {
    var canvas = Module["canvas"];
    Browser.updateCanvasDimensions(canvas, width, height);
    if (!noUpdates) Browser.updateResizeListeners();
  },
  windowedWidth: 0,
  windowedHeight: 0,
  setFullscreenCanvasSize: function setFullscreenCanvasSize() {
    if (typeof SDL != "undefined") {
      var flags = HEAPU32[SDL.screen >> 2];
      flags = flags | 8388608;
      HEAP32[SDL.screen >> 2] = flags;
    }
    Browser.updateCanvasDimensions(Module["canvas"]);
    Browser.updateResizeListeners();
  },
  setWindowedCanvasSize: function setWindowedCanvasSize() {
    if (typeof SDL != "undefined") {
      var flags = HEAPU32[SDL.screen >> 2];
      flags = flags & ~8388608;
      HEAP32[SDL.screen >> 2] = flags;
    }
    Browser.updateCanvasDimensions(Module["canvas"]);
    Browser.updateResizeListeners();
  },
  updateCanvasDimensions: function updateCanvasDimensions(canvas, wNative, hNative) {
    if (wNative && hNative) {
      canvas.widthNative = wNative;
      canvas.heightNative = hNative;
    } else {
      wNative = canvas.widthNative;
      hNative = canvas.heightNative;
    }
    var w = wNative;
    var h = hNative;
    if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
      if (w / h < Module["forcedAspectRatio"]) {
        w = Math.round(h * Module["forcedAspectRatio"]);
      } else {
        h = Math.round(w / Module["forcedAspectRatio"]);
      }
    }
    if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
      var factor = Math.min(screen.width / w, screen.height / h);
      w = Math.round(w * factor);
      h = Math.round(h * factor);
    }
    if (Browser.resizeCanvas) {
      if (canvas.width != w) canvas.width = w;
      if (canvas.height != h) canvas.height = h;
      if (typeof canvas.style != "undefined") {
        canvas.style.removeProperty("width");
        canvas.style.removeProperty("height");
      }
    } else {
      if (canvas.width != wNative) canvas.width = wNative;
      if (canvas.height != hNative) canvas.height = hNative;
      if (typeof canvas.style != "undefined") {
        if (w != wNative || h != hNative) {
          canvas.style.setProperty("width", w + "px", "important");
          canvas.style.setProperty("height", h + "px", "important");
        } else {
          canvas.style.removeProperty("width");
          canvas.style.removeProperty("height");
        }
      }
    }
  }
};
var _emscripten_set_main_loop_timing = function _emscripten_set_main_loop_timing(mode, value) {
  Browser.mainLoop.timingMode = mode;
  Browser.mainLoop.timingValue = value;
  if (!Browser.mainLoop.func) {
    return 1;
  }
  if (!Browser.mainLoop.running) {
    Browser.mainLoop.running = true;
  }
  if (mode == 0) {
    Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
      var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
      setTimeout(Browser.mainLoop.runner, timeUntilNextTick);
    };
    Browser.mainLoop.method = "timeout";
  } else if (mode == 1) {
    Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
      Browser.requestAnimationFrame(Browser.mainLoop.runner);
    };
    Browser.mainLoop.method = "rAF";
  } else if (mode == 2) {
    if (typeof Browser.setImmediate == "undefined") {
      if (typeof setImmediate == "undefined") {
        var setImmediates = [];
        var emscriptenMainLoopMessageId = "setimmediate";
        var Browser_setImmediate_messageHandler = function Browser_setImmediate_messageHandler(event) {
          if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
            event.stopPropagation();
            setImmediates.shift()();
          }
        };
        addEventListener("message", Browser_setImmediate_messageHandler, true);
        Browser.setImmediate = function Browser_emulated_setImmediate(func) {
          setImmediates.push(func);
          if (ENVIRONMENT_IS_WORKER) {
            if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
            Module["setImmediates"].push(func);
            postMessage({
              target: emscriptenMainLoopMessageId
            });
          } else postMessage(emscriptenMainLoopMessageId, "*");
        };
      } else {
        Browser.setImmediate = setImmediate;
      }
    }
    Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
      Browser.setImmediate(Browser.mainLoop.runner);
    };
    Browser.mainLoop.method = "immediate";
  }
  return 0;
};
var setMainLoop = function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
  assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  Browser.mainLoop.func = browserIterationFunc;
  Browser.mainLoop.arg = arg;
  var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
  function checkIsRunning() {
    if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
      return false;
    }
    return true;
  }
  Browser.mainLoop.running = false;
  Browser.mainLoop.runner = function Browser_mainLoop_runner() {
    var _SDL$audio, _SDL$audio$queueNewAu;
    if (ABORT) return;
    if (Browser.mainLoop.queue.length > 0) {
      var start = Date.now();
      var blocker = Browser.mainLoop.queue.shift();
      blocker.func(blocker.arg);
      if (Browser.mainLoop.remainingBlockers) {
        var remaining = Browser.mainLoop.remainingBlockers;
        var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
        if (blocker.counted) {
          Browser.mainLoop.remainingBlockers = next;
        } else {
          next = next + .5;
          Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9;
        }
      }
      Browser.mainLoop.updateStatus();
      if (!checkIsRunning()) return;
      setTimeout(Browser.mainLoop.runner, 0);
      return;
    }
    if (!checkIsRunning()) return;
    Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
    if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
      Browser.mainLoop.scheduler();
      return;
    } else if (Browser.mainLoop.timingMode == 0) {
      Browser.mainLoop.tickStartTime = _emscripten_get_now();
    }
    GL.newRenderingFrameStarted();
    Browser.mainLoop.runIter(browserIterationFunc);
    if (!checkIsRunning()) return;
    if ((typeof SDL === "undefined" ? "undefined" : _typeof(SDL)) == "object") (_SDL$audio = SDL.audio) === null || _SDL$audio === void 0 || (_SDL$audio$queueNewAu = _SDL$audio.queueNewAudioData) === null || _SDL$audio$queueNewAu === void 0 || _SDL$audio$queueNewAu.call(_SDL$audio);
    Browser.mainLoop.scheduler();
  };
  if (!noSetTiming) {
    if (fps && fps > 0) {
      _emscripten_set_main_loop_timing(0, 1e3 / fps);
    } else {
      _emscripten_set_main_loop_timing(1, 1);
    }
    Browser.mainLoop.scheduler();
  }
  if (simulateInfiniteLoop) {
    throw "unwind";
  }
};
var _emscripten_set_main_loop = function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
  var browserIterationFunc = function browserIterationFunc() {
    return dynCall_v.call(null, func);
  };
  setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop);
};
var ENV = {};
var getExecutableName = function getExecutableName() {
  return thisProgram || "./this.program";
};
var getEnvStrings = function getEnvStrings() {
  if (!getEnvStrings.strings) {
    var lang = ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
    var env = {
      "USER": "web_user",
      "LOGNAME": "web_user",
      "PATH": "/",
      "PWD": "/",
      "HOME": "/home/web_user",
      "LANG": lang,
      "_": getExecutableName()
    };
    for (var x in ENV) {
      if (ENV[x] === undefined) delete env[x];else env[x] = ENV[x];
    }
    var strings = [];
    for (var x in env) {
      strings.push("".concat(x, "=").concat(env[x]));
    }
    getEnvStrings.strings = strings;
  }
  return getEnvStrings.strings;
};
var stringToAscii = function stringToAscii(str, buffer) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[buffer++ >> 0] = str.charCodeAt(i);
  }
  HEAP8[buffer >> 0] = 0;
};
var _environ_get = function _environ_get(__environ, environ_buf) {
  var bufSize = 0;
  getEnvStrings().forEach(function (string, i) {
    var ptr = environ_buf + bufSize;
    HEAPU32[__environ + i * 4 >> 2] = ptr;
    stringToAscii(string, ptr);
    bufSize += string.length + 1;
  });
  return 0;
};
var _environ_sizes_get = function _environ_sizes_get(penviron_count, penviron_buf_size) {
  var strings = getEnvStrings();
  HEAPU32[penviron_count >> 2] = strings.length;
  var bufSize = 0;
  strings.forEach(function (string) {
    return bufSize += string.length + 1;
  });
  HEAPU32[penviron_buf_size >> 2] = bufSize;
  return 0;
};
function _fd_close(fd) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.close(stream);
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return e.errno;
  }
}
var doReadv = function doReadv(stream, iov, iovcnt, offset) {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = HEAPU32[iov >> 2];
    var len = HEAPU32[iov + 4 >> 2];
    iov += 8;
    var curr = FS.read(stream, HEAP8, ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) break;
    if (typeof offset !== "undefined") {
      offset += curr;
    }
  }
  return ret;
};
function _fd_read(fd, iov, iovcnt, pnum) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doReadv(stream, iov, iovcnt);
    HEAPU32[pnum >> 2] = num;
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return e.errno;
  }
}
var convertI32PairToI53Checked = function convertI32PairToI53Checked(lo, hi) {
  return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
};
function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  var offset = convertI32PairToI53Checked(offset_low, offset_high);
  try {
    if (isNaN(offset)) return 61;
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.llseek(stream, offset, whence);
    tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return e.errno;
  }
}
var doWritev = function doWritev(stream, iov, iovcnt, offset) {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = HEAPU32[iov >> 2];
    var len = HEAPU32[iov + 4 >> 2];
    iov += 8;
    var curr = FS.write(stream, HEAP8, ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (typeof offset !== "undefined") {
      offset += curr;
    }
  }
  return ret;
};
function _fd_write(fd, iov, iovcnt, pnum) {
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doWritev(stream, iov, iovcnt);
    HEAPU32[pnum >> 2] = num;
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return e.errno;
  }
}
function GLFW_Window(id, width, height, framebufferWidth, framebufferHeight, title, monitor, share) {
  this.id = id;
  this.x = 0;
  this.y = 0;
  this.fullscreen = false;
  this.storedX = 0;
  this.storedY = 0;
  this.width = width;
  this.height = height;
  this.framebufferWidth = framebufferWidth;
  this.framebufferHeight = framebufferHeight;
  this.storedWidth = width;
  this.storedHeight = height;
  this.title = title;
  this.monitor = monitor;
  this.share = share;
  this.attributes = Object.assign({}, GLFW.hints);
  this.inputModes = {
    208897: 212993,
    208898: 0,
    208899: 0
  };
  this.buttons = 0;
  this.keys = new Array();
  this.domKeys = new Array();
  this.shouldClose = 0;
  this.title = null;
  this.windowPosFunc = 0;
  this.windowSizeFunc = 0;
  this.windowCloseFunc = 0;
  this.windowRefreshFunc = 0;
  this.windowFocusFunc = 0;
  this.windowIconifyFunc = 0;
  this.windowMaximizeFunc = 0;
  this.framebufferSizeFunc = 0;
  this.windowContentScaleFunc = 0;
  this.mouseButtonFunc = 0;
  this.cursorPosFunc = 0;
  this.cursorEnterFunc = 0;
  this.scrollFunc = 0;
  this.dropFunc = 0;
  this.keyFunc = 0;
  this.charFunc = 0;
  this.userptr = 0;
}
var _emscripten_set_window_title = function _emscripten_set_window_title(title) {
  return document.title = UTF8ToString(title);
};
var GLFW = {
  WindowFromId: function WindowFromId(id) {
    if (id <= 0 || !GLFW.windows) return null;
    return GLFW.windows[id - 1];
  },
  joystickFunc: 0,
  errorFunc: 0,
  monitorFunc: 0,
  active: null,
  scale: null,
  windows: null,
  monitors: null,
  monitorString: null,
  versionString: null,
  initialTime: null,
  extensions: null,
  devicePixelRatioMQL: null,
  hints: null,
  primaryTouchId: null,
  defaultHints: {
    131073: 0,
    131074: 0,
    131075: 1,
    131076: 1,
    131077: 1,
    131082: 0,
    135169: 8,
    135170: 8,
    135171: 8,
    135172: 8,
    135173: 24,
    135174: 8,
    135175: 0,
    135176: 0,
    135177: 0,
    135178: 0,
    135179: 0,
    135180: 0,
    135181: 0,
    135182: 0,
    135183: 0,
    139265: 196609,
    139266: 1,
    139267: 0,
    139268: 0,
    139269: 0,
    139270: 0,
    139271: 0,
    139272: 0,
    139276: 0
  },
  DOMToGLFWKeyCode: function DOMToGLFWKeyCode(keycode) {
    switch (keycode) {
      case 32:
        return 32;
      case 222:
        return 39;
      case 188:
        return 44;
      case 173:
        return 45;
      case 189:
        return 45;
      case 190:
        return 46;
      case 191:
        return 47;
      case 48:
        return 48;
      case 49:
        return 49;
      case 50:
        return 50;
      case 51:
        return 51;
      case 52:
        return 52;
      case 53:
        return 53;
      case 54:
        return 54;
      case 55:
        return 55;
      case 56:
        return 56;
      case 57:
        return 57;
      case 59:
        return 59;
      case 61:
        return 61;
      case 187:
        return 61;
      case 65:
        return 65;
      case 66:
        return 66;
      case 67:
        return 67;
      case 68:
        return 68;
      case 69:
        return 69;
      case 70:
        return 70;
      case 71:
        return 71;
      case 72:
        return 72;
      case 73:
        return 73;
      case 74:
        return 74;
      case 75:
        return 75;
      case 76:
        return 76;
      case 77:
        return 77;
      case 78:
        return 78;
      case 79:
        return 79;
      case 80:
        return 80;
      case 81:
        return 81;
      case 82:
        return 82;
      case 83:
        return 83;
      case 84:
        return 84;
      case 85:
        return 85;
      case 86:
        return 86;
      case 87:
        return 87;
      case 88:
        return 88;
      case 89:
        return 89;
      case 90:
        return 90;
      case 219:
        return 91;
      case 220:
        return 92;
      case 221:
        return 93;
      case 192:
        return 96;
      case 27:
        return 256;
      case 13:
        return 257;
      case 9:
        return 258;
      case 8:
        return 259;
      case 45:
        return 260;
      case 46:
        return 261;
      case 39:
        return 262;
      case 37:
        return 263;
      case 40:
        return 264;
      case 38:
        return 265;
      case 33:
        return 266;
      case 34:
        return 267;
      case 36:
        return 268;
      case 35:
        return 269;
      case 20:
        return 280;
      case 145:
        return 281;
      case 144:
        return 282;
      case 44:
        return 283;
      case 19:
        return 284;
      case 112:
        return 290;
      case 113:
        return 291;
      case 114:
        return 292;
      case 115:
        return 293;
      case 116:
        return 294;
      case 117:
        return 295;
      case 118:
        return 296;
      case 119:
        return 297;
      case 120:
        return 298;
      case 121:
        return 299;
      case 122:
        return 300;
      case 123:
        return 301;
      case 124:
        return 302;
      case 125:
        return 303;
      case 126:
        return 304;
      case 127:
        return 305;
      case 128:
        return 306;
      case 129:
        return 307;
      case 130:
        return 308;
      case 131:
        return 309;
      case 132:
        return 310;
      case 133:
        return 311;
      case 134:
        return 312;
      case 135:
        return 313;
      case 136:
        return 314;
      case 96:
        return 320;
      case 97:
        return 321;
      case 98:
        return 322;
      case 99:
        return 323;
      case 100:
        return 324;
      case 101:
        return 325;
      case 102:
        return 326;
      case 103:
        return 327;
      case 104:
        return 328;
      case 105:
        return 329;
      case 110:
        return 330;
      case 111:
        return 331;
      case 106:
        return 332;
      case 109:
        return 333;
      case 107:
        return 334;
      case 16:
        return 340;
      case 17:
        return 341;
      case 18:
        return 342;
      case 91:
        return 343;
      case 224:
        return 343;
      case 93:
        return 348;
      default:
        return -1;
    }
  },
  getModBits: function getModBits(win) {
    var mod = 0;
    if (win.keys[340]) mod |= 1;
    if (win.keys[341]) mod |= 2;
    if (win.keys[342]) mod |= 4;
    if (win.keys[343] || win.keys[348]) mod |= 8;
    return mod;
  },
  onKeyPress: function onKeyPress(event) {
    if (!GLFW.active || !GLFW.active.charFunc) return;
    if (event.ctrlKey || event.metaKey) return;
    var charCode = event.charCode;
    if (charCode == 0 || charCode >= 0 && charCode <= 31) return;
    (function (a1, a2) {
      return dynCall_vii.apply(null, [GLFW.active.charFunc, a1, a2]);
    })(GLFW.active.id, charCode);
  },
  onKeyChanged: function onKeyChanged(keyCode, status) {
    if (!GLFW.active) return;
    var key = GLFW.DOMToGLFWKeyCode(keyCode);
    if (key == -1) return;
    var repeat = status && GLFW.active.keys[key];
    GLFW.active.keys[key] = status;
    GLFW.active.domKeys[keyCode] = status;
    if (GLFW.active.keyFunc) {
      if (repeat) status = 2;
      (function (a1, a2, a3, a4, a5) {
        return dynCall_viiiii.apply(null, [GLFW.active.keyFunc, a1, a2, a3, a4, a5]);
      })(GLFW.active.id, key, keyCode, status, GLFW.getModBits(GLFW.active));
    }
  },
  onGamepadConnected: function onGamepadConnected(event) {
    GLFW.refreshJoysticks();
  },
  onGamepadDisconnected: function onGamepadDisconnected(event) {
    GLFW.refreshJoysticks();
  },
  onKeydown: function onKeydown(event) {
    GLFW.onKeyChanged(event.keyCode, 1);
    if (event.keyCode === 8 || event.keyCode === 9) {
      event.preventDefault();
    }
  },
  onKeyup: function onKeyup(event) {
    GLFW.onKeyChanged(event.keyCode, 0);
  },
  onBlur: function onBlur(event) {
    if (!GLFW.active) return;
    for (var i = 0; i < GLFW.active.domKeys.length; ++i) {
      if (GLFW.active.domKeys[i]) {
        GLFW.onKeyChanged(i, 0);
      }
    }
  },
  onMousemove: function onMousemove(event) {
    if (!GLFW.active) return;
    if (event.type === "touchmove") {
      event.preventDefault();
      var primaryChanged = false;
      var _iterator = _createForOfIteratorHelper(event.changedTouches),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _i2 = _step.value;
          if (GLFW.primaryTouchId === _i2.identifier) {
            Browser.setMouseCoords(_i2.pageX, _i2.pageY);
            primaryChanged = true;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!primaryChanged) {
        return;
      }
    } else {
      Browser.calculateMouseEvent(event);
    }
    if (event.target != Module["canvas"] || !GLFW.active.cursorPosFunc) return;
    if (GLFW.active.cursorPosFunc) {
      (function (a1, a2, a3) {
        return dynCall_vidd.apply(null, [GLFW.active.cursorPosFunc, a1, a2, a3]);
      })(GLFW.active.id, Browser.mouseX, Browser.mouseY);
    }
  },
  DOMToGLFWMouseButton: function DOMToGLFWMouseButton(event) {
    var eventButton = event["button"];
    if (eventButton > 0) {
      if (eventButton == 1) {
        eventButton = 2;
      } else {
        eventButton = 1;
      }
    }
    return eventButton;
  },
  onMouseenter: function onMouseenter(event) {
    if (!GLFW.active) return;
    if (event.target != Module["canvas"]) return;
    if (GLFW.active.cursorEnterFunc) {
      (function (a1, a2) {
        return dynCall_vii.apply(null, [GLFW.active.cursorEnterFunc, a1, a2]);
      })(GLFW.active.id, 1);
    }
  },
  onMouseleave: function onMouseleave(event) {
    if (!GLFW.active) return;
    if (event.target != Module["canvas"]) return;
    if (GLFW.active.cursorEnterFunc) {
      (function (a1, a2) {
        return dynCall_vii.apply(null, [GLFW.active.cursorEnterFunc, a1, a2]);
      })(GLFW.active.id, 0);
    }
  },
  onMouseButtonChanged: function onMouseButtonChanged(event, status) {
    if (!GLFW.active) return;
    if (event.target != Module["canvas"]) return;
    var isTouchType = event.type === "touchstart" || event.type === "touchend" || event.type === "touchcancel";
    var eventButton = 0;
    if (isTouchType) {
      event.preventDefault();
      var primaryChanged = false;
      if (GLFW.primaryTouchId === null && event.type === "touchstart" && event.targetTouches.length > 0) {
        var chosenTouch = event.targetTouches[0];
        GLFW.primaryTouchId = chosenTouch.identifier;
        Browser.setMouseCoords(chosenTouch.pageX, chosenTouch.pageY);
        primaryChanged = true;
      } else if (event.type === "touchend" || event.type === "touchcancel") {
        var _iterator2 = _createForOfIteratorHelper(event.changedTouches),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _i3 = _step2.value;
            if (GLFW.primaryTouchId === _i3.identifier) {
              GLFW.primaryTouchId = null;
              primaryChanged = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (!primaryChanged) {
        return;
      }
    } else {
      Browser.calculateMouseEvent(event);
      eventButton = GLFW.DOMToGLFWMouseButton(event);
    }
    if (status == 1) {
      GLFW.active.buttons |= 1 << eventButton;
      try {
        event.target.setCapture();
      } catch (e) {}
    } else {
      GLFW.active.buttons &= ~(1 << eventButton);
    }
    if (GLFW.active.mouseButtonFunc) {
      (function (a1, a2, a3, a4) {
        return dynCall_viiii.apply(null, [GLFW.active.mouseButtonFunc, a1, a2, a3, a4]);
      })(GLFW.active.id, eventButton, status, GLFW.getModBits(GLFW.active));
    }
  },
  onMouseButtonDown: function onMouseButtonDown(event) {
    if (!GLFW.active) return;
    GLFW.onMouseButtonChanged(event, 1);
  },
  onMouseButtonUp: function onMouseButtonUp(event) {
    if (!GLFW.active) return;
    GLFW.onMouseButtonChanged(event, 0);
  },
  onMouseWheel: function onMouseWheel(event) {
    var delta = -Browser.getMouseWheelDelta(event);
    delta = delta == 0 ? 0 : delta > 0 ? Math.max(delta, 1) : Math.min(delta, -1);
    GLFW.wheelPos += delta;
    if (!GLFW.active || !GLFW.active.scrollFunc || event.target != Module["canvas"]) return;
    var sx = 0;
    var sy = delta;
    if (event.type == "mousewheel") {
      sx = event.wheelDeltaX;
    } else {
      sx = event.deltaX;
    }
    (function (a1, a2, a3) {
      return dynCall_vidd.apply(null, [GLFW.active.scrollFunc, a1, a2, a3]);
    })(GLFW.active.id, sx, sy);
    event.preventDefault();
  },
  onCanvasResize: function onCanvasResize(width, height, framebufferWidth, framebufferHeight) {
    if (!GLFW.active) return;
    var resizeNeeded = false;
    if (document["fullscreen"] || document["fullScreen"] || document["mozFullScreen"] || document["webkitIsFullScreen"]) {
      if (!GLFW.active.fullscreen) {
        resizeNeeded = width != screen.width || height != screen.height;
        GLFW.active.storedX = GLFW.active.x;
        GLFW.active.storedY = GLFW.active.y;
        GLFW.active.storedWidth = GLFW.active.width;
        GLFW.active.storedHeight = GLFW.active.height;
        GLFW.active.x = GLFW.active.y = 0;
        GLFW.active.width = screen.width;
        GLFW.active.height = screen.height;
        GLFW.active.fullscreen = true;
      }
    } else if (GLFW.active.fullscreen == true) {
      resizeNeeded = width != GLFW.active.storedWidth || height != GLFW.active.storedHeight;
      GLFW.active.x = GLFW.active.storedX;
      GLFW.active.y = GLFW.active.storedY;
      GLFW.active.width = GLFW.active.storedWidth;
      GLFW.active.height = GLFW.active.storedHeight;
      GLFW.active.fullscreen = false;
    }
    if (resizeNeeded) {
      Browser.setCanvasSize(GLFW.active.width, GLFW.active.height);
    } else if (GLFW.active.width != width || GLFW.active.height != height || GLFW.active.framebufferWidth != framebufferWidth || GLFW.active.framebufferHeight != framebufferHeight) {
      GLFW.active.width = width;
      GLFW.active.height = height;
      GLFW.active.framebufferWidth = framebufferWidth;
      GLFW.active.framebufferHeight = framebufferHeight;
      GLFW.onWindowSizeChanged();
      GLFW.onFramebufferSizeChanged();
    }
  },
  onWindowSizeChanged: function onWindowSizeChanged() {
    if (!GLFW.active) return;
    if (GLFW.active.windowSizeFunc) {
      (function (a1, a2, a3) {
        return dynCall_viii.apply(null, [GLFW.active.windowSizeFunc, a1, a2, a3]);
      })(GLFW.active.id, GLFW.active.width, GLFW.active.height);
    }
  },
  onFramebufferSizeChanged: function onFramebufferSizeChanged() {
    if (!GLFW.active) return;
    if (GLFW.active.framebufferSizeFunc) {
      (function (a1, a2, a3) {
        return dynCall_viii.apply(null, [GLFW.active.framebufferSizeFunc, a1, a2, a3]);
      })(GLFW.active.id, GLFW.active.framebufferWidth, GLFW.active.framebufferHeight);
    }
  },
  onWindowContentScaleChanged: function onWindowContentScaleChanged(scale) {
    GLFW.scale = scale;
    if (!GLFW.active) return;
    if (GLFW.active.windowContentScaleFunc) {
      (function (a1, a2, a3) {
        return dynCall_viff.apply(null, [GLFW.active.windowContentScaleFunc, a1, a2, a3]);
      })(GLFW.active.id, GLFW.scale, GLFW.scale);
    }
  },
  getTime: function getTime() {
    return _emscripten_get_now() / 1e3;
  },
  setWindowTitle: function setWindowTitle(winid, title) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return;
    win.title = title;
    if (GLFW.active.id == win.id) {
      _emscripten_set_window_title(title);
    }
  },
  setJoystickCallback: function setJoystickCallback(cbfun) {
    var prevcbfun = GLFW.joystickFunc;
    GLFW.joystickFunc = cbfun;
    GLFW.refreshJoysticks();
    return prevcbfun;
  },
  joys: {},
  lastGamepadState: [],
  lastGamepadStateFrame: null,
  refreshJoysticks: function refreshJoysticks() {
    if (Browser.mainLoop.currentFrameNumber !== GLFW.lastGamepadStateFrame || !Browser.mainLoop.currentFrameNumber) {
      GLFW.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads || [];
      GLFW.lastGamepadStateFrame = Browser.mainLoop.currentFrameNumber;
      for (var joy = 0; joy < GLFW.lastGamepadState.length; ++joy) {
        var gamepad = GLFW.lastGamepadState[joy];
        if (gamepad) {
          if (!GLFW.joys[joy]) {
            out("glfw joystick connected:", joy);
            GLFW.joys[joy] = {
              id: stringToNewUTF8(gamepad.id),
              buttonsCount: gamepad.buttons.length,
              axesCount: gamepad.axes.length,
              buttons: _malloc2(gamepad.buttons.length),
              axes: _malloc2(gamepad.axes.length * 4)
            };
            if (GLFW.joystickFunc) {
              (function (a1, a2) {
                return dynCall_vii.apply(null, [GLFW.joystickFunc, a1, a2]);
              })(joy, 262145);
            }
          }
          var data = GLFW.joys[joy];
          for (var i = 0; i < gamepad.buttons.length; ++i) {
            HEAP8[data.buttons + i >> 0] = gamepad.buttons[i].pressed;
          }
          for (var i = 0; i < gamepad.axes.length; ++i) {
            HEAPF32[data.axes + i * 4 >> 2] = gamepad.axes[i];
          }
        } else {
          if (GLFW.joys[joy]) {
            out("glfw joystick disconnected", joy);
            if (GLFW.joystickFunc) {
              (function (a1, a2) {
                return dynCall_vii.apply(null, [GLFW.joystickFunc, a1, a2]);
              })(joy, 262146);
            }
            _free2(GLFW.joys[joy].id);
            _free2(GLFW.joys[joy].buttons);
            _free2(GLFW.joys[joy].axes);
            delete GLFW.joys[joy];
          }
        }
      }
    }
  },
  setKeyCallback: function setKeyCallback(winid, cbfun) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return null;
    var prevcbfun = win.keyFunc;
    win.keyFunc = cbfun;
    return prevcbfun;
  },
  setCharCallback: function setCharCallback(winid, cbfun) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return null;
    var prevcbfun = win.charFunc;
    win.charFunc = cbfun;
    return prevcbfun;
  },
  setMouseButtonCallback: function setMouseButtonCallback(winid, cbfun) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return null;
    var prevcbfun = win.mouseButtonFunc;
    win.mouseButtonFunc = cbfun;
    return prevcbfun;
  },
  setCursorPosCallback: function setCursorPosCallback(winid, cbfun) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return null;
    var prevcbfun = win.cursorPosFunc;
    win.cursorPosFunc = cbfun;
    return prevcbfun;
  },
  setScrollCallback: function setScrollCallback(winid, cbfun) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return null;
    var prevcbfun = win.scrollFunc;
    win.scrollFunc = cbfun;
    return prevcbfun;
  },
  setDropCallback: function setDropCallback(winid, cbfun) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return null;
    var prevcbfun = win.dropFunc;
    win.dropFunc = cbfun;
    return prevcbfun;
  },
  onDrop: function onDrop(event) {
    if (!GLFW.active || !GLFW.active.dropFunc) return;
    if (!event.dataTransfer || !event.dataTransfer.files || event.dataTransfer.files.length == 0) return;
    event.preventDefault();
    var filenames = _malloc2(event.dataTransfer.files.length * 4);
    var filenamesArray = [];
    var count = event.dataTransfer.files.length;
    var written = 0;
    var drop_dir = ".glfw_dropped_files";
    FS.createPath("/", drop_dir);
    function save(file) {
      var path = "/" + drop_dir + "/" + file.name.replace(/\//g, "_");
      var reader = new FileReader();
      reader.onloadend = function (e) {
        if (reader.readyState != 2) {
          ++written;
          out("failed to read dropped file: " + file.name + ": " + reader.error);
          return;
        }
        var data = e.target.result;
        FS.writeFile(path, new Uint8Array(data));
        if (++written === count) {
          (function (a1, a2, a3) {
            return dynCall_viii.apply(null, [GLFW.active.dropFunc, a1, a2, a3]);
          })(GLFW.active.id, count, filenames);
          for (var i = 0; i < filenamesArray.length; ++i) {
            _free2(filenamesArray[i]);
          }
          _free2(filenames);
        }
      };
      reader.readAsArrayBuffer(file);
      var filename = stringToNewUTF8(path);
      filenamesArray.push(filename);
      HEAPU32[filenames + i * 4 >> 2] = filename;
    }
    for (var i = 0; i < count; ++i) {
      save(event.dataTransfer.files[i]);
    }
    return false;
  },
  onDragover: function onDragover(event) {
    if (!GLFW.active || !GLFW.active.dropFunc) return;
    event.preventDefault();
    return false;
  },
  setWindowSizeCallback: function setWindowSizeCallback(winid, cbfun) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return null;
    var prevcbfun = win.windowSizeFunc;
    win.windowSizeFunc = cbfun;
    return prevcbfun;
  },
  setWindowCloseCallback: function setWindowCloseCallback(winid, cbfun) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return null;
    var prevcbfun = win.windowCloseFunc;
    win.windowCloseFunc = cbfun;
    return prevcbfun;
  },
  setWindowRefreshCallback: function setWindowRefreshCallback(winid, cbfun) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return null;
    var prevcbfun = win.windowRefreshFunc;
    win.windowRefreshFunc = cbfun;
    return prevcbfun;
  },
  onClickRequestPointerLock: function onClickRequestPointerLock(e) {
    if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
      Module["canvas"].requestPointerLock();
      e.preventDefault();
    }
  },
  setInputMode: function setInputMode(winid, mode, value) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return;
    switch (mode) {
      case 208897:
        {
          switch (value) {
            case 212993:
              {
                win.inputModes[mode] = value;
                Module["canvas"].removeEventListener("click", GLFW.onClickRequestPointerLock, true);
                Module["canvas"].exitPointerLock();
                break;
              }
            case 212994:
              {
                err("glfwSetInputMode called with GLFW_CURSOR_HIDDEN value not implemented");
                break;
              }
            case 212995:
              {
                win.inputModes[mode] = value;
                Module["canvas"].addEventListener("click", GLFW.onClickRequestPointerLock, true);
                Module["canvas"].requestPointerLock();
                break;
              }
            default:
              {
                err("glfwSetInputMode called with unknown value parameter value: ".concat(value));
                break;
              }
          }
          break;
        }
      case 208898:
        {
          err("glfwSetInputMode called with GLFW_STICKY_KEYS mode not implemented");
          break;
        }
      case 208899:
        {
          err("glfwSetInputMode called with GLFW_STICKY_MOUSE_BUTTONS mode not implemented");
          break;
        }
      case 208900:
        {
          err("glfwSetInputMode called with GLFW_LOCK_KEY_MODS mode not implemented");
          break;
        }
      case 3342341:
        {
          err("glfwSetInputMode called with GLFW_RAW_MOUSE_MOTION mode not implemented");
          break;
        }
      default:
        {
          err("glfwSetInputMode called with unknown mode parameter value: ".concat(mode));
          break;
        }
    }
  },
  getKey: function getKey(winid, key) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return 0;
    return win.keys[key];
  },
  getMouseButton: function getMouseButton(winid, button) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return 0;
    return (win.buttons & 1 << button) > 0;
  },
  getCursorPos: function getCursorPos(winid, x, y) {
    HEAPF64[x >> 3] = Browser.mouseX;
    HEAPF64[y >> 3] = Browser.mouseY;
  },
  getMousePos: function getMousePos(winid, x, y) {
    HEAP32[x >> 2] = Browser.mouseX;
    HEAP32[y >> 2] = Browser.mouseY;
  },
  setCursorPos: function setCursorPos(winid, x, y) {},
  getWindowPos: function getWindowPos(winid, x, y) {
    var wx = 0;
    var wy = 0;
    var win = GLFW.WindowFromId(winid);
    if (win) {
      wx = win.x;
      wy = win.y;
    }
    if (x) {
      HEAP32[x >> 2] = wx;
    }
    if (y) {
      HEAP32[y >> 2] = wy;
    }
  },
  setWindowPos: function setWindowPos(winid, x, y) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return;
    win.x = x;
    win.y = y;
  },
  getWindowSize: function getWindowSize(winid, width, height) {
    var ww = 0;
    var wh = 0;
    var win = GLFW.WindowFromId(winid);
    if (win) {
      ww = win.width;
      wh = win.height;
    }
    if (width) {
      HEAP32[width >> 2] = ww;
    }
    if (height) {
      HEAP32[height >> 2] = wh;
    }
  },
  setWindowSize: function setWindowSize(winid, width, height) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return;
    if (GLFW.active.id == win.id) {
      Browser.setCanvasSize(width, height);
    }
  },
  defaultWindowHints: function defaultWindowHints() {
    GLFW.hints = Object.assign({}, GLFW.defaultHints);
  },
  createWindow: function createWindow(width, height, title, monitor, share) {
    var i, id;
    for (i = 0; i < GLFW.windows.length && GLFW.windows[i] !== null; i++) {}
    if (i > 0) throw "glfwCreateWindow only supports one window at time currently";
    id = i + 1;
    if (width <= 0 || height <= 0) return 0;
    if (monitor) {
      Browser.requestFullscreen();
    } else {
      Browser.setCanvasSize(width, height);
    }
    for (i = 0; i < GLFW.windows.length && GLFW.windows[i] == null; i++) {}
    var useWebGL = GLFW.hints[139265] > 0;
    if (i == GLFW.windows.length) {
      if (useWebGL) {
        var contextAttributes = {
          antialias: GLFW.hints[135181] > 1,
          depth: GLFW.hints[135173] > 0,
          stencil: GLFW.hints[135174] > 0,
          alpha: GLFW.hints[135172] > 0
        };
        Module.ctx = Browser.createContext(Module["canvas"], true, true, contextAttributes);
      } else {
        Browser.init();
      }
    }
    if (!Module.ctx && useWebGL) return 0;
    var canvas = Module["canvas"];
    var win = new GLFW_Window(id, canvas.clientWidth, canvas.clientHeight, canvas.width, canvas.height, title, monitor, share);
    if (id - 1 == GLFW.windows.length) {
      GLFW.windows.push(win);
    } else {
      GLFW.windows[id - 1] = win;
    }
    GLFW.active = win;
    GLFW.adjustCanvasDimensions();
    return win.id;
  },
  destroyWindow: function destroyWindow(winid) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return;
    if (win.windowCloseFunc) {
      (function (a1) {
        return dynCall_vi.apply(null, [win.windowCloseFunc, a1]);
      })(win.id);
    }
    GLFW.windows[win.id - 1] = null;
    if (GLFW.active.id == win.id) GLFW.active = null;
    for (var i = 0; i < GLFW.windows.length; i++) if (GLFW.windows[i] !== null) return;
    Module.ctx = Browser.destroyContext(Module["canvas"], true, true);
  },
  swapBuffers: function swapBuffers(winid) {},
  requestFullscreen: function requestFullscreen(lockPointer, resizeCanvas) {
    Browser.lockPointer = lockPointer;
    Browser.resizeCanvas = resizeCanvas;
    if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
    if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
    var canvas = Module["canvas"];
    function fullscreenChange() {
      Browser.isFullscreen = false;
      var canvasContainer = canvas.parentNode;
      if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
        canvas.exitFullscreen = Browser.exitFullscreen;
        if (Browser.lockPointer) canvas.requestPointerLock();
        Browser.isFullscreen = true;
        if (Browser.resizeCanvas) {
          Browser.setFullscreenCanvasSize();
        } else {
          Browser.updateCanvasDimensions(canvas);
          Browser.updateResizeListeners();
        }
      } else {
        canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
        canvasContainer.parentNode.removeChild(canvasContainer);
        if (Browser.resizeCanvas) {
          Browser.setWindowedCanvasSize();
        } else {
          Browser.updateCanvasDimensions(canvas);
          Browser.updateResizeListeners();
        }
      }
      if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
      if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen);
    }
    if (!Browser.fullscreenHandlersInstalled) {
      Browser.fullscreenHandlersInstalled = true;
      document.addEventListener("fullscreenchange", fullscreenChange, false);
      document.addEventListener("mozfullscreenchange", fullscreenChange, false);
      document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
      document.addEventListener("MSFullscreenChange", fullscreenChange, false);
    }
    var canvasContainer = document.createElement("div");
    canvas.parentNode.insertBefore(canvasContainer, canvas);
    canvasContainer.appendChild(canvas);
    canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? function () {
      return canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
    } : null) || (canvasContainer["webkitRequestFullScreen"] ? function () {
      return canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
    } : null);
    canvasContainer.requestFullscreen();
  },
  updateCanvasDimensions: function updateCanvasDimensions(canvas, wNative, hNative) {
    var scale = GLFW.getHiDPIScale();
    if (wNative && hNative) {
      canvas.widthNative = wNative;
      canvas.heightNative = hNative;
    } else {
      wNative = canvas.widthNative;
      hNative = canvas.heightNative;
    }
    var w = wNative;
    var h = hNative;
    if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
      if (w / h < Module["forcedAspectRatio"]) {
        w = Math.round(h * Module["forcedAspectRatio"]);
      } else {
        h = Math.round(w / Module["forcedAspectRatio"]);
      }
    }
    if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
      var factor = Math.min(screen.width / w, screen.height / h);
      w = Math.round(w * factor);
      h = Math.round(h * factor);
    }
    if (Browser.resizeCanvas) {
      wNative = w;
      hNative = h;
    }
    var wNativeScaled = Math.floor(wNative * scale);
    var hNativeScaled = Math.floor(hNative * scale);
    if (canvas.width != wNativeScaled) canvas.width = wNativeScaled;
    if (canvas.height != hNativeScaled) canvas.height = hNativeScaled;
    if (typeof canvas.style != "undefined") {
      if (wNativeScaled != wNative || hNativeScaled != hNative) {
        canvas.style.setProperty("width", wNative + "px", "important");
        canvas.style.setProperty("height", hNative + "px", "important");
      } else {
        canvas.style.removeProperty("width");
        canvas.style.removeProperty("height");
      }
    }
  },
  calculateMouseCoords: function calculateMouseCoords(pageX, pageY) {
    var rect = Module["canvas"].getBoundingClientRect();
    var cw = Module["canvas"].clientWidth;
    var ch = Module["canvas"].clientHeight;
    var scrollX = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
    var scrollY = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
    var adjustedX = pageX - (scrollX + rect.left);
    var adjustedY = pageY - (scrollY + rect.top);
    adjustedX = adjustedX * (cw / rect.width);
    adjustedY = adjustedY * (ch / rect.height);
    return {
      x: adjustedX,
      y: adjustedY
    };
  },
  setWindowAttrib: function setWindowAttrib(winid, attrib, value) {
    var win = GLFW.WindowFromId(winid);
    if (!win) return;
    var isHiDPIAware = GLFW.isHiDPIAware();
    win.attributes[attrib] = value;
    if (isHiDPIAware !== GLFW.isHiDPIAware()) GLFW.adjustCanvasDimensions();
  },
  getDevicePixelRatio: function getDevicePixelRatio() {
    return typeof devicePixelRatio == "number" && devicePixelRatio || 1;
  },
  isHiDPIAware: function isHiDPIAware() {
    if (GLFW.active) return GLFW.active.attributes[139276] > 0;else return false;
  },
  adjustCanvasDimensions: function adjustCanvasDimensions() {
    var canvas = Module["canvas"];
    Browser.updateCanvasDimensions(canvas, canvas.clientWidth, canvas.clientHeight);
    Browser.updateResizeListeners();
  },
  getHiDPIScale: function getHiDPIScale() {
    return GLFW.isHiDPIAware() ? GLFW.scale : 1;
  },
  onDevicePixelRatioChange: function onDevicePixelRatioChange() {
    GLFW.onWindowContentScaleChanged(GLFW.getDevicePixelRatio());
    GLFW.adjustCanvasDimensions();
  },
  GLFW2ParamToGLFW3Param: function GLFW2ParamToGLFW3Param(param) {
    var table = {
      196609: 0,
      196610: 0,
      196611: 0,
      196612: 0,
      196613: 0,
      196614: 0,
      131073: 0,
      131074: 0,
      131075: 0,
      131076: 0,
      131077: 135169,
      131078: 135170,
      131079: 135171,
      131080: 135172,
      131081: 135173,
      131082: 135174,
      131083: 135183,
      131084: 135175,
      131085: 135176,
      131086: 135177,
      131087: 135178,
      131088: 135179,
      131089: 135180,
      131090: 0,
      131091: 135181,
      131092: 139266,
      131093: 139267,
      131094: 139270,
      131095: 139271,
      131096: 139272
    };
    return table[param];
  }
};
var _glfwCreateWindow = function _glfwCreateWindow(width, height, title, monitor, share) {
  return GLFW.createWindow(width, height, title, monitor, share);
};
var _glfwGetCurrentContext = function _glfwGetCurrentContext() {
  return GLFW.active ? GLFW.active.id : 0;
};
var _glfwGetCursorPos = function _glfwGetCursorPos(winid, x, y) {
  return GLFW.getCursorPos(winid, x, y);
};
var _glfwGetKey = function _glfwGetKey(winid, key) {
  return GLFW.getKey(winid, key);
};
var _glfwGetMouseButton = function _glfwGetMouseButton(winid, button) {
  return GLFW.getMouseButton(winid, button);
};
var _glfwGetPrimaryMonitor = function _glfwGetPrimaryMonitor() {
  return 1;
};
var _glfwGetVideoMode = function _glfwGetVideoMode(monitor) {
  return 0;
};
var _glfwGetWindowSize = function _glfwGetWindowSize(winid, width, height) {
  return GLFW.getWindowSize(winid, width, height);
};
var _glfwGetWindowUserPointer = function _glfwGetWindowUserPointer(winid) {
  var win = GLFW.WindowFromId(winid);
  if (!win) return 0;
  return win.userptr;
};
var _glfwInit = function _glfwInit() {
  if (GLFW.windows) return 1;
  GLFW.initialTime = GLFW.getTime();
  GLFW.defaultWindowHints();
  GLFW.windows = new Array();
  GLFW.active = null;
  GLFW.scale = GLFW.getDevicePixelRatio();
  window.addEventListener("gamepadconnected", GLFW.onGamepadConnected, true);
  window.addEventListener("gamepaddisconnected", GLFW.onGamepadDisconnected, true);
  window.addEventListener("keydown", GLFW.onKeydown, true);
  window.addEventListener("keypress", GLFW.onKeyPress, true);
  window.addEventListener("keyup", GLFW.onKeyup, true);
  window.addEventListener("blur", GLFW.onBlur, true);
  GLFW.devicePixelRatioMQL = window.matchMedia("(resolution: " + GLFW.getDevicePixelRatio() + "dppx)");
  GLFW.devicePixelRatioMQL.addEventListener("change", GLFW.onDevicePixelRatioChange);
  Module["canvas"].addEventListener("touchmove", GLFW.onMousemove, true);
  Module["canvas"].addEventListener("touchstart", GLFW.onMouseButtonDown, true);
  Module["canvas"].addEventListener("touchcancel", GLFW.onMouseButtonUp, true);
  Module["canvas"].addEventListener("touchend", GLFW.onMouseButtonUp, true);
  Module["canvas"].addEventListener("mousemove", GLFW.onMousemove, true);
  Module["canvas"].addEventListener("mousedown", GLFW.onMouseButtonDown, true);
  Module["canvas"].addEventListener("mouseup", GLFW.onMouseButtonUp, true);
  Module["canvas"].addEventListener("wheel", GLFW.onMouseWheel, true);
  Module["canvas"].addEventListener("mousewheel", GLFW.onMouseWheel, true);
  Module["canvas"].addEventListener("mouseenter", GLFW.onMouseenter, true);
  Module["canvas"].addEventListener("mouseleave", GLFW.onMouseleave, true);
  Module["canvas"].addEventListener("drop", GLFW.onDrop, true);
  Module["canvas"].addEventListener("dragover", GLFW.onDragover, true);
  Browser.requestFullscreen = GLFW.requestFullscreen;
  Browser.calculateMouseCoords = GLFW.calculateMouseCoords;
  Browser.updateCanvasDimensions = GLFW.updateCanvasDimensions;
  Browser.resizeListeners.push(function (width, height) {
    if (GLFW.isHiDPIAware()) {
      var canvas = Module["canvas"];
      GLFW.onCanvasResize(canvas.clientWidth, canvas.clientHeight, width, height);
    } else {
      GLFW.onCanvasResize(width, height, width, height);
    }
  });
  return 1;
};
var _glfwMakeContextCurrent = function _glfwMakeContextCurrent(winid) {};
var _glfwPollEvents = function _glfwPollEvents() {};
var _glfwSetCharCallback = function _glfwSetCharCallback(winid, cbfun) {
  return GLFW.setCharCallback(winid, cbfun);
};
var _glfwSetFramebufferSizeCallback = function _glfwSetFramebufferSizeCallback(winid, cbfun) {
  var win = GLFW.WindowFromId(winid);
  if (!win) return null;
  var prevcbfun = win.framebufferSizeFunc;
  win.framebufferSizeFunc = cbfun;
  return prevcbfun;
};
var _glfwSetInputMode = function _glfwSetInputMode(winid, mode, value) {
  GLFW.setInputMode(winid, mode, value);
};
var _glfwSetKeyCallback = function _glfwSetKeyCallback(winid, cbfun) {
  return GLFW.setKeyCallback(winid, cbfun);
};
var _glfwSetScrollCallback = function _glfwSetScrollCallback(winid, cbfun) {
  return GLFW.setScrollCallback(winid, cbfun);
};
var _glfwSetWindowUserPointer = function _glfwSetWindowUserPointer(winid, ptr) {
  var win = GLFW.WindowFromId(winid);
  if (!win) return;
  win.userptr = ptr;
};
var _glfwSwapBuffers = function _glfwSwapBuffers(winid) {
  return GLFW.swapBuffers(winid);
};
var _glfwSwapInterval = function _glfwSwapInterval(interval) {
  interval = Math.abs(interval);
  if (interval == 0) _emscripten_set_main_loop_timing(0, 0);else _emscripten_set_main_loop_timing(1, interval);
};
var _glfwTerminate = function _glfwTerminate() {
  window.removeEventListener("gamepadconnected", GLFW.onGamepadConnected, true);
  window.removeEventListener("gamepaddisconnected", GLFW.onGamepadDisconnected, true);
  window.removeEventListener("keydown", GLFW.onKeydown, true);
  window.removeEventListener("keypress", GLFW.onKeyPress, true);
  window.removeEventListener("keyup", GLFW.onKeyup, true);
  window.removeEventListener("blur", GLFW.onBlur, true);
  Module["canvas"].removeEventListener("touchmove", GLFW.onMousemove, true);
  Module["canvas"].removeEventListener("touchstart", GLFW.onMouseButtonDown, true);
  Module["canvas"].removeEventListener("touchcancel", GLFW.onMouseButtonUp, true);
  Module["canvas"].removeEventListener("touchend", GLFW.onMouseButtonUp, true);
  Module["canvas"].removeEventListener("mousemove", GLFW.onMousemove, true);
  Module["canvas"].removeEventListener("mousedown", GLFW.onMouseButtonDown, true);
  Module["canvas"].removeEventListener("mouseup", GLFW.onMouseButtonUp, true);
  Module["canvas"].removeEventListener("wheel", GLFW.onMouseWheel, true);
  Module["canvas"].removeEventListener("mousewheel", GLFW.onMouseWheel, true);
  Module["canvas"].removeEventListener("mouseenter", GLFW.onMouseenter, true);
  Module["canvas"].removeEventListener("mouseleave", GLFW.onMouseleave, true);
  Module["canvas"].removeEventListener("drop", GLFW.onDrop, true);
  Module["canvas"].removeEventListener("dragover", GLFW.onDragover, true);
  if (GLFW.devicePixelRatioMQL) GLFW.devicePixelRatioMQL.removeEventListener("change", GLFW.onDevicePixelRatioChange);
  Module["canvas"].width = Module["canvas"].height = 1;
  GLFW.windows = null;
  GLFW.active = null;
};
var _glfwWindowShouldClose = function _glfwWindowShouldClose(winid) {
  var win = GLFW.WindowFromId(winid);
  if (!win) return 0;
  return win.shouldClose;
};
var stringToUTF8OnStack = function stringToUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _stackAlloc(size);
  stringToUTF8(str, ret, size);
  return ret;
};
var runAndAbortIfError = function runAndAbortIfError(func) {
  try {
    return func();
  } catch (e) {
    abort(e);
  }
};
var Asyncify = {
  instrumentWasmImports: function instrumentWasmImports(imports) {
    var importPattern = /^(invoke_.*|__asyncjs__.*)$/;
    for (var _i4 = 0, _Object$entries = Object.entries(imports); _i4 < _Object$entries.length; _i4++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
        x = _Object$entries$_i[0],
        original = _Object$entries$_i[1];
      var sig = original.sig;
      if (typeof original == "function") {
        var isAsyncifyImport = original.isAsync || importPattern.test(x);
      }
    }
  },
  instrumentWasmExports: function instrumentWasmExports(exports) {
    var ret = {};
    var _loop = function _loop() {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
        x = _Object$entries2$_i[0],
        original = _Object$entries2$_i[1];
      if (typeof original == "function") {
        ret[x] = function () {
          Asyncify.exportCallStack.push(x);
          try {
            return original.apply(null, arguments);
          } finally {
            if (!ABORT) {
              var y = Asyncify.exportCallStack.pop();
              Asyncify.maybeStopUnwind();
            }
          }
        };
      } else {
        ret[x] = original;
      }
    };
    for (var _i5 = 0, _Object$entries2 = Object.entries(exports); _i5 < _Object$entries2.length; _i5++) {
      _loop();
    }
    return ret;
  },
  State: {
    Normal: 0,
    Unwinding: 1,
    Rewinding: 2,
    Disabled: 3
  },
  state: 0,
  StackSize: 4096,
  currData: null,
  handleSleepReturnValue: 0,
  exportCallStack: [],
  callStackNameToId: {},
  callStackIdToName: {},
  callStackId: 0,
  asyncPromiseHandlers: null,
  sleepCallbacks: [],
  getCallStackId: function getCallStackId(funcName) {
    var id = Asyncify.callStackNameToId[funcName];
    if (id === undefined) {
      id = Asyncify.callStackId++;
      Asyncify.callStackNameToId[funcName] = id;
      Asyncify.callStackIdToName[id] = funcName;
    }
    return id;
  },
  maybeStopUnwind: function maybeStopUnwind() {
    if (Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0) {
      Asyncify.state = Asyncify.State.Normal;
      runAndAbortIfError(_asyncify_stop_unwind2);
      if (typeof Fibers != "undefined") {
        Fibers.trampoline();
      }
    }
  },
  whenDone: function whenDone() {
    return new Promise(function (resolve, reject) {
      Asyncify.asyncPromiseHandlers = {
        resolve: resolve,
        reject: reject
      };
    });
  },
  allocateData: function allocateData() {
    var ptr = _malloc2(12 + Asyncify.StackSize);
    Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
    Asyncify.setDataRewindFunc(ptr);
    return ptr;
  },
  setDataHeader: function setDataHeader(ptr, stack, stackSize) {
    HEAPU32[ptr >> 2] = stack;
    HEAPU32[ptr + 4 >> 2] = stack + stackSize;
  },
  setDataRewindFunc: function setDataRewindFunc(ptr) {
    var bottomOfCallStack = Asyncify.exportCallStack[0];
    var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
    HEAP32[ptr + 8 >> 2] = rewindId;
  },
  getDataRewindFunc: function getDataRewindFunc(ptr) {
    var id = HEAP32[ptr + 8 >> 2];
    var name = Asyncify.callStackIdToName[id];
    var func = wasmExports[name];
    return func;
  },
  doRewind: function doRewind(ptr) {
    var start = Asyncify.getDataRewindFunc(ptr);
    return start();
  },
  handleSleep: function handleSleep(startAsync) {
    if (ABORT) return;
    if (Asyncify.state === Asyncify.State.Normal) {
      var reachedCallback = false;
      var reachedAfterCallback = false;
      startAsync(function () {
        var handleSleepReturnValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (ABORT) return;
        Asyncify.handleSleepReturnValue = handleSleepReturnValue;
        reachedCallback = true;
        if (!reachedAfterCallback) {
          return;
        }
        Asyncify.state = Asyncify.State.Rewinding;
        runAndAbortIfError(function () {
          return _asyncify_start_rewind2(Asyncify.currData);
        });
        if (typeof Browser != "undefined" && Browser.mainLoop.func) {
          Browser.mainLoop.resume();
        }
        var asyncWasmReturnValue,
          isError = false;
        try {
          asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
        } catch (err) {
          asyncWasmReturnValue = err;
          isError = true;
        }
        var handled = false;
        if (!Asyncify.currData) {
          var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
          if (asyncPromiseHandlers) {
            Asyncify.asyncPromiseHandlers = null;
            (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
            handled = true;
          }
        }
        if (isError && !handled) {
          throw asyncWasmReturnValue;
        }
      });
      reachedAfterCallback = true;
      if (!reachedCallback) {
        Asyncify.state = Asyncify.State.Unwinding;
        Asyncify.currData = Asyncify.allocateData();
        if (typeof Browser != "undefined" && Browser.mainLoop.func) {
          Browser.mainLoop.pause();
        }
        runAndAbortIfError(function () {
          return _asyncify_start_unwind2(Asyncify.currData);
        });
      }
    } else if (Asyncify.state === Asyncify.State.Rewinding) {
      Asyncify.state = Asyncify.State.Normal;
      runAndAbortIfError(_asyncify_stop_rewind2);
      _free2(Asyncify.currData);
      Asyncify.currData = null;
      Asyncify.sleepCallbacks.forEach(callUserCallback);
    } else {
      abort("invalid state: ".concat(Asyncify.state));
    }
    return Asyncify.handleSleepReturnValue;
  },
  handleAsync: function handleAsync(startAsync) {
    return Asyncify.handleSleep(function (wakeUp) {
      startAsync().then(wakeUp);
    });
  }
};
var FSNode = function FSNode(parent, name, mode, rdev) {
  if (!parent) {
    parent = this;
  }
  this.parent = parent;
  this.mount = parent.mount;
  this.mounted = null;
  this.id = FS.nextInode++;
  this.name = name;
  this.mode = mode;
  this.node_ops = {};
  this.stream_ops = {};
  this.rdev = rdev;
};
var readMode = 292 | 73;
var writeMode = 146;
Object.defineProperties(FSNode.prototype, {
  read: {
    get: function get() {
      return (this.mode & readMode) === readMode;
    },
    set: function set(val) {
      val ? this.mode |= readMode : this.mode &= ~readMode;
    }
  },
  write: {
    get: function get() {
      return (this.mode & writeMode) === writeMode;
    },
    set: function set(val) {
      val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
  },
  isFolder: {
    get: function get() {
      return FS.isDir(this.mode);
    }
  },
  isDevice: {
    get: function get() {
      return FS.isChrdev(this.mode);
    }
  }
});
FS.FSNode = FSNode;
FS.createPreloadedFile = FS_createPreloadedFile;
FS.staticInit();
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_unlink"] = FS.unlink;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
var GLctx;
for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));
var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
for (var i = 0; i < 288; ++i) {
  miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i + 1);
}
var miniTempWebGLIntBuffersStorage = new Int32Array(288);
for (var i = 0; i < 288; ++i) {
  miniTempWebGLIntBuffers[i] = miniTempWebGLIntBuffersStorage.subarray(0, i + 1);
}
Module["requestFullscreen"] = Browser.requestFullscreen;
Module["requestAnimationFrame"] = Browser.requestAnimationFrame;
Module["setCanvasSize"] = Browser.setCanvasSize;
Module["pauseMainLoop"] = Browser.mainLoop.pause;
Module["resumeMainLoop"] = Browser.mainLoop.resume;
Module["getUserMedia"] = Browser.getUserMedia;
Module["createContext"] = Browser.createContext;
var preloadedImages = {};
var preloadedAudios = {};
var wasmImports = {
  d: ___assert_fail,
  p: ___cxa_throw,
  n: ___syscall_fcntl64,
  Na: ___syscall_getcwd,
  Oa: ___syscall_ioctl,
  o: ___syscall_openat,
  Ra: __emscripten_get_now_is_monotonic,
  h: _abort,
  i: _emscripten_asm_const_int,
  Sa: _emscripten_date_now,
  Qa: _emscripten_get_now,
  sa: _emscripten_glActiveTexture,
  ra: _emscripten_glAttachShader,
  Sc: _emscripten_glBeginQuery,
  Pa: _emscripten_glBeginQueryEXT,
  tc: _emscripten_glBeginTransformFeedback,
  qa: _emscripten_glBindAttribLocation,
  oa: _emscripten_glBindBuffer,
  qc: _emscripten_glBindBufferBase,
  rc: _emscripten_glBindBufferRange,
  na: _emscripten_glBindFramebuffer,
  ma: _emscripten_glBindRenderbuffer,
  wb: _emscripten_glBindSampler,
  la: _emscripten_glBindTexture,
  nb: _emscripten_glBindTransformFeedback,
  yc: _emscripten_glBindVertexArray,
  Ba: _emscripten_glBindVertexArrayOES,
  ka: _emscripten_glBlendColor,
  ja: _emscripten_glBlendEquation,
  ia: _emscripten_glBlendEquationSeparate,
  ha: _emscripten_glBlendFunc,
  ga: _emscripten_glBlendFuncSeparate,
  Ec: _emscripten_glBlitFramebuffer,
  fa: _emscripten_glBufferData,
  da: _emscripten_glBufferSubData,
  ca: _emscripten_glCheckFramebufferStatus,
  ba: _emscripten_glClear,
  Ub: _emscripten_glClearBufferfi,
  Vb: _emscripten_glClearBufferfv,
  Xb: _emscripten_glClearBufferiv,
  Wb: _emscripten_glClearBufferuiv,
  aa: _emscripten_glClearColor,
  $: _emscripten_glClearDepthf,
  _: _emscripten_glClearStencil,
  Fb: _emscripten_glClientWaitSync,
  Z: _emscripten_glColorMask,
  Y: _emscripten_glCompileShader,
  X: _emscripten_glCompressedTexImage2D,
  Zc: _emscripten_glCompressedTexImage3D,
  W: _emscripten_glCompressedTexSubImage2D,
  Yc: _emscripten_glCompressedTexSubImage3D,
  Sb: _emscripten_glCopyBufferSubData,
  U: _emscripten_glCopyTexImage2D,
  T: _emscripten_glCopyTexSubImage2D,
  _c: _emscripten_glCopyTexSubImage3D,
  S: _emscripten_glCreateProgram,
  R: _emscripten_glCreateShader,
  Q: _emscripten_glCullFace,
  P: _emscripten_glDeleteBuffers,
  O: _emscripten_glDeleteFramebuffers,
  N: _emscripten_glDeleteProgram,
  Uc: _emscripten_glDeleteQueries,
  gb: _emscripten_glDeleteQueriesEXT,
  M: _emscripten_glDeleteRenderbuffers,
  yb: _emscripten_glDeleteSamplers,
  L: _emscripten_glDeleteShader,
  Gb: _emscripten_glDeleteSync,
  J: _emscripten_glDeleteTextures,
  mb: _emscripten_glDeleteTransformFeedbacks,
  xc: _emscripten_glDeleteVertexArrays,
  za: _emscripten_glDeleteVertexArraysOES,
  I: _emscripten_glDepthFunc,
  H: _emscripten_glDepthMask,
  G: _emscripten_glDepthRangef,
  F: _emscripten_glDetachShader,
  E: _emscripten_glDisable,
  D: _emscripten_glDisableVertexAttribArray,
  C: _emscripten_glDrawArrays,
  Kb: _emscripten_glDrawArraysInstanced,
  va: _emscripten_glDrawArraysInstancedANGLE,
  Wa: _emscripten_glDrawArraysInstancedARB,
  fd: _emscripten_glDrawArraysInstancedEXT,
  Ya: _emscripten_glDrawArraysInstancedNV,
  Mc: _emscripten_glDrawBuffers,
  dd: _emscripten_glDrawBuffersEXT,
  wa: _emscripten_glDrawBuffersWEBGL,
  B: _emscripten_glDrawElements,
  Jb: _emscripten_glDrawElementsInstanced,
  ua: _emscripten_glDrawElementsInstancedANGLE,
  Ua: _emscripten_glDrawElementsInstancedARB,
  Va: _emscripten_glDrawElementsInstancedEXT,
  ed: _emscripten_glDrawElementsInstancedNV,
  bd: _emscripten_glDrawRangeElements,
  A: _emscripten_glEnable,
  z: _emscripten_glEnableVertexAttribArray,
  Rc: _emscripten_glEndQuery,
  Ia: _emscripten_glEndQueryEXT,
  sc: _emscripten_glEndTransformFeedback,
  Ib: _emscripten_glFenceSync,
  y: _emscripten_glFinish,
  x: _emscripten_glFlush,
  zc: _emscripten_glFlushMappedBufferRange,
  w: _emscripten_glFramebufferRenderbuffer,
  v: _emscripten_glFramebufferTexture2D,
  Cc: _emscripten_glFramebufferTextureLayer,
  u: _emscripten_glFrontFace,
  t: _emscripten_glGenBuffers,
  r: _emscripten_glGenFramebuffers,
  Vc: _emscripten_glGenQueries,
  rb: _emscripten_glGenQueriesEXT,
  q: _emscripten_glGenRenderbuffers,
  zb: _emscripten_glGenSamplers,
  Se: _emscripten_glGenTextures,
  lb: _emscripten_glGenTransformFeedbacks,
  wc: _emscripten_glGenVertexArrays,
  ya: _emscripten_glGenVertexArraysOES,
  s: _emscripten_glGenerateMipmap,
  Re: _emscripten_glGetActiveAttrib,
  Qe: _emscripten_glGetActiveUniform,
  Nb: _emscripten_glGetActiveUniformBlockName,
  Ob: _emscripten_glGetActiveUniformBlockiv,
  Qb: _emscripten_glGetActiveUniformsiv,
  Pe: _emscripten_glGetAttachedShaders,
  Oe: _emscripten_glGetAttribLocation,
  Ne: _emscripten_glGetBooleanv,
  Ab: _emscripten_glGetBufferParameteri64v,
  Me: _emscripten_glGetBufferParameteriv,
  Nc: _emscripten_glGetBufferPointerv,
  Le: _emscripten_glGetError,
  Ke: _emscripten_glGetFloatv,
  ec: _emscripten_glGetFragDataLocation,
  Je: _emscripten_glGetFramebufferAttachmentParameteriv,
  Bb: _emscripten_glGetInteger64i_v,
  Db: _emscripten_glGetInteger64v,
  uc: _emscripten_glGetIntegeri_v,
  He: _emscripten_glGetIntegerv,
  $a: _emscripten_glGetInternalformativ,
  hb: _emscripten_glGetProgramBinary,
  Fe: _emscripten_glGetProgramInfoLog,
  Ge: _emscripten_glGetProgramiv,
  Da: _emscripten_glGetQueryObjecti64vEXT,
  Fa: _emscripten_glGetQueryObjectivEXT,
  Ca: _emscripten_glGetQueryObjectui64vEXT,
  Pc: _emscripten_glGetQueryObjectuiv,
  Ea: _emscripten_glGetQueryObjectuivEXT,
  Qc: _emscripten_glGetQueryiv,
  Ga: _emscripten_glGetQueryivEXT,
  Ee: _emscripten_glGetRenderbufferParameteriv,
  pb: _emscripten_glGetSamplerParameterfv,
  qb: _emscripten_glGetSamplerParameteriv,
  Ce: _emscripten_glGetShaderInfoLog,
  Be: _emscripten_glGetShaderPrecisionFormat,
  Ae: _emscripten_glGetShaderSource,
  De: _emscripten_glGetShaderiv,
  ze: _emscripten_glGetString,
  Tb: _emscripten_glGetStringi,
  Cb: _emscripten_glGetSynciv,
  ye: _emscripten_glGetTexParameterfv,
  we: _emscripten_glGetTexParameteriv,
  nc: _emscripten_glGetTransformFeedbackVarying,
  Pb: _emscripten_glGetUniformBlockIndex,
  Rb: _emscripten_glGetUniformIndices,
  te: _emscripten_glGetUniformLocation,
  ve: _emscripten_glGetUniformfv,
  ue: _emscripten_glGetUniformiv,
  fc: _emscripten_glGetUniformuiv,
  lc: _emscripten_glGetVertexAttribIiv,
  kc: _emscripten_glGetVertexAttribIuiv,
  qe: _emscripten_glGetVertexAttribPointerv,
  se: _emscripten_glGetVertexAttribfv,
  re: _emscripten_glGetVertexAttribiv,
  pe: _emscripten_glHint,
  db: _emscripten_glInvalidateFramebuffer,
  cb: _emscripten_glInvalidateSubFramebuffer,
  oe: _emscripten_glIsBuffer,
  ne: _emscripten_glIsEnabled,
  me: _emscripten_glIsFramebuffer,
  le: _emscripten_glIsProgram,
  Tc: _emscripten_glIsQuery,
  Xa: _emscripten_glIsQueryEXT,
  ke: _emscripten_glIsRenderbuffer,
  xb: _emscripten_glIsSampler,
  je: _emscripten_glIsShader,
  Hb: _emscripten_glIsSync,
  ie: _emscripten_glIsTexture,
  kb: _emscripten_glIsTransformFeedback,
  vc: _emscripten_glIsVertexArray,
  xa: _emscripten_glIsVertexArrayOES,
  he: _emscripten_glLineWidth,
  ge: _emscripten_glLinkProgram,
  Bc: _emscripten_glMapBufferRange,
  jb: _emscripten_glPauseTransformFeedback,
  fe: _emscripten_glPixelStorei,
  ee: _emscripten_glPolygonOffset,
  fb: _emscripten_glProgramBinary,
  eb: _emscripten_glProgramParameteri,
  Ha: _emscripten_glQueryCounterEXT,
  cd: _emscripten_glReadBuffer,
  de: _emscripten_glReadPixels,
  ce: _emscripten_glReleaseShaderCompiler,
  be: _emscripten_glRenderbufferStorage,
  Dc: _emscripten_glRenderbufferStorageMultisample,
  ib: _emscripten_glResumeTransformFeedback,
  ae: _emscripten_glSampleCoverage,
  tb: _emscripten_glSamplerParameterf,
  sb: _emscripten_glSamplerParameterfv,
  vb: _emscripten_glSamplerParameteri,
  ub: _emscripten_glSamplerParameteriv,
  $d: _emscripten_glScissor,
  _d: _emscripten_glShaderBinary,
  Zd: _emscripten_glShaderSource,
  Yd: _emscripten_glStencilFunc,
  Xd: _emscripten_glStencilFuncSeparate,
  Wd: _emscripten_glStencilMask,
  Vd: _emscripten_glStencilMaskSeparate,
  Ud: _emscripten_glStencilOp,
  Td: _emscripten_glStencilOpSeparate,
  Sd: _emscripten_glTexImage2D,
  ad: _emscripten_glTexImage3D,
  Rd: _emscripten_glTexParameterf,
  Qd: _emscripten_glTexParameterfv,
  Pd: _emscripten_glTexParameteri,
  Od: _emscripten_glTexParameteriv,
  bb: _emscripten_glTexStorage2D,
  ab: _emscripten_glTexStorage3D,
  Nd: _emscripten_glTexSubImage2D,
  $c: _emscripten_glTexSubImage3D,
  oc: _emscripten_glTransformFeedbackVaryings,
  Md: _emscripten_glUniform1f,
  Ld: _emscripten_glUniform1fv,
  Jd: _emscripten_glUniform1i,
  Id: _emscripten_glUniform1iv,
  dc: _emscripten_glUniform1ui,
  $b: _emscripten_glUniform1uiv,
  Hd: _emscripten_glUniform2f,
  Gd: _emscripten_glUniform2fv,
  Fd: _emscripten_glUniform2i,
  Ed: _emscripten_glUniform2iv,
  cc: _emscripten_glUniform2ui,
  _b: _emscripten_glUniform2uiv,
  Dd: _emscripten_glUniform3f,
  Cd: _emscripten_glUniform3fv,
  Bd: _emscripten_glUniform3i,
  Ad: _emscripten_glUniform3iv,
  bc: _emscripten_glUniform3ui,
  Zb: _emscripten_glUniform3uiv,
  zd: _emscripten_glUniform4f,
  yd: _emscripten_glUniform4fv,
  xd: _emscripten_glUniform4i,
  wd: _emscripten_glUniform4iv,
  ac: _emscripten_glUniform4ui,
  Yb: _emscripten_glUniform4uiv,
  Lb: _emscripten_glUniformBlockBinding,
  vd: _emscripten_glUniformMatrix2fv,
  Kc: _emscripten_glUniformMatrix2x3fv,
  Ic: _emscripten_glUniformMatrix2x4fv,
  ud: _emscripten_glUniformMatrix3fv,
  Jc: _emscripten_glUniformMatrix3x2fv,
  Gc: _emscripten_glUniformMatrix3x4fv,
  td: _emscripten_glUniformMatrix4fv,
  Hc: _emscripten_glUniformMatrix4x2fv,
  Fc: _emscripten_glUniformMatrix4x3fv,
  Oc: _emscripten_glUnmapBuffer,
  sd: _emscripten_glUseProgram,
  rd: _emscripten_glValidateProgram,
  qd: _emscripten_glVertexAttrib1f,
  pd: _emscripten_glVertexAttrib1fv,
  od: _emscripten_glVertexAttrib2f,
  nd: _emscripten_glVertexAttrib2fv,
  md: _emscripten_glVertexAttrib3f,
  ld: _emscripten_glVertexAttrib3fv,
  kd: _emscripten_glVertexAttrib4f,
  jd: _emscripten_glVertexAttrib4fv,
  ob: _emscripten_glVertexAttribDivisor,
  ta: _emscripten_glVertexAttribDivisorANGLE,
  Za: _emscripten_glVertexAttribDivisorARB,
  gd: _emscripten_glVertexAttribDivisorEXT,
  _a: _emscripten_glVertexAttribDivisorNV,
  jc: _emscripten_glVertexAttribI4i,
  hc: _emscripten_glVertexAttribI4iv,
  ic: _emscripten_glVertexAttribI4ui,
  gc: _emscripten_glVertexAttribI4uiv,
  mc: _emscripten_glVertexAttribIPointer,
  id: _emscripten_glVertexAttribPointer,
  hd: _emscripten_glViewport,
  Eb: _emscripten_glWaitSync,
  Ta: _emscripten_memcpy_js,
  Ka: _emscripten_resize_heap,
  c: _emscripten_run_script_int,
  Ac: _emscripten_set_main_loop,
  La: _environ_get,
  Ma: _environ_sizes_get,
  k: _fd_close,
  m: _fd_read,
  Ja: _fd_seek,
  j: _fd_write,
  Ue: _glfwCreateWindow,
  a: _glfwGetCurrentContext,
  e: _glfwGetCursorPos,
  Mb: _glfwGetKey,
  f: _glfwGetMouseButton,
  l: _glfwGetPrimaryMonitor,
  Te: _glfwGetVideoMode,
  Ie: _glfwGetWindowSize,
  Kd: _glfwGetWindowUserPointer,
  Ve: _glfwInit,
  Xc: _glfwMakeContextCurrent,
  Wc: _glfwPollEvents,
  V: _glfwSetCharCallback,
  xe: _glfwSetFramebufferSizeCallback,
  g: _glfwSetInputMode,
  ea: _glfwSetKeyCallback,
  pa: _glfwSetScrollCallback,
  Aa: _glfwSetWindowUserPointer,
  Lc: _glfwSwapBuffers,
  K: _glfwSwapInterval,
  b: _glfwTerminate,
  pc: _glfwWindowShouldClose
};
var wasmExports = createWasm();
var _wasm_call_ctors = function ___wasm_call_ctors() {
  return (_wasm_call_ctors = wasmExports["Xe"])();
};
var _main = Module["_main"] = function (a0, a1) {
  return (_main = Module["_main"] = wasmExports["Ze"])(a0, a1);
};
var _free2 = function _free(a0) {
  return (_free2 = wasmExports["_e"])(a0);
};
var _malloc2 = function _malloc(a0) {
  return (_malloc2 = wasmExports["$e"])(a0);
};
var _stackAlloc = function stackAlloc(a0) {
  return (_stackAlloc = wasmExports["af"])(a0);
};
var _cxa_is_pointer_type = function ___cxa_is_pointer_type(a0) {
  return (_cxa_is_pointer_type = wasmExports["bf"])(a0);
};
var dynCall_vi = Module["dynCall_vi"] = function (a0, a1) {
  return (dynCall_vi = Module["dynCall_vi"] = wasmExports["cf"])(a0, a1);
};
var dynCall_vidd = Module["dynCall_vidd"] = function (a0, a1, a2, a3) {
  return (dynCall_vidd = Module["dynCall_vidd"] = wasmExports["df"])(a0, a1, a2, a3);
};
var dynCall_viiiii = Module["dynCall_viiiii"] = function (a0, a1, a2, a3, a4, a5) {
  return (dynCall_viiiii = Module["dynCall_viiiii"] = wasmExports["ef"])(a0, a1, a2, a3, a4, a5);
};
var dynCall_vii = Module["dynCall_vii"] = function (a0, a1, a2) {
  return (dynCall_vii = Module["dynCall_vii"] = wasmExports["ff"])(a0, a1, a2);
};
var dynCall_viii = Module["dynCall_viii"] = function (a0, a1, a2, a3) {
  return (dynCall_viii = Module["dynCall_viii"] = wasmExports["gf"])(a0, a1, a2, a3);
};
var dynCall_v = Module["dynCall_v"] = function (a0) {
  return (dynCall_v = Module["dynCall_v"] = wasmExports["hf"])(a0);
};
var dynCall_viiii = Module["dynCall_viiii"] = function (a0, a1, a2, a3, a4) {
  return (dynCall_viiii = Module["dynCall_viiii"] = wasmExports["jf"])(a0, a1, a2, a3, a4);
};
var dynCall_viff = Module["dynCall_viff"] = function (a0, a1, a2, a3) {
  return (dynCall_viff = Module["dynCall_viff"] = wasmExports["kf"])(a0, a1, a2, a3);
};
var _asyncify_start_unwind2 = function _asyncify_start_unwind(a0) {
  return (_asyncify_start_unwind2 = wasmExports["lf"])(a0);
};
var _asyncify_stop_unwind2 = function _asyncify_stop_unwind() {
  return (_asyncify_stop_unwind2 = wasmExports["mf"])();
};
var _asyncify_start_rewind2 = function _asyncify_start_rewind(a0) {
  return (_asyncify_start_rewind2 = wasmExports["nf"])(a0);
};
var _asyncify_stop_rewind2 = function _asyncify_stop_rewind() {
  return (_asyncify_stop_rewind2 = wasmExports["of"])();
};
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createPath"] = FS.createPath;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_unlink"] = FS.unlink;
var calledRun;
dependenciesFulfilled = function runCaller() {
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller;
};
function callMain() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var entryFunction = _main;
  args.unshift(thisProgram);
  var argc = args.length;
  var argv = _stackAlloc((argc + 1) * 4);
  var argv_ptr = argv;
  args.forEach(function (arg) {
    HEAPU32[argv_ptr >> 2] = stringToUTF8OnStack(arg);
    argv_ptr += 4;
  });
  HEAPU32[argv_ptr >> 2] = 0;
  try {
    var ret = entryFunction(argc, argv);
    exitJS(ret, true);
    return ret;
  } catch (e) {
    return handleException(e);
  }
}
function run() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : arguments_;
  if (runDependencies > 0) {
    return;
  }
  preRun();
  if (runDependencies > 0) {
    return;
  }
  function doRun() {
    if (calledRun) return;
    calledRun = true;
    Module["calledRun"] = true;
    if (ABORT) return;
    initRuntime();
    preMain();
    if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
    if (shouldRunNow) callMain(args);
    postRun();
  }
  if (Module["setStatus"]) {
    Module["setStatus"]("Running...");
    setTimeout(function () {
      setTimeout(function () {
        Module["setStatus"]("");
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
if (Module["preInit"]) {
  if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
  while (Module["preInit"].length > 0) {
    Module["preInit"].pop()();
  }
}
var shouldRunNow = true;
if (Module["noInitialRun"]) shouldRunNow = false;
run();
