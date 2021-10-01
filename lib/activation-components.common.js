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

/***/ "1a94":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScSponsorBanner_vue_vue_type_style_index_0_id_8df1e208_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d690");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScSponsorBanner_vue_vue_type_style_index_0_id_8df1e208_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScSponsorBanner_vue_vue_type_style_index_0_id_8df1e208_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScSponsorBanner_vue_vue_type_style_index_0_id_8df1e208_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1d07":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2362":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2366":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2a55":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3220":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScOnboardingPopup_vue_vue_type_style_index_0_id_225b62ad_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("52f4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScOnboardingPopup_vue_vue_type_style_index_0_id_225b62ad_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScOnboardingPopup_vue_vue_type_style_index_0_id_225b62ad_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScOnboardingPopup_vue_vue_type_style_index_0_id_225b62ad_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "4aca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScOnboarding_vue_vue_type_style_index_0_id_929b7992_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2362");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScOnboarding_vue_vue_type_style_index_0_id_929b7992_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScOnboarding_vue_vue_type_style_index_0_id_929b7992_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScOnboarding_vue_vue_type_style_index_0_id_929b7992_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4ca1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "52f4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "531f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaPopup_vue_vue_type_style_index_0_id_7bda148b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b3e0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaPopup_vue_vue_type_style_index_0_id_7bda148b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaPopup_vue_vue_type_style_index_0_id_7bda148b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaPopup_vue_vue_type_style_index_0_id_7bda148b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6be4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "74a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScPrizeClaimPopup_vue_vue_type_style_index_0_id_5966b1f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("86ff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScPrizeClaimPopup_vue_vue_type_style_index_0_id_5966b1f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScPrizeClaimPopup_vue_vue_type_style_index_0_id_5966b1f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScPrizeClaimPopup_vue_vue_type_style_index_0_id_5966b1f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7a1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPrizePopup_vue_vue_type_style_index_0_id_dfb97816_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a55");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPrizePopup_vue_vue_type_style_index_0_id_dfb97816_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPrizePopup_vue_vue_type_style_index_0_id_dfb97816_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPrizePopup_vue_vue_type_style_index_0_id_dfb97816_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7d25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaFeedback_vue_vue_type_style_index_0_id_2836bbda_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bdfa");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaFeedback_vue_vue_type_style_index_0_id_2836bbda_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaFeedback_vue_vue_type_style_index_0_id_2836bbda_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaFeedback_vue_vue_type_style_index_0_id_2836bbda_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7d63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScPrizeClaim_vue_vue_type_style_index_0_id_ae93265c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2366");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScPrizeClaim_vue_vue_type_style_index_0_id_ae93265c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScPrizeClaim_vue_vue_type_style_index_0_id_ae93265c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScPrizeClaim_vue_vue_type_style_index_0_id_ae93265c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "86ff":
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

/***/ "9305":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScProfileButton_vue_vue_type_style_index_0_id_defbb168_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ca1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScProfileButton_vue_vue_type_style_index_0_id_defbb168_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScProfileButton_vue_vue_type_style_index_0_id_defbb168_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScProfileButton_vue_vue_type_style_index_0_id_defbb168_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "9e06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaCustom_vue_vue_type_style_index_0_id_4a7e8f80_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c242");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaCustom_vue_vue_type_style_index_0_id_4a7e8f80_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaCustom_vue_vue_type_style_index_0_id_4a7e8f80_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaCustom_vue_vue_type_style_index_0_id_4a7e8f80_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a0ab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaWebsite_vue_vue_type_style_index_0_id_00714e7a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b48c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaWebsite_vue_vue_type_style_index_0_id_00714e7a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaWebsite_vue_vue_type_style_index_0_id_00714e7a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaWebsite_vue_vue_type_style_index_0_id_00714e7a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");

/***/ }),

/***/ "b32c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaSocial_vue_vue_type_style_index_0_id_46f6b412_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1d07");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaSocial_vue_vue_type_style_index_0_id_46f6b412_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaSocial_vue_vue_type_style_index_0_id_46f6b412_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCtaSocial_vue_vue_type_style_index_0_id_46f6b412_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b3e0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b48c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b8a7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bdfa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c242":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cacc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPopupOverlay_vue_vue_type_style_index_0_id_23ce2626_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b8a7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPopupOverlay_vue_vue_type_style_index_0_id_23ce2626_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPopupOverlay_vue_vue_type_style_index_0_id_23ce2626_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scPopupOverlay_vue_vue_type_style_index_0_id_23ce2626_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cfcf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCta_vue_vue_type_style_index_0_id_1eefbfde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ee37");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCta_vue_vue_type_style_index_0_id_1eefbfde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCta_vue_vue_type_style_index_0_id_1eefbfde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScCta_vue_vue_type_style_index_0_id_1eefbfde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d690":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ee37":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6d9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScFooter_vue_vue_type_style_index_0_id_5604cf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6be4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScFooter_vue_vue_type_style_index_0_id_5604cf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScFooter_vue_vue_type_style_index_0_id_5604cf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScFooter_vue_vue_type_style_index_0_id_5604cf24_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "scPrizePopup", function() { return /* reexport */ components_scPrizePopup; });
__webpack_require__.d(__webpack_exports__, "scPopupOverlay", function() { return /* reexport */ components_scPopupOverlay; });
__webpack_require__.d(__webpack_exports__, "ScOnboardingPopup", function() { return /* reexport */ onboarding; });
__webpack_require__.d(__webpack_exports__, "ScSponsorBanner", function() { return /* reexport */ banner; });
__webpack_require__.d(__webpack_exports__, "ScCtaPopup", function() { return /* reexport */ cta; });
__webpack_require__.d(__webpack_exports__, "ScPrizeClaimPopup", function() { return /* reexport */ prize; });
__webpack_require__.d(__webpack_exports__, "ScProfileButton", function() { return /* reexport */ profilebutton; });
__webpack_require__.d(__webpack_exports__, "ScFooter", function() { return /* reexport */ footer; });

