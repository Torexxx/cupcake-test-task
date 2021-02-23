module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Timofey\\Desktop\\cupcake\\cupcake-frontend-test-task\\client\\pages\\index.js";




const Index = () => {
  let rubUsd = {
    first: 0,
    second: 0,
    third: 0
  };
  let rubEur = {
    first: 0,
    second: 0,
    third: 0
  };
  let eurUsd = {
    first: 0,
    second: 0,
    third: 0
  };

  function calc(market, curr1, curr2) {
    if (market.RUB || market.USD || market.EUR) {
      rubUsd.first = (first.RUB / first.USD).toFixed(2);
      rubUsd.second = (second.RUB / second.USD).toFixed(2);
      rubUsd.third = (third.RUB / third.USD).toFixed(2);
      rubEur.first = (first.RUB / first.EUR).toFixed(2);
      rubEur.second = (second.RUB / second.EUR).toFixed(2);
      rubEur.third = (third.RUB / third.EUR).toFixed(2);
      eurUsd.first = (first.EUR / first.USD).toFixed(2);
      eurUsd.second = (second.EUR / second.USD).toFixed(2);
      eurUsd.third = (third.EUR / third.USD).toFixed(2);
      let valuesRubUsd = Object.keys(rubUsd).map(function (key) {
        return rubUsd[key];
      });
      let valuesRubEur = Object.keys(rubEur).map(function (key) {
        return rubEur[key];
      });
      let valuesEurUsd = Object.keys(eurUsd).map(function (key) {
        return eurUsd[key];
      });
      let minValueRubUsd = Math.min.apply(null, valuesRubUsd);
      let minValueRubEur = Math.min.apply(null, valuesRubEur);
      let minValueEurUsd = Math.min.apply(null, valuesEurUsd);
      let currentValue = (market[curr1] / market[curr2]).toFixed(2);

      if (currentValue == minValueRubUsd || currentValue == minValueRubEur || currentValue == minValueEurUsd) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.min,
          children: currentValue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 16
        }, this);
      }

      return currentValue;
    }
  }

  let {
    0: first,
    1: setFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    RUB: 0,
    USD: 0,
    EUR: 0
  });
  let {
    0: second,
    1: setSecond
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    RUB: 0,
    USD: 0,
    EUR: 0
  });
  let {
    0: third,
    1: setThird
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    RUB: 0,
    USD: 0,
    EUR: 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let timeout = setTimeout(() => {
      axios__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:5000/api/v1/first').then(res => setFirst(res.data.rates));
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [first]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let timeout = setTimeout(() => {
      axios__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:5000/api/v1/second').then(res => setSecond(res.data.rates));
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [second]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let timeout = setTimeout(() => {
      axios__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:5000/api/v1/third').then(res => setThird(res.data.rates));
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [third]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.respTab,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Pair name/market"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Second"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Third"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/CUPCAKE "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.RUB.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "USD/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", second.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.USD.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/CUPCAKE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", first.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: second.EUR.toFixed(2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [" ", third.EUR.toFixed(2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "RUB/EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'RUB', 'EUR') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: "EUR/USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(first, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(second, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: calc(third, 'EUR', 'USD') || 'Загрузка...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"min": "Home_min__39OUL",
	"wrapper": "Home_wrapper__3EDsh",
	"table": "Home_table__1bzfV",
	"respTab": "Home_respTab__xn7Mg",
	"resp-tab": "Home_resp-tab__LgfHH",
	"respTabtd": "Home_respTabtd__hc1ca"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSW5kZXgiLCJydWJVc2QiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwicnViRXVyIiwiZXVyVXNkIiwiY2FsYyIsIm1hcmtldCIsImN1cnIxIiwiY3VycjIiLCJSVUIiLCJVU0QiLCJFVVIiLCJ0b0ZpeGVkIiwidmFsdWVzUnViVXNkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInZhbHVlc1J1YkV1ciIsInZhbHVlc0V1clVzZCIsIm1pblZhbHVlUnViVXNkIiwiTWF0aCIsIm1pbiIsImFwcGx5IiwibWluVmFsdWVSdWJFdXIiLCJtaW5WYWx1ZUV1clVzZCIsImN1cnJlbnRWYWx1ZSIsInN0eWxlcyIsInNldEZpcnN0IiwidXNlU3RhdGUiLCJzZXRTZWNvbmQiLCJzZXRUaGlyZCIsInVzZUVmZmVjdCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJhdGVzIiwiY2xlYXJUaW1lb3V0Iiwid3JhcHBlciIsInJlc3BUYWIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FB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LEtBQVQsRUFBZ0IsS0FBaEIsQ0FBSixJQUE4QjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGLGVBSUU7QUFBQSxzQkFBS0ksSUFBSSxDQUFDSCxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FBSixJQUE2QjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW9ERCxDQXBKRDs7QUFzSmVKLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgbGV0IHJ1YlVzZCA9IHtcbiAgICBmaXJzdDogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgdGhpcmQ6IDAsXG4gIH07XG4gIGxldCBydWJFdXIgPSB7XG4gICAgZmlyc3Q6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIHRoaXJkOiAwLFxuICB9O1xuICBsZXQgZXVyVXNkID0ge1xuICAgIGZpcnN0OiAwLFxuICAgIHNlY29uZDogMCxcbiAgICB0aGlyZDogMCxcbiAgfTtcbiAgZnVuY3Rpb24gY2FsYyhtYXJrZXQsIGN1cnIxLCBjdXJyMikge1xuICAgIGlmIChtYXJrZXQuUlVCIHx8IG1hcmtldC5VU0QgfHwgbWFya2V0LkVVUikge1xuICAgICAgcnViVXNkLmZpcnN0ID0gKGZpcnN0LlJVQiAvIGZpcnN0LlVTRCkudG9GaXhlZCgyKTtcbiAgICAgIHJ1YlVzZC5zZWNvbmQgPSAoc2Vjb25kLlJVQiAvIHNlY29uZC5VU0QpLnRvRml4ZWQoMik7XG4gICAgICBydWJVc2QudGhpcmQgPSAodGhpcmQuUlVCIC8gdGhpcmQuVVNEKS50b0ZpeGVkKDIpO1xuXG4gICAgICBydWJFdXIuZmlyc3QgPSAoZmlyc3QuUlVCIC8gZmlyc3QuRVVSKS50b0ZpeGVkKDIpO1xuICAgICAgcnViRXVyLnNlY29uZCA9IChzZWNvbmQuUlVCIC8gc2Vjb25kLkVVUikudG9GaXhlZCgyKTtcbiAgICAgIHJ1YkV1ci50aGlyZCA9ICh0aGlyZC5SVUIgLyB0aGlyZC5FVVIpLnRvRml4ZWQoMik7XG5cbiAgICAgIGV1clVzZC5maXJzdCA9IChmaXJzdC5FVVIgLyBmaXJzdC5VU0QpLnRvRml4ZWQoMik7XG4gICAgICBldXJVc2Quc2Vjb25kID0gKHNlY29uZC5FVVIgLyBzZWNvbmQuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgZXVyVXNkLnRoaXJkID0gKHRoaXJkLkVVUiAvIHRoaXJkLlVTRCkudG9GaXhlZCgyKTtcblxuICAgICAgbGV0IHZhbHVlc1J1YlVzZCA9IE9iamVjdC5rZXlzKHJ1YlVzZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4gcnViVXNkW2tleV07fSk7XG4gICAgICBsZXQgdmFsdWVzUnViRXVyID0gT2JqZWN0LmtleXMocnViRXVyKS5tYXAoZnVuY3Rpb24gKGtleSkge3JldHVybiBydWJFdXJba2V5XTt9KTtcbiAgICAgIGxldCB2YWx1ZXNFdXJVc2QgPSBPYmplY3Qua2V5cyhldXJVc2QpLm1hcChmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGV1clVzZFtrZXldO30pO1xuXG4gICAgICBsZXQgbWluVmFsdWVSdWJVc2QgPSBNYXRoLm1pbi5hcHBseShudWxsLCB2YWx1ZXNSdWJVc2QpO1xuICAgICAgbGV0IG1pblZhbHVlUnViRXVyID0gTWF0aC5taW4uYXBwbHkobnVsbCwgdmFsdWVzUnViRXVyKTtcbiAgICAgIGxldCBtaW5WYWx1ZUV1clVzZCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHZhbHVlc0V1clVzZCk7XG5cbiAgICAgIGxldCBjdXJyZW50VmFsdWUgPSAobWFya2V0W2N1cnIxXSAvIG1hcmtldFtjdXJyMl0pLnRvRml4ZWQoMik7XG5cbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudFZhbHVlID09IG1pblZhbHVlUnViVXNkIHx8XG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9PSBtaW5WYWx1ZVJ1YkV1ciB8fFxuICAgICAgICBjdXJyZW50VmFsdWUgPT0gbWluVmFsdWVFdXJVc2RcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW59PntjdXJyZW50VmFsdWV9PC9kaXY+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cbiAgbGV0IFtmaXJzdCwgc2V0Rmlyc3RdID0gdXNlU3RhdGUoe1xuICAgIFJVQjogMCxcbiAgICBVU0Q6IDAsXG4gICAgRVVSOiAwLFxuICB9KTtcbiAgbGV0IFtzZWNvbmQsIHNldFNlY29uZF0gPSB1c2VTdGF0ZSh7XG4gICAgUlVCOiAwLFxuICAgIFVTRDogMCxcbiAgICBFVVI6IDAsXG4gIH0pO1xuICBsZXQgW3RoaXJkLCBzZXRUaGlyZF0gPSB1c2VTdGF0ZSh7XG4gICAgUlVCOiAwLFxuICAgIFVTRDogMCxcbiAgICBFVVI6IDAsXG4gIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9maXJzdCcpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgc2V0Rmlyc3QocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFtmaXJzdF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9zZWNvbmQnKS50aGVuKChyZXMpID0+XG4gICAgICAgIHNldFNlY29uZChyZXMuZGF0YS5yYXRlcyksXG4gICAgICApO1xuICAgIH0sIDMwMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfTtcbiAgfSwgW3NlY29uZF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBheGlvcygnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS90aGlyZCcpLnRoZW4oKHJlcykgPT5cbiAgICAgICAgc2V0VGhpcmQocmVzLmRhdGEucmF0ZXMpLFxuICAgICAgKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH07XG4gIH0sIFt0aGlyZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy5yZXNwVGFifT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5QYWlyIG5hbWUvbWFya2V0PC90aD5cbiAgICAgICAgICAgIDx0aD5GaXJzdDwvdGg+XG4gICAgICAgICAgICA8dGg+U2Vjb25kPC90aD5cbiAgICAgICAgICAgIDx0aD5UaGlyZDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5SVUIvQ1VQQ0FLRSA8L3RkPlxuICAgICAgICAgICAgPHRkPiB7Zmlyc3QuUlVCLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3NlY29uZC5SVUIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7dGhpcmQuUlVCLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5VU0QvQ1VQQ0FLRTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHtmaXJzdC5VU0QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7c2Vjb25kLlVTRC50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt0aGlyZC5VU0QudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPkVVUi9DVVBDQUtFPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge2ZpcnN0LkVVUi50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3NlY29uZC5FVVIudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgPHRkPiB7dGhpcmQuRVVSLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5SVUIvVVNEPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhmaXJzdCwgJ1JVQicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyhzZWNvbmQsICdSVUInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGModGhpcmQsICdSVUInLCAnVVNEJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UlVCL0VVUjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoZmlyc3QsICdSVUInLCAnRVVSJykgfHwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NhbGMoc2Vjb25kLCAnUlVCJywgJ0VVUicpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHRoaXJkLCAnUlVCJywgJ0VVUicpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPkVVUi9VU0Q8L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKGZpcnN0LCAnRVVSJywgJ1VTRCcpIHx8ICfQl9Cw0LPRgNGD0LfQutCwLi4uJ308L3RkPlxuICAgICAgICAgICAgPHRkPntjYWxjKHNlY29uZCwgJ0VVUicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y2FsYyh0aGlyZCwgJ0VVUicsICdVU0QnKSB8fCAn0JfQsNCz0YDRg9C30LrQsC4uLid9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWluXCI6IFwiSG9tZV9taW5fXzM5T1VMXCIsXG5cdFwid3JhcHBlclwiOiBcIkhvbWVfd3JhcHBlcl9fM0VEc2hcIixcblx0XCJ0YWJsZVwiOiBcIkhvbWVfdGFibGVfXzFiemZWXCIsXG5cdFwicmVzcFRhYlwiOiBcIkhvbWVfcmVzcFRhYl9feG43TWdcIixcblx0XCJyZXNwLXRhYlwiOiBcIkhvbWVfcmVzcC10YWJfX0xnZkhIXCIsXG5cdFwicmVzcFRhYnRkXCI6IFwiSG9tZV9yZXNwVGFidGRfX2hjMWNhXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==