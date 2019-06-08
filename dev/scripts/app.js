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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_rooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/rooter */ \"./src/router/rooter.js\");\n//commonjs规范\n//const name = require('./controllers/name')\n\nnew _router_rooter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  mode: 'hash' //hash | history\n\n}); // const indexTpl = require('./views/home.html')\n// const {main} = require('./controllers/main');\n// const renderedIndexTpl = template.render(indexTpl, {})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n// document.querySelector('#app').innerHTML = renderedIndexTpl    //把内容放到首页内\n// main();\n//ES6模块化\n// import{name} from './controllers/name'\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/arrival.js":
/*!************************************!*\
  !*** ./src/controllers/arrival.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/controllers/arrival.js?");

/***/ }),

/***/ "./src/controllers/home.js":
/*!*********************************!*\
  !*** ./src/controllers/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar homeTpl = __webpack_require__(/*! ../views/home.html */ \"./src/views/home.html\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    var renderedHomeTpl = template.render(homeTpl, {});\n    $('#index').html(renderedHomeTpl);\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/home.js?");

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar indexTpl = __webpack_require__(/*! ../views/index.html */ \"./src/views/index.html\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    $('#app').html(indexTpl);\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/index.js?");

/***/ }),

/***/ "./src/controllers/main.js":
/*!*********************************!*\
  !*** ./src/controllers/main.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    var homeindexTpl = __webpack_require__(/*! ../views/homeindex/homeindex.html */ \"./src/views/homeindex/homeindex.html\");\n\n    var _require = __webpack_require__(/*! ./main/swipper */ \"./src/controllers/main/swipper.js\"),\n        swipper = _require.swipper;\n\n    var _require2 = __webpack_require__(/*! ./main/list */ \"./src/controllers/main/list.js\"),\n        goodslist = _require2.goodslist;\n\n    var renderedHomeindexTpl = template.render(homeindexTpl, {}); // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n\n    $('main').html(renderedHomeindexTpl); // document.querySelector('').innerHTML = renderedHomeindexTpl    //把内容放到首页内\n\n    swipper();\n    goodslist();\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/main.js?");

/***/ }),

/***/ "./src/controllers/main/list.js":
/*!**************************************!*\
  !*** ./src/controllers/main/list.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var goodslistTpl = __webpack_require__(/*! ../../views/homeindex/goodslist.html */ \"./src/views/homeindex/goodslist.html\"); // const goodslist0 = require('../views/goods/goods0.html')\n// const goodslist1 = require('../views/goods/goods1.html')\n// const BScroll = require('better-scroll').default\n\n\nmodule.exports = {\n  goodslist: function goodslist() {\n    $.ajax({\n      url: '/goodslist/index/other_advert',\n      type: 'get',\n      success: function success(result) {\n        var resultstr = JSON.parse(result);\n        var data = resultstr.data;\n        console.log(data); //本次需要用到的数据，但是出现了循环嵌套\n        // console.log(resultstr.data.article_list);\n        // const list0data = resultstr.data.article_list[0].ads_info;\n        // console.log(list1data);\n        // const list1data = resultstr.data.article_list[1].ads_info;\n\n        var renderedGoodsTpl = template.render(goodslistTpl, {\n          data: data\n        }); // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n\n        document.querySelector('#goodslist').innerHTML = renderedGoodsTpl; // const renderedGoodsTpl0 = template.render(goodslist0, { list0data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n        // document.querySelector('#goodslist').innerHTML = renderedGoodsTpl0;\n        // const renderedGoodsTpl1 = template.render(goodslist1, { list1data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n        // document.querySelector('#goodslist').innerHTML = renderedGoodsTpl1;\n        //添加滚动\n        // let bScroll = new BScroll('.list2', {\n        //     probeType: 1,\n        //     click: true,\n        //     eventPassthrough: \"vertical\"\n        //   })\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/controllers/main/list.js?");

/***/ }),

