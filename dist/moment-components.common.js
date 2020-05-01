module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0735":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1584":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4dd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPrizePopup_vue_vue_type_style_index_0_id_ebb44b30_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5d2e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPrizePopup_vue_vue_type_style_index_0_id_ebb44b30_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPrizePopup_vue_vue_type_style_index_0_id_ebb44b30_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPrizePopup_vue_vue_type_style_index_0_id_ebb44b30_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5d2e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7c7c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/prize.icon.79f672db.svg";

/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f7f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPopupOverlay_vue_vue_type_style_index_0_id_4b2cc14e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1584");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPopupOverlay_vue_vue_type_style_index_0_id_4b2cc14e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPopupOverlay_vue_vue_type_style_index_0_id_4b2cc14e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPopupOverlay_vue_vue_type_style_index_0_id_4b2cc14e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f982":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCHelpPopup_vue_vue_type_style_index_0_id_ba857202_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0735");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCHelpPopup_vue_vue_type_style_index_0_id_ba857202_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCHelpPopup_vue_vue_type_style_index_0_id_ba857202_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCHelpPopup_vue_vue_type_style_index_0_id_ba857202_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d6a409b2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SCHelpPopup.vue?vue&type=template&id=ba857202&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"help-box"},[_c('button',{staticClass:"help-button",class:{hidden: !_vm.showButton},on:{"click":_vm.show}},[_vm._v("?")]),_c('SCPopupOverlay',{ref:"popupOverlay",staticClass:"help-overlay",attrs:{"canDismiss":_vm.onboarded},on:{"hide":function($event){return _vm.toggleButton($event)}}},[_c('div',{staticClass:"header-info",class:{ 'with-image': _vm.getHeaderImage }},[(_vm.getHeaderImage)?_c('img',{attrs:{"src":_vm.getHeaderImage,"alt":""}}):_c('span',[_vm._v(_vm._s(_vm.title))])]),_c('div',{staticClass:"tab-pills"},[(_vm.prize)?_c('div',{staticClass:"tab-title",class:{selected: _vm.isActiveTab(0)},on:{"click":function($event){return _vm.showTab(0)}}},[_c('img',{attrs:{"src":__webpack_require__("7c7c"),"alt":""}}),_vm._v(" Prizes ")]):_vm._e(),(_vm.howto)?_c('div',{staticClass:"tab-title",class:{selected: _vm.isActiveTab(1)},on:{"click":function($event){return _vm.showTab(1)}}},[_vm._v("How to")]):_vm._e()]),_c('div',{class:{ 'bottom-padder': !_vm.onboarded }},[(_vm.prize)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActiveTab(0)),expression:"isActiveTab(0)"}],staticClass:"tab-content"},[(_vm.prize.picture)?_c('div',{staticClass:"prize-image"},[_c('img',{attrs:{"src":_vm.prize.picture,"alt":""}})]):_vm._e(),(_vm.prize.title)?_c('div',{staticClass:"prize-headline"},[_vm._v(" "+_vm._s(_vm.prize.title)+" ")]):_vm._e(),(_vm.prize.description)?_c('div',{staticClass:"prize-text"},[_vm._v(" "+_vm._s(_vm.prize.description)+" ")]):_vm._e()]):_vm._e(),(_vm.howto)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActiveTab(1)),expression:"isActiveTab(1)"}],staticClass:"tab-content"},[_c('ul',_vm._l((_vm.howto),function(item,index){return _c('li',{key:index},[_vm._v(_vm._s(item))])}),0)]):_vm._e()]),(!_vm.onboarded)?_c('div',{staticClass:"start-bottom-overlay"},[_c('button',{staticClass:"main-button",on:{"click":_vm.completeOnboarding}},[_vm._v("Let's Start")])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SCHelpPopup.vue?vue&type=template&id=ba857202&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d6a409b2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SCPopupOverlay.vue?vue&type=template&id=4b2cc14e&scoped=true&
var SCPopupOverlayvue_type_template_id_4b2cc14e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup"},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"popup-overlay"},[_c('div',{staticClass:"popup-box"},[_c('div',{staticClass:"popup-header"},[(_vm.canDismiss)?_c('button',{staticClass:"close-button",on:{"click":_vm.hide}},[_c('svg',{attrs:{"aria-hidden":"true","focusable":"false","data-prefix":"fas","data-icon":"times","role":"img","width":"12","height":"12","viewBox":"0 0 12 12","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('rect',{attrs:{"x":"1.41406","width":"14","height":"2","rx":"1","transform":"rotate(45 1.41406 0)","fill":"#C4C4C4"}}),_c('rect',{attrs:{"x":"11.3137","y":"1.41431","width":"14","height":"2","rx":"1","transform":"rotate(135 11.3137 1.41431)","fill":"#C4C4C4"}})])]):_vm._e()]),_c('div',{staticClass:"popup-content"},[_vm._t("default")],2)])])])],1)}
var SCPopupOverlayvue_type_template_id_4b2cc14e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SCPopupOverlay.vue?vue&type=template&id=4b2cc14e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SCPopupOverlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SCPopupOverlayvue_type_script_lang_js_ = ({
  name: 'SCPopupOverlay',
  data: function data() {
    return {
      visible: false
    };
  },
  props: {
    canDismiss: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    /* Show the popup */
    show: function show() {
      this.visible = true;
      this.$emit('show', true);
      document.body.style.overflow = 'hidden';
    },

    /* Hide the popup */
    hide: function hide() {
      this.visible = false;
      this.$emit('hide', true);
      document.body.style.overflow = 'auto';
    }
  }
});
// CONCATENATED MODULE: ./src/components/SCPopupOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SCPopupOverlayvue_type_script_lang_js_ = (SCPopupOverlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SCPopupOverlay.vue?vue&type=style&index=0&id=4b2cc14e&scoped=true&lang=scss&
var SCPopupOverlayvue_type_style_index_0_id_4b2cc14e_scoped_true_lang_scss_ = __webpack_require__("f7f9");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/SCPopupOverlay.vue






