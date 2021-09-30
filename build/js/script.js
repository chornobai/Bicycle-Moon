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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/form.js":
/*!***************************!*\
  !*** ./source/js/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var form = document.querySelector('form');\nvar formName = form.querySelector('#name');\nvar formPhone = form.querySelector('#phone');\nvar storage = ''; // Проверка - поддерживает ли браузер запись в LocalStorage //\n\nif (storage) {\n  formName.value = storage;\n  formPhone.focus();\n} // Валидация формы\n\n\nformName.addEventListener('input', function () {\n  this.style.borderColor = /^[a-zа-яё ]+$/i.test(this.value.trim()) ? '' : 'red';\n  formName.reportValidity();\n}); //  Валидация поля для телефона, разрешены только цифры\n\nformPhone.addEventListener('input', function () {\n  this.style.borderColor = /^\\d+$/.test(this.value.trim()) ? '' : 'red';\n  this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\n  formPhone.reportValidity();\n}); //Отправка формы\n\nform.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  form.reset();\n});\n\n//# sourceURL=webpack:///./source/js/form.js?");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var menu = document.querySelector('.header-nav');\nvar menuButton = document.querySelector('.header-nav__toggle');\nvar introBlock = document.querySelector('.intro-wrapper');\nvar menuLinks = document.querySelectorAll('.header-nav__link');\nvar body = document.querySelector('body');\nmenu.classList.remove('header-nav--nojs');\nintroBlock.classList.remove('intro-wrapper--open');\nmenuButton.addEventListener('click', function (evt) {\n  evt.preventDefault();\n  menu.classList.toggle('header-nav--open');\n  introBlock.classList.toggle('intro-wrapper--open');\n  body.classList.toggle('body--overflow');\n});\nmenuLinks.forEach(function (item) {\n  item.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    menu.classList.remove('header-nav--open');\n    introBlock.classList.toggle('intro-wrapper--open');\n    var blockId = item.getAttribute('href');\n    document.querySelector(\"\".concat(blockId)).scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n    body.classList.remove('body--overflow');\n  });\n});\n\n//# sourceURL=webpack:///./source/js/menu.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./source/js/form.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./source/js/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });