/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction modal() {\r\n    const modalTrigger = document.querySelectorAll('[data-modal]'),\r\n        modal = document.querySelector('.modal');\r\n\r\n    function openModal() {\r\n        modal.classList.toggle('show');\r\n        document.body.style.overflow = 'hidden';\r\n    }\r\n\r\n    modalTrigger.forEach(btn => {\r\n        btn.addEventListener('click', openModal);\r\n    });\r\n\r\n    function closeModal() {\r\n        modal.classList.toggle('show');\r\n        document.body.style.overflow = '';\r\n    }\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal || e.target.getAttribute('data-close') == \"\") {\r\n            closeModal();\r\n        }\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.code === \"Escape\" && modal.classList.contains('show')) {\r\n            closeModal();\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://food/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\r\n    let tabs = document.querySelectorAll('.tabheader__item'),\r\n        tabsContent = document.querySelectorAll('.tabcontent'),\r\n        tabsParent = document.querySelector('.tabheader__items');\r\n\r\n    function hideTabContent() {\r\n        tabsContent.forEach(item => {\r\n            item.classList.add('hide');\r\n            item.classList.remove('show', 'fade');\r\n        });\r\n\r\n        tabs.forEach(item => {\r\n            item.classList.remove('tabheader__item_active');\r\n        });\r\n    }\r\n\r\n    function showTabContent(i = 0) {\r\n        tabsContent[i].classList.add('show', 'fade');\r\n        tabsContent[i].classList.remove('hide');\r\n        tabs[i].classList.add('tabheader__item_active');\r\n    }\r\n\r\n    hideTabContent();\r\n    showTabContent();\r\n\r\n    tabsParent.addEventListener('click', function (event) {\r\n        const target = event.target;\r\n        \r\n        if (target && target.classList.contains('tabheader__item')) {\r\n            tabs.forEach((item, i) => {\r\n                if (target == item) {\r\n                    hideTabContent();\r\n                    showTabContent(i);\r\n                }\r\n            });\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://food/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timer() {\r\n    const deadline = '2022-06-22';\r\n\r\n    function getTimeRemaining(endtime) {\r\n        const t = Date.parse(endtime) - Date.parse(new Date()),\r\n            days = Math.floor((t / (1000 * 60 * 60 * 24))),\r\n            seconds = Math.floor((t / 1000) % 60),\r\n            minutes = Math.floor((t / 1000 / 60) % 60),\r\n            hours = Math.floor((t / (1000 * 60 * 60) % 24));\r\n\r\n        return {\r\n            'total': t,\r\n            'days': days,\r\n            'hours': hours,\r\n            'minutes': minutes,\r\n            'seconds': seconds\r\n        };\r\n    }\r\n\r\n    function getZero(num) {\r\n        if (num >= 0 && num < 10) {\r\n            return '0' + num;\r\n        } else {\r\n            return num;\r\n        }\r\n    }\r\n\r\n    function setClock(selector, endtime) {\r\n\r\n        const timer = document.querySelector(selector),\r\n            days = timer.querySelector(\"#days\"),\r\n            hours = timer.querySelector('#hours'),\r\n            minutes = timer.querySelector('#minutes'),\r\n            seconds = timer.querySelector('#seconds'),\r\n            timeInterval = setInterval(updateClock, 1000);\r\n\r\n        updateClock();\r\n\r\n        function updateClock() {\r\n            const t = getTimeRemaining(endtime);\r\n\r\n            days.innerHTML = getZero(t.days);\r\n            hours.innerHTML = getZero(t.hours);\r\n            minutes.innerHTML = getZero(t.minutes);\r\n            seconds.innerHTML = getZero(t.seconds);\r\n\r\n            if (t.total <= 0) {\r\n                clearInterval(timeInterval);\r\n            }\r\n        }\r\n    }\r\n\r\n    setClock('.timer', deadline);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://food/./src/js/modules/timer.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./src/js/modules/timer.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/js/modules/modal.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://food/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;