/***/ "./src/controllers/main/swipper.js":
/*!*****************************************!*\
  !*** ./src/controllers/main/swipper.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const swipperTpl = require('../views/swipper.html');\nmodule.exports = {\n  swipper: function swipper() {\n    $.ajax({\n      url: '/goodslist/index/index_slider',\n      type: 'get',\n      success: function success(result) {//console.log(result);\n        // const resultarr =JSON.parse(result);\n        // const data = resultarr.data;\n        // console.log(data);\n        // const renderedSwipperTpl = template.render(swipperTpl, {data})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n        // document.querySelector('.swiper-container').innerHTML = renderedSwipperTpl ;\n      }\n    });\n    var swiper = new Swiper('.swiper-container', {\n      //分页\n      pagination: {\n        el: '.swiper-pagination'\n      },\n      //导航按钮\n      navigation: {\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      },\n      //自动轮播\n      autoplay: {\n        delay: 2500,\n        //时间 毫秒\n        disableOnInteraction: false //用户操作之后是否停止自动轮播默认true \n\n      },\n      loop: true //循环 最后面一个往后面滑动会滑到第一个\n\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/controllers/main/swipper.js?");

/***/ }),

/***/ "./src/controllers/my.js":
/*!*******************************!*\
  !*** ./src/controllers/my.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/controllers/my.js?");

/***/ }),

/***/ "./src/controllers/search.js":
/*!***********************************!*\
  !*** ./src/controllers/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _require = __webpack_require__(/*! ./search/searchlist */ \"./src/controllers/search/searchlist.js\"),\n    searchlist = _require.searchlist;\n\nvar searchTpl = __webpack_require__(/*! ../views/search.html */ \"./src/views/search.html\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    var renderSearchTpl = template.render(searchTpl, {});\n    $('#index').html(renderSearchTpl);\n    searchlist();\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/search.js?");

/***/ }),

/***/ "./src/controllers/search/searchlist.js":
/*!**********************************************!*\
  !*** ./src/controllers/search/searchlist.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var searchlistTpl = __webpack_require__(/*! ../../views/search/searchlist.html */ \"./src/views/search/searchlist.html\");\n\nmodule.exports = {\n  searchlist: function searchlist() {\n    $.ajax({\n      url: '/goodslist/search/recommend_list',\n      type: 'get',\n      success: function success(result) {\n        var resultstr = JSON.parse(result);\n        var data = resultstr.data.recommend_products;\n        console.log(data); //本次需要用到的数据，但是出现了循环嵌套\n        // console.log(resultstr.data.article_list);\n        // const list0data = resultstr.data.article_list[0].ads_info;\n        // console.log(list1data);\n        // const list1data = resultstr.data.article_list[1].ads_info;\n\n        var renderedGoodsTpl = template.render(searchlistTpl, {\n          data: data\n        }); // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n\n        document.querySelector('.tuijianlist').innerHTML = renderedGoodsTpl; // const renderedGoodsTpl0 = template.render(goodslist0, { list0data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n        // document.querySelector('#goodslist').innerHTML = renderedGoodsTpl0;\n        // const renderedGoodsTpl1 = template.render(goodslist1, { list1data })   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n        // document.querySelector('#goodslist').innerHTML = renderedGoodsTpl1;\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/controllers/search/searchlist.js?");

/***/ }),

/***/ "./src/controllers/server.js":
/*!***********************************!*\
  !*** ./src/controllers/server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/controllers/server.js?");

/***/ }),

/***/ "./src/controllers/shop.js":
/*!*********************************!*\
  !*** ./src/controllers/shop.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar shopTpl = __webpack_require__(/*! ../views/shop.html */ \"./src/views/shop.html\");\n\nvar _require = __webpack_require__(/*! ./shop/shop-swipper */ \"./src/controllers/shop/shop-swipper.js\"),\n    swipper = _require.swipper;\n\nvar _require2 = __webpack_require__(/*! ./shop/shop-swipper2 */ \"./src/controllers/shop/shop-swipper2.js\"),\n    swipper2 = _require2.swipper2;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render: function render() {\n    $('main').html(shopTpl);\n    swipper();\n    swipper2();\n  }\n});\n\n//# sourceURL=webpack:///./src/controllers/shop.js?");

/***/ }),

/***/ "./src/controllers/shop/shop-swipper.js":
/*!**********************************************!*\
  !*** ./src/controllers/shop/shop-swipper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var swipperTpl = __webpack_require__(/*! ../../views/shop/shop-swipper.html */ \"./src/views/shop/shop-swipper.html\");\n\nmodule.exports = {\n  swipper: function swipper() {\n    $.ajax({\n      url: '/goodslist/shop/slide?mtoken=',\n      type: 'get',\n      success: function success(result) {\n        var resultarr = JSON.parse(result);\n        var data = resultarr.data;\n        console.log(data); //  const renderedSwipperTpl = template.render(swipperTpl, {data})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n        //  document.querySelector('.swiper-container').innerHTML = renderedSwipperTpl ;\n      }\n    });\n    var swiper = new Swiper('.swiper-container', {\n      //分页\n      pagination: {\n        el: '.swiper-pagination'\n      },\n      //导航按钮\n      navigation: {\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      },\n      //自动轮播\n      autoplay: {\n        delay: 2500,\n        //时间 毫秒\n        disableOnInteraction: false //用户操作之后是否停止自动轮播默认true \n\n      },\n      loop: true //循环 最后面一个往后面滑动会滑到第一个\n\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/controllers/shop/shop-swipper.js?");

