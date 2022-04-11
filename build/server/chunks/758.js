"use strict";
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 2758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage_HeroSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
var external_react_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_);
;// CONCATENATED MODULE: ./public/banner-illiustration.svg
/* harmony default export */ const banner_illiustration = ({"src":"/_next/static/image/public/banner-illiustration.3f779eacf7531f85529702c5a5f5d0e4.svg","height":585,"width":700});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/homepage/HeroSection.js







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
          children: ["Leading", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-primary",
            children: [' ', "Software Design & Development", ' ']
          }), "Company Trusted By Brands Accross the Globe"]
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-paragraphColor font-bold py-5",
          children: "Providing custom software development and IT outsourcing services. Our developers build custom software for individuals, startups, and small to medium business."
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
          src: banner_illiustration,
          alt: "img"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {})]
  });
};

/* harmony default export */ const homepage_HeroSection = (HeroSection);

/***/ })

};
;