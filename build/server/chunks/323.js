"use strict";
exports.id = 323;
exports.ids = [323];
exports.modules = {

/***/ 6323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ourCompany_HeroSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
var external_react_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/ourCompany-heroSection-object.png
/* harmony default export */ const ourCompany_heroSection_object = ({"src":"/_next/static/image/public/ourCompany-heroSection-object.68c6e31121b885dd707befd1ab1a2ded.png","height":332,"width":402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/AfT0+VEGBft3BQYLZcbO6w4cEv0zHiAYkvTwCSf/Aj/wAdPQ5EP3+syG9v0l3szS9OgpKBMUyNP102JMrnoWFNuTAfL//wCZotSSCwL8bQP27gAQGTEABxIMAOzixKr+10JyAS0AbDNTiFKfIyUWLQr/8vv9Ai3/BxAKBtzX0KG7a6+TAcrAAB3D1aeL+PoYVwD88/wLEhr/AwUGBeLd2IqLgVZ6AfPzU4vFuCxKZ1UM1UQAGz34APj47gDj1Q4AF9CpKaaXAXUA2ET+Gu61+gvuBAb9DP8ABAAA+wP3Agj2D/gE+AhCXhhsVJmuA/kAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/about/ourCompany/HeroSection.js







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
          children: ["Best", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-primary",
            children: [' ', "Software Development", ' ']
          }), "Industry around the world"]
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-paragraphColor font-bold py-5",
          children: "We offer value-added digital transformation services and innovations across all verticals."
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
        style: {
          backgroundImage: 'url(/ourCompany-heroSection-bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex justify-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: ourCompany_heroSection_object,
            alt: "img"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {})]
  });
};

/* harmony default export */ const ourCompany_HeroSection = (HeroSection);

/***/ })

};
;