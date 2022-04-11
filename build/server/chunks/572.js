"use strict";
exports.id = 572;
exports.ids = [572];
exports.modules = {

/***/ 9572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ourCompany_Achievements)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./components/about/ourCompany/AchievementsData.js

const AchievementsData = [{
  id: (0,external_uuid_.v4)(),
  imageUrl: '/achievementsIcon/achieve-one.png',
  title: 'Increased Response Time',
  className: 'card-container h-full bg-white m-3 p-5 rounded-xl mt-52'
}, {
  id: (0,external_uuid_.v4)(),
  imageUrl: '/achievementsIcon/achieve-two.png',
  title: ' Client Retention Rate',
  className: 'card-container h-full bg-white m-3 p-5 rounded-xl mt-36'
}, {
  id: (0,external_uuid_.v4)(),
  imageUrl: '/achievementsIcon/achieve-three.png',
  title: 'Faster Delivery Time',
  className: 'card-container h-full bg-white m-3 p-5 rounded-xl mt-24'
}, {
  id: (0,external_uuid_.v4)(),
  imageUrl: '/achievementsIcon/achieve-four.png',
  title: 'Increased Client Satisfaction',
  className: 'card-container h-full bg-white m-3 p-3 mr-0 rounded-xl'
}];
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/about/ourCompany/Achievements.js






const Achievements = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "my-10",
    style: {
      backgroundImage: 'url(/achievements-bg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "custom-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-auto md:flex-1 md:my-auto mt-14 mr-0 lg:mr-10",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            className: "title",
            children: ["Our", /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-primary",
              children: " Achievements"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-paragraphColor font-bold py-5",
            children: "Our source of motivation is customer satisfaction. Delivering business solutions that facilitate digital transformation and amazing results is what we strive for, here at MernSoft."
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-auto md:flex-1  mb-14 md:my-14",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex justify-center flex-wrap lg:flex-nowrap",
            children: AchievementsData.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: item.className,
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "mx-auto w-18 h-18",
                src: item.imageUrl,
                width: "100",
                height: "100",
                alt: "icon"
              }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "mt-3 w-min text-secondary text-xl font-bold",
                children: item.title
              })]
            }, item.id))
          })
        })]
      })
    })
  });
};

/* harmony default export */ const ourCompany_Achievements = (Achievements);

/***/ })

};
;