"use strict";
exports.id = 700;
exports.ids = [700];
exports.modules = {

/***/ 700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ourCompany_FreqAskQuestion)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(3802);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./components/about/ourCompany/FreqAskQuestionData.js

const FreqAskQuestionData = [{
  id: (0,external_uuid_.v4)(),
  title: 'Why should we use MernSoft over another agence?',
  description: 'We are a team and we respect, care & trust each other. This allows us to deliver complex app projects. Our team has years of experience in developing all kinds of applications.'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Can you build apps for both iOS & Android?',
  description: 'Yes, most of the apps we develop support both iOS and Android mobile platforms. We use development frameworks like React and React native to develop applications for both platforms.'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Do you provide ongoin support and updates?',
  description: 'Yes, we offer a proper consistent and reliable level of support and maintenance of the solutions our team provides.'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'What can I expect from your technical support?',
  description: 'Our technical support team handles just about everything from app optimization to resolving user complaints. They regularly update the app and provide bug fixes via patches.'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Why should we choose MernSoft?',
  description: 'MernSoft has maintained an excellent track record by serving hundreds of clients all over the globe with top-notch digital solutions over years. It is why we are known as one of the leaders when it comes to software development.'
}];
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/about/ourCompany/FreqAskQuestion.js






const FreqAskQuestion = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(null);

  const toggle = index => {
    if (isOpen === index) {
      return setIsOpen(null);
    }

    setIsOpen(index);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "mt-10",
    style: {
      backgroundImage: 'url(/faq-bg.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "custom-container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        className: "title text-center my-10",
        children: ["Frequently ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Asked ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-primary",
          children: "Question"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cored-section my-14 mx-auto md:w-2/3 w-3/3",
        children: FreqAskQuestionData.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "processes p-5 my-5 bg-white rounded-2xl",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "text-secondary font-bold text-xl",
              children: item.title
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "transition-all duration-1000",
              onClick: () => toggle(index),
              children: isOpen === index ? /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronDownIcon */.v4q, {
                className: "heroIcon"
              }) : /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronRightIcon */.XCv, {
                className: "heroIcon"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "transition-all duration-1000 text-paragraphColor font-bold pt-3",
            children: isOpen === index ? item.description : null
          })]
        }, item.id))
      })]
    })
  });
};

/* harmony default export */ const ourCompany_FreqAskQuestion = (FreqAskQuestion);

/***/ })

};
;