// NAMESPACE OBJECT: ./src/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "scPrizePopup", function() { return components_scPrizePopup; });
__webpack_require__.d(components_namespaceObject, "scPopupOverlay", function() { return components_scPopupOverlay; });
__webpack_require__.d(components_namespaceObject, "ScSponsorBanner", function() { return banner; });
__webpack_require__.d(components_namespaceObject, "ScCtaPopup", function() { return cta; });
__webpack_require__.d(components_namespaceObject, "ScOnboardingPopup", function() { return onboarding; });
__webpack_require__.d(components_namespaceObject, "ScPrizeClaimPopup", function() { return prize; });
__webpack_require__.d(components_namespaceObject, "ScProfileButton", function() { return profilebutton; });
__webpack_require__.d(components_namespaceObject, "ScFooter", function() { return footer; });

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scPrizePopup/scPrizePopup.vue?vue&type=template&id=dfb97816&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"prize-box won"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.manualTrigger),expression:"options.manualTrigger"}],staticClass:"prize-button",on:{"click":_vm.show}},[_c('svg',{attrs:{"width":"21","height":"22","viewBox":"0 0 21 22","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z","fill":"url(#paint0_linear)"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"0.307617","y1":"10.6874","x2":"20.579","y2":"10.6874","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#EEC868"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#E49358"}})],1)],1)])]),_c('SCPopupOverlay',{ref:"prizeOverlay",staticClass:"prize-overlay",attrs:{"canDismiss":true}},[_c('div',{staticClass:"header-info won",class:{ 'with-image': _vm.getHeaderImg }},[(_vm.getHeaderImg)?_c('img',{attrs:{"src":_vm.getHeaderImg,"alt":""}}):_c('span',[_vm._v(_vm._s(_vm.t('scComponents.prize.congrats')))])]),_c('div',{staticClass:"bottom-padder"},[_c('div',{staticClass:"moment-infos",attrs:{"dir":"auto"}},[(_vm.prize.picture)?_c('div',{staticClass:"prize-image"},[_c('img',{attrs:{"src":_vm.prize.picture,"alt":"prize picture"}})]):_vm._e(),(_vm.getTitle)?_c('div',{staticClass:"prize-headline"},[_vm._v(" "+_vm._s(_vm.getTitle)+" ")]):_vm._e(),(_vm.getDescription)?_c('div',{staticClass:"prize-text"},[_vm._v(" "+_vm._s(_vm.getDescription)+" ")]):_vm._e()])]),_c('div',{staticClass:"claim-prize-overlay"},[(_vm.options.claimError)?_c('p',{staticClass:"prize-error"},[_vm._v(_vm._s(_vm.options.claimError))]):_vm._e(),_c('button',{staticClass:"main-button",on:{"click":function($event){return _vm.claimPrize()}}},[_c('svg',{staticClass:"icon icon-left",attrs:{"width":"21","height":"22","viewBox":"0 0 21 22","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z","fill":"url(#paint0_linear)"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"0.307617","y1":"10.6874","x2":"20.579","y2":"10.6874","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#EEC868"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#E49358"}})],1)],1)]),_vm._v(" "+_vm._s(_vm.t('scComponents.prize.claim'))+" "),_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scPrizePopup/scPrizePopup.vue?vue&type=template&id=dfb97816&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/scPopupOverlay/scPopupOverlay.vue?vue&type=template&id=23ce2626&scoped=true&
var scPopupOverlayvue_type_template_id_23ce2626_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"popup-overlay"}),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"popup-container"},[_c('div',{staticClass:"popup-box"},[_c('div',{staticClass:"popup-header"},[(_vm.canDismiss)?_c('button',{staticClass:"close-button",on:{"click":_vm.hide}},[_c('svg',{attrs:{"width":"12","height":"12","viewBox":"0 0 12 12","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('rect',{attrs:{"x":"1.41406","width":"14","height":"2","rx":"1","transform":"rotate(45 1.41406 0)","fill":"#C4C4C4"}}),_c('rect',{attrs:{"x":"11.3137","y":"1.41431","width":"14","height":"2","rx":"1","transform":"rotate(135 11.3137 1.41431)","fill":"#C4C4C4"}})])]):_vm._e()]),_c('div',{staticClass:"popup-content"},[_vm._t("default")],2)])])])],1)}
var scPopupOverlayvue_type_template_id_23ce2626_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/scPopupOverlay/scPopupOverlay.vue?vue&type=template&id=23ce2626&scoped=true&

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
// EXTERNAL MODULE: ./src/components/scPopupOverlay/scPopupOverlay.vue?vue&type=style&index=0&id=23ce2626&scoped=true&lang=scss&
var scPopupOverlayvue_type_style_index_0_id_23ce2626_scoped_true_lang_scss_ = __webpack_require__("cacc");

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
  scPopupOverlayvue_type_template_id_23ce2626_scoped_true_render,
  scPopupOverlayvue_type_template_id_23ce2626_scoped_true_staticRenderFns,
  false,
  null,
  "23ce2626",
  null
  
)

/* harmony default export */ var scPopupOverlay = (component.exports);
// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__("fb98");

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
  render,
  staticRenderFns,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/banner/ScSponsorBanner.vue?vue&type=template&id=8df1e208&scoped=true&
var ScSponsorBannervue_type_template_id_8df1e208_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.hasSponsor)?_c('div',{staticClass:"sponsor-banner",style:(_vm.background)},[(_vm.sponsor.credit)?_c('p',{style:(_vm.textColor)},[_vm._v(_vm._s(_vm.sponsor.credit))]):_vm._e(),_c('div',{staticClass:"logo-container"},_vm._l((_vm.sponsor.logos),function(logo,index){return _c('div',{key:index,staticClass:"logo-positioner"},[_c('img',{attrs:{"src":logo,"alt":index}})])}),0)]):_vm._e()}
var ScSponsorBannervue_type_template_id_8df1e208_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/banner/ScSponsorBanner.vue?vue&type=template&id=8df1e208&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/banner/ScSponsorBanner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ScSponsorBannervue_type_script_lang_js_ = ({
  name: 'ScSponsorBanner',
  data: function data() {
    return {};
  },
  computed: {
    textColor: function textColor() {
      return this.sponsor && this.sponsor.textColor ? {
        color: this.sponsor.textColor
      } : {
        color: '#FFFFFF'
      };
    },
    hasSponsor: function hasSponsor() {
      return this.sponsor && this.sponsor.logos && this.sponsor.logos.length;
    },
    background: function background() {
      return this.sponsor && this.sponsor.color ? {
        backgroundColor: this.sponsor.color
      } : null;
    }
  },
  props: {
    sponsor: {
      type: Object,
      required: true,
      default: function _default() {
        return {
          credit: '',
          logos: [],
          color: [],
          textColor: '#FFFFFF'
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/banner/ScSponsorBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var banner_ScSponsorBannervue_type_script_lang_js_ = (ScSponsorBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/banner/ScSponsorBanner.vue?vue&type=style&index=0&id=8df1e208&scoped=true&lang=scss&
var ScSponsorBannervue_type_style_index_0_id_8df1e208_scoped_true_lang_scss_ = __webpack_require__("1a94");

// CONCATENATED MODULE: ./src/components/banner/ScSponsorBanner.vue






/* normalize component */

var ScSponsorBanner_component = normalizeComponent(
  banner_ScSponsorBannervue_type_script_lang_js_,
  ScSponsorBannervue_type_template_id_8df1e208_scoped_true_render,
  ScSponsorBannervue_type_template_id_8df1e208_scoped_true_staticRenderFns,
  false,
  null,
  "8df1e208",
  null
  
)

/* harmony default export */ var ScSponsorBanner = (ScSponsorBanner_component.exports);
// CONCATENATED MODULE: ./src/components/banner/index.js

/* harmony default export */ var banner = (function (Vue) {
  Vue.component(ScSponsorBanner.name, ScSponsorBanner);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/ScCta.vue?vue&type=template&id=1eefbfde&scoped=true&
var ScCtavue_type_template_id_1eefbfde_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cta-box"},[(_vm.getHeader)?_c('div',{staticClass:"box-header",class:{ 'with-image': _vm.getHeader }},[_c('img',{attrs:{"src":_vm.getHeader,"alt":""}})]):_vm._e(),_c('div',{staticClass:"box-body"},[(_vm.cta.headline)?_c('div',{staticClass:"cta-headline"},[_vm._v(" "+_vm._s(_vm.cta.headline)+" ")]):_vm._e(),(_vm.cta.description)?_c('div',{staticClass:"cta-text"},[_vm._v(" "+_vm._s(_vm.cta.description)+" ")]):_vm._e()]),_c('div',{staticClass:"box-footer"},[(_vm.ofType(['website']))?_c('ScCtaWebsite',{attrs:{"custom":_vm.cta.custom,"popupRef":_vm.popupRef}}):_vm._e(),(_vm.ofType(['social']))?_c('ScCtaSocial',{attrs:{"custom":_vm.cta.custom}}):_vm._e(),(_vm.ofType(['feedback']))?_c('ScCtaFeedback',{attrs:{"custom":_vm.cta.custom}}):_vm._e(),(_vm.ofType(['leadgen', 'newsletter', 'promotion']))?_c('ScCtaCustom',{attrs:{"custom":_vm.cta.custom}}):_vm._e()],1)])}
var ScCtavue_type_template_id_1eefbfde_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cta/ScCta.vue?vue&type=template&id=1eefbfde&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/footer/ScCtaCustom.vue?vue&type=template&id=4a7e8f80&scoped=true&
var ScCtaCustomvue_type_template_id_4a7e8f80_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'cta-type-' + _vm.type},[(_vm.custom.userNameInput)?_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":_vm.custom.userNameInput}})]):_vm._e(),(_vm.custom.userEmailInput)?_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"email","placeholder":_vm.custom.userEmailInput}})]):_vm._e(),_c('button',{staticClass:"main-button",on:{"click":function($event){return _vm.handleClick()}}},[_vm._v(" "+_vm._s(_vm.custom.buttonLabel || 'Go to Website')+" "),_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})])])])}
var ScCtaCustomvue_type_template_id_4a7e8f80_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaCustom.vue?vue&type=template&id=4a7e8f80&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/footer/ScCtaCustom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ScCtaCustomvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaCustom.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_ScCtaCustomvue_type_script_lang_js_ = (ScCtaCustomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/cta/footer/ScCtaCustom.vue?vue&type=style&index=0&id=4a7e8f80&scoped=true&lang=scss&
var ScCtaCustomvue_type_style_index_0_id_4a7e8f80_scoped_true_lang_scss_ = __webpack_require__("9e06");

// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaCustom.vue






/* normalize component */

var ScCtaCustom_component = normalizeComponent(
  footer_ScCtaCustomvue_type_script_lang_js_,
  ScCtaCustomvue_type_template_id_4a7e8f80_scoped_true_render,
  ScCtaCustomvue_type_template_id_4a7e8f80_scoped_true_staticRenderFns,
  false,
  null,
  "4a7e8f80",
  null
  
)

/* harmony default export */ var ScCtaCustom = (ScCtaCustom_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/footer/ScCtaFeedback.vue?vue&type=template&id=2836bbda&scoped=true&
var ScCtaFeedbackvue_type_template_id_2836bbda_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cta-type-feedback"},[_vm._m(0),_c('button',{staticClass:"main-button",on:{"click":function($event){return _vm.handleClick()}}},[_vm._v(" "+_vm._s(_vm.custom.buttonLabel || 'Submit')+" ")])])}
var ScCtaFeedbackvue_type_template_id_2836bbda_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group"},[_c('textarea',{staticClass:"form-control",attrs:{"rows":"4","placeholder":"Type in..."}})])}]


// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaFeedback.vue?vue&type=template&id=2836bbda&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/footer/ScCtaFeedback.vue?vue&type=script&lang=js&
//
//
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
// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaFeedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_ScCtaFeedbackvue_type_script_lang_js_ = (ScCtaFeedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/cta/footer/ScCtaFeedback.vue?vue&type=style&index=0&id=2836bbda&scoped=true&lang=scss&
var ScCtaFeedbackvue_type_style_index_0_id_2836bbda_scoped_true_lang_scss_ = __webpack_require__("7d25");

// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaFeedback.vue






/* normalize component */

var ScCtaFeedback_component = normalizeComponent(
  footer_ScCtaFeedbackvue_type_script_lang_js_,
  ScCtaFeedbackvue_type_template_id_2836bbda_scoped_true_render,
  ScCtaFeedbackvue_type_template_id_2836bbda_scoped_true_staticRenderFns,
  false,
  null,
  "2836bbda",
  null
  
)

/* harmony default export */ var ScCtaFeedback = (ScCtaFeedback_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/footer/ScCtaSocial.vue?vue&type=template&id=46f6b412&scoped=true&
var ScCtaSocialvue_type_template_id_46f6b412_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cta-type-social"},_vm._l((_vm.values),function(social,index){return _c('button',{key:index,staticClass:"main-button social",class:social.name,on:{"click":function($event){return _vm.handleClick(social)}}},[_c('span',{staticClass:"icon icon-left social-icon",domProps:{"innerHTML":_vm._s(_vm.socialIcons[social.name])}}),_vm._v(" "+_vm._s('Follow us on ' + social.name)+" "),_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})])])}),0)}
var ScCtaSocialvue_type_template_id_46f6b412_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaSocial.vue?vue&type=template&id=46f6b412&scoped=true&

// CONCATENATED MODULE: ./src/components/cta/footer/svgs.js
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/footer/ScCtaSocial.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ScCtaSocialvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaSocial.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_ScCtaSocialvue_type_script_lang_js_ = (ScCtaSocialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/cta/footer/ScCtaSocial.vue?vue&type=style&index=0&id=46f6b412&scoped=true&lang=scss&
var ScCtaSocialvue_type_style_index_0_id_46f6b412_scoped_true_lang_scss_ = __webpack_require__("b32c");

// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaSocial.vue






/* normalize component */

var ScCtaSocial_component = normalizeComponent(
  footer_ScCtaSocialvue_type_script_lang_js_,
  ScCtaSocialvue_type_template_id_46f6b412_scoped_true_render,
  ScCtaSocialvue_type_template_id_46f6b412_scoped_true_staticRenderFns,
  false,
  null,
  "46f6b412",
  null
  
)

/* harmony default export */ var ScCtaSocial = (ScCtaSocial_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/footer/ScCtaWebsite.vue?vue&type=template&id=00714e7a&scoped=true&
var ScCtaWebsitevue_type_template_id_00714e7a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cta-type-website"},[_c('button',{staticClass:"main-button",on:{"click":function($event){return _vm.handleClick()}}},[_vm._v(" "+_vm._s(_vm.custom.buttonLabel || 'Go to Website')+" "),_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})])])])}
var ScCtaWebsitevue_type_template_id_00714e7a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaWebsite.vue?vue&type=template&id=00714e7a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/footer/ScCtaWebsite.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ScCtaWebsitevue_type_script_lang_js_ = ({
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
      window.open(this.custom.buttonLink, '_blank', 'noopener');
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
// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaWebsite.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_ScCtaWebsitevue_type_script_lang_js_ = (ScCtaWebsitevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/cta/footer/ScCtaWebsite.vue?vue&type=style&index=0&id=00714e7a&scoped=true&lang=scss&
var ScCtaWebsitevue_type_style_index_0_id_00714e7a_scoped_true_lang_scss_ = __webpack_require__("a0ab");

// CONCATENATED MODULE: ./src/components/cta/footer/ScCtaWebsite.vue






/* normalize component */

var ScCtaWebsite_component = normalizeComponent(
  footer_ScCtaWebsitevue_type_script_lang_js_,
  ScCtaWebsitevue_type_template_id_00714e7a_scoped_true_render,
  ScCtaWebsitevue_type_template_id_00714e7a_scoped_true_staticRenderFns,
  false,
  null,
  "00714e7a",
  null
  
)

/* harmony default export */ var ScCtaWebsite = (ScCtaWebsite_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/ScCta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var ScCtavue_type_script_lang_js_ = ({
  name: 'ScCta',
  components: {
    ScCtaWebsite: ScCtaWebsite,
    ScCtaSocial: ScCtaSocial,
    ScCtaFeedback: ScCtaFeedback,
    ScCtaCustom: ScCtaCustom
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
      return this.cta.header && !!this.cta.header.length ? this.cta.header.toString() : null;
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
// CONCATENATED MODULE: ./src/components/cta/ScCta.vue?vue&type=script&lang=js&
 /* harmony default export */ var cta_ScCtavue_type_script_lang_js_ = (ScCtavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/cta/ScCta.vue?vue&type=style&index=0&id=1eefbfde&scoped=true&lang=scss&
var ScCtavue_type_style_index_0_id_1eefbfde_scoped_true_lang_scss_ = __webpack_require__("cfcf");

// CONCATENATED MODULE: ./src/components/cta/ScCta.vue






/* normalize component */

var ScCta_component = normalizeComponent(
  cta_ScCtavue_type_script_lang_js_,
  ScCtavue_type_template_id_1eefbfde_scoped_true_render,
  ScCtavue_type_template_id_1eefbfde_scoped_true_staticRenderFns,
  false,
  null,
  "1eefbfde",
  null
  
)

/* harmony default export */ var ScCta = (ScCta_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/ScCtaPopup.vue?vue&type=template&id=7bda148b&scoped=true&
var ScCtaPopupvue_type_template_id_7bda148b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"cta-popup-container"},[_c('SCPopupOverlay',{ref:"ctaOverlay",staticClass:"cta-overlay",attrs:{"canDismiss":_vm.options.canDismiss}},[_c('ScCta',{attrs:{"cta":_vm.cta,"popupRef":_vm.$refs.ctaOverlay}})],1)],1)}
var ScCtaPopupvue_type_template_id_7bda148b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cta/ScCtaPopup.vue?vue&type=template&id=7bda148b&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cta/ScCtaPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var ScCtaPopupvue_type_script_lang_js_ = ({
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
      if (this.cta.showOnce && window.sessionStorage.getItem('sc:activation:cta' + this.cta.createdTimestamp) === 'true') {
        return;
      }

      window.sessionStorage.setItem('sc:activation:cta' + this.cta.createdTimestamp, true);
      this.$refs.ctaOverlay.show();
    },
    hide: function hide() {
      this.$refs.ctaOverlay.hide();
    }
  }
});
// CONCATENATED MODULE: ./src/components/cta/ScCtaPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var cta_ScCtaPopupvue_type_script_lang_js_ = (ScCtaPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/cta/ScCtaPopup.vue?vue&type=style&index=0&id=7bda148b&scoped=true&lang=scss&
var ScCtaPopupvue_type_style_index_0_id_7bda148b_scoped_true_lang_scss_ = __webpack_require__("531f");

// CONCATENATED MODULE: ./src/components/cta/ScCtaPopup.vue






/* normalize component */

var ScCtaPopup_component = normalizeComponent(
  cta_ScCtaPopupvue_type_script_lang_js_,
  ScCtaPopupvue_type_template_id_7bda148b_scoped_true_render,
  ScCtaPopupvue_type_template_id_7bda148b_scoped_true_staticRenderFns,
  false,
  null,
  "7bda148b",
  null
  
)

/* harmony default export */ var ScCtaPopup = (ScCtaPopup_component.exports);
// CONCATENATED MODULE: ./src/components/cta/index.js


/* harmony default export */ var cta = (function (Vue) {
  Vue.component(ScCta.name, ScCta);
  Vue.component(ScCtaPopup.name, ScCtaPopup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/onboarding/ScOnboardingPopup.vue?vue&type=template&id=225b62ad&scoped=true&
var ScOnboardingPopupvue_type_template_id_225b62ad_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"help-button-container"},[_c('button',{staticClass:"help-button",class:{ hidden: !_vm.showButton },on:{"click":_vm.show}},[_vm._v("?")]),_c('SCPopupOverlay',{ref:"popupOverlay",attrs:{"canDismiss":_vm.onboarded},on:{"hide":function($event){return _vm.toggleButton($event)}}},[_c('ScOnboarding',{attrs:{"prize":_vm.prize,"howto":_vm.howto,"options":_vm.options,"share":_vm.share,"onboarded":_vm.onboarded},on:{"termsAccepted":function($event){return _vm.completeOnboarding()}}})],1)],1)}
var ScOnboardingPopupvue_type_template_id_225b62ad_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/onboarding/ScOnboardingPopup.vue?vue&type=template&id=225b62ad&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/onboarding/ScOnboarding.vue?vue&type=template&id=929b7992&scoped=true&
var ScOnboardingvue_type_template_id_929b7992_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"onboarding-box"},[(_vm.options.title || _vm.options.header)?_c('div',{staticClass:"header-info",class:{ 'with-image': _vm.getHeaderImage }},[(_vm.getHeaderImage)?_c('img',{attrs:{"src":_vm.getHeaderImage,"alt":""}}):_c('span',[_vm._v(_vm._s(_vm.options.title))])]):_vm._e(),_c('div',{staticClass:"tab-pills"},[(_vm.prize)?_c('div',{staticClass:"tab-title",class:{ selected: _vm.isActiveTab(0) },on:{"click":function($event){return _vm.showTab(0)}}},[_c('svg',{attrs:{"width":"21","height":"22","viewBox":"0 0 21 22","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z","fill":"url(#paint0_linear)"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"0.307617","y1":"10.6874","x2":"20.579","y2":"10.6874","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#EEC868"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#E49358"}})],1)],1)]),_vm._v(" "+_vm._s(_vm.t('scComponents.help.tabs.prize'))+" ")]):_vm._e(),(_vm.howto)?_c('div',{staticClass:"tab-title",class:{ selected: _vm.isActiveTab(1) },on:{"click":function($event){return _vm.showTab(1)}}},[_vm._v(_vm._s(_vm.t('scComponents.help.tabs.howto')))]):_vm._e(),(_vm.share)?_c('div',{staticClass:"tab-title",class:{ selected: _vm.isActiveTab(2) },on:{"click":function($event){return _vm.showTab(2)}}},[_vm._v(_vm._s(_vm.t('scComponents.help.tabs.share')))]):_vm._e()]),_c('div',[(_vm.prize)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActiveTab(0)),expression:"isActiveTab(0)"}],staticClass:"tab-content",attrs:{"dir":"auto"}},[(_vm.prize.picture)?_c('div',{staticClass:"prize-image"},[_c('img',{attrs:{"src":_vm.prize.picture,"alt":""}})]):_vm._e(),(_vm.prize.headline)?_c('div',{staticClass:"prize-headline"},[_vm._v(" "+_vm._s(_vm.prize.headline)+" ")]):_vm._e(),(_vm.prize.description)?_c('div',{staticClass:"prize-text"},[_vm._v(" "+_vm._s(_vm.prize.description)+" ")]):_vm._e(),(_vm.prize.learnMoreTitle && _vm.prize.learnMoreUrl)?_c('div',{staticClass:"prize-learnmore"},[_c('a',{attrs:{"href":_vm.prize.learnMoreUrl,"target":"learnmore","rel":"noopener"}},[_vm._v(_vm._s(_vm.prize.learnMoreTitle))])]):_vm._e()]):_vm._e(),(_vm.howto)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActiveTab(1)),expression:"isActiveTab(1)"}],staticClass:"tab-content",attrs:{"dir":"auto"}},[_c('ul',_vm._l((_vm.howto),function(item,index){return _c('li',{key:index},[_vm._v(_vm._s(item))])}),0)]):_vm._e(),(_vm.share)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActiveTab(2)),expression:"isActiveTab(2)"}],staticClass:"tab-content",attrs:{"dir":"auto"}},[_c('p',[_vm._v(_vm._s(_vm.t('scComponents.help.share.title')))]),_c('div',{staticClass:"input-group",on:{"click":function($event){return _vm.copyToClipboard($event)}}},[_c('div',{staticClass:"input-group-prepend",class:_vm.buttonClasses},[_c('span',[(!_vm.copiedToClipboard)?_c('svg',{attrs:{"width":"24","height":"20","viewBox":"0 0 20 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M14.142 19.9639C12.6358 19.9639 11.1586 19.3846 10 18.255L7.71183 15.9668C7.2484 15.5034 7.2484 14.7792 7.71183 14.3158C8.17527 13.8524 8.89939 13.8524 9.36282 14.3158L11.651 16.604C13.0413 17.9943 15.2716 17.9943 16.633 16.604C18.0233 15.2137 18.0233 12.9834 16.633 11.6221L14.3447 9.33388C13.8813 8.87044 13.8813 8.14632 14.3447 7.68289C14.8082 7.21945 15.5323 7.21945 15.9957 7.68289L18.2839 9.9711C20.5722 12.2593 20.5722 15.9668 18.2839 18.226C17.1254 19.3846 15.6482 19.9639 14.142 19.9639Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M4.81538 12.5779C4.52573 12.5779 4.23609 12.4621 4.00437 12.2303L1.71616 9.9711C-0.572053 7.68288 -0.572053 3.9754 1.71616 1.71616C4.00437 -0.572053 7.71185 -0.572053 9.9711 1.71616L12.2593 4.00437C12.7227 4.4678 12.7227 5.19192 12.2593 5.65536C11.7959 6.11879 11.0718 6.11879 10.6083 5.65536L8.32011 3.36715C7.65392 2.70096 6.75601 2.32442 5.82914 2.32442C4.87331 2.32442 4.00437 2.70096 3.33818 3.36715C1.94788 4.75745 1.94788 6.98773 3.33818 8.34907L5.62639 10.6373C6.08983 11.1007 6.08983 11.8248 5.62639 12.2883C5.42364 12.4621 5.10503 12.5779 4.81538 12.5779Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M11.8535 12.9834C11.5639 12.9834 11.2742 12.8676 11.0425 12.6358L7.30607 8.92837C6.84264 8.46493 6.84264 7.74081 7.30607 7.27738C7.76951 6.81394 8.49362 6.81394 8.95706 7.27738L12.6935 11.0138C13.1569 11.4773 13.1569 12.2014 12.6935 12.6648C12.4618 12.8676 12.1721 12.9834 11.8535 12.9834Z","fill":"var(--btn-text-color-1)"}})]):_c('svg',{attrs:{"width":"24","height":"20","viewBox":"0 0 24 20","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M3.25948 10.9476L9.16157 17L18.5233 1.79999","stroke":"white","stroke-width":"2.7","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),_c('input',{staticClass:"form-control",attrs:{"type":"text","id":"copy-to-clipboard","disabled":""},domProps:{"value":_vm.share}})])]):_vm._e()]),(!_vm.onboarded)?_c('div',{staticClass:"start-bottom-overlay"},[_c('div',[_c('label',{staticClass:"mc-checkbox"},[_c('span',{staticStyle:{"word-break":"break-all"}},[_vm._v(_vm._s(_vm.t('scComponents.help.accept'))+" "),_c('a',{attrs:{"href":"https://www.stagecast.io/terms-and-conditions","target":"termsofservice","rel":"noopener"},domProps:{"innerHTML":_vm._s(_vm.t('scComponents.help.tos'))}}),(_vm.prize && (_vm.prize.rulesDocUrl || _vm.prize.rulesUrl))?_c('span',[_vm._v(" "+_vm._s(_vm.t('scComponents.help.and'))+" "),_c('a',{attrs:{"href":_vm.prize.rulesDocUrl || _vm.prize.rulesUrl,"download":_vm.t('scComponents.help.prizeterms')},domProps:{"innerHTML":_vm._s(_vm.t('scComponents.help.prizeterms'))}})]):_vm._e()]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkbox),expression:"checkbox"}],attrs:{"type":"checkbox","value":"true"},domProps:{"checked":Array.isArray(_vm.checkbox)?_vm._i(_vm.checkbox,"true")>-1:(_vm.checkbox)},on:{"change":function($event){var $$a=_vm.checkbox,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="true",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkbox=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkbox=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkbox=$$c}}}}),_c('span',{staticClass:"mc-checkmark"})])]),_c('button',{staticClass:"main-button",class:{disabled: !_vm.checkbox},attrs:{"disabled":!_vm.checkbox},on:{"click":_vm.termsAccepted}},[_vm._v(_vm._s(_vm.t('scComponents.help.start')))])]):_vm._e()])}
var ScOnboardingvue_type_template_id_929b7992_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/onboarding/ScOnboarding.vue?vue&type=template&id=929b7992&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/onboarding/ScOnboarding.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ScOnboardingvue_type_script_lang_js_ = ({
  name: 'ScOnboarding',
  components: {},
  props: {
    howto: Array,
    share: String,
    prize: Object,
    onboarded: Boolean,
    options: {
      data: Object,
      required: false,
      default: function _default() {
        return {
          title: '',
          header: null,
          tabs: {}
        };
      }
    }
  },
  data: function data() {
    return {
      activeTab: 0,
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
    var tabs = ['prize', 'howto', 'share'];

    for (var index in tabs) {
      if (this[tabs[index]]) {
        this.showTab(parseInt(index));
        break;
      }
    }
  },
  methods: {
    termsAccepted: function termsAccepted() {
      if (this.checkbox) {
        this.$emit('termsAccepted');
      }
    },

    /* Switch tab */
    showTab: function showTab(number) {
      this.activeTab = number;
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
// CONCATENATED MODULE: ./src/components/onboarding/ScOnboarding.vue?vue&type=script&lang=js&
 /* harmony default export */ var onboarding_ScOnboardingvue_type_script_lang_js_ = (ScOnboardingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/onboarding/ScOnboarding.vue?vue&type=style&index=0&id=929b7992&scoped=true&lang=scss&
var ScOnboardingvue_type_style_index_0_id_929b7992_scoped_true_lang_scss_ = __webpack_require__("4aca");

// CONCATENATED MODULE: ./src/components/onboarding/ScOnboarding.vue






/* normalize component */

var ScOnboarding_component = normalizeComponent(
  onboarding_ScOnboardingvue_type_script_lang_js_,
  ScOnboardingvue_type_template_id_929b7992_scoped_true_render,
  ScOnboardingvue_type_template_id_929b7992_scoped_true_staticRenderFns,
  false,
  null,
  "929b7992",
  null
  
)

/* harmony default export */ var ScOnboarding = (ScOnboarding_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/onboarding/ScOnboardingPopup.vue?vue&type=script&lang=js&


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



/* harmony default export */ var ScOnboardingPopupvue_type_script_lang_js_ = ({
  name: 'ScOnboardingPopup',
  components: {
    SCPopupOverlay: scPopupOverlay,
    ScOnboarding: ScOnboarding
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
      onboarded: false,
      sessionKey: 'sc:help-onboarded'
    };
  },
  computed: {},
  mounted: function mounted() {
    window.setTimeout(function () {
      if (!this.isOnboarded()) {
        this.show();
      }
    }.bind(this), 300);
  },
  methods: {
    /* Check if the popup has already been opened once */
    isOnboarded: function isOnboarded() {
      return window.sessionStorage.getItem(this.sessionKey) === 'true';
    },
    completeOnboarding: function completeOnboarding() {
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
    hide: function hide() {
      this.$refs.popupOverlay.hide();
    },
    toggleButton: function toggleButton() {
      this.showButton = true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/onboarding/ScOnboardingPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var onboarding_ScOnboardingPopupvue_type_script_lang_js_ = (ScOnboardingPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/onboarding/ScOnboardingPopup.vue?vue&type=style&index=0&id=225b62ad&scoped=true&lang=scss&
var ScOnboardingPopupvue_type_style_index_0_id_225b62ad_scoped_true_lang_scss_ = __webpack_require__("3220");

// CONCATENATED MODULE: ./src/components/onboarding/ScOnboardingPopup.vue






/* normalize component */

var ScOnboardingPopup_component = normalizeComponent(
  onboarding_ScOnboardingPopupvue_type_script_lang_js_,
  ScOnboardingPopupvue_type_template_id_225b62ad_scoped_true_render,
  ScOnboardingPopupvue_type_template_id_225b62ad_scoped_true_staticRenderFns,
  false,
  null,
  "225b62ad",
  null
  
)

/* harmony default export */ var ScOnboardingPopup = (ScOnboardingPopup_component.exports);
// CONCATENATED MODULE: ./src/components/onboarding/index.js

/* harmony default export */ var onboarding = (function (Vue) {
  Vue.component(ScOnboardingPopup.name, ScOnboardingPopup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/prize/ScPrizeClaim.vue?vue&type=template&id=ae93265c&scoped=true&
var ScPrizeClaimvue_type_template_id_ae93265c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prize-claim-box"},[(_vm.getHeaderImg)?_c('div',{staticClass:"header-info",class:{ 'with-image': _vm.getHeaderImg }},[_c('img',{attrs:{"src":_vm.getHeaderImg,"alt":"winner header"}})]):_vm._e(),_c('div',[(_vm.prize && _vm.prize.fulfillment)?_c('div',{attrs:{"dir":"auto"}},[(_vm.getHeadline)?_c('div',{staticClass:"prize-headline"},[_vm._v(" "+_vm._s(_vm.getHeadline)+" ")]):_vm._e(),(_vm.getDescription)?_c('div',{staticClass:"prize-text"},[_vm._v(" "+_vm._s(_vm.getDescription)+" ")]):_vm._e(),(_vm.ofType('collect-data') && _vm.getNameInput)?_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.value.name),expression:"form.value.name"}],staticClass:"form-control",class:{ disabled: _vm.isInputDisabled },attrs:{"type":"text","disabled":_vm.isInputDisabled,"placeholder":_vm.getNameInput},domProps:{"value":(_vm.form.value.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.value, "name", $event.target.value)}}})]):_vm._e(),(_vm.ofType('collect-data') && _vm.getEmailInput)?_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.value.email),expression:"form.value.email"}],staticClass:"form-control",class:{ disabled: _vm.isInputDisabled},attrs:{"type":"email","disabled":_vm.isInputDisabled,"placeholder":_vm.getEmailInput},domProps:{"value":(_vm.form.value.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form.value, "email", $event.target.value)}}})]):_vm._e()]):_vm._e(),_c('div',{staticStyle:{"padding-top":"12px"}},[(_vm.getTermsUrl)?_c('div',[_c('label',{staticClass:"mc-checkbox"},[_c('span',{staticStyle:{"word-break":"break-all"}},[_vm._v(_vm._s(_vm.prize.fulfillment.config.termsLabel || _vm.t('scComponents.help.accept'))+" "),_c('span',[_c('a',{attrs:{"href":_vm.getTermsUrl,"download":_vm.t('scComponents.help.tos')}},[_vm._v(_vm._s(_vm.prize.fulfillment.config.termsLinkTitle || _vm.t('scComponents.help.tos')))])])]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.value.checkbox),expression:"form.value.checkbox"}],attrs:{"type":"checkbox","value":"true"},domProps:{"checked":Array.isArray(_vm.form.value.checkbox)?_vm._i(_vm.form.value.checkbox,"true")>-1:(_vm.form.value.checkbox)},on:{"change":function($event){var $$a=_vm.form.value.checkbox,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="true",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.form.value, "checkbox", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.form.value, "checkbox", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.form.value, "checkbox", $$c)}}}}),_c('span',{staticClass:"mc-checkmark"})])]):_vm._e(),_c('button',{staticClass:"main-button",attrs:{"disabled":!_vm.canSubmit},on:{"click":function($event){return _vm.claimPrize()}}},[_c('svg',{staticClass:"icon icon-left",attrs:{"width":"21","height":"22","viewBox":"0 0 21 22","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z","fill":"url(#paint0_linear)"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"0.307617","y1":"10.6874","x2":"20.579","y2":"10.6874","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#EEC868"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#E49358"}})],1)],1)]),_vm._v(" "+_vm._s(_vm.prize.fulfillment.config.claimLabel || _vm.t('scComponents.prize.claim'))+" "),(_vm.ofType('website-visits'))?_c('svg',{staticClass:"icon icon-right",attrs:{"width":"22","height":"21","viewBox":"0 0 22 21","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z","fill":"var(--btn-text-color-1)"}}),_c('path',{attrs:{"d":"M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z","fill":"var(--btn-text-color-1)"}})]):_vm._e()]),(_vm.submitStatus || _vm.previewMode)?_c('div',{staticClass:"submit-message",class:{'text-red': _vm.submitStatus !== 'SUCCESS'}},[_vm._v(_vm._s(_vm.getSubmitMessage))]):_vm._e()])])])}
var ScPrizeClaimvue_type_template_id_ae93265c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/prize/ScPrizeClaim.vue?vue&type=template&id=ae93265c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/prize/ScPrizeClaim.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ScPrizeClaimvue_type_script_lang_js_ = ({
  name: 'ScPrizeClaim',
  components: {},
  props: {
    prize: {
      type: Object,
      required: false,
      default: function _default() {
        return {
          fulfillment: {
            type: '',
            // collect-data | website-visits
            headline: '',
            description: '',
            picture: null,
            config: {
              claimLabel: '',
              nameInput: '',
              emailInput: '',
              termsUrl: '',
              termsLabel: '',
              termsLinkTitle: '',
              submitMessage: ''
            }
          }
        };
      }
    },
    profile: {
      type: Object
    },
    previewMode: Boolean
  },
  data: function data() {
    var _this = this;

    return {
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      //eslint-disable-line
      submitStatus: undefined,
      submitting: false,
      activeInstanceId: undefined,
      lastActiveInstanceId: undefined,
      form: {
        status: 'INVALID',
        value: {
          name: '',
          email: '',
          checkbox: false
        },
        valid: {
          name: false,
          email: false,
          checkbox: false
        },
        skipProperty: function skipProperty(name) {
          this.valid[name] = true;
        },
        validators: {
          name: function name(val) {
            return !!val;
          },
          email: function email(val) {
            if (!val) return false;
            return _this.emailRegex.test(val);
          },
          checkbox: function checkbox(val) {
            if (!_this.getTermsUrl) return true;
            return val;
          }
        }
      }
    };
  },
  computed: {
    getHeadline: function getHeadline() {
      return this.prize.fulfillment.headline;
    },
    getDescription: function getDescription() {
      return this.prize.fulfillment.description;
    },
    getHeaderImg: function getHeaderImg() {
      return this.prize.fulfillment.picture ? this.prize.fulfillment.picture : false;
    },
    getTermsUrl: function getTermsUrl() {
      return this.prize.fulfillment.config.termsUrl;
    },
    getNameInput: function getNameInput() {
      return this.prize.fulfillment.config.nameInput;
    },
    getEmailInput: function getEmailInput() {
      return this.prize.fulfillment.config.emailInput;
    },
    getSubmitMessage: function getSubmitMessage() {
      return this.submitStatus === 'SUCCESS' ? this.prize.fulfillment.config.submitMessage : this.submitErrorMessage;
    },
    canSubmit: function canSubmit() {
      if (this.prize.fulfillment.type === 'website-visits') {
        return true;
      }

      return !this.submitting && !this.submitStatus && this.form.status === 'VALID';
    },
    isInputDisabled: function isInputDisabled() {
      return this.submitting;
    }
  },
  mounted: function mounted() {
    this.checkProfile(this.profile);
    this.checkPrize(this.prize);
  },
  methods: {
    /**
     * Open the terms by changing the location.
     */
    openPrizeTerms: function openPrizeTerms() {
      var windowReference = window.open('', '_blank');
      windowReference.location = this.prize.fulfillment.config.termsUrl;
    },

    /**
     * Resets the form and the submit data.
     */
    resetState: function resetState() {
      this.submitStatus = undefined;
      this.submitting = false;
      this.form.status = 'INVALID';
      this.form.value = {
        name: '',
        email: '',
        checkbox: false
      };
      this.form.valid = {
        name: false,
        email: false,
        checkbox: false
      };
    },

    /**
     * Check if the prize fulfillment data is set. Disabled te checkbox if no termsUrl 
     * is defined.
     */
    checkPrize: function checkPrize(prize) {
      if (prize && !prize.fulfillment) {
        prize.fulfillment = {
          config: {}
        };
      } // autocheck if terms are not specified


      this.skipProperties(prize);
    },
    skipProperties: function skipProperties(prize) {
      if (prize && !prize.fulfillment.config.termsUrl) {
        this.form.skipProperty('checkbox');
        this.form.value.checkbox = true;
      }

      if (prize && !prize.fulfillment.config.nameInput) {
        this.form.skipProperty('name');
      }

      if (prize && !prize.fulfillment.config.emailInput) {
        this.form.skipProperty('email');
      }
    },

    /**
     * Check profile prize instance
     */
    checkProfile: function checkProfile(profile) {
      if (profile && profile.prizes) {
        var prizeListLen = profile.prizes.length;

        if (!prizeListLen) {
          return;
        }

        var instanceId = profile.prizes[prizeListLen - 1];
        this.activeInstanceId = instanceId; // reset state if there is a new prize to be claimed

        if (this.activeInstanceId !== this.lastActiveInstanceId) {
          this.resetState();
        }
      }
    },

    /**
     * Check the fulfillment type
     */
    ofType: function ofType(type) {
      return this.prize.fulfillment.type === type;
    },

    /**
     * Validate the form input based on the value.
     */
    validateInput: function validateInput(type, value) {
      this.form.valid[type] = this.form.validators[type](value);
      this.form.status = Object.values(this.form.valid).filter(function (v) {
        return v === false;
      }).length ? 'INVALID' : 'VALID';
    },

    /**
     * Claim prize entry point.
     */
    claimPrize: function claimPrize() {
      // if the SDK is not defined or the submission in in progress, exit
      if (this.$SDK && this.profile && !this.submitting && !this.submitStatus) {
        switch (this.prize.fulfillment.type) {
          case 'website-visits':
            this.visitWebsite(this.activeInstanceId);
            break;

          case 'collect-data':
            this.submitting = true;
            this.submitData(this.activeInstanceId);
            break;

          default:
            break;
        }
      }
    },

    /**
     * Fulfillment-type: website visits. Redirect to claimUrl. The user will fulfill the claim
     * in the webpage where it is redirect to.
     */
    visitWebsite: function visitWebsite(instanceId) {
      var claimUrl = this.$SDK.prize.getClaimUrl(instanceId); // open the window now and change the location later to make it work on mobile and Safari

      window.open(claimUrl, '_blank', 'noopener');
    },

    /**
     * Fulfillment-type: collect data. The user fulfills the claim in this page.
     */
    submitData: function submitData(instanceId) {
      var _this2 = this;

      var userData = {
        name: this.form.value.name,
        email: this.form.value.email,
        username: this.profile.name,
        points: this.profile.bestScore,
        position: this.profile.position,
        series: this.profile.seriesNumber
      };
      this.$SDK.prize.claimPrize(instanceId).then(function () {
        return _this2.$SDK.prize.fulfillClaim(instanceId, userData);
      }).then(function () {
        _this2.submitStatus = 'SUCCESS';
        _this2.lastActiveInstanceId = instanceId;
      }).catch(function (error) {
        if (error.statusCode === 403 || error.status === 403) {
          _this2.lastActiveInstanceId = instanceId;
          _this2.submitStatus = 'ERROR_ALREADY_CLAIMED';
          _this2.submitErrorMessage = _this2.$t('scComponents.prize.claimError');
        } else {
          _this2.submitStatus = 'ERROR_GENERIC';
          _this2.submitErrorMessage = _this2.$t('scComponents.prize.claimErrorGeneric');
          _this2.submitting = false;
        }
      });
    }
  },
  watch: {
    prize: function prize(newValue) {
      this.checkPrize(newValue);
    },
    profile: function profile(newValue) {
      this.checkProfile(newValue);
      this.checkPrize(this.prize);
    },
    'form.value.name': function formValueName(newValue) {
      this.validateInput('name', newValue);
    },
    'form.value.email': function formValueEmail(newValue) {
      this.validateInput('email', newValue);
    },
    'form.value.checkbox': function formValueCheckbox(newValue) {
      this.validateInput('checkbox', newValue);
    }
  }
});
// CONCATENATED MODULE: ./src/components/prize/ScPrizeClaim.vue?vue&type=script&lang=js&
 /* harmony default export */ var prize_ScPrizeClaimvue_type_script_lang_js_ = (ScPrizeClaimvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/prize/ScPrizeClaim.vue?vue&type=style&index=0&id=ae93265c&scoped=true&lang=scss&
var ScPrizeClaimvue_type_style_index_0_id_ae93265c_scoped_true_lang_scss_ = __webpack_require__("7d63");

// CONCATENATED MODULE: ./src/components/prize/ScPrizeClaim.vue






/* normalize component */

var ScPrizeClaim_component = normalizeComponent(
  prize_ScPrizeClaimvue_type_script_lang_js_,
  ScPrizeClaimvue_type_template_id_ae93265c_scoped_true_render,
  ScPrizeClaimvue_type_template_id_ae93265c_scoped_true_staticRenderFns,
  false,
  null,
  "ae93265c",
  null
  
)

/* harmony default export */ var ScPrizeClaim = (ScPrizeClaim_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/prize/ScPrizeClaimPopup.vue?vue&type=template&id=5966b1f8&scoped=true&
var ScPrizeClaimPopupvue_type_template_id_5966b1f8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"cta-box"},[_c('SCPopupOverlay',{ref:"prizeOverlay",staticClass:"prize-overlay",attrs:{"canDismiss":_vm.options.canDismiss}},[_c('ScPrizeClaim',{attrs:{"prize":_vm.prize,"profile":_vm.profile,"popupRef":_vm.$refs.prizeOverlay}})],1)],1)}
var ScPrizeClaimPopupvue_type_template_id_5966b1f8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/prize/ScPrizeClaimPopup.vue?vue&type=template&id=5966b1f8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/prize/ScPrizeClaimPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var ScPrizeClaimPopupvue_type_script_lang_js_ = ({
  name: 'ScPrizeClaimPopup',
  components: {
    SCPopupOverlay: scPopupOverlay,
    ScPrizeClaim: ScPrizeClaim
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
    prize: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    profile: {
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
      this.$refs.prizeOverlay.show();
    },
    hide: function hide() {
      this.$refs.prizeOverlay.hide();
    }
  }
});
// CONCATENATED MODULE: ./src/components/prize/ScPrizeClaimPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var prize_ScPrizeClaimPopupvue_type_script_lang_js_ = (ScPrizeClaimPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/prize/ScPrizeClaimPopup.vue?vue&type=style&index=0&id=5966b1f8&scoped=true&lang=scss&
var ScPrizeClaimPopupvue_type_style_index_0_id_5966b1f8_scoped_true_lang_scss_ = __webpack_require__("74a0");

// CONCATENATED MODULE: ./src/components/prize/ScPrizeClaimPopup.vue






/* normalize component */

var ScPrizeClaimPopup_component = normalizeComponent(
  prize_ScPrizeClaimPopupvue_type_script_lang_js_,
  ScPrizeClaimPopupvue_type_template_id_5966b1f8_scoped_true_render,
  ScPrizeClaimPopupvue_type_template_id_5966b1f8_scoped_true_staticRenderFns,
  false,
  null,
  "5966b1f8",
  null
  
)

/* harmony default export */ var ScPrizeClaimPopup = (ScPrizeClaimPopup_component.exports);
// CONCATENATED MODULE: ./src/components/prize/index.js


/* harmony default export */ var prize = (function (Vue) {
  Vue.component(ScPrizeClaim.name, ScPrizeClaim);
  Vue.component(ScPrizeClaimPopup.name, ScPrizeClaimPopup);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/profilebutton/ScProfileButton.vue?vue&type=template&id=defbb168&scoped=true&
var ScProfileButtonvue_type_template_id_defbb168_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.hasSignUp)?_c('button',{staticClass:"profile-button",attrs:{"type":"button"},on:{"click":function($event){return _vm.openProfilePopup()}}},[_c('svg',{attrs:{"width":"23","height":"23","viewBox":"0 0 23 23","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M18.6365 19.4858V17.7113C18.6365 16.77 18.2616 15.8672 17.5943 15.2016C16.927 14.536 16.022 14.1621 15.0783 14.1621H7.96189C7.01819 14.1621 6.11315 14.536 5.44586 15.2016C4.77857 15.8672 4.40369 16.77 4.40369 17.7113V19.4858","stroke":"var(--text-color-1)","stroke-opacity":"0.9","stroke-width":"1.77457","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"d":"M11.52 10.6139C13.4851 10.6139 15.0782 9.02491 15.0782 7.06477C15.0782 5.10463 13.4851 3.51562 11.52 3.51562C9.55485 3.51562 7.96179 5.10463 7.96179 7.06477C7.96179 9.02491 9.55485 10.6139 11.52 10.6139Z","stroke":"var(--text-color-1)","stroke-opacity":"0.9","stroke-width":"1.77457","stroke-linecap":"round","stroke-linejoin":"round"}})])]):_vm._e()}
var ScProfileButtonvue_type_template_id_defbb168_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/profilebutton/ScProfileButton.vue?vue&type=template&id=defbb168&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/profilebutton/ScProfileButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ScProfileButtonvue_type_script_lang_js_ = ({
  name: 'ScProfileButton',
  data: function data() {
    return {};
  },
  computed: {
    hasSignUp: function hasSignUp() {
      return this.$SDK && this.$SDK.signUpDefined();
    }
  },
  props: {},
  methods: {
    openProfilePopup: function openProfilePopup() {
      if (this.hasSignUp) {
        this.$SDK.wrapper.postMessage({
          type: 'lib:open'
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/profilebutton/ScProfileButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var profilebutton_ScProfileButtonvue_type_script_lang_js_ = (ScProfileButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/profilebutton/ScProfileButton.vue?vue&type=style&index=0&id=defbb168&scoped=true&lang=scss&
var ScProfileButtonvue_type_style_index_0_id_defbb168_scoped_true_lang_scss_ = __webpack_require__("9305");

// CONCATENATED MODULE: ./src/components/profilebutton/ScProfileButton.vue






/* normalize component */

var ScProfileButton_component = normalizeComponent(
  profilebutton_ScProfileButtonvue_type_script_lang_js_,
  ScProfileButtonvue_type_template_id_defbb168_scoped_true_render,
  ScProfileButtonvue_type_template_id_defbb168_scoped_true_staticRenderFns,
  false,
  null,
  "defbb168",
  null
  
)

/* harmony default export */ var ScProfileButton = (ScProfileButton_component.exports);
// CONCATENATED MODULE: ./src/components/profilebutton/index.js

/* harmony default export */ var profilebutton = (function (Vue) {
  Vue.component(ScProfileButton.name, ScProfileButton);
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f89f0710-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer/ScFooter.vue?vue&type=template&id=5604cf24&scoped=true&
var ScFootervue_type_template_id_5604cf24_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"stagecast-footer",attrs:{"href":"https://stagecast.io?utm_source=join.stagecast.io&utm_content=footer","target":"_blank","rel":"noopener"}},[_c('span',[_vm._v("Made in")]),_c('svg',{staticClass:"stagecast-logo",attrs:{"width":"61","height":"15","viewBox":"0 0 61 15","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill":"currentColor","d":"M7.40147 2.54796C6.71986 1.16871 5.27646 0.767761 3.87314 0.767761C2.22124 0.783799 0.400946 1.53758 0.400946 3.38193C0.400946 5.39468 2.09294 5.88384 3.92928 6.10035C5.11608 6.23667 6.00618 6.58149 6.00618 7.42347C6.00618 8.40178 5.00381 8.77065 3.93729 8.77065C2.84672 8.77065 1.80426 8.33763 1.41133 7.34328L0 8.08102C0.665571 9.72491 2.0769 10.2862 3.91324 10.2862C5.91797 10.2862 7.68213 9.42821 7.68213 7.42347C7.68213 5.28242 5.93401 4.79326 4.0656 4.56071C2.99106 4.43241 2.06086 4.2159 2.06086 3.43005C2.06086 2.76447 2.66228 2.23523 3.92126 2.23523C4.89957 2.23523 5.74155 2.72438 6.05429 3.23759L7.40147 2.54796ZM9.39017 1.68192V3.74278H8.21138V5.08996H9.39017V7.82442C9.39017 9.40415 10.2883 10.182 11.6595 10.1339C12.1326 10.1178 12.5095 10.0457 12.9586 9.86123L12.5256 8.53009C12.293 8.64235 12.0124 8.72254 11.7718 8.72254C11.2826 8.72254 10.9539 8.42584 10.9539 7.82442V5.08996H12.71V3.74278H10.9619V1.51352L9.39017 1.68192ZM18.8445 4.60081C18.4836 3.97533 17.6737 3.57439 16.8237 3.57439C14.9794 3.55835 13.5279 4.70506 13.5279 6.8862C13.5279 9.10745 14.9152 10.2622 16.7836 10.2461C17.4893 10.2301 18.4756 9.87726 18.8365 9.13151L18.9167 10.0537H20.3921V3.73477H18.8926L18.8445 4.60081ZM16.9681 4.9777C19.4299 4.9777 19.4299 8.81075 16.9681 8.81075C15.9256 8.81075 15.0916 8.08904 15.0916 6.8862C15.0916 5.68336 15.9256 4.9777 16.9681 4.9777ZM26.0535 3.88712C25.6205 3.59042 25.1073 3.52627 24.6021 3.52627C22.8299 3.52627 21.3945 4.76119 21.3945 6.73384C21.3945 8.7065 22.6294 9.91736 24.6021 9.91736C25.3879 9.91736 26.2059 10.3183 26.2059 11.1844C26.2059 12.0504 25.5002 12.5476 24.6021 12.5476C23.704 12.5476 22.9502 12.0103 22.9502 11.1844H21.3945C21.3945 12.8924 22.7657 14.007 24.6021 14.007C26.4384 14.007 27.7696 12.9325 27.7696 11.1844C27.7696 10.3744 27.5129 9.62066 26.4625 9.09141C27.5049 8.61829 27.7936 7.51168 27.7936 6.73384C27.7936 6.04422 27.6172 5.41072 27.128 4.85742L27.8337 3.9593L26.687 3.09325L26.0535 3.88712ZM24.6101 4.95364C25.5082 4.95364 26.254 5.64327 26.254 6.73384C26.254 7.82442 25.5082 8.48999 24.6101 8.48999C23.6959 8.48999 22.9582 7.83244 22.9582 6.73384C22.9582 5.63525 23.6959 4.95364 24.6101 4.95364ZM35.3234 7.45555C35.564 4.8494 34.2488 3.54231 32.1319 3.54231C30.079 3.54231 28.7719 4.92959 28.7719 6.85413C28.7719 8.88292 30.071 10.2301 32.2521 10.2301C33.2144 10.2301 34.305 9.8933 34.9706 9.20368L33.9682 8.21735C33.6073 8.58622 32.8536 8.81075 32.2762 8.81075C31.1696 8.81075 30.496 8.24942 30.3917 7.46357H35.3234V7.45555ZM30.4158 6.15648C30.6483 5.33855 31.338 4.92157 32.188 4.92157C33.0861 4.92157 33.7276 5.33053 33.8319 6.15648H30.4158ZM40.9046 8.22537C40.5197 8.61027 40.0225 8.75461 39.5173 8.75461C38.539 8.75461 37.721 8.1131 37.721 6.91026C37.721 5.80365 38.4909 5.03383 39.5413 5.03383C39.9744 5.03383 40.4395 5.20223 40.8083 5.53101L41.7947 4.48854C41.105 3.80694 40.4074 3.55033 39.5093 3.55033C37.6729 3.55033 36.1493 4.65694 36.1493 6.90224C36.1493 9.14754 37.6729 10.2542 39.5093 10.2542C40.4475 10.2542 41.2173 9.97349 41.947 9.25179L40.9046 8.22537ZM47.6084 4.60081C47.2556 3.97533 46.4456 3.57439 45.5956 3.57439C43.7513 3.55835 42.2999 4.70506 42.2999 6.8862C42.2999 9.10745 43.6871 10.2622 45.5555 10.2461C46.2612 10.2301 47.2475 9.87726 47.6084 9.13151L47.6886 10.0537H49.1641V3.73477H47.6645L47.6084 4.60081ZM45.74 4.9777C48.2018 4.9777 48.2018 8.81075 45.74 8.81075C44.6975 8.81075 43.8635 8.08904 43.8635 6.8862C43.8635 5.68336 44.6975 4.9777 45.74 4.9777ZM55.491 4.3843C54.7613 3.74278 54.0155 3.55033 53.0292 3.55033C51.8745 3.55033 50.3589 4.06354 50.3589 5.52299C50.3589 6.95837 51.7862 7.39942 52.973 7.48762C53.8712 7.53574 54.232 7.72017 54.232 8.1532C54.232 8.61829 53.6787 8.92301 53.0933 8.90697C52.3877 8.89094 51.3612 8.52207 50.9122 8.02489L50.1424 9.13952C51.0645 10.1018 52.0669 10.2702 53.0693 10.2702C54.8816 10.2702 55.7877 9.30792 55.7877 8.19329C55.7877 6.50932 54.2721 6.24469 53.0773 6.1645C52.2674 6.11639 51.8985 5.88384 51.8985 5.47487C51.8985 5.07393 52.3075 4.8494 53.0532 4.8494C53.6547 4.8494 54.1679 4.99374 54.6169 5.41072L55.491 4.3843ZM57.4316 1.71399V3.74278H56.2528V5.08996H57.4316V7.82442C57.4316 9.40415 58.3297 10.182 59.7009 10.1339C60.174 10.1178 60.5509 10.0457 61 9.86123L60.567 8.53009C60.3344 8.64235 60.0538 8.72254 59.8132 8.72254C59.324 8.72254 58.9953 8.42584 58.9953 7.82442V5.08996H60.7514V3.74278H59.0033V1.55362L57.4316 1.71399Z"}})])])}
var ScFootervue_type_template_id_5604cf24_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/footer/ScFooter.vue?vue&type=template&id=5604cf24&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer/ScFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ScFootervue_type_script_lang_js_ = ({
  name: 'ScFooter',
  data: function data() {
    return {};
  },
  computed: {},
  props: {
    theme: String
  }
});
// CONCATENATED MODULE: ./src/components/footer/ScFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_ScFootervue_type_script_lang_js_ = (ScFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/footer/ScFooter.vue?vue&type=style&index=0&id=5604cf24&scoped=true&lang=scss&
var ScFootervue_type_style_index_0_id_5604cf24_scoped_true_lang_scss_ = __webpack_require__("f6d9");

// CONCATENATED MODULE: ./src/components/footer/ScFooter.vue






/* normalize component */

var ScFooter_component = normalizeComponent(
  footer_ScFootervue_type_script_lang_js_,
  ScFootervue_type_template_id_5604cf24_scoped_true_render,
  ScFootervue_type_template_id_5604cf24_scoped_true_staticRenderFns,
  false,
  null,
  "5604cf24",
  null
  
)

/* harmony default export */ var ScFooter = (ScFooter_component.exports);
// CONCATENATED MODULE: ./src/components/footer/index.js

/* harmony default export */ var footer = (function (Vue) {
  Vue.component(ScFooter.name, ScFooter);
});
// CONCATENATED MODULE: ./src/components/index.js
// these are the components exported to the activations
 // legacy prize popup

 // new components







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
      claim: 'Claim Prize',
      claimError: 'You have already claimed this prize.',
      claimErrorGeneric: 'The prize could not be claimed. Please try again later.'
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

 // new components






 // for more see: https://www.xiegerts.com/post/creating-vue-component-library-plugin/
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ }),

/***/ "fb98":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });