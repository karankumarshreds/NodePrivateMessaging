webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "E:\\Linux\\socket-private-message\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var socket;
var BACKEND_URI = 'http://localhost:3001';

var index = function index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      message = _useState[0],
      setMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      messages = _useState2[0],
      addMessages = _useState2[1]; // connect to the backend when page loads 


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // connect to the backend uri using socket 
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(BACKEND_URI); // broadcast the messages

    socket.on('new message', function (data) {
      addMessages(function (oldMessages) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldMessages), ["<li>".concat(data, "</li>")]);
      });
    }); // disconnect when component gets unmounted

    return function () {
      socket.emit('disconnect');
      socket.off();
      console.log('Disconnecting the room');
    };
  }, []); // function to send the message

  var sendMessage = function sendMessage(e) {
    e.preventDefault();
    socket.emit('message', {
      message: message
    });
    setMessage('');
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Socket io private messaging"), __jsx("form", {
    onSubmit: function onSubmit(e) {
      return sendMessage(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("input", {
    placeholder: "Type message",
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Send message")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, messages));
};

_s(index, "B73JP59DcoNNHOChEopWHJb16LM=");

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0IiwiQkFDS0VORF9VUkkiLCJpbmRleCIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsImFkZE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwiaW8iLCJvbiIsImRhdGEiLCJvbGRNZXNzYWdlcyIsImVtaXQiLCJvZmYiLCJjb25zb2xlIiwibG9nIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsTUFBSjtBQUNBLElBQUlDLFdBQVcsR0FBRyx1QkFBbEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNYQyxPQURXO0FBQUEsTUFDRkMsVUFERTs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFWEcsUUFGVztBQUFBLE1BRURDLFdBRkMsa0JBR2xCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQVIsVUFBTSxHQUFHUyx1REFBRSxDQUFDUixXQUFELENBQVgsQ0FGYyxDQUdkOztBQUNBRCxVQUFNLENBQUNVLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLFVBQUNDLElBQUQsRUFBVTtBQUNqQ0osaUJBQVcsQ0FBQyxVQUFBSyxXQUFXO0FBQUEsc0hBQVFBLFdBQVIsa0JBQTRCRCxJQUE1QjtBQUFBLE9BQVosQ0FBWDtBQUNELEtBRkQsRUFKYyxDQU9kOztBQUNBLFdBQU8sWUFBTTtBQUNYWCxZQUFNLENBQUNhLElBQVAsQ0FBWSxZQUFaO0FBQ0FiLFlBQU0sQ0FBQ2MsR0FBUDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEtBSkQ7QUFLRCxHQWJRLEVBYU4sRUFiTSxDQUFULENBSmtCLENBa0JsQjs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsVUFBTSxDQUFDYSxJQUFQLENBQVksU0FBWixFQUF1QjtBQUFFVCxhQUFPLEVBQVBBO0FBQUYsS0FBdkI7QUFDQUMsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNELEdBSkQ7O0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVFO0FBQU0sWUFBUSxFQUFFLGtCQUFBYSxDQUFDO0FBQUEsYUFBSUQsV0FBVyxDQUFDQyxDQUFELENBQWY7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxlQUFXLEVBQUMsY0FBbkI7QUFDRSxTQUFLLEVBQUVkLE9BRFQ7QUFFRSxZQUFRLEVBQUUsa0JBQUFjLENBQUM7QUFBQSxhQUFJYixVQUFVLENBQUNhLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixDQUZGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixRQURILENBVEYsQ0FERjtBQWVELENBdkNEOztHQUFNSixLOztBQXlDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjQ2MDlhN2JjYWU0NDEwN2E4YjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5sZXQgc29ja2V0O1xyXG5sZXQgQkFDS0VORF9VUkkgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZXMsIGFkZE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyBjb25uZWN0IHRvIHRoZSBiYWNrZW5kIHdoZW4gcGFnZSBsb2FkcyBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB1cmkgdXNpbmcgc29ja2V0IFxyXG4gICAgc29ja2V0ID0gaW8oQkFDS0VORF9VUkkpO1xyXG4gICAgLy8gYnJvYWRjYXN0IHRoZSBtZXNzYWdlc1xyXG4gICAgc29ja2V0Lm9uKCduZXcgbWVzc2FnZScsIChkYXRhKSA9PiB7XHJcbiAgICAgIGFkZE1lc3NhZ2VzKG9sZE1lc3NhZ2VzID0+IFsuLi5vbGRNZXNzYWdlcywgYDxsaT4ke2RhdGF9PC9saT5gXSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGRpc2Nvbm5lY3Qgd2hlbiBjb21wb25lbnQgZ2V0cyB1bm1vdW50ZWRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5lbWl0KCdkaXNjb25uZWN0Jyk7XHJcbiAgICAgIHNvY2tldC5vZmYoKTtcclxuICAgICAgY29uc29sZS5sb2coJ0Rpc2Nvbm5lY3RpbmcgdGhlIHJvb20nKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgLy8gZnVuY3Rpb24gdG8gc2VuZCB0aGUgbWVzc2FnZVxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlJywgeyBtZXNzYWdlIH0pO1xyXG4gICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlNvY2tldCBpbyBwcml2YXRlIG1lc3NhZ2luZzwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IHNlbmRNZXNzYWdlKGUpfT5cclxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJUeXBlIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgbWVzc2FnZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWVzc2FnZXN9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=