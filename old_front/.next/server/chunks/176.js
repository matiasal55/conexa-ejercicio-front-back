exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 2580:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(311);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./features/userSlice.js
var userSlice = __webpack_require__(3470);
;// CONCATENATED MODULE: ./components/Navbar.js









const Navbar = () => {
  const {
    0: isActive,
    1: setIsActive
  } = (0,external_react_.useState)(false);
  const [cookies, setCookies, removeCookies] = (0,external_react_cookie_.useCookies)(['loremSession']);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();
  const cookieSession = cookies.loremSession;

  const endSession = () => {
    dispatch((0,userSlice/* logout */.kS)());
    removeCookies('loremSession');
    router.push('/');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: "navbar is-warning",
    role: "navigation",
    "aria-label": "main navigation",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "navbar-brand",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "navbar-item",
          children: "Lorem Ipsum"
        })
      }), cookieSession ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        role: "button",
        onClick: () => setIsActive(!isActive),
        className: `navbar-burger burger${isActive ? ' is-active' : ''}`,
        "aria-label": "menu",
        "aria-expanded": "false",
        "data-target": "navbarBasicExample",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          "aria-hidden": "true"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          "aria-hidden": "true"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          "aria-hidden": "true"
        })]
      }) : null]
    }), cookieSession ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "navbarBasicExample",
      className: `navbar-menu${isActive ? ' is-active' : ''}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "navbar-start",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/posts",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "navbar-item",
            children: "Posts"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/photos",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "navbar-item",
            children: "Photos"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "navbar-end",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "navbar-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "buttons",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "button is-info",
              onClick: endSession,
              children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: "Logout"
              })
            })
          })
        })
      })]
    }) : null]
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Layout.js







const Layout = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [props.title, " - Front"]
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
        integrity: "sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container is-fluid my-6",
      children: props.children
    })]
  });
};

/* harmony default export */ var components_Layout = (Layout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;