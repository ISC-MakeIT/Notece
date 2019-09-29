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

/***/ "./src/Log.js":
/*!********************!*\
  !*** ./src/Log.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Log {\r\n    constructor() {\r\n        this.root = document.getElementById('root');\r\n        this.tagContainer = document.getElementById('tag-container');\r\n        this.MenuTags = document.getElementsByClassName('tag');\r\n        this.noteList;\r\n    }\r\n\r\n    init() {\r\n        for (let i = 0; i < this.MenuTags.length; i++) {\r\n            this.MenuTags[i].style.display = 'none';\r\n        }\r\n        this.root.textContent = null;\r\n\r\n        const detailWrapper = document.createElement('div');\r\n        detailWrapper.id = 'detail-wrapper';\r\n        this.root.appendChild(detailWrapper);\r\n        const detail = document.createElement('div');\r\n        detail.id = 'detail';\r\n        detailWrapper.appendChild(detail);\r\n\r\n        const noteList = document.createElement('div');\r\n        noteList.id = 'note-list';\r\n        this.root.appendChild(noteList);\r\n        this.noteList = noteList;\r\n\r\n        this.createTab('url()', 'myNote');\r\n        this.createTab('url()', 'watchNote');\r\n    }\r\n\r\n    createTab(tabImg, tabId) {\r\n        const tab = document.createElement('li');\r\n        tab.style.backgroundImage = tabImg;\r\n        tab.id = tabId;\r\n        tab.className = 'tab';\r\n        this.tagContainer.appendChild(tab);\r\n    }\r\n\r\n    // noteDataのところをurlにしてaxiosでjson取り出せるようにする\r\n    displayNoteList(noteData) {\r\n        document.getElementById('detail').textContent = null;\r\n        this.noteList.textContent = null;\r\n        for (let i = 0; i < noteData.length; i++) {\r\n            const div = document.createElement('div');\r\n            div.style.backgroundImage = noteData[i].image;\r\n            div.className = 'notes';\r\n            this.noteList.appendChild(div);\r\n\r\n            div.addEventListener('click', () => {\r\n                document.getElementById('detail').textContent = null;\r\n                const img = document.createElement('div');\r\n                img.style.backgroundImage = noteData[i].image;\r\n                img.id = 'note-thumbnail';\r\n                document.getElementById('detail').appendChild(img);\r\n\r\n                const noteName = document.createElement('p');\r\n                noteName.innerText = noteData[i].name;\r\n                noteName.id = 'note-name';\r\n                document.getElementById('detail').appendChild(noteName);\r\n\r\n                const noteExplanation = document.createElement('p');\r\n                noteExplanation.innerText = noteData[i].explanation;\r\n                noteExplanation.id = 'note-explanation';\r\n                document.getElementById('detail').appendChild(noteExplanation);\r\n                // tag未実装\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Log);\r\n\n\n//# sourceURL=webpack:///./src/Log.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log */ \"./src/Log.js\");\n\r\nconst log = new _Log__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nlog.init();\r\nlog.displayNoteList(Mydata);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });