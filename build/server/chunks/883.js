"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 4883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage_BenefitSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./components/homepage/BenefitsData.js

const Benefits = [{
  id: (0,external_uuid_.v4)(),
  imageUrl: '/benefitsIons/smile.png',
  title: 'We Listen & Then Interpret',
  description: 'We help brainstorm and document your requirements via focussed discussions before crafting a tailored execution plan for your application development project so that our solution delivers measurable value to your target audience.'
}, {
  id: (0,external_uuid_.v4)(),
  imageUrl: '/benefitsIons/quick.png',
  title: 'We Deliver On Time  and within Budget',
  description: 'We have the brightest minds working at our app development company in Dhaka Bangladesh. Our developers have expertise in coding a web app or creating a marketing campaign. We work smart, fast and deliver projects on time and under your budget.'
}, {
  id: (0,external_uuid_.v4)(),
  imageUrl: '/benefitsIons/chat.png',
  title: 'We focus on your profitability & scalability',
  description: "MernSoft brings together Bangladesh's top engineering and business talent under one roof to deliver exceptional services. These innovative minds have one mission - to build scalable solutions for your business that drive profitability and growth."
}];
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/homepage/BenefitSection.js






const BenefitSection = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "custom-container py-10  my-10",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        backgroundImage: 'url(/benefits-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "title py-10 text-center ",
        children: "Benefits"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col md:flex-row",
        children: Benefits.map(benefit => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-1 bg-white shadow-default m-5 p-10 rounded-3xl",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: benefit.imageUrl,
            className: "w-28",
            width: "100",
            height: "100",
            alt: "img"
          }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-2xl title py-8",
            children: benefit.title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-paragraphColor font-bold",
            children: benefit.description
          })]
        }, benefit.id))
      })]
    })
  });
};

/* harmony default export */ const homepage_BenefitSection = (BenefitSection);

/***/ })

};
;