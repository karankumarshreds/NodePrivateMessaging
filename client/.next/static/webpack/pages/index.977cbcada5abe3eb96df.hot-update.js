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
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldMessages), [data]);
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
  }, "Send message")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0IiwiQkFDS0VORF9VUkkiLCJpbmRleCIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsImFkZE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwiaW8iLCJvbiIsImRhdGEiLCJvbGRNZXNzYWdlcyIsImVtaXQiLCJvZmYiLCJjb25zb2xlIiwibG9nIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsTUFBSjtBQUNBLElBQUlDLFdBQVcsR0FBRyx1QkFBbEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNYQyxPQURXO0FBQUEsTUFDRkMsVUFERTs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFWEcsUUFGVztBQUFBLE1BRURDLFdBRkMsa0JBR2xCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQVIsVUFBTSxHQUFHUyx1REFBRSxDQUFDUixXQUFELENBQVgsQ0FGYyxDQUdkOztBQUNBRCxVQUFNLENBQUNVLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLFVBQUNDLElBQUQsRUFBVTtBQUNqQ0osaUJBQVcsQ0FBQyxVQUFBSyxXQUFXO0FBQUEsc0hBQVFBLFdBQVIsSUFBcUJELElBQXJCO0FBQUEsT0FBWixDQUFYO0FBQ0QsS0FGRCxFQUpjLENBT2Q7O0FBQ0EsV0FBTyxZQUFNO0FBQ1hYLFlBQU0sQ0FBQ2EsSUFBUCxDQUFZLFlBQVo7QUFDQWIsWUFBTSxDQUFDYyxHQUFQO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0QsS0FKRDtBQUtELEdBYlEsRUFhTixFQWJNLENBQVQsQ0FKa0IsQ0FrQmxCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FuQixVQUFNLENBQUNhLElBQVAsQ0FBWSxTQUFaLEVBQXVCO0FBQUVULGFBQU8sRUFBUEE7QUFBRixLQUF2QjtBQUNBQyxjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsR0FKRDs7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUU7QUFBTSxZQUFRLEVBQUUsa0JBQUFhLENBQUM7QUFBQSxhQUFJRCxXQUFXLENBQUNDLENBQUQsQ0FBZjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGVBQVcsRUFBQyxjQUFuQjtBQUNFLFNBQUssRUFBRWQsT0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQWMsQ0FBQztBQUFBLGFBQUliLFVBQVUsQ0FBQ2EsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLENBRkYsQ0FERjtBQVlELENBcENEOztHQUFNbkIsSzs7QUFzQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk3N2NiY2FkYTVhYmUzZWI5NmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxubGV0IHNvY2tldDtcclxubGV0IEJBQ0tFTkRfVVJJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBhZGRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB3aGVuIHBhZ2UgbG9hZHMgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbm5lY3QgdG8gdGhlIGJhY2tlbmQgdXJpIHVzaW5nIHNvY2tldCBcclxuICAgIHNvY2tldCA9IGlvKEJBQ0tFTkRfVVJJKTtcclxuICAgIC8vIGJyb2FkY2FzdCB0aGUgbWVzc2FnZXNcclxuICAgIHNvY2tldC5vbignbmV3IG1lc3NhZ2UnLCAoZGF0YSkgPT4ge1xyXG4gICAgICBhZGRNZXNzYWdlcyhvbGRNZXNzYWdlcyA9PiBbLi4ub2xkTWVzc2FnZXMsIGRhdGFdKTtcclxuICAgIH0pO1xyXG4gICAgLy8gZGlzY29ubmVjdCB3aGVuIGNvbXBvbmVudCBnZXRzIHVubW91bnRlZFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc29ja2V0LmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcclxuICAgICAgc29ja2V0Lm9mZigpO1xyXG4gICAgICBjb25zb2xlLmxvZygnRGlzY29ubmVjdGluZyB0aGUgcm9vbScpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICAvLyBmdW5jdGlvbiB0byBzZW5kIHRoZSBtZXNzYWdlXHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCB7IG1lc3NhZ2UgfSk7XHJcbiAgICBzZXRNZXNzYWdlKCcnKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+U29ja2V0IGlvIHByaXZhdGUgbWVzc2FnaW5nPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gc2VuZE1lc3NhZ2UoZSl9PlxyXG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlR5cGUgbWVzc2FnZVwiXHJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZCBtZXNzYWdlPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==