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

    socket.on('users', ({
      users
    }) => {
      console.log(`New list of users ${JSON.stringify(users)}`);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJzb2NrZXQiLCJCQUNLRU5EX1VSSSIsIkNoYXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZVN0YXRlIiwibWVzc2FnZXMiLCJhZGRNZXNzYWdlcyIsInVzZUVmZmVjdCIsImlvIiwib24iLCJkYXRhIiwib2xkTWVzc2FnZXMiLCJlbWl0Iiwib2ZmIiwiY29uc29sZSIsImxvZyIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJpbmRleCIsIm5hbWUiLCJzZXROYW1lIiwidXNlciIsInVzZXJzIiwic2V0VXNlcnMiLCJyZW5kZXJDaGF0Iiwic2V0UmVuZGVyQ2hhdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvblN1Ym1pdCIsInVpZCIsInV1aWR2NCIsImJvb2wiLCJyZW5kZXJDb250ZW50IiwibGVuZ3RoIiwibWFwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0w7QUFDRSxnQkFBUSxFQUFFQSxDQUFDLElBQUlNLE9BQU8sQ0FBQ04sQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FEeEI7QUFFRSxtQkFBVyxFQUFDLGlCQUZkO0FBR0UsYUFBSyxFQUFFRSxJQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESyxFQU1MO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFOSyxDQUFQO0FBUUQ7QUFDRixHQWJEOztBQWNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csS0FBSyxDQUFDVyxNQUFOLEdBQWUsQ0FBZixJQUFvQlgsS0FBSyxDQUFDWSxHQUFOLENBQVViLElBQUksSUFBSTtBQUFJLE9BQUcsRUFBRUEsSUFBSSxDQUFDUSxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0JSLElBQUksQ0FBQ0YsSUFBekIsQ0FBbEIsQ0FEdkIsQ0FERixFQUlHYSxhQUFhLEVBSmhCLENBREY7QUFRRCxDQS9DRDs7QUFpRGVkLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDekRBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5sZXQgc29ja2V0O1xyXG5sZXQgQkFDS0VORF9VUkkgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcclxuXHJcbmNvbnN0IENoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlcywgYWRkTWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGNvbm5lY3QgdG8gdGhlIGJhY2tlbmQgd2hlbiBwYWdlIGxvYWRzIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25uZWN0IHRvIHRoZSBiYWNrZW5kIHVyaSB1c2luZyBzb2NrZXQgXHJcbiAgICBzb2NrZXQgPSBpbyhCQUNLRU5EX1VSSSk7XHJcbiAgICAvLyBsaXN0ZW4gZm9yIGJyb2FkY2FzdGVkIG1lc3NhZ2VzXHJcbiAgICBzb2NrZXQub24oJ25ldyBtZXNzYWdlJywgKGRhdGEpID0+IHtcclxuICAgICAgYWRkTWVzc2FnZXMob2xkTWVzc2FnZXMgPT4gWy4uLm9sZE1lc3NhZ2VzLCA8bGkga2V5PXtkYXRhfT57ZGF0YX08L2xpPl0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNjb25uZWN0IHdoZW4gY29tcG9uZW50IGdldHMgdW5tb3VudGVkXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZW1pdCgnZGlzY29ubmVjdCcpO1xyXG4gICAgICBzb2NrZXQub2ZmKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0aW5nIHRoZSByb29tJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIC8vIGZ1bmN0aW9uIHRvIHNlbmQgdGhlIG1lc3NhZ2VcclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIHsgbWVzc2FnZSB9KTtcclxuICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5Tb2NrZXQgaW8gcHJpdmF0ZSBtZXNzYWdpbmc8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVHlwZSBtZXNzYWdlXCJcclxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge21lc3NhZ2VzfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxubGV0IHNvY2tldDtcclxubGV0IEJBQ0tFTkRfVVJJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgbGV0IHVzZXI7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlbmRlckNoYXQsIHNldFJlbmRlckNoYXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzb2NrZXQgPSBpbyhCQUNLRU5EX1VSSSk7XHJcbiAgICAvLyBsaXN0ZW4gZm9yIHRoZSBuZXcgdXNlcnMgXHJcbiAgICBzb2NrZXQub24oJ3VzZXJzJywgKHsgdXNlcnMgfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgTmV3IGxpc3Qgb2YgdXNlcnMgJHtKU09OLnN0cmluZ2lmeSh1c2Vycyl9YCk7XHJcbiAgICB9KTtcclxuICB9LCBbdXNlcl0pO1xyXG4gIC8vIHNhdmUgdGhlIHVzZXIgYW5kIHNob3cgdGhlIGNoYXQgZmVhdHVyZSBcclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRSZW5kZXJDaGF0KHRydWUpO1xyXG4gICAgdXNlciA9IHtcclxuICAgICAgdWlkOiB1dWlkdjQoKSxcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gICAgc29ja2V0LmVtaXQoJ25ldyB1c2VyJywgeyB1c2VyIH0sIChib29sKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBUaGUgbmV3IHVzZXIgd2FzIGNyZWF0ZWQ6ICR7Ym9vbH1gKTtcclxuICAgIH0pO1xyXG4gICAgc2V0TmFtZSgnJyk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlbmRlckNoYXQpIHtcclxuICAgICAgcmV0dXJuIDxDaGF0IC8+XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPGZvcm0gb25TdWJtaXQ9e2UgPT4gb25TdWJtaXQoZSl9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXHJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudGVyIHRoZSBjaGF0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dXNlcnMubGVuZ3RoID4gMCAmJiB1c2Vycy5tYXAodXNlciA9PiA8bGkga2V5PXt1c2VyLnVpZH0+e3VzZXIubmFtZX08L2xpPil9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtyZW5kZXJDb250ZW50KCl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9