/***/ }),

/***/ "./src/controllers/shop/shop-swipper2.js":
/*!***********************************************!*\
  !*** ./src/controllers/shop/shop-swipper2.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var swipper2Tpl = __webpack_require__(/*! ../../views/shop/shop-swipper2.html */ \"./src/views/shop/shop-swipper2.html\");\n\nmodule.exports = {\n  swipper2: function swipper2() {\n    $.ajax({\n      url: '/goodslist/shop/get_flagship_recommend',\n      type: 'get',\n      success: function success(result) {\n        var resultarr = JSON.parse(result);\n        var data = resultarr.data;\n        console.log(data); //  const renderedSwipperTpl = template.render(swipperTpl, {data})   // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n        //  document.querySelector('.swiper-container').innerHTML = renderedSwipperTpl ;\n      }\n    });\n    var swiper = new Swiper('.swiper-container', {\n      //分页\n      pagination: {\n        el: '.swiper-pagination'\n      },\n      //导航按钮\n      navigation: {\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      },\n      //自动轮播\n      autoplay: {\n        delay: 2500,\n        //时间 毫秒\n        disableOnInteraction: false //用户操作之后是否停止自动轮播默认true \n\n      },\n      loop: true //循环 最后面一个往后面滑动会滑到第一个\n\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/controllers/shop/shop-swipper2.js?");

/***/ }),

