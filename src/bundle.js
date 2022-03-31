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

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calc() {\r\n    const result = document.querySelector('.calculating__result span');\r\n    let sex, height, weight, age, ratio;\r\n\r\n    if (localStorage.getItem('sex')) {\r\n        sex = localStorage.getItem('sex');\r\n    } else {\r\n        sex = 'female';\r\n        localStorage.setItem('sex', 'female');\r\n    }\r\n\r\n    if (localStorage.getItem('ratio')) {\r\n        ratio = localStorage.getItem('ratio');\r\n    } else {\r\n        ratio = 1.375;\r\n        localStorage.setItem('ratio', 1.375);\r\n    }\r\n\r\n    function calcTotal() {\r\n        if (!sex || !height || !weight || !age || !ratio) {\r\n            result.textContent = '***';\r\n            return;\r\n        }\r\n        if (sex === 'female') {\r\n            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);\r\n        } else {\r\n            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);\r\n        }\r\n    }\r\n\r\n    calcTotal();\r\n\r\n    function initLocalSettings(selector, activeClass) {\r\n        const elements = document.querySelectorAll(selector);\r\n\r\n        elements.forEach(elem => {\r\n            elem.classList.remove(activeClass);\r\n            if (elem.getAttribute('id') === localStorage.getItem('sex')) {\r\n                elem.classList.add(activeClass);\r\n            }\r\n            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {\r\n                elem.classList.add(activeClass);\r\n            }\r\n        });\r\n    }\r\n\r\n    initLocalSettings('#gender div', 'calculating__choose-item_active');\r\n    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');\r\n\r\n    function getStaticInformation(selector, activeClass) {\r\n        const elements = document.querySelectorAll(selector);\r\n\r\n        elements.forEach(elem => {\r\n            elem.addEventListener('click', (e) => {\r\n                if (e.target.getAttribute('data-ratio')) {\r\n                    ratio = +e.target.getAttribute('data-ratio');\r\n                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));\r\n                } else {\r\n                    sex = e.target.getAttribute('id');\r\n                    localStorage.setItem('sex', e.target.getAttribute('id'));\r\n                }\r\n\r\n                elements.forEach(elem => {\r\n                    elem.classList.remove(activeClass);\r\n                });\r\n\r\n                e.target.classList.add(activeClass);\r\n\r\n                calcTotal();\r\n            });\r\n        });\r\n    }\r\n\r\n    getStaticInformation('#gender div', 'calculating__choose-item_active');\r\n    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');\r\n\r\n    function getDynamicInformation(selector) {\r\n        const input = document.querySelector(selector);\r\n\r\n        input.addEventListener('input', () => {\r\n            if (input.value.match(/\\D/g)) {\r\n                input.style.border = \"1px solid red\";\r\n            } else {\r\n                input.style.border = 'none';\r\n            }\r\n            switch (input.getAttribute('id')) {\r\n                case \"height\":\r\n                    height = +input.value;\r\n                    break;\r\n                case \"weight\":\r\n                    weight = +input.value;\r\n                    break;\r\n                case \"age\":\r\n                    age = +input.value;\r\n                    break;\r\n            }\r\n\r\n            calcTotal();\r\n        });\r\n    }\r\n\r\n    getDynamicInformation('#height');\r\n    getDynamicInformation('#weight');\r\n    getDynamicInformation('#age');\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://food/./src/js/modules/calc.js?");

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction cards() {\r\n\r\n    class MenuCard {\r\n        constructor(src, alt, title, descr, price, parentSelector, ...classes) {\r\n            this.src = src;\r\n            this.alt = alt;\r\n            this.title = title;\r\n            this.descr = descr;\r\n            this.price = price;\r\n            this.parent = document.querySelector(parentSelector);\r\n            this.classes = classes;\r\n        }\r\n\r\n        render() {\r\n            const element = document.createElement('div');\r\n\r\n            if (this.classes.length === 0) {\r\n                this.classes = \"menu__item\";\r\n                element.classList.add(this.classes);\r\n            } else {\r\n                this.classes.forEach(className => element.classList.add(className));\r\n            }\r\n\r\n            element.innerHTML = `\r\n                <img src=${this.src} alt=${this.alt}>\r\n                <h3 class=\"menu__item-subtitle\">${this.title}</h3>\r\n                <div class=\"menu__item-descr\">${this.descr}</div>\r\n                <div class=\"menu__item-divider\"></div>\r\n                <div class=\"menu__item-price\">\r\n                    <div class=\"menu__item-cost\">Цена:</div>\r\n                    <div class=\"menu__item-total\"><span>${this.price}</span> руб/день</div>\r\n                </div>\r\n            `;\r\n            this.parent.append(element);\r\n        }\r\n    }\r\n\r\n    new MenuCard(\r\n        \"img/tabs/vegy.jpg\",\r\n        \"vegy\",\r\n        'Меню \"Фитнес\"',\r\n        'Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',\r\n        300,\r\n        \".menu .container\"    \r\n    ).render();\r\n\r\n    new MenuCard(\r\n        \"img/tabs/post.jpg\",\r\n        \"post\",\r\n        'Меню \"Постное\"',\r\n        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',\r\n        250,\r\n        \".menu .container\"\r\n    ).render();\r\n\r\n    new MenuCard(\r\n        \"img/tabs/elite.jpg\",\r\n        \"elite\",\r\n        'Меню “Премиум”',\r\n        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',\r\n        500,\r\n        \".menu .container\"\r\n    ).render();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);\n\n//# sourceURL=webpack://food/./src/js/modules/cards.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction modal() {\r\n    const modalTrigger = document.querySelectorAll('[data-modal]');\r\n    const modal = document.querySelector('.modal');\r\n\r\n    function openModal() {\r\n        modal.classList.toggle('show');\r\n        document.body.style.overflow = 'hidden';\r\n    }\r\n\r\n    modalTrigger.forEach(btn => {\r\n        btn.addEventListener('click', openModal);\r\n    });\r\n\r\n    function closeModal() {\r\n        modal.classList.toggle('show');\r\n        document.body.style.overflow = '';\r\n    }\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal || e.target.getAttribute('data-close') == \"\") {\r\n            closeModal();\r\n        }\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.code === \"Escape\" && modal.classList.contains('show')) {\r\n            closeModal();\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://food/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider() {\r\n    let offset = 0;\r\n    let slideIndex = 1;\r\n    const slides = document.querySelectorAll('.offer__slide');\r\n    const slider = document.querySelector('.offer__slider');\r\n    const prev = document.querySelector('.offer__slider-prev');\r\n    const next = document.querySelector('.offer__slider-next');\r\n    const total = document.querySelector('#total');\r\n    const current = document.querySelector('#current');\r\n    const slidesWrapper = document.querySelector('.offer__slider-wrapper');\r\n    const width = window.getComputedStyle(slidesWrapper).width;    \r\n    const slidesField = document.querySelector('.offer__slider-inner');\r\n\r\n    if (slides.length < 10) {\r\n        total.textContent = `0${slides.length}`;\r\n        current.textContent = `0${slideIndex}`;\r\n    } else {\r\n        total.textContent = slides.length;\r\n        current.textContent = slideIndex;\r\n    }\r\n\r\n    slidesField.style.width = 100 * slides.length + '%';\r\n    slidesField.style.display = 'flex';\r\n    slidesField.style.transition = '0.5s all';\r\n\r\n    slidesWrapper.style.overflow = 'hidden';\r\n\r\n    slides.forEach(slide => {\r\n        slide.style.width = width;\r\n    });\r\n\r\n    slider.style.position = 'relative';\r\n\r\n    const indicators = document.createElement('ol');\r\n    const dots = [];\r\n    indicators.classList.add('carousel-indicators');\r\n    slider.append(indicators);\r\n\r\n    for (let i = 0; i < slides.length; i++) {\r\n        const dot = document.createElement('li');\r\n\r\n        dot.setAttribute('data-slide-to', i + 1);\r\n        dot.classList.add('dot');\r\n\r\n        if (i == 0) {\r\n            dot.style.opacity = 1;\r\n        }\r\n        indicators.append(dot);\r\n        dots.push(dot);\r\n    }\r\n\r\n    function switchSlide() {\r\n        if (slides.length < 10) {\r\n            current.textContent = `0${slideIndex}`;\r\n        } else {\r\n            current.textContent = slideIndex;\r\n        }\r\n    }\r\n\r\n    function showActiveSlide() {\r\n        dots.forEach(dot => dot.style.opacity = \".5\");\r\n        dots[slideIndex - 1].style.opacity = 1;\r\n    }\r\n\r\n    function deleteNotDigits(string) {\r\n        return +string.replace(/\\D/g, '');\r\n    }\r\n\r\n    next.addEventListener('click', () => {\r\n        if (offset == deleteNotDigits(width) * (slides.length - 1)) {\r\n            offset = 0;\r\n        } else {\r\n            offset += deleteNotDigits(width);\r\n        }\r\n\r\n        slidesField.style.transform = `translateX(-${offset}px)`;\r\n\r\n        if (slideIndex == slides.length) {\r\n            slideIndex = 1;\r\n        } else {\r\n            slideIndex++;\r\n        }\r\n\r\n        switchSlide()\r\n        showActiveSlide();\r\n    });\r\n\r\n    prev.addEventListener('click', () => {\r\n        if (offset == 0) {\r\n            offset = deleteNotDigits(width) * (slides.length - 1);\r\n        } else {\r\n            offset -= deleteNotDigits(width);\r\n        }\r\n\r\n        slidesField.style.transform = `translateX(-${offset}px)`;\r\n\r\n        if (slideIndex == 1) {\r\n            slideIndex = slides.length;\r\n        } else {\r\n            slideIndex--;\r\n        }\r\n\r\n        switchSlide();\r\n        showActiveSlide();\r\n    });\r\n\r\n    dots.forEach(dot => {\r\n        dot.addEventListener('click', (e) => {\r\n            const slideTo = e.target.getAttribute('data-slide-to');\r\n\r\n            slideIndex = slideTo;\r\n            offset = deleteNotDigits(width) * (slideTo - 1);\r\n\r\n            slidesField.style.transform = `translateX(-${offset}px)`;\r\n\r\n            switchSlide();\r\n            showActiveSlide();\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://food/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs() {\r\n    let tabs = document.querySelectorAll('.tabheader__item');\r\n    let tabsContent = document.querySelectorAll('.tabcontent');\r\n    let tabsParent = document.querySelector('.tabheader__items');\r\n\r\n    function hideTabContent() {\r\n        tabsContent.forEach(item => {\r\n            item.classList.add('hide');\r\n            item.classList.remove('show', 'fade');\r\n        });\r\n\r\n        tabs.forEach(item => {\r\n            item.classList.remove('tabheader__item_active');\r\n        });\r\n    }\r\n\r\n    function showTabContent(i = 0) {\r\n        tabsContent[i].classList.add('show', 'fade');\r\n        tabsContent[i].classList.remove('hide');\r\n        tabs[i].classList.add('tabheader__item_active');\r\n    }\r\n\r\n    hideTabContent();\r\n    showTabContent();\r\n\r\n    tabsParent.addEventListener('click', function (event) {\r\n        const target = event.target;\r\n\r\n        if (target && target.classList.contains('tabheader__item')) {\r\n            tabs.forEach((item, i) => {\r\n                if (target == item) {\r\n                    hideTabContent();\r\n                    showTabContent(i);\r\n                }\r\n            });\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://food/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction timer() {\r\n    const deadline = '2022-06-22';\r\n\r\n    function getTimeRemaining(endtime) {\r\n        const t = Date.parse(endtime) - Date.parse(new Date());\r\n        const days = Math.floor((t / (1000 * 60 * 60 * 24)));\r\n        const seconds = Math.floor((t / 1000) % 60);\r\n        const minutes = Math.floor((t / 1000 / 60) % 60);\r\n        const hours = Math.floor((t / (1000 * 60 * 60) % 24));\r\n\r\n        return {\r\n            'total': t,\r\n            'days': days,\r\n            'hours': hours,\r\n            'minutes': minutes,\r\n            'seconds': seconds\r\n        };\r\n    }\r\n\r\n    function getZero(num) {\r\n        if (num >= 0 && num < 10) {\r\n            return '0' + num;\r\n        } else {\r\n            return num;\r\n        }\r\n    }\r\n\r\n    function setClock(selector, endtime) {\r\n        const timer = document.querySelector(selector);\r\n        const days = timer.querySelector(\"#days\");\r\n        const hours = timer.querySelector('#hours');\r\n        const minutes = timer.querySelector('#minutes');\r\n        const seconds = timer.querySelector('#seconds');\r\n        const timeInterval = setInterval(updateClock, 1000);\r\n\r\n        updateClock();\r\n\r\n        function updateClock() {\r\n            const t = getTimeRemaining(endtime);\r\n\r\n            days.innerHTML = getZero(t.days);\r\n            hours.innerHTML = getZero(t.hours);\r\n            minutes.innerHTML = getZero(t.minutes);\r\n            seconds.innerHTML = getZero(t.seconds);\r\n\r\n            if (t.total <= 0) {\r\n                clearInterval(timeInterval);\r\n            }\r\n        }\r\n    }\r\n\r\n    setClock('.timer', deadline);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://food/./src/js/modules/timer.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/js/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./src/js/modules/calc.js\");\n/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ \"./src/js/modules/cards.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ \"./src/js/modules/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();    \r\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();    \r\n    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();    \r\n});\n\n//# sourceURL=webpack://food/./src/js/script.js?");

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