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
      console.log('APPENDING', data);
      addMessages(function (oldMessages) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldMessages), [data]);
      });
      console.log(messages);
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
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Socket io private messaging"), __jsx("form", {
    onSubmit: function onSubmit(e) {
      return sendMessage(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0IiwiQkFDS0VORF9VUkkiLCJpbmRleCIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsImFkZE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwiaW8iLCJvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib2xkTWVzc2FnZXMiLCJlbWl0Iiwib2ZmIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsTUFBSjtBQUNBLElBQUlDLFdBQVcsR0FBRyx1QkFBbEI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNYQyxPQURXO0FBQUEsTUFDRkMsVUFERTs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFWEcsUUFGVztBQUFBLE1BRURDLFdBRkMsa0JBR2xCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQVIsVUFBTSxHQUFHUyx1REFBRSxDQUFDUixXQUFELENBQVgsQ0FGYyxDQUdkOztBQUNBRCxVQUFNLENBQUNVLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLFVBQUNDLElBQUQsRUFBVTtBQUNqQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkYsSUFBekI7QUFDQUosaUJBQVcsQ0FBQyxVQUFBTyxXQUFXO0FBQUEsc0hBQVFBLFdBQVIsSUFBcUJILElBQXJCO0FBQUEsT0FBWixDQUFYO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxRQUFaO0FBQ0QsS0FKRCxFQUpjLENBU2Q7O0FBQ0EsV0FBTyxZQUFNO0FBQ1hOLFlBQU0sQ0FBQ2UsSUFBUCxDQUFZLFlBQVo7QUFDQWYsWUFBTSxDQUFDZ0IsR0FBUDtBQUNBSixhQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELEtBSkQ7QUFLRCxHQWZRLEVBZU4sRUFmTSxDQUFULENBSmtCLENBb0JsQjs7QUFDQSxNQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsVUFBTSxDQUFDZSxJQUFQLENBQVksU0FBWixFQUF1QjtBQUFFWCxhQUFPLEVBQVBBO0FBQUYsS0FBdkI7QUFDQUMsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNELEdBSkQ7O0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVFO0FBQU0sWUFBUSxFQUFFLGtCQUFBYSxDQUFDO0FBQUEsYUFBSUQsV0FBVyxDQUFDQyxDQUFELENBQWY7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxlQUFXLEVBQUMsY0FBbkI7QUFDRSxTQUFLLEVBQUVkLE9BRFQ7QUFFRSxZQUFRLEVBQUUsa0JBQUFjLENBQUM7QUFBQSxhQUFJYixVQUFVLENBQUNhLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixDQUZGLENBREY7QUFZRCxDQXRDRDs7R0FBTW5CLEs7O0FBd0NTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZGExMjljNzJmY2VkZTFjNDZkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmxldCBzb2NrZXQ7XHJcbmxldCBCQUNLRU5EX1VSSSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnO1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlcywgYWRkTWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGNvbm5lY3QgdG8gdGhlIGJhY2tlbmQgd2hlbiBwYWdlIGxvYWRzIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25uZWN0IHRvIHRoZSBiYWNrZW5kIHVyaSB1c2luZyBzb2NrZXQgXHJcbiAgICBzb2NrZXQgPSBpbyhCQUNLRU5EX1VSSSk7XHJcbiAgICAvLyBicm9hZGNhc3QgdGhlIG1lc3NhZ2VzXHJcbiAgICBzb2NrZXQub24oJ25ldyBtZXNzYWdlJywgKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0FQUEVORElORycsIGRhdGEpO1xyXG4gICAgICBhZGRNZXNzYWdlcyhvbGRNZXNzYWdlcyA9PiBbLi4ub2xkTWVzc2FnZXMsIGRhdGFdKTtcclxuICAgICAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBkaXNjb25uZWN0IHdoZW4gY29tcG9uZW50IGdldHMgdW5tb3VudGVkXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZW1pdCgnZGlzY29ubmVjdCcpO1xyXG4gICAgICBzb2NrZXQub2ZmKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0aW5nIHRoZSByb29tJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIC8vIGZ1bmN0aW9uIHRvIHNlbmQgdGhlIG1lc3NhZ2VcclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIHsgbWVzc2FnZSB9KTtcclxuICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5Tb2NrZXQgaW8gcHJpdmF0ZSBtZXNzYWdpbmc8L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVHlwZSBtZXNzYWdlXCJcclxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwic291cmNlUm9vdCI6IiJ9