/***/ "./src/router/rooter.js":
/*!******************************!*\
  !*** ./src/router/rooter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/index */ \"./src/controllers/index.js\");\n/* harmony import */ var _controllers_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/home */ \"./src/controllers/home.js\");\n/* harmony import */ var _controllers_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/shop */ \"./src/controllers/shop.js\");\n/* harmony import */ var _controllers_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/server */ \"./src/controllers/server.js\");\n/* harmony import */ var _controllers_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_controllers_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _controllers_my__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/my */ \"./src/controllers/my.js\");\n/* harmony import */ var _controllers_my__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_controllers_my__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _controllers_arrival__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controllers/arrival */ \"./src/controllers/arrival.js\");\n/* harmony import */ var _controllers_arrival__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_controllers_arrival__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _controllers_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controllers/main */ \"./src/controllers/main.js\");\n/* harmony import */ var _controllers_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../controllers/search */ \"./src/controllers/search.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar Router =\n/*#__PURE__*/\nfunction () {\n  function Router(obj) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Router);\n\n    this.mode = obj.mode; // this.mode = 'history'\n    // 路由配置\n\n    this.routes = {\n      '/index': _controllers_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      '/index/home': _controllers_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      '/index/search': _controllers_search__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n      '/index/home/main': _controllers_main__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n      '/index/home/shop': _controllers_shop__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      '/index/home/server': _controllers_server__WEBPACK_IMPORTED_MODULE_5___default.a,\n      '/index/home/my': _controllers_my__WEBPACK_IMPORTED_MODULE_6___default.a,\n      '/index/home/arrival': _controllers_arrival__WEBPACK_IMPORTED_MODULE_7___default.a // 组件挂载根元素\n\n    };\n    this.root = $('#main'); // 导航菜单列表\n\n    this.navList = $('nav a');\n    this.init();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Router, [{\n    key: \"init\",\n    value: function init() {\n      _controllers_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render();\n\n      if (this.mode === 'hash') {\n        window.addEventListener('load', this.hashRefresh.bind(this), false);\n        window.addEventListener('hashchange', this.hashRefresh.bind(this), false);\n      } else {\n        this.bindLink();\n        window.addEventListener('load', this.loadView.bind(this, location.pathname));\n        window.addEventListener('popstate', this.historyRefresh.bind(this));\n      }\n    }\n    /**\r\n     * history模式劫持 a链接\r\n     */\n\n  }, {\n    key: \"bindLink\",\n    value: function bindLink() {\n      $('nav').on('click', 'a', this.handleLink.bind(this));\n    }\n    /**\r\n     * history 处理a链接\r\n     * @param  e 当前对象Event\r\n     */\n\n  }, {\n    key: \"handleLink\",\n    value: function handleLink(e) {\n      e.preventDefault(); // 获取元素路径属性\n\n      var href = $(e.target).attr('href'); // 对非路由链接直接跳转\n\n      if (href.slice(0, 1) !== '#') {\n        window.location.href = href;\n      } else {\n        var path = href.slice(1);\n        history.pushState({\n          path: path\n        }, null, path); // 加载相应页面\n\n        this.loadView(path.split('?')[0]);\n      }\n    }\n    /**\r\n     * hash路由刷新执行\r\n     * @param {object} e\r\n     */\n\n  }, {\n    key: \"hashRefresh\",\n    value: function hashRefresh(e) {\n      // console.log(e)\n      if (e.newURL) {\n        var newURL = e.newURL.split('#')[1];\n        var oldURL = e.oldURL.split('#')[1];\n      }\n\n      var currentURL = location.hash.slice(1).split('?')[0] || '/index/home/main';\n      this.loadView(currentURL);\n    }\n    /**\r\n     * history模式刷新页面\r\n     * @param  e  当前对象Event\r\n     */\n\n  }, {\n    key: \"historyRefresh\",\n    value: function historyRefresh(e) {\n      var state = e.state || {};\n      var path = state.path.split('?')[0] || null;\n\n      if (path) {\n        this.loadView(path);\n      }\n    }\n    /**\r\n     * 加载页面\r\n     * @param {string} currentURL \r\n     */\n\n  }, {\n    key: \"loadView\",\n    value: function loadView(currentURL) {\n      var _this = this;\n\n      if (this.mode === 'history' && currentURL === '/') {\n        history.replaceState({\n          path: '/'\n        }, null, '/');\n        currentURL = '/main';\n      } // 多级链接拆分为数组,遍历依次加载\n\n\n      this.currentURLlist = currentURL.slice(1).split('/');\n      this.url = \"\";\n      this.currentURLlist.forEach(function (item, index) {\n        // 导航菜单激活显示\n        if (index === 0) {\n          _this.navActive(item);\n        }\n\n        _this.url += \"/\" + item;\n        _this.controllerName = _this.routes[_this.url]; // 404页面处理\n\n        if (!_this.controllerName) {\n          _this.errorPage();\n\n          return false;\n        } // 对于嵌套路由的处理\n\n\n        if (_this.oldURL && _this.oldURL[index] == _this.currentURLlist[index]) {\n          _this.handleSubRouter(item, index);\n        } else {\n          _this.controller(_this.controllerName, _this.url);\n        }\n      }); // 记录链接数组,后续处理子级组件\n\n      this.oldURL = JSON.parse(JSON.stringify(this.currentURLlist));\n    }\n    /**\r\n     * 处理嵌套路由\r\n     * @param {string} item 链接list中当前项\r\n     * @param {number} index 链接list中当前索引\r\n     */\n\n  }, {\n    key: \"handleSubRouter\",\n    value: function handleSubRouter(item, index) {\n      // 新路由是旧路由的子级\n      if (this.oldURL.length < this.currentURLlist.length) {\n        // 相同路由部分不重新加载\n        if (item !== this.oldURL[index]) {\n          this.controller(this.name);\n          console.log('解绑状态监听事件');\n          store.getSubject().unsubscribe('stateChange');\n        }\n      } // 新路由是旧路由的父级\n\n\n      if (this.oldURL.length > this.currentURLlist.length) {\n        var len = Math.min(this.oldURL.length, this.currentURLlist.length); // 只重新加载最后一个路由\n\n        if (index == len - 1) {\n          this.controller(this.name);\n        }\n      }\n    }\n    /**\r\n     * 404页面处理\r\n     */\n\n  }, {\n    key: \"errorPage\",\n    value: function errorPage() {\n      if (this.mode === 'hash') {\n        location.href = '#/error';\n      } else {\n        history.replaceState({\n          path: '/error'\n        }, null, '/error');\n        this.loadView('/error');\n      }\n    }\n    /**\r\n     * 组件控制器\r\n     * @param {string} name \r\n     */\n\n  }, {\n    key: \"controller\",\n    value: function controller(name, item) {\n      name.render(); // name 是当前路由匹配的那个 controller\n\n      this.navActive(item); // 切换路由时导航高亮\n    }\n    /**\r\n     * 手动跳转路由\r\n     * @param {string} path \r\n     */\n\n  }, {\n    key: \"push\",\n    value: function push(path) {\n      if (this.mode === 'hash') {\n        location.hash = '#' + path;\n      } else {\n        history.pushState({\n          path: path\n        }, null, path); // 加载相应页面\n\n        this.loadView(path.split('?')[0]);\n      }\n    }\n    /**\r\n     * 绑定组件对象中events 事件\r\n     * @desc 将组件对象中this通过call绑定\r\n     * ! 仅支持绑定当前组件下的DOM事件\r\n     */\n\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      var self = this; //eventType: 事件类型;selector: 事件作用对象;handleEvent: 事件执行方法\n\n      var eventType = \"\",\n          selector = \"\",\n          handleEvent = \"\";\n\n      var Event = function Event(eventType, selector, handleEvent) {\n        self.$el.find(selector).on(eventType, function (e) {\n          // 执行事件\n          self[handleEvent](e);\n        });\n      }; // 遍历events对象\n\n\n      for (var index in self.events) {\n        eventType = index.match(/[0-9A-Za-z]+\\s/i)[0].trim(); // 匹配事件名\n\n        selector = index.replace(/[0-9A-Za-z]+\\s/i, \"\").trim(); // 匹配事件作用元素选择器\n\n        handleEvent = self.events[index]; // 匹配处理事件名称\n\n        var obj = new Event(eventType, selector, handleEvent);\n        obj = null; // 用完即释放空间\n      }\n\n      Event = null;\n    }\n    /**\r\n     * 导航激活显示\r\n     * @param  item 当前router对象\r\n     */\n\n  }, {\n    key: \"navActive\",\n    value: function navActive(item) {\n      $('nav a').filter(\"[href=\\\"#\".concat(item, \"\\\"]\")).closest('li').addClass('active').siblings().removeClass('active');\n    }\n  }]);\n\n  return Router;\n}();\n\n\n\n//# sourceURL=webpack:///./src/router/rooter.js?");

