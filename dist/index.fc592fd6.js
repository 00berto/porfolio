// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aQL8O":[function(require,module,exports,__globalThis) {
var Refresh = require("f11b6b8f6a1f6f0b");
var ErrorOverlay = require("f490fb404efab291");
window.__REACT_REFRESH_VERSION_RUNTIME = '0.14.2';
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener('parcelhmraccept', ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"aXrps":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ffab0c47fc592fd6";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8eKHs":[function(require,module,exports,__globalThis) {
var _basicscroll = require("basicscroll");
const boxes = document.querySelectorAll(".box");
// Direcciones de movimiento para cada box
const movimientos = [
    {
        from: "-100px",
        to: "100px"
    },
    {
        from: "0px",
        to: "250px"
    },
    {
        from: "100px",
        to: "-200px"
    },
    {
        from: "50px",
        to: "-150px"
    },
    {
        from: "-100px",
        to: "100px"
    },
    {
        from: "0px",
        to: "250px"
    },
    {
        from: "100px",
        to: "-200px"
    },
    {
        from: "50px",
        to: "-150px"
    }
];
boxes.forEach((box, index)=>{
    const movimiento = movimientos[index];
    const instance = _basicscroll.create({
        elem: box,
        from: "bottom-bottom",
        to: "top-top",
        direct: true,
        props: {
            "--r": {
                from: "0",
                to: "1turn"
            },
            "--tx": {
                from: movimiento.from,
                to: movimiento.to
            }
        }
    });
    instance.start();
});

},{"basicscroll":"b4ZC1"}],"b4ZC1":[function(require,module,exports,__globalThis) {
!function(t) {
    module.exports = t();
}(function() {
    return (function t(n, o, e) {
        function r(i, c) {
            if (!o[i]) {
                if (!n[i]) {
                    var f = undefined;
                    if (!c && f) return f(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                var s = o[i] = {
                    exports: {}
                };
                n[i][0].call(s.exports, function(t) {
                    return r(n[i][1][t] || t);
                }, s, s.exports, t, n, o, e);
            }
            return o[i].exports;
        }
        for(var u = undefined, i = 0; i < e.length; i++)r(e[i]);
        return r;
    })({
        1: [
            function(t, n, o) {
                n.exports = function(t) {
                    var n = 2.5949095;
                    return (t *= 2) < 1 ? t * t * ((n + 1) * t - n) * .5 : .5 * ((t -= 2) * t * ((n + 1) * t + n) + 2);
                };
            },
            {}
        ],
        2: [
            function(t, n, o) {
                n.exports = function(t) {
                    var n = 1.70158;
                    return t * t * ((n + 1) * t - n);
                };
            },
            {}
        ],
        3: [
            function(t, n, o) {
                n.exports = function(t) {
                    var n = 1.70158;
                    return --t * t * ((n + 1) * t + n) + 1;
                };
            },
            {}
        ],
        4: [
            function(t, n, o) {
                var e = t("./bounce-out");
                n.exports = function(t) {
                    return t < .5 ? .5 * (1 - e(1 - 2 * t)) : .5 * e(2 * t - 1) + .5;
                };
            },
            {
                "./bounce-out": 6
            }
        ],
        5: [
            function(t, n, o) {
                var e = t("./bounce-out");
                n.exports = function(t) {
                    return 1 - e(1 - t);
                };
            },
            {
                "./bounce-out": 6
            }
        ],
        6: [
            function(t, n, o) {
                n.exports = function(t) {
                    var n = t * t;
                    return t < 4 / 11 ? 7.5625 * n : t < 8 / 11 ? 9.075 * n - 9.9 * t + 3.4 : t < .9 ? 4356 / 361 * n - 35442 / 1805 * t + 16061 / 1805 : 10.8 * t * t - 20.52 * t + 10.72;
                };
            },
            {}
        ],
        7: [
            function(t, n, o) {
                n.exports = function(t) {
                    return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                };
            },
            {}
        ],
        8: [
            function(t, n, o) {
                n.exports = function(t) {
                    return 1 - Math.sqrt(1 - t * t);
                };
            },
            {}
        ],
        9: [
            function(t, n, o) {
                n.exports = function(t) {
                    return Math.sqrt(1 - --t * t);
                };
            },
            {}
        ],
        10: [
            function(t, n, o) {
                n.exports = function(t) {
                    return t < .5 ? 4 * t * t * t : .5 * Math.pow(2 * t - 2, 3) + 1;
                };
            },
            {}
        ],
        11: [
            function(t, n, o) {
                n.exports = function(t) {
                    return t * t * t;
                };
            },
            {}
        ],
        12: [
            function(t, n, o) {
                n.exports = function(t) {
                    var n = t - 1;
                    return n * n * n + 1;
                };
            },
            {}
        ],
        13: [
            function(t, n, o) {
                n.exports = function(t) {
                    return t < .5 ? .5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1;
                };
            },
            {}
        ],
        14: [
            function(t, n, o) {
                n.exports = function(t) {
                    return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1));
                };
            },
            {}
        ],
        15: [
            function(t, n, o) {
                n.exports = function(t) {
                    return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1;
                };
            },
            {}
        ],
        16: [
            function(t, n, o) {
                n.exports = function(t) {
                    return 0 === t || 1 === t ? t : t < .5 ? .5 * Math.pow(2, 20 * t - 10) : -0.5 * Math.pow(2, 10 - 20 * t) + 1;
                };
            },
            {}
        ],
        17: [
            function(t, n, o) {
                n.exports = function(t) {
                    return 0 === t ? t : Math.pow(2, 10 * (t - 1));
                };
            },
            {}
        ],
        18: [
            function(t, n, o) {
                n.exports = function(t) {
                    return 1 === t ? t : 1 - Math.pow(2, -10 * t);
                };
            },
            {}
        ],
        19: [
            function(t, n, o) {
                n.exports = {
                    backInOut: t("./back-in-out"),
                    backIn: t("./back-in"),
                    backOut: t("./back-out"),
                    bounceInOut: t("./bounce-in-out"),
                    bounceIn: t("./bounce-in"),
                    bounceOut: t("./bounce-out"),
                    circInOut: t("./circ-in-out"),
                    circIn: t("./circ-in"),
                    circOut: t("./circ-out"),
                    cubicInOut: t("./cubic-in-out"),
                    cubicIn: t("./cubic-in"),
                    cubicOut: t("./cubic-out"),
                    elasticInOut: t("./elastic-in-out"),
                    elasticIn: t("./elastic-in"),
                    elasticOut: t("./elastic-out"),
                    expoInOut: t("./expo-in-out"),
                    expoIn: t("./expo-in"),
                    expoOut: t("./expo-out"),
                    linear: t("./linear"),
                    quadInOut: t("./quad-in-out"),
                    quadIn: t("./quad-in"),
                    quadOut: t("./quad-out"),
                    quartInOut: t("./quart-in-out"),
                    quartIn: t("./quart-in"),
                    quartOut: t("./quart-out"),
                    quintInOut: t("./quint-in-out"),
                    quintIn: t("./quint-in"),
                    quintOut: t("./quint-out"),
                    sineInOut: t("./sine-in-out"),
                    sineIn: t("./sine-in"),
                    sineOut: t("./sine-out")
                };
            },
            {
                "./back-in": 2,
                "./back-in-out": 1,
                "./back-out": 3,
                "./bounce-in": 5,
                "./bounce-in-out": 4,
                "./bounce-out": 6,
                "./circ-in": 8,
                "./circ-in-out": 7,
                "./circ-out": 9,
                "./cubic-in": 11,
                "./cubic-in-out": 10,
                "./cubic-out": 12,
                "./elastic-in": 14,
                "./elastic-in-out": 13,
                "./elastic-out": 15,
                "./expo-in": 17,
                "./expo-in-out": 16,
                "./expo-out": 18,
                "./linear": 20,
                "./quad-in": 22,
                "./quad-in-out": 21,
                "./quad-out": 23,
                "./quart-in": 25,
                "./quart-in-out": 24,
                "./quart-out": 26,
                "./quint-in": 28,
                "./quint-in-out": 27,
                "./quint-out": 29,
                "./sine-in": 31,
                "./sine-in-out": 30,
                "./sine-out": 32
            }
        ],
        20: [
            function(t, n, o) {
                n.exports = function(t) {
                    return t;
                };
            },
            {}
        ],
        21: [
            function(t, n, o) {
                n.exports = function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1);
                };
            },
            {}
        ],
        22: [
            function(t, n, o) {
                n.exports = function(t) {
                    return t * t;
                };
            },
            {}
        ],
        23: [
            function(t, n, o) {
                n.exports = function(t) {
                    return -t * (t - 2);
                };
            },
            {}
        ],
        24: [
            function(t, n, o) {
                n.exports = function(t) {
                    return t < .5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
                };
            },
            {}
        ],
        25: [
            function(t, n, o) {
                n.exports = function(t) {
                    return Math.pow(t, 4);
                };
            },
            {}
        ],
        26: [
            function(t, n, o) {
                n.exports = function(t) {
                    return Math.pow(t - 1, 3) * (1 - t) + 1;
                };
            },
            {}
        ],
        27: [
            function(t, n, o) {
                n.exports = function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
                };
            },
            {}
        ],
        28: [
            function(t, n, o) {
                n.exports = function(t) {
                    return t * t * t * t * t;
                };
            },
            {}
        ],
        29: [
            function(t, n, o) {
                n.exports = function(t) {
                    return --t * t * t * t * t + 1;
                };
            },
            {}
        ],
        30: [
            function(t, n, o) {
                n.exports = function(t) {
                    return -0.5 * (Math.cos(Math.PI * t) - 1);
                };
            },
            {}
        ],
        31: [
            function(t, n, o) {
                n.exports = function(t) {
                    var n = Math.cos(t * Math.PI * .5);
                    return Math.abs(n) < 1e-14 ? 1 : 1 - n;
                };
            },
            {}
        ],
        32: [
            function(t, n, o) {
                n.exports = function(t) {
                    return Math.sin(t * Math.PI / 2);
                };
            },
            {}
        ],
        33: [
            function(t, n, o) {
                n.exports = function(t, n) {
                    n || (n = [
                        0,
                        ""
                    ]), t = String(t);
                    var o = parseFloat(t, 10);
                    return n[0] = o, n[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n;
                };
            },
            {}
        ],
        34: [
            function(t, n, o) {
                "use strict";
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.create = void 0;
                var e = u(t("parse-unit")), r = u(t("eases"));
                function u(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }
                function i(t) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t;
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                    })(t);
                }
                var c, f, a, s = [], p = "undefined" != typeof window, l = function() {
                    return (document.scrollingElement || document.documentElement).scrollTop;
                }, d = function() {
                    return window.innerHeight || window.outerHeight;
                }, m = function(t) {
                    return !1 === isNaN((0, e.default)(t)[0]);
                }, b = function(t) {
                    var n = (0, e.default)(t);
                    return {
                        value: n[0],
                        unit: n[1]
                    };
                }, h = function(t) {
                    return null !== String(t).match(/^[a-z]+-[a-z]+$/);
                }, w = function(t, n) {
                    return !0 === t ? n.elem : t instanceof HTMLElement == !0 ? n.direct : n.global;
                }, y = function(t, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l(), e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d(), r = n.getBoundingClientRect(), u = t.match(/^[a-z]+/)[0], i = t.match(/[a-z]+$/)[0], c = 0;
                    return "top" === i && (c -= 0), "middle" === i && (c -= e / 2), "bottom" === i && (c -= e), "top" === u && (c += r.top + o), "middle" === u && (c += r.top + o + r.height / 2), "bottom" === u && (c += r.top + o + r.height), "".concat(c, "px");
                }, v = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l(), o = t.getData(), e = o.to.value - o.from.value, r = n - o.from.value, u = r / (e / 100), i = Math.min(Math.max(u, 0), 100), c = w(o.direct, {
                        global: document.documentElement,
                        elem: o.elem,
                        direct: o.direct
                    }), f = Object.keys(o.props).reduce(function(t, n) {
                        var e = o.props[n], r = e.from.unit || e.to.unit, u = e.from.value - e.to.value, c = e.timing(i / 100), f = e.from.value - u * c, a = Math.round(1e4 * f) / 1e4;
                        return t[n] = a + r, t;
                    }, {}), a = u >= 0 && u <= 100, s = u < 0 || u > 100;
                    return !0 === a && o.inside(t, u, f), !0 === s && o.outside(t, u, f), {
                        elem: c,
                        props: f
                    };
                }, x = function(t, n) {
                    Object.keys(n).forEach(function(o) {
                        return function(t, n) {
                            t.style.setProperty(n.key, n.value);
                        }(t, {
                            key: o,
                            value: n[o]
                        });
                    });
                };
                o.create = function(t) {
                    var n = null, o = !1, e = {
                        isActive: function() {
                            return o;
                        },
                        getData: function() {
                            return n;
                        },
                        calculate: function() {
                            n = function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (null == (t = Object.assign({}, t)).inside && (t.inside = function() {}), null == t.outside && (t.outside = function() {}), null == t.direct && (t.direct = !1), null == t.track && (t.track = !0), null == t.props && (t.props = {}), null == t.from) throw new Error("Missing property `from`");
                                if (null == t.to) throw new Error("Missing property `to`");
                                if ("function" != typeof t.inside) throw new Error("Property `inside` must be undefined or a function");
                                if ("function" != typeof t.outside) throw new Error("Property `outside` must be undefined or a function");
                                if ("boolean" != typeof t.direct && t.direct instanceof HTMLElement == 0) throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");
                                if (!0 === t.direct && null == t.elem) throw new Error("Property `elem` is required when `direct` is true");
                                if ("boolean" != typeof t.track) throw new Error("Property `track` must be undefined or a boolean");
                                if ("object" !== i(t.props)) throw new Error("Property `props` must be undefined or an object");
                                if (null == t.elem) {
                                    if (!1 === m(t.from)) throw new Error("Property `from` must be a absolute value when no `elem` has been provided");
                                    if (!1 === m(t.to)) throw new Error("Property `to` must be a absolute value when no `elem` has been provided");
                                } else !0 === h(t.from) && (t.from = y(t.from, t.elem)), !0 === h(t.to) && (t.to = y(t.to, t.elem));
                                return t.from = b(t.from), t.to = b(t.to), t.props = Object.keys(t.props).reduce(function(n, o) {
                                    var e = Object.assign({}, t.props[o]);
                                    if (!1 === m(e.from)) throw new Error("Property `from` of prop must be a absolute value");
                                    if (!1 === m(e.to)) throw new Error("Property `from` of prop must be a absolute value");
                                    if (e.from = b(e.from), e.to = b(e.to), null == e.timing && (e.timing = r.default.linear), "string" != typeof e.timing && "function" != typeof e.timing) throw new Error("Property `timing` of prop must be undefined, a string or a function");
                                    if ("string" == typeof e.timing && null == r.default[e.timing]) throw new Error("Unknown timing for property `timing` of prop");
                                    return "string" == typeof e.timing && (e.timing = r.default[e.timing]), n[o] = e, n;
                                }, {}), t;
                            }(t);
                        },
                        update: function() {
                            var t = v(e), n = t.elem, o = t.props;
                            return x(n, o), o;
                        },
                        start: function() {
                            o = !0;
                        },
                        stop: function() {
                            o = !1;
                        },
                        destroy: function() {
                            s[u] = void 0;
                        }
                    }, u = s.push(e) - 1;
                    return e.calculate(), e;
                }, !0 === p ? (!function t(n, o) {
                    var e = function() {
                        requestAnimationFrame(function() {
                            return t(n, o);
                        });
                    }, r = function(t) {
                        return t.filter(function(t) {
                            return null != t && t.isActive();
                        });
                    }(s);
                    if (0 === r.length) return e();
                    var u = l();
                    if (o === u) return e();
                    o = u, r.map(function(t) {
                        return v(t, u);
                    }).forEach(function(t) {
                        var n = t.elem, o = t.props;
                        return x(n, o);
                    }), e();
                }(), window.addEventListener("resize", (c = function() {
                    (function(t) {
                        return t.filter(function(t) {
                            return null != t && t.getData().track;
                        });
                    })(s).forEach(function(t) {
                        t.calculate(), t.update();
                    });
                }, f = 50, a = null, function() {
                    for(var t = arguments.length, n = new Array(t), o = 0; o < t; o++)n[o] = arguments[o];
                    clearTimeout(a), a = setTimeout(function() {
                        return c.apply(void 0, n);
                    }, f);
                }))) : console.warn("basicScroll is not executing because you are using it in an environment without a `window` object");
            },
            {
                eases: 19,
                "parse-unit": 33
            }
        ]
    }, {}, [
        34
    ])(34);
});

},{}]},["aQL8O","aXrps","8eKHs"], "8eKHs", "parcelRequire94c2")

//# sourceMappingURL=index.fc592fd6.js.map
