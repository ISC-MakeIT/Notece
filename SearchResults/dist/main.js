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

/***/ "./src/SearchResults.js":
/*!******************************!*\
  !*** ./src/SearchResults.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Search {\r\n    constructor() {\r\n        this.root = document.getElementById('root');\r\n        this.tagContainer = document.getElementById('tag-container');\r\n        this.MenuTags = document.getElementsByClassName('tag');\r\n        //仮\r\n        const mychannel = \"1T6\";\r\n        const firstword = \"猫でも\";\r\n        //ここまで\r\n        //仮データ\r\n        //仮データここまで\r\n    }\r\n\r\n    init() {\r\n        for (let i = 0; i < this.MenuTags.length; i++) {\r\n            this.MenuTags[i].style.display = 'none';\r\n        }\r\n        this.root.textContent = null;\r\n\r\n        this.createElement('div', 'detail-wrapper', 'root');\r\n        this.createElement('div', 'detail', 'detail-wrapper');\r\n        this.createElement('div', 'note-list', 'root');\r\n        this.createElement('div', 'search-area', 'root');\r\n\r\n        this.createTab('url()', 'myNote');\r\n        this.createTab('url()', 'watchNote');\r\n    }\r\n\r\n    createTab(tabImg, tabId) {\r\n        const tab = document.createElement('li');\r\n        tab.style.backgroundImage = tabImg;\r\n        tab.id = tabId;\r\n        tab.className = 'tab';\r\n        this.tagContainer.appendChild(tab);\r\n    }\r\n\r\n    createElement(el, id, parent) {\r\n        const tmp = document.createElement(el);\r\n        tmp.id = id;\r\n        document.getElementById(parent).appendChild(tmp);\r\n        console.log(id);\r\n        switch (id) {\r\n            case 'search-area':\r\n                const getid = document.getElementById('search-area');\r\n\r\n                /*\r\n                const word = document.createElement('input');\r\n                word.type = 'text';\r\n                word.id = \"word\";\r\n                */\r\n\r\n                const minus = document.createElement('input');\r\n                minus.type = \"text\";\r\n                minus.id = \"minus\";\r\n\r\n                const search_button = document.createElement('input');\r\n                search_button.type = \"button\";\r\n                search_button.value = \"検索\";\r\n                search_button.id = \"search_button\";\r\n\r\n                const period = document.createElement('select');\r\n                period.innerHTML = '<option id=\"october\" value=\"201910\">2019年10月</option><option id=\"september\" value=\"201909\">2019年9月</option><option id=\"august\" value=\"201908\">2019年8月</option>'\r\n                period.id = \"period\";\r\n\r\n                const group = document.createElement('div');\r\n                group.id = \"group\";\r\n                group.className = \"selected\";\r\n                //仮\r\n                group.style.backgroundColor = \"#00ff00\";\r\n                group.style.width = \"100px\";\r\n                group.style.height = \"100px\";\r\n                //ここまで\r\n                group.addEventListener('click', () => {\r\n                    const getgroup1 = document.getElementById('group');\r\n                    const getchannnel1 = document.getElementById('channel');\r\n                    if (getgroup1.className == \"unselected\") {\r\n                        getgroup1.className = \"selected\";\r\n                        getchannnel1.className = \"unselected\";\r\n                    }\r\n                }\r\n                    , false)\r\n\r\n                const channel = document.createElement('div');\r\n                channel.id = \"channel\";\r\n                //仮\r\n                channel.style.backgroundColor = \"#ff0000\";\r\n                channel.style.width = \"100px\";\r\n                channel.style.height = \"100px\";\r\n                //ここまで\r\n                channel.addEventListener('click', () => {\r\n                    const getgroup2 = document.getElementById('group');\r\n                    const getchannnel2 = document.getElementById('channel');\r\n                    if (getgroup2.className == \"selected\") {\r\n                        getgroup2.className = \"unselected\";\r\n                        getchannnel2.className = \"selected\";\r\n                    }\r\n                }\r\n                    , false)\r\n\r\n\r\n                //getid.appendChild(word);\r\n                getid.appendChild(minus);\r\n                getid.appendChild(search_button);\r\n                getid.appendChild(period);\r\n                getid.appendChild(group);\r\n                getid.appendChild(channel);\r\n                break;\r\n            case 'note-list':\r\n                const data = [\r\n                    {\r\n                        \"title\": \"猫でもわかる\",\r\n                        \"date\": 20191004,\r\n                        \"channel\": \"1T6\"\r\n                    },\r\n                    {\r\n                        \"title\": \"猫でも猿でもわかる\",\r\n                        \"date\": 20191004,\r\n                        \"channel\": \"1T6\"\r\n                    },\r\n                    {\r\n                        \"title\": \"猫もわかる\",\r\n                        \"date\": 20191003,\r\n                        \"channel\": \"1T5\"\r\n                    },\r\n                    {\r\n                        \"title\": \"猫でも犬でもわかる\",\r\n                        \"date\": 20191002,\r\n                        \"channel\": \"1T1\"\r\n                    },\r\n                    {\r\n                        \"title\": \"猫でも犬でもわかる\",\r\n                        \"date\": 20190902,\r\n                        \"channel\": \"1T1\"\r\n                    },\r\n                    {\r\n                        \"title\": \"猫でもわかる\",\r\n                        \"date\": 20190902,\r\n                        \"channel\": \"1T2\"\r\n                    },\r\n                    {\r\n                        \"title\": \"猫でもわかる\",\r\n                        \"date\": 20190802,\r\n                        \"channel\": \"1T2\"\r\n                    },\r\n                    {\r\n                        \"title\": \"猫でもわかる\",\r\n                        \"date\": 20190702,\r\n                        \"channel\": \"1T6\"\r\n                    },\r\n                    {\r\n                        \"title\": \"猫でもわかる\",\r\n                        \"date\": 20190702,\r\n                        \"channel\": \"1T6\"\r\n                    },\r\n                    {\r\n                        \"title\": \"猫がわかる\",\r\n                        \"date\": 20190702,\r\n                        \"channel\": \"1T6\"\r\n                    }\r\n                ];\r\n                for (let page = 0; page < data.length; page++) {\r\n                    if (data[page].title.match('猫でも') !== -1) {\r\n                        let title = document.createElement('dt');\r\n                        title.textContent = data[page].title;\r\n                        document.getElementById('note-list').appendChild(title);\r\n                    }\r\n                }\r\n                break;\r\n            default:\r\n                break;\r\n\r\n        }\r\n\r\n        document.getElementById('root').appendChild(tmp);\r\n    }\r\n\r\n\r\n\r\n    // noteDataのところをurlにしてaxiosでjson取り出せるようにする\r\n    displayNoteList(noteData) {\r\n        document.getElementById('detail').textContent = null;\r\n        document.getElementById('note-list').textContent = null;\r\n        for (let i = 0; i < noteData.length; i++) {\r\n            const div = document.createElement('div');\r\n            div.style.backgroundImage = noteData[i].image;\r\n            div.className = 'notes';\r\n            this.noteList.appendChild(div);\r\n\r\n            div.addEventListener('click', () => {\r\n                document.getElementById('detail').textContent = null;\r\n                this.createElement('div', 'note-thumbnail', 'detail');\r\n                document.getElementById(\r\n                    'note-thumbnail'\r\n                ).style.backgroundImage = noteData[i].image;\r\n\r\n                this.createElement('div', 'note-name', 'detail');\r\n                document.getElementById('note-name').style.backgroundImage =\r\n                    noteData[i].image;\r\n\r\n                this.createElement('div', 'note-explanation', 'detail');\r\n                document.getElementById(\r\n                    'note-explanation'\r\n                ).style.backgroundImage = noteData[i].image;\r\n                // tag未実装\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\r\n\n\n//# sourceURL=webpack:///./src/SearchResults.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResults */ \"./src/SearchResults.js\");\n\r\nconst search = new _SearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nsearch.init();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });