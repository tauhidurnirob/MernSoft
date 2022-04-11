"use strict";
exports.id = 895;
exports.ids = [895];
exports.modules = {

/***/ 4895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_ContactUs)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(3802);
// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__(5230);
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_);
;// CONCATENATED MODULE: ./public/contactUs-leaf.png
/* harmony default export */ const contactUs_leaf = ({"src":"/_next/static/image/public/contactUs-leaf.1f8188b5a06dd39e8a4cbcf1a0c2113b.png","height":297,"width":392,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AVZ+I0P49v3sEBMD3GVFafXH2cgIdo6s+sGah/7h5+cAAa+/eagOCwz75erozAoICez7+v3vFRMR+iUfHtAeFxrsAaGzbL/3+PnnExAQEfj5+t3z9PbjKyQkDhMPELYOEQbLAcfPj2Hk5uzW/f/8IAIE/zAKCArjEAwO1P7+/xgNDgj5AcvUkj77+f35BAQD/+rn9OMTFgoq/Pz94Pr7/P7//wD6AaeteyAfIRQq8PD0xfX2+fwFBQP8UEeB+c7WlFAXGQ+2005qJIPTFacAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ContactUs.js








const ContactUs = () => {
  const {
    0: value,
    1: onChange
  } = (0,external_react_.useState)(20);

  function sendEmail(e, data) {
    e.preventDefault();
    external_emailjs_com_default().sendForm('service_6yunhqk', 'template_wy23h1o', e.target, 'user_0T6wFOexOIYlKLhKKeSGX').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
    console.log(data);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "contactUs-section",
    className: "relative",
    style: {
      backgroundImage: 'url(/contactUs-bg.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute top-0 left-0 z-1",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-1/2",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: contactUs_leaf,
          alt: "img"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "custom-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col sm:flex-row z-100",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-1 my-36",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            className: "text-3xl text-secondary my-10",
            children: ["Got an", ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "text-primary",
              children: ["amazing business ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " idea ?"]
            }), ' ', "Let", "'s", " bring it to the ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " market together."]
          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-3xl text-secondary",
            children: "Get in Touch With us!"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "info mt-14",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "title flex",
              children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* PhoneIcon */.qWc, {
                className: "w-10 mr-3"
              }), " +1(800) 352 - 9138"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "title flex  mt-5",
              children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* MailIcon */.bV6, {
                className: "w-10 mr-3"
              }), ' ', "info@mernsoft.com"]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-1 my-auto mr-0 sm:ml-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            onSubmit: sendEmail,
            id: "contact-form",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "my-10 pt-0",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "Full Name",
                className: "contactUs-input",
                name: "name",
                required: true
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "my-10 pt-0",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "Email Address",
                className: "contactUs-input",
                name: "user_email",
                required: true
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "my-10 pt-0",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                placeholder: "Phone Number",
                className: "contactUs-input",
                name: "phone"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "my-10 pt-0",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "slider-parent",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "buble border-2 border-secondary rounded-md p-1",
                  style: {
                    left: `${value}%`
                  },
                  children: ["$", value, "k"]
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  id: "slider",
                  className: "outline-none h-1 bg-secondary appearance-none rounded-full transition duration-500 ease-in-out",
                  type: "range",
                  min: "20",
                  max: "900",
                  value: value,
                  list: "newlist",
                  style: {
                    width: '100%'
                  },
                  onChange: ({
                    target: {
                      value: radius
                    }
                  }) => {
                    onChange(radius);
                  },
                  name: "radius",
                  required: true
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("datalist", {
                  id: "newlist",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("option", {}, 1), /*#__PURE__*/jsx_runtime_.jsx("option", {}, 2), /*#__PURE__*/jsx_runtime_.jsx("option", {}, 3)]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex mt-2 justify-between text-secondary",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "value-left",
                  children: "$20k"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "value-right",
                  children: "$900k"
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "my-10 pt-0",
              children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                type: "text",
                placeholder: "Project Description",
                className: "contactUs-input",
                name: "project_description",
                required: true
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex bg-secondary text-white justify-center rounded-full px-12 mx-14 my-10 pt-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                className: "py-3 bg-secondary text-lg font-bold cursor-pointer",
                type: "submit",
                value: "Submit",
                name: "submit"
              }), ' ', /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronRightIcon */.XCv, {
                className: "w-5 ml-3 my-auto bg-white text-secondary rounded-full   border-2 border-secondary"
              })]
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const components_ContactUs = (ContactUs);

/***/ })

};
;