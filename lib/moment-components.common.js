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

/***/ "04a8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "08d3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "14f3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scHelpPopup_vue_vue_type_style_index_0_id_02b43500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6810");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scHelpPopup_vue_vue_type_style_index_0_id_02b43500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scHelpPopup_vue_vue_type_style_index_0_id_02b43500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scHelpPopup_vue_vue_type_style_index_0_id_02b43500_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "21cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "273a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaPopup_vue_vue_type_style_index_0_id_64c33cb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("81c1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaPopup_vue_vue_type_style_index_0_id_64c33cb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaPopup_vue_vue_type_style_index_0_id_64c33cb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaPopup_vue_vue_type_style_index_0_id_64c33cb4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2a55":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3752":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3c4e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "3d92":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaSocial_vue_vue_type_style_index_0_id_6a07d767_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d83c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaSocial_vue_vue_type_style_index_0_id_6a07d767_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaSocial_vue_vue_type_style_index_0_id_6a07d767_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaSocial_vue_vue_type_style_index_0_id_6a07d767_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6810":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6ae7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7a1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPrizePopup_vue_vue_type_style_index_0_id_dfb97816_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a55");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPrizePopup_vue_vue_type_style_index_0_id_dfb97816_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPrizePopup_vue_vue_type_style_index_0_id_dfb97816_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPrizePopup_vue_vue_type_style_index_0_id_dfb97816_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "81c1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "957c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaFeedback_vue_vue_type_style_index_0_id_136e196a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c20d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaFeedback_vue_vue_type_style_index_0_id_136e196a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaFeedback_vue_vue_type_style_index_0_id_136e196a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaFeedback_vue_vue_type_style_index_0_id_136e196a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "a098":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scFooter_vue_vue_type_style_index_0_id_da71b5fc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3752");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scFooter_vue_vue_type_style_index_0_id_da71b5fc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scFooter_vue_vue_type_style_index_0_id_da71b5fc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scFooter_vue_vue_type_style_index_0_id_da71b5fc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a294":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPopupOverlay_vue_vue_type_style_index_0_id_0fe5f43c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("04a8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPopupOverlay_vue_vue_type_style_index_0_id_0fe5f43c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPopupOverlay_vue_vue_type_style_index_0_id_0fe5f43c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPopupOverlay_vue_vue_type_style_index_0_id_0fe5f43c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");

/***/ }),