/***/ }),

/***/ "./src/views/home.html":
/*!*****************************!*\
  !*** ./src/views/home.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container\\\">  <header>    <div class=\\\"search\\\"><a href=\\\"#/index/search\\\"><span class=\\\"yo-ico\\\">&#xe650;</span><i>5LUX.COM</i></a></div><span class=\\\"yo-ico\\\">&#xe6cd;</span>  </header>  <main>     </main>  <nav>    <ul class=\\\"nav\\\">      <li class=\\\"active\\\">          <a href=\\\"#/index/home/main\\\">        <i class=\\\"yo-ico\\\">&#xe628;</i>        <b>首页</b></a>      </li>      <li><a href=\\\"#/index/home/shop\\\">        <i class=\\\"yo-ico\\\">&#xe7e4;</i>        <b>商城</b></a>      </li>      <li><a href=\\\"#/index/home/server\\\">        <i class=\\\"yo-ico\\\">&#xe60e;</i>        <b>海外服务</b></a>      </li>      <li>          <a href=\\\"#/index/home/arrival\\\">        <i class=\\\"yo-ico\\\"> &#xe766;</i>        <b>到店</b></a>      </li>      <li>          <a href=\\\"#/index/home/my\\\">        <i class=\\\"yo-ico\\\">&#xe78c;</i>        <b>我的</b></a>      </li>    </ul>  </nav></div>\"\n\n//# sourceURL=webpack:///./src/views/home.html?");

/***/ }),