/* normalize component */

var component = normalizeComponent(
  components_SCPopupOverlayvue_type_script_lang_js_,
  SCPopupOverlayvue_type_template_id_4b2cc14e_scoped_true_render,
  SCPopupOverlayvue_type_template_id_4b2cc14e_scoped_true_staticRenderFns,
  false,
  null,
  "4b2cc14e",
  null
  
)

/* harmony default export */ var SCPopupOverlay = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SCHelpPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SCHelpPopupvue_type_script_lang_js_ = ({
  name: 'SCHelpPopup',
  components: {
    SCPopupOverlay: SCPopupOverlay
  },
  props: {
    momentClass: {
      data: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    howto: {
      data: Array,
      required: false
    },
    prize: {
      data: Object,
      required: false
    },
    // TODO: define how title and header image are passed to the modal
    title: {
      type: String,
      required: true,
      default: ''
    }
  },
  data: function data() {
    return {
      showButton: true,
      activeTab: 0,
      onboarded: false,
      sessionKey: 'sc:help-onboarded'
    };
  },
  computed: {
    getHeaderImage: function getHeaderImage() {
      // TODO: define how title and header image are passed to the modal
      if (this.momentClass && this.momentClass.custom) {
        var r = this.momentClass.custom.popupHeaderImage;
        return r ? r : false;
      }

      return false;
    }
  },
  mounted: function mounted() {
    window.setTimeout(function () {
      if (!this.isOnboarded()) {
        this.show();
      }
    }.bind(this), 300);

    if (this.prize) {
      this.activeTab = 0;
    }

    if (!this.prize && this.howto) {
      this.activeTab = 1;
    }
  },
  methods: {
    /* Check if the popup has already been opened once */
    isOnboarded: function isOnboarded() {
      return window.sessionStorage.getItem(this.sessionKey) === 'true';
    },

    /* Save the state and close the popup */
    completeOnboarding: function completeOnboarding() {
      window.sessionStorage.setItem(this.sessionKey, true);
      this.hide();
    },

    /* Open the popup overlay */
    show: function show() {
      this.showButton = false;
      this.onboarded = this.isOnboarded();
      this.$refs.popupOverlay.show();
    },

    /* Close the popup overlay */
    hide: function hide() {
      this.$refs.popupOverlay.hide();
    },

    /* Switch tab */
    showTab: function showTab(number) {
      this.activeTab = number;
    },
    toggleButton: function toggleButton() {
      this.showButton = true;
    },
    isActiveTab: function isActiveTab(index) {
      return this.activeTab === index;
    }
  }
});
// CONCATENATED MODULE: ./src/components/SCHelpPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SCHelpPopupvue_type_script_lang_js_ = (SCHelpPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SCHelpPopup.vue?vue&type=style&index=0&id=ba857202&scoped=true&lang=scss&
var SCHelpPopupvue_type_style_index_0_id_ba857202_scoped_true_lang_scss_ = __webpack_require__("f982");

// CONCATENATED MODULE: ./src/components/SCHelpPopup.vue






/* normalize component */

var SCHelpPopup_component = normalizeComponent(
  components_SCHelpPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ba857202",
  null
  
)

/* harmony default export */ var SCHelpPopup = (SCHelpPopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d6a409b2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SCPrizePopup.vue?vue&type=template&id=ebb44b30&scoped=true&
var SCPrizePopupvue_type_template_id_ebb44b30_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"prize-box won"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.manualTrigger),expression:"manualTrigger"}],staticClass:"prize-button",on:{"click":_vm.show}},[_c('img',{staticClass:"icon",attrs:{"src":__webpack_require__("7c7c"),"alt":"prize"}})]),_c('SCPopupOverlay',{ref:"prizeOverlay",staticClass:"prize-overlay",attrs:{"canDismiss":true}},[_c('div',{staticClass:"header-info won",class:{ 'with-image': _vm.getHeaderImage }},[(_vm.getHeaderImage)?_c('img',{attrs:{"src":_vm.getHeaderImage,"alt":""}}):_c('span',[_vm._v("Congratulations! You have won a prize.")])]),_c('div',{staticClass:"bottom-padder"},[_c('div',{staticClass:"moment-infos"},[(_vm.prize.prizeImage)?_c('div',{staticClass:"prize-image"},[_c('img',{attrs:{"src":_vm.prize.prizeImage,"alt":""}})]):_vm._e(),(_vm.prize.prizeDescriptionHeadline)?_c('div',{staticClass:"prize-headline"},[_vm._v(" "+_vm._s(_vm.prize.prizeDescriptionHeadline)+" ")]):_vm._e(),(_vm.prize.prizeDescriptionText)?_c('div',{staticClass:"prize-text"},[_vm._v(" "+_vm._s(_vm.prize.prizeDescriptionText)+" ")]):_vm._e()])]),_c('div',{staticClass:"claim-prize-overlay"},[_c('a',{staticClass:"main-button",attrs:{"href":_vm.prize.claimButtonLink,"target":"_blank"}},[_c('img',{staticClass:"icon icon-left",attrs:{"src":__webpack_require__("7c7c"),"alt":""}}),_vm._v(" Claim Prize "),_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})])])])])],1)}
var SCPrizePopupvue_type_template_id_ebb44b30_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SCPrizePopup.vue?vue&type=template&id=ebb44b30&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SCPrizePopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SCPrizePopupvue_type_script_lang_js_ = ({
  name: 'SCPrizePopup',
  components: {
    SCPopupOverlay: SCPopupOverlay
  },
  props: {
    prize: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    manualTrigger: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    getHeaderImage: function getHeaderImage() {
      if (this.momentClass && this.momentClass.custom) {
        var r = this.momentClass.custom.prizeWonTitleImage;
        return r ? r : false;
      }

      return false;
    }
  },
  mounted: function mounted() {},
  methods: {
    /* Open the prize overlay */
    show: function show() {
      this.$refs.prizeOverlay.show();
    },

    /* Close the prize overlay */
    hide: function hide() {
      this.$refs.prizeOverlay.hide();
    }
  }
});
// CONCATENATED MODULE: ./src/components/SCPrizePopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SCPrizePopupvue_type_script_lang_js_ = (SCPrizePopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SCPrizePopup.vue?vue&type=style&index=0&id=ebb44b30&scoped=true&lang=scss&
var SCPrizePopupvue_type_style_index_0_id_ebb44b30_scoped_true_lang_scss_ = __webpack_require__("4dd7");

