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
      setMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      messages = _useState2[0],
      addMessages = _useState2[1]; // connect to the backend when page loads 


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // connect to the backend uri using socket 
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(BACKEND_URI); // add new message to broadcast the messages
    // disconnect when component gets unmounted

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
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Socket io private messaging"), __jsx("form", {
    onSubmit: function onSubmit(e) {
      return sendMessage(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0IiwiQkFDS0VORF9VUkkiLCJpbmRleCIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsImFkZE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwiaW8iLCJlbWl0Iiwib2ZmIiwiY29uc29sZSIsImxvZyIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQUlBLE1BQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUcsdUJBQWxCOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxFQUFELENBRHBCO0FBQUEsTUFDWEMsT0FEVztBQUFBLE1BQ0ZDLFVBREU7O0FBQUEsbUJBRWNGLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRVhHLFFBRlc7QUFBQSxNQUVEQyxXQUZDLGtCQUdsQjs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0FSLFVBQU0sR0FBR1MsdURBQUUsQ0FBQ1IsV0FBRCxDQUFYLENBRmMsQ0FHZDtBQUNBOztBQUNBLFdBQU8sWUFBTTtBQUNYRCxZQUFNLENBQUNVLElBQVAsQ0FBWSxZQUFaO0FBQ0FWLFlBQU0sQ0FBQ1csR0FBUDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEtBSkQ7QUFLRCxHQVZRLEVBVU4sRUFWTSxDQUFULENBSmtCLENBZWxCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FoQixVQUFNLENBQUNVLElBQVAsQ0FBWSxTQUFaLEVBQXVCO0FBQUVOLGFBQU8sRUFBUEE7QUFBRixLQUF2QjtBQUNBQyxjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0QsR0FKRDs7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUU7QUFBTSxZQUFRLEVBQUUsa0JBQUFVLENBQUM7QUFBQSxhQUFJRCxXQUFXLENBQUNDLENBQUQsQ0FBZjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLGVBQVcsRUFBQyxjQUFuQjtBQUNFLFNBQUssRUFBRVgsT0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQVcsQ0FBQztBQUFBLGFBQUlWLFVBQVUsQ0FBQ1UsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLENBRkYsQ0FERjtBQVlELENBakNEOztHQUFNaEIsSzs7QUFtQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMzODA4YjhjMTMxMjU1OGUyNmIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxubGV0IHNvY2tldDtcclxubGV0IEJBQ0tFTkRfVVJJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBhZGRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB3aGVuIHBhZ2UgbG9hZHMgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbm5lY3QgdG8gdGhlIGJhY2tlbmQgdXJpIHVzaW5nIHNvY2tldCBcclxuICAgIHNvY2tldCA9IGlvKEJBQ0tFTkRfVVJJKTtcclxuICAgIC8vIGFkZCBuZXcgbWVzc2FnZSB0byBicm9hZGNhc3QgdGhlIG1lc3NhZ2VzXHJcbiAgICAvLyBkaXNjb25uZWN0IHdoZW4gY29tcG9uZW50IGdldHMgdW5tb3VudGVkXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZW1pdCgnZGlzY29ubmVjdCcpO1xyXG4gICAgICBzb2NrZXQub2ZmKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0aW5nIHRoZSByb29tJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIC8vIGZ1bmN0aW9uIHRvIHNlbmQgdGhlIG1lc3NhZ2VcclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIHsgbWVzc2FnZSB9KTtcclxuICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5Tb2NrZXQgaW8gcHJpdmF0ZSBtZXNzYWdpbmc8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVHlwZSBtZXNzYWdlXCJcclxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwic291cmNlUm9vdCI6IiJ9