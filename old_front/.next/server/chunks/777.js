exports.id = 777;
exports.ids = [777];
exports.modules = {

/***/ 2777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wP": function() { return /* binding */ getPhotos; },
/* harmony export */   "mr": function() { return /* binding */ photosList; },
/* harmony export */   "Lx": function() { return /* binding */ lengthList; },
/* harmony export */   "vB": function() { return /* binding */ serverState; }
/* harmony export */ });
/* unused harmony exports photosSlice, setPhotosList, setServerState */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_requestHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8814);


const photosSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'photos',
  initialState: {
    photosList: [],
    lengthList: 0,
    serverState: true
  },
  reducers: {
    setPhotosList: (state, action) => {
      state.photosList = action.payload.photos;
      state.lengthList = action.payload.length;
      state.serverState = true;
    },
    setServerState: (state, action) => {
      state.serverState = action.payload;
    }
  }
});
const {
  setPhotosList,
  setServerState
} = photosSlice.actions;
const getPhotos = (page, token) => async dispatch => {
  try {
    const headers = {
      'x-access-token': token
    };
    const request = await (0,_utils_requestHandler__WEBPACK_IMPORTED_MODULE_1__/* .getRequest */ .A)('http://localhost:4000/photos/' + page, headers);
    dispatch(setPhotosList({
      photos: request.photos,
      length: request.maxSize
    }));
  } catch (e) {
    setTimeout(() => {
      dispatch(setServerState(false));
    }, 5000);
  }
};
const photosList = state => state.photos.photosList;
const lengthList = state => state.photos.lengthList;
const serverState = state => state.photos.serverState;
/* harmony default export */ __webpack_exports__["ZP"] = (photosSlice.reducer);

/***/ })

};
;