"use strict";
exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 2567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ career_CareerDestination)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./components/about/career/CareerDestinationData.js

const CareerDestinationDataOne = [{
  id: (0,external_uuid_.v4)(),
  title: 'Not a job, but a journey',
  imgUrl: '/careerDestination/item-one.png',
  description: 'We become so invested and focused on the destination that we often neglect the bits in the middle. The moments that really matter..'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Commitment to Excellence',
  imgUrl: '/careerDestination/item-two.png',
  description: "When you are committed to excellence: You pay attention to detail. You are consistent. You are focused on the customer's happiness. You think like your customer and deliver what they want."
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Appreciation & Motivation',
  imgUrl: '/careerDestination/item-three.png',
  description: 'Motivation Through Appreciation: The Science Behind a Happy Workplace Forget costly company trips and lavish awards ceremonies. It’s possible to motivate your employees at the cost of only a few words.  '
}];
const CareerDestinationDataTwo = [{
  id: (0,external_uuid_.v4)(),
  title: 'Rewards & Benefits',
  imgUrl: '/careerDestination/item-four.png',
  description: 'Rewards: Are unlikely to appear in a contract (bonuses may be an exception). Benefits: Are likely to appear in a contract (bonuses may be an exception).'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Focus on Quality',
  imgUrl: '/careerDestination/item-five.png',
  description: 'Setting high quality standards and striving for continuous improvement and quality assurance.'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Guidance & Opportunities',
  imgUrl: '/careerDestination/item-six.png',
  description: 'Career guidance is the guidance given to individuals to help them acquire the knowledge, information, skills, and experience necessary to identify career options.'
}];
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/about/career/CareerDestination.js






const CareerDestination = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "mt-20",
    style: {
      backgroundColor: '#EBEFFD',
      backgroundSize: 'cover'
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "custom-container py-14",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        className: "title text-center",
        children: ["Your next career destination ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-primary",
          children: "MernSoft"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "custom-paragraph text-center pt-5",
        children: ["We are focussed on some values that drive our daily ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "decisions, develop our relationships, and guide our strategy."]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col md:flex-row text-center mt-10",
          children: CareerDestinationDataOne.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex-1 shadow-xl rounded-2xl p-5 m-5",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: "w-1/4 m-auto",
              src: item.imgUrl,
              alt: "img",
              width: "100",
              height: "100"
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "title text-xl py-5",
              children: item.title
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "custom-paragraph",
              children: item.description
            })]
          }, item.id))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col md:flex-row text-center",
          children: CareerDestinationDataTwo.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex-1 shadow-xl rounded-2xl p-5 m-5",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: "w-1/4 m-auto",
              src: item.imgUrl,
              alt: "img",
              width: "100",
              height: "100"
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "title text-xl py-5",
              children: item.title
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "custom-paragraph",
              children: item.description
            })]
          }, item.id))
        })]
      })]
    })
  });
};

/* harmony default export */ const career_CareerDestination = (CareerDestination);

/***/ })

};
;