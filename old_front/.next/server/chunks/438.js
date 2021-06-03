exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 2438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jq": function() { return /* binding */ getPosts; },
/* harmony export */   "ky": function() { return /* binding */ postsList; },
/* harmony export */   "vB": function() { return /* binding */ serverState; }
/* harmony export */ });
/* unused harmony exports postsSlice, setPostsList, setServerState, lengthList */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_requestHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8814);


const postsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'posts',
  initialState: {
    postsList: [],
    serverState: true
  },
  reducers: {
    setPostsList: (state, action) => {
      state.postsList = action.payload;
      state.serverState = true;
    },
    setServerState: (state, action) => {
      state.serverState = action.payload;
    }
  }
});
const {
  setPostsList,
  setServerState
} = postsSlice.actions;
const getPosts = token => async dispatch => {
  try {
    const headers = {
      'x-access-token': token
    };
    const request = await (0,_utils_requestHandler__WEBPACK_IMPORTED_MODULE_1__/* .getRequest */ .A)('http://localhost:4000/posts', headers);
    dispatch(setPostsList(request));
  } catch (e) {
    setTimeout(() => {
      dispatch(setServerState(false));
    }, 5000);
  }
};
const postsList = state => state.posts.postsList;
const lengthList = state => state.posts.lengthList;
const serverState = state => state.posts.serverState;
/* harmony default export */ __webpack_exports__["ZP"] = (postsSlice.reducer);

/***/ })

};
;