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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//commonjs规范\n//const name = require('./controllers/name')\nvar indexTpl = __webpack_require__(/*! ./views/index.html */ \"./src/views/index.html\");\n\nvar renderedIndexTpl = template.render(indexTpl, {}); // 将模板源代码编译成函数并立刻执行 第一个参数 来源 第二个参数{里面传数据} \n\ndocument.querySelector('#app').innerHTML = renderedIndexTpl; //把内容放到首页内\n//ES6模块化\n// import{name} from './controllers/name'\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/views/index.html":
/*!******************************!*\
  !*** ./src/views/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container\\\">  <header>    <div class=\\\"search\\\"><span class=\\\"yo-ico\\\">&#xe650;</span><i>5LUX.COM</i></div><span class=\\\"yo-ico\\\">&#xe6cd;</span>  </header>  <main>    <div class=\\\"swiper-container\\\">      <div class=\\\"swiper-wrapper\\\">        <div class=\\\"swiper-slide\\\">Slide 1</div>        <div class=\\\"swiper-slide\\\">Slide 2</div>        <div class=\\\"swiper-slide\\\">Slide 3</div>      </div>      <!-- 导航按钮 -->      <div class=\\\"swiper-button-prev\\\"></div>      <div class=\\\"swiper-button-next\\\"></div>    </div>    <ul class=\\\"nav\\\">      <li class=\\\"active\\\">        <i class=\\\"yo-ico\\\">&#xe7e5;</i>        <b>上新</b>      </li>      <li>        <i class=\\\"yo-ico\\\">&#xf025a;</i>        <b>海外馆</b>      </li>      <li>        <i class=\\\"yo-ico\\\">&#xe62f;</i>        <b>值得买</b>      </li>      <li>        <i class=\\\"yo-ico\\\">&#xe7e5;</i>        <b>闪购</b>      </li>      <li>        <i class=\\\"yo-ico\\\">&#xe664;</i>        <b>品牌</b>      </li>    </ul>    <div>      <img src=\\\"http://img550.5lux.com.cn/2019/05/31/uv/155929725266_750x586.jpg\\\" alt=\\\"\\\">    </div>  </main>  <nav>    <ul class=\\\"nav\\\">      <li class=\\\"active\\\">        <i class=\\\"yo-ico\\\">&#xe628;</i>        <b>首页</b>      </li>      <li>        <i class=\\\"yo-ico\\\">&#xe7e4;</i>        <b>商城</b>      </li>      <li>        <i class=\\\"yo-ico\\\">&#xe60e;</i>        <b>海外服务</b>      </li>      <li>        <i class=\\\"yo-ico\\\"> &#xe766;</i>        <b>到店</b>      </li>      <li>        <i class=\\\"yo-ico\\\">&#xe78c;</i>        <b>我的</b>      </li>    </ul>  </nav></div>\"\n\n//# sourceURL=webpack:///./src/views/index.html?");

/***/ })

/******/ });