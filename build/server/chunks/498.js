"use strict";
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 2498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ career_HiringSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./components/about/career/HiringSectionData.js

const HiringDataOne = [{
  id: (0,external_uuid_.v4)(),
  title: 'Frontend Developer',
  imgUrl: '/hiringIcons/item-one.png',
  description: 'Web-R&D Full-time Intermediate'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Backend Developer',
  imgUrl: '/hiringIcons/item-three.png',
  description: 'Web-R&D Full-time Intermediate'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'iOS App Developer',
  imgUrl: '/hiringIcons/item-five.png',
  description: 'App-R&D Full-time Senior'
}];
const HiringDataTwo = [{
  id: (0,external_uuid_.v4)(),
  title: 'UI/UX Designer',
  imgUrl: '/hiringIcons/item-two.png',
  description: 'Design- R&D Full-time Senior'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Android App Developer',
  imgUrl: '/hiringIcons/item-four.png',
  description: 'Server-R&D Full-time Senior'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'DevOps Lead',
  imgUrl: '/hiringIcons/item-six.png',
  description: 'Design-R&D Full-time Senior'
}];
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/about/career/HiringSection.js






const HiringSection = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "hiring-section",
    className: "my-10",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "custom-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "title text-center",
        children: "We\u2019re Hiring!"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "custom-paragraph text-center pt-5",
        children: ["A career with MernSoft can offer genuine benefits to you in all terms. If you also want to join our ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " team; check some current openings and apply. We welcome experienced candidates only."]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-10",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col md:flex-row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex-1",
            children: HiringDataOne.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex shadow-default rounded-2xl p-5 m-5",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "my-auto ",
                src: item.imgUrl,
                alt: "img",
                width: "100",
                height: "100"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "description ml-5 my-auto",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                  className: "title text-xl",
                  children: item.title
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "custom-paragraph mt-3",
                  children: item.description
                })]
              })]
            }, item.id))
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex-1",
            children: HiringDataTwo.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex shadow-default rounded-2xl p-5 m-5",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "my-auto ",
                src: item.imgUrl,
                alt: "img",
                width: "100",
                height: "100"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "description ml-5 my-auto",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                  className: "title text-xl",
                  children: item.title
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "custom-paragraph mt-3",
                  children: item.description
                })]
              })]
            }, item.id))
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const career_HiringSection = (HiringSection);

/***/ })

};
;