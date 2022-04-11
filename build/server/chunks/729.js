"use strict";
exports.id = 729;
exports.ids = [729];
exports.modules = {

/***/ 4729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ howWeWork_HeroSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/hero-howWeWork.svg
/* harmony default export */ const hero_howWeWork = ({"src":"/_next/static/image/public/hero-howWeWork.6024d31b36dbfc20a91a7b9cb0571647.svg","height":560,"width":750});
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
var external_react_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/about/howWeWork/HeroSection.js







const HeroSection = () => {
  const Link = (external_react_scroll_default()).Link;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "custom-container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col md:flex-row",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-1 my-auto",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "title",
          children: ["We are a Group of ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Telanted", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-primary",
            children: " Developers "
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex py-5",
          children: /*#__PURE__*/jsx_runtime_.jsx(Link, {
            className: "call-to-action font-bold cursor-pointer",
            to: "contactUs-section",
            offset: -200,
            smooth: true,
            duration: 1000,
            children: "Schedule A Free Consultation"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex-1 pl-10 py-10",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "mx-auto",
          src: hero_howWeWork,
          alt: "img"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {})]
  });
};

/* harmony default export */ const howWeWork_HeroSection = (HeroSection);

/***/ })

};
;