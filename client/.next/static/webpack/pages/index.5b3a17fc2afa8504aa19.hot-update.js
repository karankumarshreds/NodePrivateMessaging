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

  // connect to the backend when page loads 
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // connect to the backend uri using socket 
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(BACKEND_URI);
    socket.emit('join', {
      name: 'Karan'
    }, function (_ref) {
      var error = _ref.error;
      console.log(error);
    }); // disconnect when component unmounts

    return function () {
      socket.emit('disconnect');
      socket.off();
      console.log('Disconnecting the room');
    };
  }, []); // function to send the message

  var sendMessage = function sendMessage(e) {
    e.preventDefault();
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
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Send message")));
};

_s(index, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0IiwiQkFDS0VORF9VUkkiLCJpbmRleCIsInVzZUVmZmVjdCIsImlvIiwiZW1pdCIsIm5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvZmYiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsTUFBSjtBQUNBLElBQUlDLFdBQVcsR0FBRyx1QkFBbEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBSCxVQUFNLEdBQUdJLHVEQUFFLENBQUNILFdBQUQsQ0FBWDtBQUNBRCxVQUFNLENBQUNLLElBQVAsQ0FBWSxNQUFaLEVBQW9CO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQXBCLEVBQXVDLGdCQUFlO0FBQUEsVUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3BEQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEtBRkQsRUFIYyxDQU1kOztBQUNBLFdBQU8sWUFBTTtBQUNYUCxZQUFNLENBQUNLLElBQVAsQ0FBWSxZQUFaO0FBQ0FMLFlBQU0sQ0FBQ1UsR0FBUDtBQUNBRixhQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEtBSkQ7QUFLRCxHQVpRLEVBWU4sRUFaTSxDQUFULENBRmtCLENBZWxCOztBQUNBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDs7QUFHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUU7QUFBTSxZQUFRLEVBQUUsa0JBQUFELENBQUM7QUFBQSxhQUFJRCxXQUFXLENBQUNDLENBQUQsQ0FBZjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGVBQVcsRUFBQyxjQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsQ0FGRixDQURGO0FBU0QsQ0E1QkQ7O0dBQU1WLEs7O0FBOEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YjNhMTdmYzJhZmE4NTA0YWExOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxubGV0IHNvY2tldDtcclxubGV0IEJBQ0tFTkRfVVJJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAvLyBjb25uZWN0IHRvIHRoZSBiYWNrZW5kIHdoZW4gcGFnZSBsb2FkcyBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB1cmkgdXNpbmcgc29ja2V0IFxyXG4gICAgc29ja2V0ID0gaW8oQkFDS0VORF9VUkkpO1xyXG4gICAgc29ja2V0LmVtaXQoJ2pvaW4nLCB7IG5hbWU6ICdLYXJhbicgfSwgKHsgZXJyb3IgfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuICAgIC8vIGRpc2Nvbm5lY3Qgd2hlbiBjb21wb25lbnQgdW5tb3VudHNcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5lbWl0KCdkaXNjb25uZWN0Jyk7XHJcbiAgICAgIHNvY2tldC5vZmYoKTtcclxuICAgICAgY29uc29sZS5sb2coJ0Rpc2Nvbm5lY3RpbmcgdGhlIHJvb20nKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgLy8gZnVuY3Rpb24gdG8gc2VuZCB0aGUgbWVzc2FnZVxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+U29ja2V0IGlvIHByaXZhdGUgbWVzc2FnaW5nPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gc2VuZE1lc3NhZ2UoZSl9PlxyXG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlR5cGUgbWVzc2FnZVwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZCBtZXNzYWdlPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==