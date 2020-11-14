webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "E:\\Linux\\socket-private-message\\client\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var socket;
var BACKEND_URI = 'http://localhost:3001';

var index = function index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState[0],
      setMessage = _useState[1]; // connect to the backend when page loads 


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // connect to the backend uri using socket 
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(BACKEND_URI); // disconnect when component gets unmounted

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
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Socket io private messaging"), __jsx("form", {
    onSubmit: function onSubmit(e) {
      return sendMessage(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Send message")));
};

_s(index, "3v4ozrfWvlmZ97O5zgyhgDZKC+M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0IiwiQkFDS0VORF9VUkkiLCJpbmRleCIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJpbyIsImVtaXQiLCJvZmYiLCJjb25zb2xlIiwibG9nIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsTUFBSjtBQUNBLElBQUlDLFdBQVcsR0FBRyx1QkFBbEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNYQyxPQURXO0FBQUEsTUFDRkMsVUFERSxpQkFFbEI7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBTixVQUFNLEdBQUdPLHVEQUFFLENBQUNOLFdBQUQsQ0FBWCxDQUZjLENBR2Q7O0FBQ0EsV0FBTyxZQUFNO0FBQ1hELFlBQU0sQ0FBQ1EsSUFBUCxDQUFZLFlBQVo7QUFDQVIsWUFBTSxDQUFDUyxHQUFQO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0QsS0FKRDtBQUtELEdBVFEsRUFTTixFQVRNLENBQVQsQ0FIa0IsQ0FhbEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxLQUFDLENBQUNDLGNBQUY7QUFDQWQsVUFBTSxDQUFDUSxJQUFQLENBQVksU0FBWixFQUF1QjtBQUFFSixhQUFPLEVBQVBBO0FBQUYsS0FBdkI7QUFDQUMsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNELEdBSkQ7O0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVFO0FBQU0sWUFBUSxFQUFFLGtCQUFBUSxDQUFDO0FBQUEsYUFBSUQsV0FBVyxDQUFDQyxDQUFELENBQWY7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxlQUFXLEVBQUMsY0FBbkI7QUFDRSxTQUFLLEVBQUVULE9BRFQ7QUFFRSxZQUFRLEVBQUUsa0JBQUFTLENBQUM7QUFBQSxhQUFJUixVQUFVLENBQUNRLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixDQUZGLENBREY7QUFZRCxDQS9CRDs7R0FBTWQsSzs7QUFpQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjExZTA4NWU2ZjI0NzdiOTRlMDUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxubGV0IHNvY2tldDtcclxubGV0IEJBQ0tFTkRfVVJJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgLy8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB3aGVuIHBhZ2UgbG9hZHMgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbm5lY3QgdG8gdGhlIGJhY2tlbmQgdXJpIHVzaW5nIHNvY2tldCBcclxuICAgIHNvY2tldCA9IGlvKEJBQ0tFTkRfVVJJKTtcclxuICAgIC8vIGRpc2Nvbm5lY3Qgd2hlbiBjb21wb25lbnQgZ2V0cyB1bm1vdW50ZWRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5lbWl0KCdkaXNjb25uZWN0Jyk7XHJcbiAgICAgIHNvY2tldC5vZmYoKTtcclxuICAgICAgY29uc29sZS5sb2coJ0Rpc2Nvbm5lY3RpbmcgdGhlIHJvb20nKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgLy8gZnVuY3Rpb24gdG8gc2VuZCB0aGUgbWVzc2FnZVxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlJywgeyBtZXNzYWdlIH0pO1xyXG4gICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlNvY2tldCBpbyBwcml2YXRlIG1lc3NhZ2luZzwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IHNlbmRNZXNzYWdlKGUpfT5cclxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJUeXBlIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgbWVzc2FnZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=