/***/ "./src/views/homeindex/goodslist.html":
/*!********************************************!*\
  !*** ./src/views/homeindex/goodslist.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"news\\\">    <a href=\\\"{{data.new_register[0].ad_link}}\\\">        <img src=\\\"{{data.new_register[0].ad_code}}\\\" alt=\\\"\\\">    </a></div><div class=\\\"member\\\">    <a href=\\\"{{data.vip_member[0].ad_link}}\\\">        <img src=\\\"{{data.vip_member[0].ad_code}}\\\" alt=\\\"\\\">    </a>    <ul>        <li><a href=\\\"{{data.vip_member[1].ad_link}}\\\"><img src=\\\"{{data.vip_member[1].ad_code}}\\\" alt=\\\"\\\"></a></li>        <li><a href=\\\"{{data.vip_member[2].ad_link}}\\\"><img src=\\\"{{data.vip_member[2].ad_code}}\\\" alt=\\\"\\\"></a></li>        <li><a href=\\\"{{data.vip_member[3].ad_link}}\\\"><img src=\\\"{{data.vip_member[3].ad_code}}\\\" alt=\\\"\\\"></a></li>        <li><a href=\\\"{{data.vip_member[4].ad_link}}\\\"><img src=\\\"{{data.vip_member[4].ad_code}}\\\" alt=\\\"\\\"></a></li>    </ul></div><ul>    <li><a href=\\\"{{data.buy_list[0].ad_link}}\\\"><img src=\\\"{{data.five_example.ads_info.ad_code}}\\\" alt=\\\"\\\"></a>    </li>    <li><a href=\\\"{{data.buy_list[0].ad_link}}\\\"><img src=\\\"{{data.buy_list[0].ad_code}}\\\" alt=\\\"\\\"></a></li></ul><div class=\\\"xiannv\\\">        <a href=\\\"{{data.article_list[0].ads_info.ad_link}}\\\"><img src=\\\"{{data.article_list[0].ads_info.ad_code}}\\\" alt=\\\"\\\">            <div>                <h3>{{data.article_list[0].ads_info.ad_name}}</h3>                <p>{{data.article_list[0].ads_info.ad_title}}</p>            </div>        </a>    </div><div class=\\\"list2\\\">    <ul>        <li>            <a href=\\\"#\\\">                <div> <img src=\\\"{{data.article_list[0].ads_info.product_info[0].product_thumb}}\\\" alt=\\\"\\\"></div>                <p class=\\\"name\\\">{{data.article_list[0].ads_info.product_info[0].ad_title}}</p>                <p class=\\\"price\\\">{{data.article_list[0].ads_info.product_info[0].ad_subtitle}}</p>        </li>        <li>            <a href=\\\"#\\\">                <div><img src=\\\"{{data.article_list[0].ads_info.product_info[1].product_thumb}}\\\" alt=\\\"\\\"></div>                <p class=\\\"name\\\">{{data.article_list[0].ads_info.product_info[1].ad_title}}</p>                <p class=\\\"price\\\">{{data.article_list[0].ads_info.product_info[1].ad_subtitle}}</p>            </a>        </li>        <li>            <a href=\\\"#\\\">                <div> <img src=\\\"{{data.article_list[0].ads_info.product_info[2].product_thumb}}\\\" alt=\\\"\\\"> </div>                <p class=\\\"name\\\">{{data.article_list[0].ads_info.product_info[2].ad_title}}</p>                <p class=\\\"price\\\">{{data.article_list[0].ads_info.product_info[2].ad_subtitle}}</p>            </a>        </li>        <li>            <a href=\\\"#\\\">                <div><img src=\\\"{{data.article_list[0].ads_info.product_info[3].product_thumb}}\\\" alt=\\\"\\\"></div>                <p class=\\\"name\\\">{{data.article_list[0].ads_info.product_info[3].ad_title}}</p>                <p class=\\\"price\\\">{{data.article_list[0].ads_info.product_info[3].ad_subtitle}}</p>            </a>        </li>        <li>            <a href=\\\"#\\\">                <div><img src=\\\"{{data.article_list[0].ads_info.product_info[4].product_thumb}}\\\" alt=\\\"\\\"></div>                <p class=\\\"name\\\">{{data.article_list[0].ads_info.product_info[4].ad_title}}</p>                <p class=\\\"price\\\">{{data.article_list[0].ads_info.product_info[4].ad_subtitle}}</p>            </a>        </li>        <li>            <a href=\\\"#\\\">                <div><img src=\\\"{{data.article_list[0].ads_info.product_info[5].product_thumb}}\\\" alt=\\\"\\\"> </div>                <p class=\\\"name\\\">{{data.article_list[0].ads_info.product_info[5].ad_title}}</p>                <p class=\\\"price\\\">{{data.article_list[0].ads_info.product_info[5].ad_subtitle}}</p>            </a>        </li>        <li>            <a href=\\\"#\\\">                <div><img src=\\\"{{data.article_list[0].ads_info.product_info[6].product_thumb}}\\\" alt=\\\"\\\"></div>                <p class=\\\"name\\\">{{data.article_list[0].ads_info.product_info[6].ad_title}}</p>                <p class=\\\"price\\\">{{data.article_list[0].ads_info.product_info[6].ad_subtitle}}</p>            </a>        </li>    </ul></div>\"\n\n//# sourceURL=webpack:///./src/views/homeindex/goodslist.html?");

/***/ }),

