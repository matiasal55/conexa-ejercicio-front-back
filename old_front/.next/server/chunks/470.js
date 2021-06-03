exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 3470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fv": function() { return /* binding */ setExistsToken; },
/* harmony export */   "f6": function() { return /* binding */ setRegister; },
/* harmony export */   "x4": function() { return /* binding */ login; },
/* harmony export */   "a$": function() { return /* binding */ registerUser; },
/* harmony export */   "vT": function() { return /* binding */ recoveryData; },
/* harmony export */   "kS": function() { return /* binding */ logout; },
/* harmony export */   "Tb": function() { return /* binding */ existsToken; },
/* harmony export */   "r": function() { return /* binding */ token; },
/* harmony export */   "ZW": function() { return /* binding */ userData; },
/* harmony export */   "vB": function() { return /* binding */ serverState; },
/* harmony export */   "uu": function() { return /* binding */ registerState; },
/* harmony export */   "_": function() { return /* binding */ loadingState; }
/* harmony export */ });
/* unused harmony exports userSlice, setUserData, setServerState, endSession, setLoading */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_requestHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8814);


const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'user',
  initialState: {
    token: null,
    userData: {},
    existsToken: null,
    serverState: true,
    register: false,
    loading: false
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload.userData;
      state.token = action.payload.token;
      state.existsToken = true;
      state.serverState = true;
      state.register = false;
    },
    setExistsToken: (state, action) => {
      state.existsToken = action.payload;
    },
    endSession: state => {
      state.token = null;
      state.existsToken = null;
    },
    setServerState: (state, action) => {
      state.serverState = action.payload;
    },
    setRegister: (state, action) => {
      state.register = action.payload;
    },
    setLoading: state => {
      state.loading = !state.loading;
    }
  }
});
const {
  setUserData,
  setServerState,
  setExistsToken,
  endSession,
  setRegister,
  setLoading
} = userSlice.actions;
const login = data => async dispatch => {
  try {
    dispatch(setLoading());
    const request = await (0,_utils_requestHandler__WEBPACK_IMPORTED_MODULE_1__/* .postRequest */ .j)('http://localhost:4000/users/login', data);
    dispatch(setLoading());
    dispatch(setUserData({
      userData: request.user,
      token: request.token
    }));
  } catch (e) {
    if (e.response && e.response.status == 400) dispatch(setExistsToken(false));else dispatch(setServerState(false));
    dispatch(setLoading());
  }
};
const registerUser = data => async dispatch => {
  try {
    dispatch(setLoading());
    const request = await (0,_utils_requestHandler__WEBPACK_IMPORTED_MODULE_1__/* .postRequest */ .j)('http://localhost:4000/users/register', data);
    dispatch(setLoading());
    dispatch(setRegister(true));
  } catch (e) {
    if (e.response && e.response.status == 400) dispatch(setExistsToken(false));else dispatch(setServerState(false));
    dispatch(setLoading());
  }
};
const recoveryData = token => async dispatch => {
  try {
    const headers = {
      'x-access-token': token
    };
    const request = await (0,_utils_requestHandler__WEBPACK_IMPORTED_MODULE_1__/* .getRequest */ .A)('http://localhost:4000/users/recoveryData', headers);
    dispatch(setUserData({
      userData: request.user,
      token: request.token
    }));
  } catch (e) {
    dispatch(setServerState(false));
  }
};
const logout = () => dispatch => {
  dispatch(endSession());
};
const existsToken = state => state.user.existsToken;
const token = state => state.user.token;
const userData = state => state.user.userData;
const serverState = state => state.user.serverState;
const registerState = state => state.user.register;
const loadingState = state => state.user.loading;
/* harmony default export */ __webpack_exports__["ZP"] = (userSlice.reducer);

/***/ }),

/***/ 8814:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ getRequest; },
/* harmony export */   "j": function() { return /* binding */ postRequest; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getRequest = async (route, headers = {}) => {
  const request = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(route, {
    headers
  });
  return request.data;
};
const postRequest = async (route, data) => {
  const request = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(route, data);
  return request.data;
};

/***/ })

};
;