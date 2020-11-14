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
        key: data,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 51
        }
      }, data)]);
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
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Socket io private messaging"), __jsx("form", {
    onSubmit: e => sendMessage(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("input", {
    placeholder: "Type message",
    value: message,
    onChange: e => setMessage(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Send message")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
    // socket.on('new user')
  }, [user]); // save the user and show the chat feature 

  const onSubmit = async e => {
    e.preventDefault();
    setRenderChat(true);
    user = {
      uid: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
      name
    };
    socket.emit('new user', {
      user
    });
    setName('');
  };

  const renderContent = () => {
    if (renderChat) {
      return __jsx(_components_Chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 14
        }
      });
    } else {
      return __jsx("form", {
        onSubmit: e => onSubmit(e),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 14
        }
      }, __jsx("input", {
        onChange: e => setName(e.target.value),
        placeholder: "Enter your name",
        value: name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }), __jsx("button", {
        type: "submit",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, "Enter the chat"));
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, users.length > 0 && users.map(user => __jsx("li", {
    key: user.uid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJzb2NrZXQiLCJCQUNLRU5EX1VSSSIsIkNoYXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZVN0YXRlIiwibWVzc2FnZXMiLCJhZGRNZXNzYWdlcyIsInVzZUVmZmVjdCIsImlvIiwib24iLCJkYXRhIiwib2xkTWVzc2FnZXMiLCJlbWl0Iiwib2ZmIiwiY29uc29sZSIsImxvZyIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJpbmRleCIsIm5hbWUiLCJzZXROYW1lIiwidXNlciIsInVzZXJzIiwic2V0VXNlcnMiLCJyZW5kZXJDaGF0Iiwic2V0UmVuZGVyQ2hhdCIsIm9uU3VibWl0IiwidWlkIiwidXVpZHY0IiwicmVuZGVyQ29udGVudCIsImxlbmd0aCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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QUFBLDBCQU5LLENBQVA7QUFRRDtBQUNGLEdBYkQ7O0FBY0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxLQUFLLENBQUNRLE1BQU4sR0FBZSxDQUFmLElBQW9CUixLQUFLLENBQUNTLEdBQU4sQ0FBVVYsSUFBSSxJQUFJO0FBQUksT0FBRyxFQUFFQSxJQUFJLENBQUNNLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQk4sSUFBSSxDQUFDRixJQUF6QixDQUFsQixDQUR2QixDQURGLEVBSUdVLGFBQWEsRUFKaEIsQ0FERjtBQVFELENBM0NEOztBQTZDZVgsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNyREEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmxldCBzb2NrZXQ7XHJcbmxldCBCQUNLRU5EX1VSSSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xyXG5cclxuY29uc3QgQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBhZGRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB3aGVuIHBhZ2UgbG9hZHMgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbm5lY3QgdG8gdGhlIGJhY2tlbmQgdXJpIHVzaW5nIHNvY2tldCBcclxuICAgIHNvY2tldCA9IGlvKEJBQ0tFTkRfVVJJKTtcclxuICAgIC8vIGxpc3RlbiBmb3IgYnJvYWRjYXN0ZWQgbWVzc2FnZXNcclxuICAgIHNvY2tldC5vbignbmV3IG1lc3NhZ2UnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBhZGRNZXNzYWdlcyhvbGRNZXNzYWdlcyA9PiBbLi4ub2xkTWVzc2FnZXMsIDxsaSBrZXk9e2RhdGF9PntkYXRhfTwvbGk+XSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGRpc2Nvbm5lY3Qgd2hlbiBjb21wb25lbnQgZ2V0cyB1bm1vdW50ZWRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5lbWl0KCdkaXNjb25uZWN0Jyk7XHJcbiAgICAgIHNvY2tldC5vZmYoKTtcclxuICAgICAgY29uc29sZS5sb2coJ0Rpc2Nvbm5lY3RpbmcgdGhlIHJvb20nKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgLy8gZnVuY3Rpb24gdG8gc2VuZCB0aGUgbWVzc2FnZVxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlJywgeyBtZXNzYWdlIH0pO1xyXG4gICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlNvY2tldCBpbyBwcml2YXRlIG1lc3NhZ2luZzwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IHNlbmRNZXNzYWdlKGUpfT5cclxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJUeXBlIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgbWVzc2FnZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWVzc2FnZXN9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXQnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5sZXQgc29ja2V0O1xyXG5sZXQgQkFDS0VORF9VUkkgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBsZXQgdXNlcjtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVuZGVyQ2hhdCwgc2V0UmVuZGVyQ2hhdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNvY2tldCA9IGlvKEJBQ0tFTkRfVVJJKTtcclxuICAgIC8vIGxpc3RlbiBmb3IgdGhlIG5ldyB1c2VycyBcclxuICAgIC8vIHNvY2tldC5vbignbmV3IHVzZXInKVxyXG4gIH0sIFt1c2VyXSk7XHJcbiAgLy8gc2F2ZSB0aGUgdXNlciBhbmQgc2hvdyB0aGUgY2hhdCBmZWF0dXJlIFxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFJlbmRlckNoYXQodHJ1ZSk7XHJcbiAgICB1c2VyID0ge1xyXG4gICAgICB1aWQ6IHV1aWR2NCgpLFxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgICBzb2NrZXQuZW1pdCgnbmV3IHVzZXInLCB7IHVzZXIgfSk7XHJcbiAgICBzZXROYW1lKCcnKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBpZiAocmVuZGVyQ2hhdCkge1xyXG4gICAgICByZXR1cm4gPENoYXQgLz5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW50ZXIgdGhlIGNoYXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHt1c2Vycy5sZW5ndGggPiAwICYmIHVzZXJzLm1hcCh1c2VyID0+IDxsaSBrZXk9e3VzZXIudWlkfT57dXNlci5uYW1lfTwvbGk+KX1cclxuICAgICAgPC91bD5cclxuICAgICAge3JlbmRlckNvbnRlbnQoKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=