/***/ "./src/views/homeindex/homeindex.html":
/*!********************************************!*\
  !*** ./src/views/homeindex/homeindex.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" <!-- 轮播图 --> <div class=\\\"swiper-container\\\">    <div class=\\\"swiper-wrapper\\\">      <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/04/29/st/155650707036_750x825.jpg\\\"            alt=\\\"\\\"></a></div>      <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/05/22/st/155851924735_750x825.jpg\\\"            alt=\\\"\\\"></a></div>      <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/05/21/de/155842553772_750x825.jpg\\\"            alt=\\\"\\\"></a></div>      <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/05/09/ij/155738929312_750x825.jpg\\\"            alt=\\\"\\\"></a></div>      <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/05/07/hi/155719480076_750x825.jpg\\\"            alt=\\\"\\\"></a></div>      <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/04/29/st/155650707036_750x825.jpg\\\"            alt=\\\"\\\"></a></div>      <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/04/29/bc/155652366170_750x825.jpg\\\"            alt=\\\"\\\"></a></div>    </div>    <!-- 如果需要分页器 -->    <div class=\\\"swiper-pagination\\\"></div>  </div>  <!-- 导航栏 -->  <ul class=\\\"nav\\\">    <li class=\\\"active\\\">      <i class=\\\"yo-ico\\\">&#xe7e5;</i>      <b><a href=\\\"#/index/home/new\\\">上新</a></b>    </li>    <li>      <i class=\\\"yo-ico\\\">&#xf025a;</i>      <b><a href=\\\"#/index/home/foreign\\\">海外馆</a></b>    </li>    <li>      <i class=\\\"yo-ico\\\">&#xe62f;</i>      <b><a href=\\\"#/index/home/buy\\\">值得买</a></b>    </li>    <li>      <i class=\\\"yo-ico\\\">&#xe7e5;</i>      <b><a href=\\\"#/index/home/flash\\\">闪购</a></b>    </li>    <li>      <i class=\\\"yo-ico\\\">&#xe664;</i>      <b><a href=\\\"#/index/home/brand\\\">品牌</a></b>    </li>  </ul>  <div class=\\\"list1\\\">    <ul>      <li><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/05/10/ef/155747998715_368x260.jpg\\\" alt=\\\"\\\"></a></li>      <li><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/05/10/pq/155747998644_368x260.jpg \\\" alt=\\\"\\\"></a></li>      <li><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/04/29/fg/155652835370_368x260.jpg\\\" alt=\\\"\\\"></a></li>      <li><a href=\\\"\\\"><img src=\\\"http://img550.5lux.com.cn/2019/05/10/lm/155747998939_368x260.jpg\\\" alt=\\\"\\\"></a></li>    </ul>  </div>  <div id=\\\"goodslist\\\">      </div>\"\n\n//# sourceURL=webpack:///./src/views/homeindex/homeindex.html?");

/***/ }),

/***/ "./src/views/index.html":
/*!******************************!*\
  !*** ./src/views/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div id=\\\"index\\\"></div>\"\n\n//# sourceURL=webpack:///./src/views/index.html?");

/***/ }),

/***/ "./src/views/search.html":
/*!*******************************!*\
  !*** ./src/views/search.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"search\\\">    <div>        <div class=\\\"search-header\\\">                <div class=\\\"input\\\">                        <i class=\\\"yo-ico\\\">&#xe650;</i>                    <form action=\\\"#\\\">                                         <input type=\\\"search\\\" placeholder=\\\"Gucci包\\\" >                    </form>                </div>                <span> <a href=\\\"\\\">取消</a></span>            </div>            <p>热门搜索</p>            <ul>                <li>Rolex劳力士</li>                <li>GUCCI</li>                <li>斩男香水</li>                <li>太阳镜</li>                <li>Hermes爱马仕</li>                <li>SELF-PORTRAIT仙女裙</li>                <li>百达翡丽</li>                <li>CHANEL香奈儿</li>                <li>Omega欧米茄</li>                <li>连衣裙</li>                <li>DIOR迪奥</li>                <li>S&S纽约故事女装</li>            </ul>                    <div class=\\\"tuijian\\\">——为你推荐——</div>                </div>        <div class=\\\"tuijianlist\\\"></div></div>\"\n\n//# sourceURL=webpack:///./src/views/search.html?");

/***/ }),

/***/ "./src/views/search/searchlist.html":
/*!******************************************!*\
  !*** ./src/views/search/searchlist.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{each data}}<div class=\\\"listimg\\\">            <img src=\\\"{{$value[\\'product_thumb\\']}}\\\" alt=\\\"\\\">        <p class=\\\"name\\\">{{$value[\\'product_name\\']}}</p>            </div>{{/each}}\"\n\n//# sourceURL=webpack:///./src/views/search/searchlist.html?");

/***/ }),

