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

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Linux\\socket-private-message\\client\\components\\Chat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


let socket;
let BACKEND_URI = 'http://localhost:3001';

const Chat = () => {
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: messages,
    1: addMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // connect to the backend when page loads 

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // connect to the backend uri using socket 
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(BACKEND_URI); // listen for broadcasted messages

    socket.on('new message', data => {
      addMessages(oldMessages => [...oldMessages, __jsx("li", {
        key: data.message,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7
        }
      }, data.message, ": by : ", data.uid)]);
    }); // disconnect when component gets unmounted

    return () => {
      socket.emit('disconnect');
      socket.off();
      console.log('Disconnecting the room');
    };
  }, []); // function to send the message

  const sendMessage = e => {
    e.preventDefault();
    socket.emit('message', {
      message
    });
    setMessage('');
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Socket io private messaging"), __jsx("form", {
    onSubmit: e => sendMessage(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("input", {
    placeholder: "Type message",
    value: message,
    onChange: e => setMessage(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Send message")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, messages));
};

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chat */ "./components/Chat.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\Linux\\socket-private-message\\client\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




let socket;
let BACKEND_URI = 'http://localhost:3001';

const index = () => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let user;
  const {
    0: users,
    1: setUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: renderChat,
    1: setRenderChat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()(BACKEND_URI); // listen for the new users 

    socket.on('users', ({
      users
    }) => {
      setUsers([...users]);
    });
  }, []); // save the user and show the chat feature 

  const onSubmit = async e => {
    e.preventDefault();
    setRenderChat(true);
    user = {
      uid: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
      name
    };
    socket.emit('new user', {
      user
    }, bool => {
      console.log(`The new user was created: ${bool}`);
    });
    setName('');
  };

  const renderContent = () => {
    if (renderChat) {
      return __jsx(_components_Chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 14
        }
      });
    } else {
      return __jsx("form", {
        onSubmit: e => onSubmit(e),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 14
        }
      }, __jsx("input", {
        onChange: e => setName(e.target.value),
        placeholder: "Enter your name",
        value: name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }), __jsx("button", {
        type: "submit",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, "Enter the chat"));
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, users.length > 0 && users.map(user => __jsx("li", {
    key: user.uid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 48
    }
  }, user.name))), renderContent());
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJzb2NrZXQiLCJCQUNLRU5EX1VSSSIsIkNoYXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZVN0YXRlIiwibWVzc2FnZXMiLCJhZGRNZXNzYWdlcyIsInVzZUVmZmVjdCIsImlvIiwib24iLCJkYXRhIiwib2xkTWVzc2FnZXMiLCJ1aWQiLCJlbWl0Iiwib2ZmIiwiY29uc29sZSIsImxvZyIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJpbmRleCIsIm5hbWUiLCJzZXROYW1lIiwidXNlciIsInVzZXJzIiwic2V0VXNlcnMiLCJyZW5kZXJDaGF0Iiwic2V0UmVuZGVyQ2hhdCIsIm9uU3VibWl0IiwidXVpZHY0IiwiYm9vbCIsInJlbmRlckNvbnRlbnQiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNMO0FBQ0UsZ0JBQVEsRUFBRUEsQ0FBQyxJQUFJTSxPQUFPLENBQUNOLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBRHhCO0FBRUUsbUJBQVcsRUFBQyxpQkFGZDtBQUdFLGFBQUssRUFBRUUsSUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREssRUFNTDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTkssQ0FBUDtBQVFEO0FBQ0YsR0FiRDs7QUFjQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQWYsSUFBb0JSLEtBQUssQ0FBQ1MsR0FBTixDQUFVVixJQUFJLElBQUk7QUFBSSxPQUFHLEVBQUVBLElBQUksQ0FBQ2IsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CYSxJQUFJLENBQUNGLElBQXpCLENBQWxCLENBRHZCLENBREYsRUFJR1UsYUFBYSxFQUpoQixDQURGO0FBUUQsQ0EvQ0Q7O0FBaURlWCxvRUFBZixFOzs7Ozs7Ozs7OztBQ3pEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxubGV0IHNvY2tldDtcclxubGV0IEJBQ0tFTkRfVVJJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcblxyXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZXMsIGFkZE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBjb25uZWN0IHRvIHRoZSBiYWNrZW5kIHdoZW4gcGFnZSBsb2FkcyBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB1cmkgdXNpbmcgc29ja2V0IFxyXG4gICAgc29ja2V0ID0gaW8oQkFDS0VORF9VUkkpO1xyXG4gICAgLy8gbGlzdGVuIGZvciBicm9hZGNhc3RlZCBtZXNzYWdlc1xyXG4gICAgc29ja2V0Lm9uKCduZXcgbWVzc2FnZScsIChkYXRhKSA9PiB7XHJcbiAgICAgIGFkZE1lc3NhZ2VzKG9sZE1lc3NhZ2VzID0+IFsuLi5vbGRNZXNzYWdlcyxcclxuICAgICAgPGxpIGtleT17ZGF0YS5tZXNzYWdlfT5cclxuICAgICAgICB7ZGF0YS5tZXNzYWdlfTogYnkgOiB7ZGF0YS51aWR9XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIF0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNjb25uZWN0IHdoZW4gY29tcG9uZW50IGdldHMgdW5tb3VudGVkXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZW1pdCgnZGlzY29ubmVjdCcpO1xyXG4gICAgICBzb2NrZXQub2ZmKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0aW5nIHRoZSByb29tJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIC8vIGZ1bmN0aW9uIHRvIHNlbmQgdGhlIG1lc3NhZ2VcclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIHsgbWVzc2FnZSB9KTtcclxuICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5Tb2NrZXQgaW8gcHJpdmF0ZSBtZXNzYWdpbmc8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVHlwZSBtZXNzYWdlXCJcclxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge21lc3NhZ2VzfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxubGV0IHNvY2tldDtcclxubGV0IEJBQ0tFTkRfVVJJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgbGV0IHVzZXI7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlbmRlckNoYXQsIHNldFJlbmRlckNoYXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzb2NrZXQgPSBpbyhCQUNLRU5EX1VSSSk7XHJcbiAgICAvLyBsaXN0ZW4gZm9yIHRoZSBuZXcgdXNlcnMgXHJcbiAgICBzb2NrZXQub24oJ3VzZXJzJywgKHsgdXNlcnMgfSkgPT4ge1xyXG4gICAgICBzZXRVc2VycyhbLi4udXNlcnNdKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICAvLyBzYXZlIHRoZSB1c2VyIGFuZCBzaG93IHRoZSBjaGF0IGZlYXR1cmUgXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0UmVuZGVyQ2hhdCh0cnVlKTtcclxuICAgIHVzZXIgPSB7XHJcbiAgICAgIHVpZDogdXVpZHY0KCksXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICAgIHNvY2tldC5lbWl0KCduZXcgdXNlcicsIHsgdXNlciB9LCAoYm9vbCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgVGhlIG5ldyB1c2VyIHdhcyBjcmVhdGVkOiAke2Jvb2x9YCk7XHJcbiAgICB9KTtcclxuICAgIHNldE5hbWUoJycpO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgIGlmIChyZW5kZXJDaGF0KSB7XHJcbiAgICAgIHJldHVybiA8Q2hhdCAvPlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxmb3JtIG9uU3VibWl0PXtlID0+IG9uU3VibWl0KGUpfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnRlciB0aGUgY2hhdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge3VzZXJzLmxlbmd0aCA+IDAgJiYgdXNlcnMubWFwKHVzZXIgPT4gPGxpIGtleT17dXNlci51aWR9Pnt1c2VyLm5hbWV9PC9saT4pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICB7cmVuZGVyQ29udGVudCgpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==