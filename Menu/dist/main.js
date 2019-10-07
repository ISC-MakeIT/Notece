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

/***/ "./src/Comment.js":
/*!************************!*\
  !*** ./src/Comment.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n\r\nclass Comment extends _Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    display(logs) {\r\n        logs.forEach(log => {\r\n            this.DomReset();\r\n            const wrapper = document.createElement('div');\r\n            wrapper.className = 'comment-wrapper';\r\n            this.root.appendChild(wrapper);\r\n            const bg = document.createElement('div');\r\n            bg.className = 'comment';\r\n            const commentator = document.createElement('img');\r\n            commentator.className = 'comment-commentator';\r\n            commentator.src = log.commentator;\r\n            wrapper.appendChild(commentator);\r\n            this.createElement(\r\n                'div',\r\n                0,\r\n                'comment-info',\r\n                `<p>comment to </p><span>${log.title}</span>`,\r\n                bg\r\n            );\r\n            this.createElement(\r\n                'div',\r\n                0,\r\n                'comment-container',\r\n                `<p>${log.comment}</p>`,\r\n                bg\r\n            );\r\n            wrapper.appendChild(bg);\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\r\n\n\n//# sourceURL=webpack:///./src/Comment.js?");

/***/ }),

/***/ "./src/Confirm.js":
/*!************************!*\
  !*** ./src/Confirm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n\r\nclass Confirm extends _Menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    display(timeline, data) {\r\n        this.DomReset();\r\n        this.createElement('div', 'confirm-wrapper', 0, 0, this.root);\r\n        this.createElement(\r\n            'div',\r\n            'confirm',\r\n            0,\r\n            0,\r\n            document.getElementById('confirm-wrapper')\r\n        );\r\n        this.createElement(\r\n            'p',\r\n            'confirm-title',\r\n            0,\r\n            '<p>新しいノートを作成する</p>',\r\n            document.getElementById('confirm')\r\n        );\r\n        this.createElement(\r\n            'div',\r\n            'confirm-return',\r\n            0,\r\n            '戻る',\r\n            document.getElementById('confirm')\r\n        );\r\n        this.createElement(\r\n            'div',\r\n            'confirm-go',\r\n            0,\r\n            '作成する',\r\n            document.getElementById('confirm')\r\n        );\r\n        document.getElementById('confirm-go').addEventListener('click', () => {\r\n            window.location.href = '../../Note/html/index.html';\r\n        });\r\n        document\r\n            .getElementById('confirm-return')\r\n            .addEventListener('click', () => {\r\n                window.location.href = '../html/index.html';\r\n            });\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirm);\r\n\n\n//# sourceURL=webpack:///./src/Confirm.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Menu {\r\n    constructor() {\r\n        this.root = document.getElementById('contents');\r\n    }\r\n    DomReset() {\r\n        this.root.textContent = null;\r\n    }\r\n    MovePage(targetPage) {\r\n        this.DomReset();\r\n        targetPage.init();\r\n    }\r\n    createElement(el, id, className, inner, parent) {\r\n        const tmp = document.createElement(el);\r\n        if (id) {\r\n            tmp.id = id;\r\n        }\r\n        if (className) {\r\n            tmp.className = className;\r\n        }\r\n        if (inner) {\r\n            tmp.innerHTML = inner;\r\n        }\r\n        parent.appendChild(tmp);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\r\n\n\n//# sourceURL=webpack:///./src/Menu.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TimeLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeLine */ \"./src/TimeLine.js\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment */ \"./src/Comment.js\");\n/* harmony import */ var _Confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Confirm */ \"./src/Confirm.js\");\n\r\n\r\n\r\n\r\nconst timeline = new _TimeLine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst comment = new _Comment__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst confirm = new _Confirm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nif (localStorage.getItem('data') === null) {\r\n    localStorage.setItem('data', JSON.stringify(timelineLog));\r\n}\r\nconst data = localStorage.getItem('data');\r\ntimeline.display(JSON.parse(data));\r\n\r\ndocument.getElementById('newNote').addEventListener('click', () => {\r\n    confirm.display(timeline.display(JSON.parse(data)));\r\n});\r\n\r\ndocument.getElementById('timeline-group').addEventListener('click', () => {\r\n    timeline.display();\r\n});\r\ndocument.getElementById('timeline-comment').addEventListener('click', () => {\r\n    comment.display(timelineComment);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });