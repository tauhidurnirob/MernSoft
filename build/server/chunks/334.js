"use strict";
exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 2334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage_DevelopmentProcess)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(3802);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./components/homepage/ProcessData.js

const ProcessData = [{
  id: (0,external_uuid_.v4)(),
  title: 'Idea Generation',
  description: 'Our experts will connect with you to know how your product will be designed. We do proper planning & project estimations to provide Non Disclosure Agreement (NDA), business proposal, product canvas in this stage.'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Design & Development',
  description: 'In design development, the schematic plans and elevations are reviewed, revised and expanded to incorporate all the details and specifications required for construction. Project components are looked at to the smallest detail. These include: Interior and exterior building materials and finishe'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Testing & Development',
  description: 'Development testing (DevTest) is an approach in software development that aims to bring the development and testing phases closer together. In traditional software development, development and testing are two separate siloed functions.'
}, {
  id: (0,external_uuid_.v4)(),
  title: 'Marketing & Maintenance',
  description: 'Maintenance marketing is when your organization reaches out to its customers on a regular basis beyond sales calls and problem solving. It is important to build several maintenance strategies into your weekly and monthly marketing activities. Connecting with your existing customers is like discovering gold.'
}];
;// CONCATENATED MODULE: ./public/we-turn-one.png
/* harmony default export */ const we_turn_one = ({"src":"/_next/static/image/public/we-turn-one.b3778751e6c9cd29e2ad2ec08780c266.png","height":495,"width":288,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAo0lEQVR42gVAOw4BURS9Z3J9EoYRJoSYRiU2QGsFVqi2AoVKQSdEQSMIEZmIxl/Mm3cEr3k/+lW7SiSpIERo1IhqbIWwRHgNeToeVJHKkXBgE2kincVwNKEzGC2x2p3lYQhkPMnWAuh4upaE35SCV5T3+yNuKina67RYc4nvZsbn16Je9qnefQFnH9K4AXKNNvPmB51snybwr1opxXRvF9BG5g+JVUwnpgU7AAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/we-turn-two.png
/* harmony default export */ const we_turn_two = ({"src":"/_next/static/image/public/we-turn-two.d395f17d65269eef1c53d103d6b0b877.png","height":552,"width":702,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AeLi4fjg3NcHHR4j/wwPEQD69/kB/Pv5//jx7wH09fH5AeLi4P/k4N3/HR4jAezw8/8O+vABBwX+APz/A//16eYBAZ+Yk/4KBgQBLzk//+nk5gANAvQBDBIW/9/m6wHl4+L/AU4xJf7p+wABZmhv/yUoKQDo7fABGxcO/+XUzgHClnf/AaiOf//f/Bn/CQoOAUE6Jv/k4c0BBgUYAA4IBP/An4kBAdTGw/jV4OYHBgoI/zArKgD18b8B/u8E/+TV2QGfsrj5kJZovIpA0lYAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/we-turn-three.png
/* harmony default export */ const we_turn_three = ({"src":"/_next/static/image/public/we-turn-three.cc64046eb83329dfadcdf2555a66e0fa.png","height":493,"width":291,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR4nAVAPcsBcQD//57n1JVzdyzeFUkxoZRS8jIwYFO+jC/BRopvYVZeJpKMJhksLnWIO/cTFpultd3tpeVqzXAkCPPxsJEplKi4ZSbiSXjfX8rWC8hVK871fEGlXGf6H/BpEuEKxRhUZDGcjIRHU3k8HARa3R41VRHpfFaY5pOqeQHGs7HzfH+gWwYV24DxcojpoM/59sSYLiMV9ROUgGKtaXXaDUkPhJjkDdG/u/0DFhNLVw0qm2QAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/homepage/DevelopmentProcess.js










const DevelopmentProcess = () => {
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
    className: "custom-container my-10",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col md:flex-row",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-1",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "title",
          children: ["We Turn An Idea ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Into", ' ', /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-primary",
            children: " Smart Software"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-paragraphColor font-bold py-5",
          children: "We build amazing Web & eCommerce solution, Custom software for Accounts, HRM & more. ... Transform your ideas into custom business applications."
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cored-section my-10 ",
          children: ProcessData.map((item, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "processes p-5 my-5 shadow-default bg-white rounded-2xl",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex justify-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "text-secondary font-bold text-xl",
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => toggle(index),
                children: isOpen === index ? /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronDownIcon */.v4q, {
                  className: "heroIcon"
                }) : /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronRightIcon */.XCv, {
                  className: "heroIcon"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-paragraphColor font-bold pt-3",
              children: isOpen === index ? item.description : null
            })]
          }, index))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex-1 m-auto",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex-1 m-5 mb-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "mb-5 w-56 float-right",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: we_turn_one,
                alt: "img"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: we_turn_two,
              alt: "img"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex-1 relative",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "absolute bottom-0",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: we_turn_three,
                  alt: "img"
                })
              })
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const homepage_DevelopmentProcess = (DevelopmentProcess);

/***/ })

};
;