// CONCATENATED MODULE: ./src/components/SCPrizePopup.vue






/* normalize component */

var SCPrizePopup_component = normalizeComponent(
  components_SCPrizePopupvue_type_script_lang_js_,
  SCPrizePopupvue_type_template_id_ebb44b30_scoped_true_render,
  SCPrizePopupvue_type_template_id_ebb44b30_scoped_true_staticRenderFns,
  false,
  null,
  "ebb44b30",
  null
  
)

/* harmony default export */ var SCPrizePopup = (SCPrizePopup_component.exports);
// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__("fb98");

// CONCATENATED MODULE: ./src/lib.js

// import * as components from './components'


 // we will provide the components as Vue.js plugin

var ComponentLibrary = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    //eslint-disable-line
    // loop through all the exposed components
    // for (const name in components.default) {
    //   const cmp = components.default[name]
    //   // register the component to the provided Vue instance 
    //   Vue.component(cmp.name, cmp.default)
    // }
    Vue.component(SCHelpPopup.name, SCHelpPopup);
    Vue.component(SCPrizePopup.name, SCPrizePopup);
  }
}; // auto-register in case the project is not using a builidng system (eg. vue loaded from CDN)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
} // allows to import the components in other projects


/* harmony default export */ var lib = ({
  ComponentLibrary: ComponentLibrary,
  SCHelpPopup: SCHelpPopup,
  SCPrizePopup: SCPrizePopup
}); // for more see: https://www.xiegerts.com/post/creating-vue-component-library-plugin/
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ }),

/***/ "fb98":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=moment-components.common.js.map