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
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Socket io private messaging"), __jsx("form", {
    onSubmit: function onSubmit(e) {
      return sendMessage(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("input", {
    placeholder: "Type message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0IiwiQkFDS0VORF9VUkkiLCJpbmRleCIsInVzZUVmZmVjdCIsImlvIiwiZW1pdCIsIm5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvZmYiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsTUFBSjtBQUNBLElBQUlDLFdBQVcsR0FBRyx1QkFBbEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBSCxVQUFNLEdBQUdJLHVEQUFFLENBQUNILFdBQUQsQ0FBWDtBQUNBRCxVQUFNLENBQUNLLElBQVAsQ0FBWSxNQUFaLEVBQW9CO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQXBCLEVBQXVDLGdCQUFlO0FBQUEsVUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3BEQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEtBRkQsRUFIYyxDQU1kOztBQUNBLFdBQU8sWUFBTTtBQUNYUCxZQUFNLENBQUNLLElBQVAsQ0FBWSxZQUFaO0FBQ0FMLFlBQU0sQ0FBQ1UsR0FBUDtBQUNBRixhQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEtBSkQ7QUFLRCxHQVpRLEVBWU4sRUFaTSxDQUFULENBRmtCLENBZ0JsQjs7QUFDQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVFO0FBQU0sWUFBUSxFQUFFLGtCQUFBRCxDQUFDO0FBQUEsYUFBSUQsV0FBVyxDQUFDQyxDQUFELENBQWY7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxlQUFXLEVBQUMsY0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLENBRkYsQ0FERjtBQVNELENBN0JEOztHQUFNVixLOztBQStCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGYwOGY4OWMxYmI4NGQ3ZmE4MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmxldCBzb2NrZXQ7XHJcbmxldCBCQUNLRU5EX1VSSSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgLy8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB3aGVuIHBhZ2UgbG9hZHMgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbm5lY3QgdG8gdGhlIGJhY2tlbmQgdXJpIHVzaW5nIHNvY2tldCBcclxuICAgIHNvY2tldCA9IGlvKEJBQ0tFTkRfVVJJKTtcclxuICAgIHNvY2tldC5lbWl0KCdqb2luJywgeyBuYW1lOiAnS2FyYW4nIH0sICh7IGVycm9yIH0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNjb25uZWN0IHdoZW4gY29tcG9uZW50IHVubW91bnRzXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZW1pdCgnZGlzY29ubmVjdCcpO1xyXG4gICAgICBzb2NrZXQub2ZmKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0aW5nIHRoZSByb29tJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBmdW5jdGlvbiB0byBzZW5kIHRoZSBtZXNzYWdlXHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5Tb2NrZXQgaW8gcHJpdmF0ZSBtZXNzYWdpbmc8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVHlwZSBtZXNzYWdlXCIgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwic291cmNlUm9vdCI6IiJ9