/***/ "./src/views/shop.html":
/*!*****************************!*\
  !*** ./src/views/shop.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"shop\\\">    <nav>        <ul>            <li class=\\\"active\\\"><a href=\\\"\\\"> 首页</a></li>            <li><a href=\\\"#a\\\"> 箱包</a></li>            <li><a href=\\\"#\\\"> 美妆</a></li>            <li><a href=\\\"\\\">服装</a> </li>            <li><a href=\\\"\\\"> 腕表</a></li>            <li><a href=\\\"\\\"> 配饰</a></li>        </ul>    </nav>    <!-- 轮播图 -->    <div class=\\\"swiper-container\\\">        <div class=\\\"swiper-wrapper\\\">            <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img                        src=\\\"http://img550.5lux.com.cn/2019/06/06/cd/155981023173_750x560.jpg\\\" alt=\\\"\\\"></a></div>            <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img                        src=\\\"http://img550.5lux.com.cn/2019/06/05/lm/155970032891_750x560.jpg\\\" alt=\\\"\\\"></a></div>            <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img                        src=\\\"http://img550.5lux.com.cn/2019/05/31/ij/155929523640_750x560.jpg\\\" alt=\\\"\\\"></a></div>            <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img                        src=\\\"http://img550.5lux.com.cn/2019/05/22/hi/155851924439_750x560.jpg\\\" alt=\\\"\\\"></a></div>            <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img                        src=\\\"http://img550.5lux.com.cn/2019/05/21/ef/155842553798_750x560.jpg\\\" alt=\\\"\\\"></a></div>            <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img                        src=\\\"http://img550.5lux.com.cn/2019/04/29/pq/155652366065_750x560.jpg\\\" alt=\\\"\\\"></a></div>            <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img                        src=\\\"http://img550.5lux.com.cn/2019/04/29/bc/155650706524_750x560.jpg\\\" alt=\\\"\\\"></a></div>            <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img                        src=\\\"http://img550.5lux.com.cn/2019/05/07/tu/155719480011_750x560.jpg\\\" alt=\\\"\\\"></a></div>        </div>        <div class=\\\"swiper-pagination\\\"></div>    </div>    <ul class=\\\"ul\\\">            <li>                <a href=\\\"#/index/home/main\\\">              <i class=\\\"yo-ico\\\">&#xe67c;</i>              <b>分类</b></a>            </li>            <li>                <a href=\\\"#/index/home/shop\\\">              <i class=\\\"yo-ico\\\">&#xe7cb;</i>              <b>专柜自提</b></a>            </li>            <li>                <a href=\\\"#/index/home/server\\\">              <i class=\\\"yo-ico\\\">&#xe63c;</i>              <b>拼团</b></a>            </li>            <li>                <a href=\\\"#/index/home/arrival\\\">              <i class=\\\"yo-ico\\\">&#xe60c;</i>              <b>会员特权</b></a>            </li>            <li>                <a href=\\\"#/index/home/my\\\">              <i class=\\\"yo-ico\\\">&#xe6d3;</i>              <b>礼品</b></a>            </li>          </ul></div><!-- 如果需要分页器 --><!-- <div class=\\\"swiper-container\\\">        <div class=\\\"swiper-wrapper\\\">        </div>    </div> -->\"\n\n//# sourceURL=webpack:///./src/views/shop.html?");

/***/ }),

/***/ "./src/views/shop/shop-swipper.html":
/*!******************************************!*\
  !*** ./src/views/shop/shop-swipper.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"                                             {{each data}}                                     <div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img src=\\\"{{$value.silde_original}}\\\" alt=\\\"\\\"></a></div>{{/each}}                                       \"\n\n//# sourceURL=webpack:///./src/views/shop/shop-swipper.html?");

/***/ }),

/***/ "./src/views/shop/shop-swipper2.html":
/*!*******************************************!*\
  !*** ./src/views/shop/shop-swipper2.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{each data}}<div class=\\\"swiper-slide\\\"><a href=\\\"\\\"><img src=\\\"{{$value.silde_original}}\\\" alt=\\\"\\\"></a></div>{{/each}}<li></li><li></li><li></li>\"\n\n//# sourceURL=webpack:///./src/views/shop/shop-swipper2.html?");

/***/ })

/******/ });