/***/ "a65c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c20d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c763":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaCustom_vue_vue_type_style_index_0_id_57298cd0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6ae7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaCustom_vue_vue_type_style_index_0_id_57298cd0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaCustom_vue_vue_type_style_index_0_id_57298cd0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaCustom_vue_vue_type_style_index_0_id_57298cd0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d48b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaWebsite_vue_vue_type_style_index_0_id_6144e888_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("21cd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaWebsite_vue_vue_type_style_index_0_id_6144e888_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaWebsite_vue_vue_type_style_index_0_id_6144e888_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCtaWebsite_vue_vue_type_style_index_0_id_6144e888_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d7df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scSponsorBanner_vue_vue_type_style_index_0_id_60d139cb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("08d3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scSponsorBanner_vue_vue_type_style_index_0_id_60d139cb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scSponsorBanner_vue_vue_type_style_index_0_id_60d139cb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scSponsorBanner_vue_vue_type_style_index_0_id_60d139cb_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d83c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f008":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCta_vue_vue_type_style_index_0_id_13939823_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a65c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCta_vue_vue_type_style_index_0_id_13939823_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCta_vue_vue_type_style_index_0_id_13939823_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scCta_vue_vue_type_style_index_0_id_13939823_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "scHelpPopup", function() { return /* reexport */ components_scHelpPopup; });
__webpack_require__.d(__webpack_exports__, "scPrizePopup", function() { return /* reexport */ components_scPrizePopup; });
__webpack_require__.d(__webpack_exports__, "scPopupOverlay", function() { return /* reexport */ components_scPopupOverlay; });
__webpack_require__.d(__webpack_exports__, "scSponsorBanner", function() { return /* reexport */ components_scSponsorBanner; });
__webpack_require__.d(__webpack_exports__, "scCtaPopup", function() { return /* reexport */ components_scCta; });
__webpack_require__.d(__webpack_exports__, "scFooter", function() { return /* reexport */ components_scFooter; });

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "scHelpPopup", function() { return components_scHelpPopup; });
__webpack_require__.d(components_namespaceObject, "scPrizePopup", function() { return components_scPrizePopup; });
__webpack_require__.d(components_namespaceObject, "scPopupOverlay", function() { return components_scPopupOverlay; });
__webpack_require__.d(components_namespaceObject, "scCtaPopup", function() { return components_scCta; });
__webpack_require__.d(components_namespaceObject, "scSponsorBanner", function() { return components_scSponsorBanner; });
__webpack_require__.d(components_namespaceObject, "scFooter", function() { return components_scFooter; });

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scHelpPopup/scHelpPopup.vue?vue&type=template&id=02b43500&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"help-box"},[_c('button',{staticClass:"help-button",class:{hidden: !_vm.showButton},on:{"click":_vm.show}},[_vm._v("?")]),_c('SCPopupOverlay',{ref:"popupOverlay",attrs:{"canDismiss":_vm.onboarded},on:{"hide":function($event){return _vm.toggleButton($event)}}},[_c('div',{staticClass:"header-info",class:{ 'with-image': _vm.getHeaderImage }},[(_vm.getHeaderImage)?_c('img',{attrs:{"src":_vm.getHeaderImage,"alt":""}}):_c('span',[_vm._v(_vm._s(_vm.options.title))])]),_c('div',{staticClass:"tab-pills"},[(_vm.prize)?_c('div',{staticClass:"tab-title",class:{selected: _vm.isActiveTab(0)},on:{"click":function($event){return _vm.showTab(0)}}},[_c('svg',{attrs:{"width":"21","height":"22","viewBox":"0 0 21 22","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z","fill":"url(#paint0_linear)"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"0.307617","y1":"10.6874","x2":"20.579","y2":"10.6874","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#EEC868"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#E49358"}})],1)],1)]),_vm._v(" "+_vm._s(_vm.t('scComponents.help.tabs.prize'))+" ")]):_vm._e(),(_vm.howto)?_c('div',{staticClass:"tab-title",class:{selected: _vm.isActiveTab(1)},on:{"click":function($event){return _vm.showTab(1)}}},[_vm._v(_vm._s(_vm.t('scComponents.help.tabs.howto')))]):_vm._e(),(_vm.share)?_c('div',{staticClass:"tab-title",class:{selected: _vm.isActiveTab(2)},on:{"click":function($event){return _vm.showTab(2)}}},[_vm._v(_vm._s(_vm.t('scComponents.help.tabs.share')))]):_vm._e()]),_c('div',{class:{ 'bottom-padder': !_vm.onboarded }},[(_vm.prize)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActiveTab(0)),expression:"isActiveTab(0)"}],staticClass:"tab-content",attrs:{"dir":"auto"}},[(_vm.prize.picture)?_c('div',{staticClass:"prize-image"},[_c('img',{attrs:{"src":_vm.prize.picture,"alt":""}})]):_vm._e(),(_vm.prize.title)?_c('div',{staticClass:"prize-headline"},[_vm._v(" "+_vm._s(_vm.prize.title)+" ")]):_vm._e(),(_vm.prize.description)?_c('div',{staticClass:"prize-text"},[_vm._v(" "+_vm._s(_vm.prize.description)+" ")]):_vm._e(),(_vm.prize.learnMoreTitle && _vm.prize.learnMoreUrl)?_c('div',{staticClass:"prize-learnmore"},[_c('a',{attrs:{"href":_vm.prize.learnMoreUrl,"target":"learnmore","rel":"nofollow noopener noreferrer"}},[_vm._v(_vm._s(_vm.prize.learnMoreTitle))])]):_vm._e()]):_vm._e(),(_vm.howto)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActiveTab(1)),expression:"isActiveTab(1)"}],staticClass:"tab-content",attrs:{"dir":"auto"}},[_c('ul',_vm._l((_vm.howto),function(item,index){return _c('li',{key:index},[_vm._v(_vm._s(item))])}),0)]):_vm._e(),(_vm.share)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActiveTab(2)),expression:"isActiveTab(2)"}],staticClass:"tab-content",attrs:{"dir":"auto"}},[_c('p',[_vm._v(_vm._s(_vm.t('scComponents.help.share.title')))]),_c('div',{staticClass:"input-group",on:{"click":function($event){return _vm.copyToClipboard($event)}}},[_c('div',{staticClass:"input-group-prepend",class:_vm.buttonClasses},[_c('span',[(!_vm.copiedToClipboard)?_c('svg',{attrs:{"width":"24","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.142 19.9639C12.6358 19.9639 11.1586 19.3846 10 18.255L7.71183 15.9668C7.2484 15.5034 7.2484 14.7792 7.71183 14.3158C8.17527 13.8524 8.89939 13.8524 9.36282 14.3158L11.651 16.604C13.0413 17.9943 15.2716 17.9943 16.633 16.604C18.0233 15.2137 18.0233 12.9834 16.633 11.6221L14.3447 9.33388C13.8813 8.87044 13.8813 8.14632 14.3447 7.68289C14.8082 7.21945 15.5323 7.21945 15.9957 7.68289L18.2839 9.9711C20.5722 12.2593 20.5722 15.9668 18.2839 18.226C17.1254 19.3846 15.6482 19.9639 14.142 19.9639Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M4.81538 12.5779C4.52573 12.5779 4.23609 12.4621 4.00437 12.2303L1.71616 9.9711C-0.572053 7.68288 -0.572053 3.9754 1.71616 1.71616C4.00437 -0.572053 7.71185 -0.572053 9.9711 1.71616L12.2593 4.00437C12.7227 4.4678 12.7227 5.19192 12.2593 5.65536C11.7959 6.11879 11.0718 6.11879 10.6083 5.65536L8.32011 3.36715C7.65392 2.70096 6.75601 2.32442 5.82914 2.32442C4.87331 2.32442 4.00437 2.70096 3.33818 3.36715C1.94788 4.75745 1.94788 6.98773 3.33818 8.34907L5.62639 10.6373C6.08983 11.1007 6.08983 11.8248 5.62639 12.2883C5.42364 12.4621 5.10503 12.5779 4.81538 12.5779Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M11.8535 12.9834C11.5639 12.9834 11.2742 12.8676 11.0425 12.6358L7.30607 8.92837C6.84264 8.46493 6.84264 7.74081 7.30607 7.27738C7.76951 6.81394 8.49362 6.81394 8.95706 7.27738L12.6935 11.0138C13.1569 11.4773 13.1569 12.2014 12.6935 12.6648C12.4618 12.8676 12.1721 12.9834 11.8535 12.9834Z","fill":"var(--btn-text-color-1)"}})]):_c('svg',{attrs:{"width":"24","height":"20","viewBox":"0 0 24 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M3.25948 10.9476L9.16157 17L18.5233 1.79999","stroke":"white","stroke-width":"2.7","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),_c('input',{staticClass:"form-control",attrs:{"type":"text","id":"copy-to-clipboard","disabled":""},domProps:{"value":_vm.share}})])]):_vm._e()]),(!_vm.onboarded)?_c('div',{staticClass:"start-bottom-overlay"},[_c('div',[_c('label',{staticClass:"mc-checkbox"},[_c('span',{staticStyle:{"word-break":"break-all"}},[_vm._v(_vm._s(_vm.t('scComponents.help.accept'))+" "),_c('a',{attrs:{"href":"https://www.stagecast.io/terms-and-conditions","target":"termsofservice","rel":"nofollow noopener noreferrer"},domProps:{"innerHTML":_vm._s(_vm.t('scComponents.help.tos'))}}),(_vm.prize && _vm.prize.rulesDocUrl)?_c('span',[_vm._v(" "+_vm._s(_vm.t('scComponents.help.and'))+" "),_c('a',{attrs:{"href":_vm.prize.rulesDocUrl,"download":_vm.t('scComponents.help.prizeterms')}},[_vm._v(_vm._s(_vm.t('scComponents.help.prizeterms')))])]):_vm._e()]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkbox),expression:"checkbox"}],attrs:{"type":"checkbox","value":"true"},domProps:{"checked":Array.isArray(_vm.checkbox)?_vm._i(_vm.checkbox,"true")>-1:(_vm.checkbox)},on:{"change":function($event){var $$a=_vm.checkbox,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="true",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkbox=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkbox=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkbox=$$c}}}}),_c('span',{staticClass:"mc-checkmark"})])]),_c('button',{staticClass:"main-button",class:{disabled: !_vm.checkbox},attrs:{"disabled":!_vm.checkbox},on:{"click":_vm.completeOnboarding}},[_vm._v(_vm._s(_vm.t('scComponents.help.start')))])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scHelpPopup/scHelpPopup.vue?vue&type=template&id=02b43500&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scPopupOverlay/scPopupOverlay.vue?vue&type=template&id=0fe5f43c&scoped=true&
var scPopupOverlayvue_type_template_id_0fe5f43c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"popup-overlay"}),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"popup-container"},[_c('div',{staticClass:"popup-box"},[_c('div',{staticClass:"popup-header"},[(_vm.canDismiss)?_c('button',{staticClass:"close-button",on:{"click":_vm.hide}},[_c('svg',{attrs:{"width":"12","height":"12","viewBox":"0 0 12 12","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('rect',{attrs:{"x":"1.41406","width":"14","height":"2","rx":"1","transform":"rotate(45 1.41406 0)","fill":"#C4C4C4"}}),_c('rect',{attrs:{"x":"11.3137","y":"1.41431","width":"14","height":"2","rx":"1","transform":"rotate(135 11.3137 1.41431)","fill":"#C4C4C4"}})])]):_vm._e()]),_c('div',{staticClass:"popup-content"},[_vm._t("default")],2)])])])],1)}
var scPopupOverlayvue_type_template_id_0fe5f43c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scPopupOverlay/scPopupOverlay.vue?vue&type=template&id=0fe5f43c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scPopupOverlay/scPopupOverlay.vue?vue&type=script&lang=js&
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
/* harmony default export */ var scPopupOverlayvue_type_script_lang_js_ = ({
  name: 'ScPopupOverlay',
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
// CONCATENATED MODULE: ./src/components/scPopupOverlay/scPopupOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var scPopupOverlay_scPopupOverlayvue_type_script_lang_js_ = (scPopupOverlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scPopupOverlay/scPopupOverlay.vue?vue&type=style&index=0&id=0fe5f43c&scoped=true&lang=scss&
var scPopupOverlayvue_type_style_index_0_id_0fe5f43c_scoped_true_lang_scss_ = __webpack_require__("a294");

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

// CONCATENATED MODULE: ./src/components/scPopupOverlay/scPopupOverlay.vue






/* normalize component */

var component = normalizeComponent(
  scPopupOverlay_scPopupOverlayvue_type_script_lang_js_,
  scPopupOverlayvue_type_template_id_0fe5f43c_scoped_true_render,
  scPopupOverlayvue_type_template_id_0fe5f43c_scoped_true_staticRenderFns,
  false,
  null,
  "0fe5f43c",
  null
  
)

/* harmony default export */ var scPopupOverlay = (component.exports);
// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__("fb98");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scHelpPopup/scHelpPopup.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


/* harmony default export */ var scHelpPopupvue_type_script_lang_js_ = ({
  name: 'ScHelpPopup',
  components: {
    SCPopupOverlay: scPopupOverlay
  },
  props: {
    options: {
      data: Object,
      required: false,
      default: function _default() {
        return {
          title: 'Moment Help',
          headerImg: null,
          tabs: {}
        };
      }
    },
    howto: Array,
    share: String,
    prize: Object
  },
  data: function data() {
    return {
      showButton: true,
      activeTab: 0,
      onboarded: false,
      sessionKey: 'sc:help-onboarded',
      copiedToClipboard: false,
      checkbox: false
    };
  },
  computed: {
    buttonClasses: function buttonClasses() {
      return {
        'bg-dark': !this.copiedToClipboard,
        'bg-green': this.copiedToClipboard
      };
    },
    getHeaderImage: function getHeaderImage() {
      if (this.options) {
        var r = this.options.headerImg;
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
    var tabs = ['prize', 'howto', 'share'];

    for (var index in tabs) {
      if (this[tabs[index]]) {
        this.showTab(parseInt(index));
        break;
      }
    }
  },
  methods: {
    /* Check if the popup has already been opened once */
    isOnboarded: function isOnboarded() {
      return window.sessionStorage.getItem(this.sessionKey) === 'true';
    },

    /* Save the state and close the popup */
    completeOnboarding: function completeOnboarding() {
      if (!this.checkbox) {
        return;
      }

      window.sessionStorage.setItem(this.sessionKey, true);
      this.hide();
    },

    /* Open the popup overlay */
    show: function show() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.showButton = false;
                _this.onboarded = _this.isOnboarded();

                _this.$refs.popupOverlay.show();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    openPrizeRules: function openPrizeRules() {
      var windowReference = window.open('', 'competitionrules');
      windowReference.location = this.prize.rulesDocUrl;
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
    },
    copyToClipboard: function copyToClipboard() {
      var copyText = document.getElementById('copy-to-clipboard');
      copyText.removeAttribute("disabled");
      copyText.select();
      /* For mobile devices */

      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
      this.copiedToClipboard = true;
      copyText.disabled = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/scHelpPopup/scHelpPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var scHelpPopup_scHelpPopupvue_type_script_lang_js_ = (scHelpPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scHelpPopup/scHelpPopup.vue?vue&type=style&index=0&id=02b43500&scoped=true&lang=scss&
var scHelpPopupvue_type_style_index_0_id_02b43500_scoped_true_lang_scss_ = __webpack_require__("14f3");

// CONCATENATED MODULE: ./src/components/scHelpPopup/scHelpPopup.vue






/* normalize component */

var scHelpPopup_component = normalizeComponent(
  scHelpPopup_scHelpPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "02b43500",
  null
  
)

/* harmony default export */ var scHelpPopup = (scHelpPopup_component.exports);
// CONCATENATED MODULE: ./src/components/scHelpPopup/index.js

/* harmony default export */ var components_scHelpPopup = (function (Vue) {
  Vue.component(scHelpPopup.name, scHelpPopup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scPrizePopup/scPrizePopup.vue?vue&type=template&id=dfb97816&scoped=true&
var scPrizePopupvue_type_template_id_dfb97816_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"prize-box won"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.manualTrigger),expression:"options.manualTrigger"}],staticClass:"prize-button",on:{"click":_vm.show}},[_c('svg',{attrs:{"width":"21","height":"22","viewBox":"0 0 21 22","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z","fill":"url(#paint0_linear)"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"0.307617","y1":"10.6874","x2":"20.579","y2":"10.6874","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#EEC868"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#E49358"}})],1)],1)])]),_c('SCPopupOverlay',{ref:"prizeOverlay",staticClass:"prize-overlay",attrs:{"canDismiss":true}},[_c('div',{staticClass:"header-info won",class:{ 'with-image': _vm.getHeaderImg }},[(_vm.getHeaderImg)?_c('img',{attrs:{"src":_vm.getHeaderImg,"alt":""}}):_c('span',[_vm._v(_vm._s(_vm.t('scComponents.prize.congrats')))])]),_c('div',{staticClass:"bottom-padder"},[_c('div',{staticClass:"moment-infos",attrs:{"dir":"auto"}},[(_vm.prize.picture)?_c('div',{staticClass:"prize-image"},[_c('img',{attrs:{"src":_vm.prize.picture,"alt":"prize picture"}})]):_vm._e(),(_vm.getTitle)?_c('div',{staticClass:"prize-headline"},[_vm._v(" "+_vm._s(_vm.getTitle)+" ")]):_vm._e(),(_vm.getDescription)?_c('div',{staticClass:"prize-text"},[_vm._v(" "+_vm._s(_vm.getDescription)+" ")]):_vm._e()])]),_c('div',{staticClass:"claim-prize-overlay"},[(_vm.options.claimError)?_c('p',{staticClass:"prize-error"},[_vm._v(_vm._s(_vm.options.claimError))]):_vm._e(),_c('button',{staticClass:"main-button",on:{"click":function($event){return _vm.claimPrize()}}},[_c('svg',{staticClass:"icon icon-left",attrs:{"width":"21","height":"22","viewBox":"0 0 21 22","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z","fill":"url(#paint0_linear)"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"0.307617","y1":"10.6874","x2":"20.579","y2":"10.6874","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#EEC868"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#E49358"}})],1)],1)]),_vm._v(" "+_vm._s(_vm.t('scComponents.prize.claim'))+" "),_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})])])])])],1)}
var scPrizePopupvue_type_template_id_dfb97816_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scPrizePopup/scPrizePopup.vue?vue&type=template&id=dfb97816&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scPrizePopup/scPrizePopup.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//


/* harmony default export */ var scPrizePopupvue_type_script_lang_js_ = ({
  name: 'ScPrizePopup',
  components: {
    SCPopupOverlay: scPopupOverlay
  },
  props: {
    prize: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    options: {
      type: Object,
      required: true,
      default: function _default() {
        return {
          winHeaderImg: '',
          winTitle: '',
          winDescription: '',
          manualTrigger: false,
          claimError: ''
        };
      }
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    getTitle: function getTitle() {
      return this.options.winTitle ? this.options.winTitle : this.prize.title;
    },
    getDescription: function getDescription() {
      return this.options.winDescription ? this.options.winDescription : this.prize.description;
    },
    getHeaderImg: function getHeaderImg() {
      return this.options.winHeaderImg ? this.options.winHeaderImg : false;
    }
  },
  mounted: function mounted() {},
  methods: {
    claimPrize: function claimPrize() {
      this.$emit('claimPrize', true);
    },

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
// CONCATENATED MODULE: ./src/components/scPrizePopup/scPrizePopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var scPrizePopup_scPrizePopupvue_type_script_lang_js_ = (scPrizePopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scPrizePopup/scPrizePopup.vue?vue&type=style&index=0&id=dfb97816&scoped=true&lang=scss&
var scPrizePopupvue_type_style_index_0_id_dfb97816_scoped_true_lang_scss_ = __webpack_require__("7a1f");

// CONCATENATED MODULE: ./src/components/scPrizePopup/scPrizePopup.vue






/* normalize component */

var scPrizePopup_component = normalizeComponent(
  scPrizePopup_scPrizePopupvue_type_script_lang_js_,
  scPrizePopupvue_type_template_id_dfb97816_scoped_true_render,
  scPrizePopupvue_type_template_id_dfb97816_scoped_true_staticRenderFns,
  false,
  null,
  "dfb97816",
  null
  
)

/* harmony default export */ var scPrizePopup = (scPrizePopup_component.exports);
// CONCATENATED MODULE: ./src/components/scPrizePopup/index.js

/* harmony default export */ var components_scPrizePopup = (function (Vue) {
  Vue.component(scPrizePopup.name, scPrizePopup);
});
// CONCATENATED MODULE: ./src/components/scPopupOverlay/index.js

/* harmony default export */ var components_scPopupOverlay = (function (Vue) {
  Vue.component(scPopupOverlay.name, scPopupOverlay);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/scCta.vue?vue&type=template&id=13939823&scoped=true&
var scCtavue_type_template_id_13939823_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cta-box"},[(_vm.getHeader)?_c('div',{staticClass:"box-header",class:{ 'with-image': _vm.getHeader }},[_c('img',{attrs:{"src":_vm.getHeader,"alt":""}})]):_vm._e(),_c('div',{staticClass:"box-body"},[(_vm.cta.headline)?_c('div',{staticClass:"cta-headline"},[_vm._v(" "+_vm._s(_vm.cta.headline)+" ")]):_vm._e(),(_vm.cta.description)?_c('div',{staticClass:"cta-text"},[_vm._v(" "+_vm._s(_vm.cta.description)+" ")]):_vm._e()]),_c('div',{staticClass:"box-footer"},[(_vm.ofType(['website']))?_c('ScCtaWebsite',{attrs:{"custom":_vm.cta.custom,"popupRef":_vm.popupRef}}):_vm._e(),(_vm.ofType(['social']))?_c('ScCtaSocial',{attrs:{"custom":_vm.cta.custom}}):_vm._e(),(_vm.ofType(['feedback']))?_c('ScCtaFeedback',{attrs:{"custom":_vm.cta.custom}}):_vm._e(),(_vm.ofType(['leadgen', 'newsletter', 'promotion']))?_c('ScCtaCustom',{attrs:{"custom":_vm.cta.custom}}):_vm._e()],1)])}
var scCtavue_type_template_id_13939823_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scCta/scCta.vue?vue&type=template&id=13939823&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/footer/scCtaWebsite.vue?vue&type=template&id=6144e888&scoped=true&
var scCtaWebsitevue_type_template_id_6144e888_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cta-type-website"},[_c('button',{staticClass:"main-button",on:{"click":function($event){return _vm.handleClick()}}},[_vm._v(" "+_vm._s(_vm.custom.buttonLabel || 'Go to Website')+" "),_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})])])])}
var scCtaWebsitevue_type_template_id_6144e888_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scCta/footer/scCtaWebsite.vue?vue&type=template&id=6144e888&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/footer/scCtaWebsite.vue?vue&type=script&lang=js&
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

/* harmony default export */ var scCtaWebsitevue_type_script_lang_js_ = ({
  name: 'ScCtaWebsite',
  components: {},
  props: {
    custom: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    popupRef: Object
  },
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {},
  methods: {
    handleClick: function handleClick() {
      var _this = this;

      this.trackClick();
      window.open(this.custom.buttonLink, '_blank', 'noopener,noreferrer');
      window.setTimeout(function () {
        if (_this.popupRef) {
          _this.popupRef.hide();
        }
      }, 100);
    },
    trackClick: function trackClick() {
      if (this.$SDK) {
        var options = {
          category: 'engagement',
          value: 1,
          label: 'CTA clicked'
        };
        this.$SDK.analytics.track('cta_click', options);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/scCta/footer/scCtaWebsite.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_scCtaWebsitevue_type_script_lang_js_ = (scCtaWebsitevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scCta/footer/scCtaWebsite.vue?vue&type=style&index=0&id=6144e888&scoped=true&lang=scss&
var scCtaWebsitevue_type_style_index_0_id_6144e888_scoped_true_lang_scss_ = __webpack_require__("d48b");

// CONCATENATED MODULE: ./src/components/scCta/footer/scCtaWebsite.vue






/* normalize component */

var scCtaWebsite_component = normalizeComponent(
  footer_scCtaWebsitevue_type_script_lang_js_,
  scCtaWebsitevue_type_template_id_6144e888_scoped_true_render,
  scCtaWebsitevue_type_template_id_6144e888_scoped_true_staticRenderFns,
  false,
  null,
  "6144e888",
  null
  
)

/* harmony default export */ var scCtaWebsite = (scCtaWebsite_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/footer/scCtaSocial.vue?vue&type=template&id=6a07d767&scoped=true&
var scCtaSocialvue_type_template_id_6a07d767_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cta-type-social"},_vm._l((_vm.values),function(social,index){return _c('button',{key:index,staticClass:"main-button social",class:social.name,on:{"click":function($event){return _vm.handleClick(social)}}},[_c('span',{staticClass:"icon icon-left social-icon",domProps:{"innerHTML":_vm._s(_vm.socialIcons[social.name])}}),_vm._v(" "+_vm._s('Follow us on ' + social.name)+" "),_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})])])}),0)}
var scCtaSocialvue_type_template_id_6a07d767_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scCta/footer/scCtaSocial.vue?vue&type=template&id=6a07d767&scoped=true&

// CONCATENATED MODULE: ./src/components/scCta/footer/svgs.js
var facebook = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M32 16.0978C32 7.20722 24.8366 0 16 0C7.16344 0 0 7.20722 0 16.0978C0 24.1325 5.85094 30.7924 13.5 32V20.751H9.4375V16.0978H13.5V12.5512C13.5 8.51673 15.8888 6.2882 19.5434 6.2882C21.2941 6.2882 23.125 6.60261 23.125 6.60261V10.5642H21.1075C19.12 10.5642 18.5 11.8051 18.5 13.0782V16.0978H22.9375L22.2281 20.751H18.5V32C26.1491 30.7924 32 24.1325 32 16.0978Z\" fill=\"white\"/>\n</svg>\n";
var instagram = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 29 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 2.52246C17.7384 2.52246 18.1808 2.53691 19.6574 2.60416C21.0222 2.6664 21.7636 2.89425 22.2571 3.08598C22.9106 3.33995 23.3769 3.64338 23.867 4.13298C24.3572 4.62313 24.6606 5.08939 24.914 5.74293C25.1057 6.23642 25.3336 6.97776 25.3958 8.34264C25.4631 9.81866 25.4775 10.2616 25.4775 14C25.4775 17.7384 25.4631 18.1808 25.3958 19.6573C25.3336 21.0222 25.1057 21.7636 24.914 22.257C24.6601 22.9106 24.3566 23.3768 23.867 23.867C23.3769 24.3572 22.9106 24.6606 22.2571 24.914C21.7636 25.1057 21.0222 25.3336 19.6574 25.3958C18.1813 25.4631 17.7384 25.4775 14 25.4775C10.2616 25.4775 9.81867 25.4631 8.34265 25.3958C6.97777 25.3336 6.23642 25.1057 5.74293 24.914C5.08939 24.66 4.62313 24.3566 4.13298 23.867C3.64282 23.3768 3.33939 22.9106 3.08598 22.257C2.89425 21.7636 2.6664 21.0222 2.60416 19.6573C2.53692 18.1813 2.52247 17.7384 2.52247 14C2.52247 10.2616 2.53692 9.81922 2.60416 8.34264C2.6664 6.97776 2.89425 6.23642 3.08598 5.74293C3.33995 5.08939 3.64338 4.62313 4.13298 4.13298C4.62313 3.64282 5.08939 3.33939 5.74293 3.08598C6.23642 2.89425 6.97777 2.6664 8.34265 2.60416C9.81923 2.53691 10.2616 2.52246 14 2.52246ZM14 0C10.1977 0 9.72086 0.0161162 8.22761 0.0844712C6.73769 0.15227 5.72015 0.389012 4.82931 0.735233C3.90846 1.09312 3.12766 1.57161 2.34963 2.35019C1.57161 3.12821 1.09257 3.90902 0.735233 4.82931C0.389012 5.72014 0.152271 6.73769 0.0844713 8.2276C0.0161162 9.72085 0 10.1977 0 14C0 17.8023 0.0161162 18.2791 0.0844713 19.7724C0.152271 21.2623 0.389012 22.2798 0.735233 23.1707C1.09312 24.0915 1.57161 24.8723 2.35019 25.6503C3.12877 26.4289 3.90902 26.9074 4.82987 27.2653C5.72015 27.6115 6.73825 27.8483 8.22817 27.9161C9.72142 27.9844 10.1982 28.0005 14.0006 28.0005C17.8029 28.0005 18.2797 27.9844 19.7729 27.9161C21.2629 27.8483 22.281 27.6115 23.1712 27.2653C24.0921 26.9074 24.8729 26.4289 25.6509 25.6503C26.4295 24.8718 26.908 24.0915 27.2659 23.1707C27.6121 22.2804 27.8488 21.2623 27.9166 19.7724C27.985 18.2791 28.0011 17.8023 28.0011 14C28.0011 10.1977 27.985 9.72085 27.9166 8.2276C27.8488 6.73769 27.6121 5.71959 27.2659 4.82931C26.908 3.90846 26.4295 3.12766 25.6509 2.34963C24.8723 1.57105 24.0921 1.09257 23.1712 0.734677C22.2799 0.389012 21.2623 0.15227 19.7724 0.0844712C18.2791 0.0161162 17.8023 0 14 0Z\" fill=\"white\"/>\n<path d=\"M14.0014 6.81105C10.0307 6.81105 6.8125 10.0299 6.8125 14C6.8125 17.9701 10.0313 21.1889 14.0014 21.1889C17.9716 21.1889 21.1904 17.9701 21.1904 14C21.1904 10.0299 17.9722 6.81105 14.0014 6.81105ZM14.0014 18.6665C11.424 18.6665 9.33497 16.5769 9.33497 14C9.33497 11.4225 11.4245 9.33352 14.0014 9.33352C16.5784 9.33352 18.6679 11.4231 18.6679 14C18.6679 16.5775 16.5789 18.6665 14.0014 18.6665Z\" fill=\"white\"/>\n<path d=\"M21.4729 8.20649C22.4008 8.20649 23.1529 7.45434 23.1529 6.52651C23.1529 5.59869 22.4008 4.84653 21.4729 4.84653C20.5451 4.84653 19.793 5.59869 19.793 6.52651C19.793 7.45434 20.5451 8.20649 21.4729 8.20649Z\" fill=\"white\"/>\n</svg>\n";
var linkedin = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.3125 24H5.46468V7.79774H0.3125V24Z\" fill=\"white\"/>\n<path d=\"M13.4483 24V14.9413C13.4483 14.3501 13.4998 13.9143 13.6045 13.6346C13.8272 13.0892 14.1615 12.6264 14.6084 12.2453C15.0545 11.8643 15.6044 11.6737 16.2591 11.6737C17.9841 11.6737 18.8465 12.8954 18.8465 15.3387V24H23.9987V14.7075C23.9987 12.3116 23.4558 10.4979 22.3706 9.26801C21.2855 8.03898 19.8504 7.42406 18.0661 7.42406C16.0708 7.42406 14.5326 8.3121 13.4491 10.0849V7.79775H8.29688C8.3414 8.82481 8.3414 14.2258 8.29688 24H13.4483Z\" fill=\"white\"/>\n<path d=\"M2.85459 5.603H2.87725C3.75457 5.603 4.46079 5.33479 4.99593 4.79755C5.53107 4.26031 5.79825 3.59468 5.79825 2.8015C5.78341 1.99196 5.51544 1.32307 4.99515 0.793186C4.47564 0.26494 3.78425 0 2.92178 0C2.05931 0 1.35699 0.26494 0.814036 0.794003C0.271866 1.32307 0 1.99278 0 2.8015C0 3.5955 0.264054 4.26031 0.792162 4.79755C1.32027 5.33479 2.00775 5.603 2.85459 5.603Z\" fill=\"white\"/>\n</svg>\n";
var youtube = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 30 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M29.3727 3.27871C29.0284 1.98823 28.0108 0.972097 26.7205 0.626613C24.3818 0 15 0 15 0C15 0 5.61818 0 3.27955 0.626613C1.9892 0.972097 0.971591 1.98823 0.627273 3.27871C0 5.61919 0 10.5 0 10.5C0 10.5 0 15.3808 0.627273 17.7213C0.971591 19.0118 1.9892 20.0279 3.27955 20.3734C5.61818 21 15 21 15 21C15 21 24.3818 21 26.7205 20.3734C28.0108 20.0279 29.0284 19.0118 29.3727 17.7213C30 15.3808 30 10.5 30 10.5C30 10.5 30 5.61919 29.3727 3.27871ZM11.9318 14.932V6.06798L19.7727 10.5L11.9318 14.932Z\" fill=\"white\"/>\n</svg>\n";
var twich = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 28 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.83333 0L0 5.85106V26.9149H7V32.766L12.8333 26.9149H17.5L28 16.383V0H5.83333ZM25.6667 15.2128L21 19.8936H16.3333L12.25 23.9894V19.8936H7V2.34043H25.6667V15.2128Z\" fill=\"white\"/>\n<path d=\"M22.1693 6.43616H19.8359V13.4574H22.1693V6.43616Z\" fill=\"white\"/>\n<path d=\"M15.7513 6.43616H13.418V13.4574H15.7513V6.43616Z\" fill=\"white\"/>\n</svg>\n";
var twitter = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 26 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M23.3381 5.4778C23.3539 5.7165 23.3539 5.9552 23.3539 6.1961C23.3539 13.5364 17.9879 22.002 8.17583 22.002V21.9976C5.27838 22.0009 2.43902 21.1363 0 19.5061C0.421467 19.5589 0.845048 19.5853 1.26968 19.5864C3.67173 19.5886 6.00512 18.7493 7.89486 17.2038C5.61217 17.1587 3.61047 15.6088 2.91119 13.3461C3.71081 13.5067 4.53474 13.4737 5.31957 13.2504C2.83091 12.7268 1.04046 10.4487 1.04046 7.8043C1.04046 7.7801 1.04046 7.757 1.04046 7.7339C1.78199 8.164 2.61225 8.4027 3.46153 8.4291C1.11652 6.8 0.394003 3.5528 1.80946 1.014C4.51784 4.4845 8.51385 6.5943 12.8035 6.8187C12.3736 4.8893 12.9609 2.8675 14.3468 1.5112C16.4953 -0.592002 19.8745 -0.484202 21.8941 1.7521C23.0888 1.5068 24.2339 1.0503 25.2817 0.403498C24.8835 1.6894 24.0501 2.7817 22.9367 3.4758C23.9941 3.346 25.0271 3.0512 26 2.6013C25.2838 3.7178 24.3828 4.6913 23.3381 5.4778Z\" fill=\"white\"/>\n</svg>\n";
var spotify = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 29 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.0006 0C6.26846 0 0 6.26761 0 14C0 21.7321 6.26846 28 14.0006 28C21.7327 28 28.0011 21.7318 28.0011 13.9997C28.0011 6.26761 21.7327 0 14.0006 0ZM19.3889 20.6496C19.1623 20.6496 19.0078 20.5713 18.7963 20.4421C16.767 19.2144 14.2365 18.5691 11.5523 18.5691C10.054 18.5691 8.54619 18.7618 7.13606 19.055C6.90692 19.1048 6.61886 19.1928 6.44579 19.1928C5.91436 19.1928 5.56026 18.7709 5.56026 18.3127C5.56026 17.7252 5.89899 17.4314 6.32169 17.3508C8.05091 16.9566 9.77301 16.7315 11.5617 16.7315C14.6251 16.7315 17.3554 17.4348 19.7049 18.843C20.0544 19.047 20.2591 19.2554 20.2591 19.7737C20.2593 20.279 19.8489 20.6496 19.3889 20.6496ZM20.9143 16.9441C20.6106 16.9441 20.4196 16.8211 20.2127 16.701C17.9355 15.3495 14.7788 14.4517 11.3226 14.4517C9.54985 14.4517 8.0196 14.7002 6.75321 15.0375C6.48024 15.113 6.32738 15.1938 6.07177 15.1938C5.47003 15.1938 4.97816 14.7025 4.97816 14.0962C4.97816 13.501 5.26708 13.0917 5.84889 12.9277C7.4227 12.4951 9.03038 12.1623 11.3693 12.1623C15.0341 12.1623 18.5794 13.0749 21.3663 14.7429C21.8337 15.0102 22.0056 15.3512 22.0056 15.8493C22.0056 16.4545 21.5229 16.9441 20.9143 16.9441ZM22.6512 12.6346C22.3666 12.6346 22.1972 12.5651 21.9302 12.4188C19.3966 10.8994 15.4634 10.0628 11.6605 10.0628C9.76191 10.0628 7.83401 10.2561 6.06779 10.7351C5.86426 10.7861 5.6078 10.888 5.35019 10.888C4.60328 10.888 4.03001 10.297 4.03001 9.55042C4.03001 8.78928 4.50138 8.36231 5.00976 8.21231C7.00569 7.62451 9.23333 7.35068 11.6551 7.35068C15.7662 7.35068 20.0917 8.19636 23.251 10.0514C23.6768 10.2931 23.972 10.6566 23.972 11.3232C23.9714 12.086 23.3583 12.6346 22.6512 12.6346Z\" fill=\"white\"/>\n</svg>\n";
var socialIcons = {
  spotify: spotify,
  twich: twich,
  twitter: twitter,
  facebook: facebook,
  linkedin: linkedin,
  youtube: youtube,
  instagram: instagram
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/footer/scCtaSocial.vue?vue&type=script&lang=js&
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


/* harmony default export */ var scCtaSocialvue_type_script_lang_js_ = ({
  name: 'ScCtaSocial',
  components: {},
  props: {
    custom: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      values: [],
      socialIcons: socialIcons
    };
  },
  computed: {},
  mounted: function mounted() {
    var _this = this;

    this.values = Object.keys(this.custom).map(function (social) {
      return {
        name: social,
        link: _this.custom[social]
      };
    }).filter(function (social) {
      return !!social.link;
    });
  },
  methods: {
    handleClick: function handleClick(item) {
      this.$emit('cta:social:redirect', item.link);
    }
  },
  watch: {
    custom: function custom(val) {
      this.values = Object.keys(val).map(function (social) {
        return {
          name: social,
          link: val[social]
        };
      }).filter(function (social) {
        return !!social.link;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/scCta/footer/scCtaSocial.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_scCtaSocialvue_type_script_lang_js_ = (scCtaSocialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scCta/footer/scCtaSocial.vue?vue&type=style&index=0&id=6a07d767&scoped=true&lang=scss&
var scCtaSocialvue_type_style_index_0_id_6a07d767_scoped_true_lang_scss_ = __webpack_require__("3d92");

// CONCATENATED MODULE: ./src/components/scCta/footer/scCtaSocial.vue






/* normalize component */

var scCtaSocial_component = normalizeComponent(
  footer_scCtaSocialvue_type_script_lang_js_,
  scCtaSocialvue_type_template_id_6a07d767_scoped_true_render,
  scCtaSocialvue_type_template_id_6a07d767_scoped_true_staticRenderFns,
  false,
  null,
  "6a07d767",
  null
  
)

/* harmony default export */ var scCtaSocial = (scCtaSocial_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/footer/ScCtaFeedback.vue?vue&type=template&id=136e196a&scoped=true&
var ScCtaFeedbackvue_type_template_id_136e196a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cta-type-feedback"},[_vm._m(0),_c('button',{staticClass:"main-button",on:{"click":function($event){return _vm.handleClick()}}},[_vm._v(" "+_vm._s(_vm.custom.buttonLabel || 'Submit')+" ")])])}
var ScCtaFeedbackvue_type_template_id_136e196a_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group"},[_c('textarea',{staticClass:"form-control",attrs:{"rows":"4","placeholder":"Type in..."}})])}]


// CONCATENATED MODULE: ./src/components/scCta/footer/ScCtaFeedback.vue?vue&type=template&id=136e196a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/footer/ScCtaFeedback.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ScCtaFeedbackvue_type_script_lang_js_ = ({
  name: 'ScCtaFeedback',
  components: {},
  props: {
    custom: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {},
  methods: {
    handleClick: function handleClick() {}
  }
});
// CONCATENATED MODULE: ./src/components/scCta/footer/ScCtaFeedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_ScCtaFeedbackvue_type_script_lang_js_ = (ScCtaFeedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scCta/footer/ScCtaFeedback.vue?vue&type=style&index=0&id=136e196a&scoped=true&lang=scss&
var ScCtaFeedbackvue_type_style_index_0_id_136e196a_scoped_true_lang_scss_ = __webpack_require__("957c");

// CONCATENATED MODULE: ./src/components/scCta/footer/ScCtaFeedback.vue






/* normalize component */

var ScCtaFeedback_component = normalizeComponent(
  footer_ScCtaFeedbackvue_type_script_lang_js_,
  ScCtaFeedbackvue_type_template_id_136e196a_scoped_true_render,
  ScCtaFeedbackvue_type_template_id_136e196a_scoped_true_staticRenderFns,
  false,
  null,
  "136e196a",
  null
  
)

/* harmony default export */ var ScCtaFeedback = (ScCtaFeedback_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/footer/scCtaCustom.vue?vue&type=template&id=57298cd0&scoped=true&
var scCtaCustomvue_type_template_id_57298cd0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'cta-type-' + _vm.type},[(_vm.custom.userNameInput)?_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":_vm.custom.userNameInput}})]):_vm._e(),(_vm.custom.userEmailInput)?_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"email","placeholder":_vm.custom.userEmailInput}})]):_vm._e(),_c('button',{staticClass:"main-button",on:{"click":function($event){return _vm.handleClick()}}},[_vm._v(" "+_vm._s(_vm.custom.buttonLabel || 'Go to Website')+" "),_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})])])])}
var scCtaCustomvue_type_template_id_57298cd0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scCta/footer/scCtaCustom.vue?vue&type=template&id=57298cd0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/footer/scCtaCustom.vue?vue&type=script&lang=js&
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

/* harmony default export */ var scCtaCustomvue_type_script_lang_js_ = ({
  name: 'ScCtaCustom',
  components: {},
  props: {
    type: String,
    custom: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {},
  methods: {
    handleClick: function handleClick() {}
  }
});
// CONCATENATED MODULE: ./src/components/scCta/footer/scCtaCustom.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_scCtaCustomvue_type_script_lang_js_ = (scCtaCustomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scCta/footer/scCtaCustom.vue?vue&type=style&index=0&id=57298cd0&scoped=true&lang=scss&
var scCtaCustomvue_type_style_index_0_id_57298cd0_scoped_true_lang_scss_ = __webpack_require__("c763");

// CONCATENATED MODULE: ./src/components/scCta/footer/scCtaCustom.vue






/* normalize component */

var scCtaCustom_component = normalizeComponent(
  footer_scCtaCustomvue_type_script_lang_js_,
  scCtaCustomvue_type_template_id_57298cd0_scoped_true_render,
  scCtaCustomvue_type_template_id_57298cd0_scoped_true_staticRenderFns,
  false,
  null,
  "57298cd0",
  null
  
)

/* harmony default export */ var scCtaCustom = (scCtaCustom_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/scCta.vue?vue&type=script&lang=js&
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





/* harmony default export */ var scCtavue_type_script_lang_js_ = ({
  name: 'ScCta',
  components: {
    ScCtaWebsite: scCtaWebsite,
    ScCtaSocial: scCtaSocial,
    ScCtaFeedback: ScCtaFeedback,
    ScCtaCustom: scCtaCustom
  },
  props: {
    cta: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    popupRef: Object
  },
  data: function data() {
    return {};
  },
  computed: {
    getHeader: function getHeader() {
      return Array.isArray(this.cta.header) && !!this.cta.header.length ? this.cta.header[0] : null;
    }
  },
  mounted: function mounted() {},
  methods: {
    handleClick: function handleClick() {
      var _this = this;

      this.trackClick();
      window.open(this.cta.buttonLink, '_blank');
      window.setTimeout(function () {
        _this.hide();
      }, 100);
    },
    trackClick: function trackClick() {},
    ofType: function ofType(list) {
      return list.includes(this.cta.type);
    }
  }
});
// CONCATENATED MODULE: ./src/components/scCta/scCta.vue?vue&type=script&lang=js&
 /* harmony default export */ var scCta_scCtavue_type_script_lang_js_ = (scCtavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scCta/scCta.vue?vue&type=style&index=0&id=13939823&scoped=true&lang=scss&
var scCtavue_type_style_index_0_id_13939823_scoped_true_lang_scss_ = __webpack_require__("f008");

// CONCATENATED MODULE: ./src/components/scCta/scCta.vue






/* normalize component */

var scCta_component = normalizeComponent(
  scCta_scCtavue_type_script_lang_js_,
  scCtavue_type_template_id_13939823_scoped_true_render,
  scCtavue_type_template_id_13939823_scoped_true_staticRenderFns,
  false,
  null,
  "13939823",
  null
  
)

/* harmony default export */ var scCta = (scCta_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/scCtaPopup.vue?vue&type=template&id=64c33cb4&scoped=true&
var scCtaPopupvue_type_template_id_64c33cb4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"cta-box"},[_c('SCPopupOverlay',{ref:"ctaOverlay",staticClass:"cta-overlay",attrs:{"canDismiss":_vm.options.canDismiss}},[_c('ScCta',{attrs:{"cta":_vm.cta,"popupRef":_vm.$refs.ctaOverlay}})],1)],1)}
var scCtaPopupvue_type_template_id_64c33cb4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scCta/scCtaPopup.vue?vue&type=template&id=64c33cb4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scCta/scCtaPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var scCtaPopupvue_type_script_lang_js_ = ({
  name: 'ScCtaPopup',
  components: {
    SCPopupOverlay: scPopupOverlay
  },
  props: {
    options: {
      type: Object,
      required: false,
      default: function _default() {
        return {
          canDismiss: true,
          manualTrigger: true
        };
      }
    },
    cta: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {
    show: function show() {
      this.$refs.ctaOverlay.show();
    },
    hide: function hide() {
      this.$refs.ctaOverlay.hide();
    }
  }
});
// CONCATENATED MODULE: ./src/components/scCta/scCtaPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var scCta_scCtaPopupvue_type_script_lang_js_ = (scCtaPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scCta/scCtaPopup.vue?vue&type=style&index=0&id=64c33cb4&scoped=true&lang=scss&
var scCtaPopupvue_type_style_index_0_id_64c33cb4_scoped_true_lang_scss_ = __webpack_require__("273a");

// CONCATENATED MODULE: ./src/components/scCta/scCtaPopup.vue






/* normalize component */

var scCtaPopup_component = normalizeComponent(
  scCta_scCtaPopupvue_type_script_lang_js_,
  scCtaPopupvue_type_template_id_64c33cb4_scoped_true_render,
  scCtaPopupvue_type_template_id_64c33cb4_scoped_true_staticRenderFns,
  false,
  null,
  "64c33cb4",
  null
  
)

/* harmony default export */ var scCtaPopup = (scCtaPopup_component.exports);
// CONCATENATED MODULE: ./src/components/scCta/index.js


/* harmony default export */ var components_scCta = (function (Vue) {
  Vue.component(scCta.name, scCta);
  Vue.component(scCtaPopup.name, scCtaPopup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scSponsorBanner/scSponsorBanner.vue?vue&type=template&id=60d139cb&scoped=true&
var scSponsorBannervue_type_template_id_60d139cb_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.hasSponsor)?_c('div',{staticClass:"sponsor-banner"},[(_vm.sponsor.credit)?_c('p',[_vm._v(_vm._s(_vm.sponsor.credit))]):_vm._e(),_c('div',{staticClass:"logo-container"},_vm._l((_vm.sponsor.logos),function(logo,index){return _c('div',{key:index,staticClass:"logo-positioner"},[_c('img',{attrs:{"src":logo,"alt":index}})])}),0)]):_vm._e()}
var scSponsorBannervue_type_template_id_60d139cb_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scSponsorBanner/scSponsorBanner.vue?vue&type=template&id=60d139cb&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scSponsorBanner/scSponsorBanner.vue?vue&type=script&lang=js&
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
/* harmony default export */ var scSponsorBannervue_type_script_lang_js_ = ({
  name: 'ScSponsorBanner',
  data: function data() {
    return {};
  },
  computed: {
    hasSponsor: function hasSponsor() {
      return this.sponsor && this.sponsor.logos && this.sponsor.logos.length;
    }
  },
  props: {
    sponsor: {
      type: Object,
      required: true,
      default: function _default() {
        return {
          credit: '',
          logos: []
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/scSponsorBanner/scSponsorBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var scSponsorBanner_scSponsorBannervue_type_script_lang_js_ = (scSponsorBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scSponsorBanner/scSponsorBanner.vue?vue&type=style&index=0&id=60d139cb&scoped=true&lang=scss&
var scSponsorBannervue_type_style_index_0_id_60d139cb_scoped_true_lang_scss_ = __webpack_require__("d7df");

// CONCATENATED MODULE: ./src/components/scSponsorBanner/scSponsorBanner.vue






/* normalize component */

var scSponsorBanner_component = normalizeComponent(
  scSponsorBanner_scSponsorBannervue_type_script_lang_js_,
  scSponsorBannervue_type_template_id_60d139cb_scoped_true_render,
  scSponsorBannervue_type_template_id_60d139cb_scoped_true_staticRenderFns,
  false,
  null,
  "60d139cb",
  null
  
)

/* harmony default export */ var scSponsorBanner = (scSponsorBanner_component.exports);
// CONCATENATED MODULE: ./src/components/scSponsorBanner/index.js

/* harmony default export */ var components_scSponsorBanner = (function (Vue) {
  Vue.component(scSponsorBanner.name, scSponsorBanner);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7e2ec87b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scFooter/scFooter.vue?vue&type=template&id=da71b5fc&scoped=true&
var scFootervue_type_template_id_da71b5fc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"stagecast-footer"},[_c('span',[_vm._v("Made in")]),_c('svg',{staticClass:"stagecast-logo",attrs:{"width":"92","height":"20","viewBox":"0 0 92 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill":"currentColor","d":"M11.1629 2.6345C10.1349 0.593355 7.95793 0 5.84146 0C3.35007 0.0237342 0.604706 1.13924 0.604706 3.86868C0.604706 6.84732 3.15657 7.57121 5.92612 7.89163C7.71605 8.09337 9.0585 8.60365 9.0585 9.8497C9.0585 11.2975 7.54673 11.8434 5.93821 11.8434C4.29341 11.8434 2.72118 11.2025 2.12857 9.73103L0 10.8228C1.00381 13.2556 3.13238 14.0863 5.90193 14.0863C8.92546 14.0863 11.5862 12.8165 11.5862 9.8497C11.5862 6.68118 8.94965 5.95729 6.13172 5.61314C4.51111 5.42327 3.10819 5.10286 3.10819 3.93988C3.10819 2.95491 4.01525 2.17168 5.91403 2.17168C7.38951 2.17168 8.65939 2.89557 9.13106 3.65507L11.1629 2.6345ZM14.1622 1.35285V4.4027H12.3844V6.39637H14.1622V10.4431C14.1622 12.7809 15.5168 13.932 17.5849 13.8608C18.2984 13.837 18.8668 13.7302 19.5441 13.4573L18.891 11.4874C18.5403 11.6535 18.117 11.7722 17.7542 11.7722C17.0164 11.7722 16.5206 11.3331 16.5206 10.4431V6.39637H19.1692V4.4027H16.5327V1.10364L14.1622 1.35285ZM28.4212 5.67248C27.877 4.74684 26.6554 4.15349 25.3735 4.15349C22.5918 4.12975 20.4028 5.82675 20.4028 9.0546C20.4028 12.3418 22.4951 14.0507 25.313 14.0269C26.3773 14.0032 27.8649 13.481 28.4091 12.3774L28.53 13.7421H30.7554V4.39083H28.4938L28.4212 5.67248ZM25.5912 6.23023C29.3041 6.23023 29.3041 11.9027 25.5912 11.9027C24.0189 11.9027 22.7611 10.8347 22.7611 9.0546C22.7611 7.27454 24.0189 6.23023 25.5912 6.23023ZM39.2938 4.6163C38.6407 4.17722 37.8667 4.08228 37.1048 4.08228C34.432 4.08228 32.2671 5.90982 32.2671 8.82913C32.2671 11.7484 34.1296 13.5404 37.1048 13.5404C38.29 13.5404 39.5236 14.1337 39.5236 15.4154C39.5236 16.697 38.4593 17.4328 37.1048 17.4328C35.7502 17.4328 34.6134 16.6377 34.6134 15.4154H32.2671C32.2671 17.9431 34.3352 19.5926 37.1048 19.5926C39.8743 19.5926 41.882 18.0024 41.882 15.4154C41.882 14.2168 41.4949 13.1013 39.9106 12.3181C41.4828 11.6179 41.9182 9.98024 41.9182 8.82913C41.9182 7.80856 41.6522 6.87105 40.9144 6.05222L41.9787 4.72311L40.2492 3.44146L39.2938 4.6163ZM37.1169 6.19463C38.4714 6.19463 39.5962 7.2152 39.5962 8.82913C39.5962 10.4431 38.4714 11.428 37.1169 11.428C35.7381 11.428 34.6255 10.4549 34.6255 8.82913C34.6255 7.20333 35.7381 6.19463 37.1169 6.19463ZM53.2746 9.89717C53.6374 6.04036 51.654 4.10602 48.4612 4.10602C45.3651 4.10602 43.3937 6.15903 43.3937 9.00713C43.3937 12.0095 45.353 14.0032 48.6426 14.0032C50.0939 14.0032 51.7387 13.5048 52.7425 12.4842L51.2307 11.0245C50.6865 11.5704 49.5496 11.9027 48.6788 11.9027C47.0099 11.9027 45.994 11.072 45.8367 9.90903H53.2746V9.89717ZM45.873 7.97469C46.2237 6.76425 47.2638 6.14716 48.5458 6.14716C49.9004 6.14716 50.8679 6.75238 51.0251 7.97469H45.873ZM61.6921 11.0364C61.1116 11.606 60.3618 11.8196 59.5998 11.8196C58.1244 11.8196 56.8908 10.8703 56.8908 9.0902C56.8908 7.45254 58.0518 6.3133 59.6361 6.3133C60.2892 6.3133 60.9907 6.56251 61.547 7.04906L63.0346 5.50634C61.9945 4.49763 60.9423 4.11789 59.5877 4.11789C56.8182 4.11789 54.5203 5.75555 54.5203 9.07834C54.5203 12.4011 56.8182 14.0388 59.5877 14.0388C61.0028 14.0388 62.1638 13.6234 63.2644 12.5554L61.6921 11.0364ZM71.8028 5.67248C71.2707 4.74684 70.0492 4.15349 68.7672 4.15349C65.9855 4.12975 63.7965 5.82675 63.7965 9.0546C63.7965 12.3418 65.8888 14.0507 68.7067 14.0269C69.771 14.0032 71.2586 13.481 71.8028 12.3774L71.9238 13.7421H74.1491V4.39083H71.8875L71.8028 5.67248ZM68.9849 6.23023C72.6978 6.23023 72.6978 11.9027 68.9849 11.9027C67.4126 11.9027 66.1549 10.8347 66.1549 9.0546C66.1549 7.27454 67.4126 6.23023 68.9849 6.23023ZM83.6913 5.35207C82.5908 4.4027 81.466 4.11789 79.9784 4.11789C78.2369 4.11789 75.9511 4.87738 75.9511 7.03719C75.9511 9.16141 78.1038 9.8141 79.8938 9.94464C81.2483 10.0158 81.7926 10.2888 81.7926 10.9296C81.7926 11.6179 80.9581 12.0688 80.0752 12.0451C79.0109 12.0214 77.4629 11.4755 76.7856 10.7397L75.6245 12.3893C77.0154 13.8133 78.5271 14.0625 80.0389 14.0625C82.7722 14.0625 84.1388 12.6385 84.1388 10.9889C84.1388 8.49685 81.853 8.10523 80.051 7.98656C78.8295 7.91536 78.2732 7.57121 78.2732 6.96599C78.2732 6.37264 78.89 6.04036 80.0147 6.04036C80.9218 6.04036 81.6958 6.25396 82.3731 6.87105L83.6913 5.35207ZM86.6181 1.40032V4.4027H84.8403V6.39637H86.6181V10.4431C86.6181 12.7809 87.9726 13.932 90.0407 13.8608C90.7543 13.837 91.3227 13.7302 92 13.4573L91.3469 11.4874C90.9962 11.6535 90.5729 11.7722 90.2101 11.7722C89.4723 11.7722 88.9765 11.3331 88.9765 10.4431V6.39637H91.6251V4.4027H88.9886V1.16298L86.6181 1.40032Z"}})])])}
var scFootervue_type_template_id_da71b5fc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scFooter/scFooter.vue?vue&type=template&id=da71b5fc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scFooter/scFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var scFootervue_type_script_lang_js_ = ({
  name: 'ScFooter',
  data: function data() {
    return {};
  },
  computed: {},
  props: {
    theme: String
  }
});
// CONCATENATED MODULE: ./src/components/scFooter/scFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var scFooter_scFootervue_type_script_lang_js_ = (scFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/scFooter/scFooter.vue?vue&type=style&index=0&id=da71b5fc&scoped=true&lang=scss&
var scFootervue_type_style_index_0_id_da71b5fc_scoped_true_lang_scss_ = __webpack_require__("a098");

// CONCATENATED MODULE: ./src/components/scFooter/scFooter.vue






/* normalize component */

var scFooter_component = normalizeComponent(
  scFooter_scFootervue_type_script_lang_js_,
  scFootervue_type_template_id_da71b5fc_scoped_true_render,
  scFootervue_type_template_id_da71b5fc_scoped_true_staticRenderFns,
  false,
  null,
  "da71b5fc",
  null
  
)

/* harmony default export */ var scFooter = (scFooter_component.exports);
// CONCATENATED MODULE: ./src/components/scFooter/index.js

/* harmony default export */ var components_scFooter = (function (Vue) {
  Vue.component(scFooter.name, scFooter);
});
// CONCATENATED MODULE: ./src/components/index.js
// these are the components exported to the activations






// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__("3c4e");
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// CONCATENATED MODULE: ./src/locale/format.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

/* harmony default export */ var format = (function (Vue) {
  //eslint-disable-line

  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */
  function template(string) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length === 1 && _typeof(args[0]) === 'object') {
      args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result;

      if (string[index - 1] === '{' && string[index + match.length] === '}') {
        return i;
      } else {
        result = hasOwn(args, i) ? args[i] : null;

        if (result === null || result === undefined) {
          return '';
        }

        return result;
      }
    });
  }

  return template;
});
// CONCATENATED MODULE: ./src/locale/lang/en.js
/* harmony default export */ var en = ({
  // library namespace
  scComponents: {
    help: {
      tabs: {
        prize: 'Prize',
        howto: 'How to',
        share: 'Share'
      },
      start: 'Let\'s Start!',
      share: {
        title: 'Copy the link below and send it to your friends, so they can join you and participate in their browser.'
      },
      accept: 'I accept the',
      and: ' and',
      tos: 'terms of use',
      prizeterms: 'competition rules'
    },
    prize: {
      congrats: 'Congratulations! You have won a prize.',
      claim: 'Claim Prize'
    }
  }
});
// CONCATENATED MODULE: ./src/locale/index.js




var locale_format = format(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);
var lang = en;
var merged = false;

var locale_i18nHandler = function i18nHandler() {
  var vuei18n = Object.getPrototypeOf(this || external_commonjs_vue_commonjs2_vue_root_Vue_default.a).$t;

  if (typeof vuei18n === 'function' && !!external_commonjs_vue_commonjs2_vue_root_Vue_default.a.locale) {
    if (!merged) {
      merged = true;
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.locale(external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.lang, cjs_default()(lang, external_commonjs_vue_commonjs2_vue_root_Vue_default.a.locale(external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.lang) || {}, {
        clone: true
      }));
    }

    return vuei18n.apply(this, arguments);
  }
};

var locale_t = function t(path, options) {
  var value = locale_i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;
  var array = path.split('.');
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    value = current[property];
    if (i === j - 1) return locale_format(value, options);
    if (!value) return '';
    current = value;
  }

  return '';
};
var use = function use(l) {
  lang = l || lang;
};
var i18n = function i18n(fn) {
  locale_i18nHandler = fn || locale_i18nHandler;
};
/* harmony default export */ var locale = ({
  use: use,
  t: locale_t,
  i18n: i18n
});
// CONCATENATED MODULE: ./src/mixin/locale.js

/* harmony default export */ var mixin_locale = ({
  methods: {
    t: function t() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return locale_t.apply(this, args);
    }
  }
});
// CONCATENATED MODULE: ./src/lib.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var lib_install = function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  locale.use(options.locale);
  locale.i18n(options.i18n); // Use Components

  Object.values(components_namespaceObject).forEach(function (scComponent) {
    Vue.use(scComponent);
  });
  Vue.mixin(_objectSpread({}, mixin_locale));
};

if (typeof window !== 'undefined' && window.Vue) {
  lib_install(window.Vue);
}

/* harmony default export */ var lib = ({
  locale: locale.use,
  i18n: locale.i18n,
  install: lib_install
});





 // for more see: https://www.xiegerts.com/post/creating-vue-component-library-plugin/
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ }),

/***/ "fb98":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });