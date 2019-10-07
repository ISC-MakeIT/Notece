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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Menu {\r\n    constructor() {\r\n        this.root = document.getElementById('contents');\r\n    }\r\n    DomReset() {\r\n        this.root.textContent = null;\r\n    }\r\n    MovePage(targetPage) {\r\n        this.DomReset();\r\n        targetPage.init();\r\n    }\r\n    createElement(el, id, className, inner, parent) {\r\n        const tmp = document.createElement(el);\r\n        if (id) {\r\n            tmp.id = id;\r\n        }\r\n        if (className) {\r\n            tmp.className = className;\r\n        }\r\n        if (inner) {\r\n            tmp.innerHTML = inner;\r\n        }\r\n        parent.appendChild(tmp);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\r\n\n\n//# sourceURL=webpack:///./src/Menu.js?");

/***/ }),

/***/ "./src/Profile.js":
/*!************************!*\
  !*** ./src/Profile.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n\r\nclass Profile extends _Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n    }\r\n\r\n    display() {\r\n        this.DomReset();\r\n\r\n        const name = document.createElement('input');\r\n        name.type = \"text\";\r\n        name.className = \"text\";\r\n\r\n        const comment = document.createElement('input');\r\n        comment.type = \"textbox\";\r\n        comment.className = \"text\";\r\n\r\n        document.getElementById('contents').appendChild(name);\r\n        document.getElementById('contents').appendChild(comment);\r\n\r\n    }\r\n\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\n//# sourceURL=webpack:///./src/Profile.js?");

/***/ }),

/***/ "./src/TimeLine.js":
/*!*************************!*\
  !*** ./src/TimeLine.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n\r\nclass TimeLine extends _Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n    }\r\n    display(logs) {\r\n        this.DomReset();\r\n        logs.forEach(log => {\r\n            let logName = 'left-log';\r\n            const bg = document.createElement('div');\r\n            bg.className = logName;\r\n            this.createElement(\r\n                'div',\r\n                0,\r\n                `${logName}-title`,\r\n                `<p>${log.title}</p>`,\r\n                bg\r\n            );\r\n            const tmp = document.createElement('div');\r\n            tmp.className = `${logName}-title`;\r\n            tmp.innerHTML = `<p>${log.title}</p>`;\r\n            bg.appendChild(tmp);\r\n            tmp.addEventListener('click', () => {\r\n                localStorage.setItem('note', JSON.stringify(log.data));\r\n                window.location.href = '../html/ShowNote.html';\r\n            });\r\n            this.createElement(\r\n                'div',\r\n                0,\r\n                `${logName}-explanation`,\r\n                `<p>${log.explanation}</p>`,\r\n                bg\r\n            );\r\n            this.createElement(\r\n                'div',\r\n                0,\r\n                `${logName}-icon`,\r\n                `<img src=\"${log.icon}\">`,\r\n                bg\r\n            );\r\n            this.createElement(\r\n                'div',\r\n                0,\r\n                `${logName}-date`,\r\n                `<p>${log.date}</p>`,\r\n                bg\r\n            );\r\n            document.getElementById('contents').appendChild(bg);\r\n            this.count++;\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeLine);\r\n\n\n//# sourceURL=webpack:///./src/TimeLine.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TimeLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeLine */ \"./src/TimeLine.js\");\n/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile */ \"./src/Profile.js\");\n\r\n\r\n\r\nconst timeline = new _TimeLine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nif (localStorage.getItem('data') === null) {\r\n    localStorage.setItem('data', JSON.stringify(timelineLog));\r\n}\r\nconst data = localStorage.getItem('data');\r\ntimeline.display(JSON.parse(data));\r\ndocument.getElementById('newNote').addEventListener('click', () => {\r\n    window.location.href = '../../Note/html/index.html';\r\n});\r\n\r\nconst profile = new _Profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\ndocument.getElementById('profile').addEventListener('click', () => {\r\n    profile.display();\r\n}, false);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });