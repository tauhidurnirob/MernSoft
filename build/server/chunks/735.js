"use strict";
exports.id = 735;
exports.ids = [735];
exports.modules = {

/***/ 4735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ howWeWork_LangToolSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
;// CONCATENATED MODULE: ./components/about/howWeWork/LangToolData.js

const LangToolData = [[{
  id: (0,external_uuid_.v4)(),
  firstTitle: 'Illustrator',
  firstImgUrl: '/technologies/design/adobe_illustrator-icon.svg',
  secondTitle: 'Figma',
  secondImgUrl: '/technologies/design/figma-icon.svg',
  thirdTitle: 'Invision App',
  thirdImgUrl: '/technologies/design/invisionapp-icon.svg',
  fourthTitle: 'Sketch',
  fourthImgUrl: '/technologies/design/sketchapp-icon.svg',
  fifthTitle: 'Webflow',
  fifthImgUrl: '/technologies/design/webflow-icon.svg',
  sixthTitle: 'Canva',
  sixthImgUrl: '/technologies/design/canva-icon.svg',
  rightSection: '/technologies/design/designMockup.png'
}], [{
  id: (0,external_uuid_.v4)(),
  firstTitle: 'React Js',
  firstImgUrl: '/technologies/front-end/reactjs.svg',
  secondTitle: 'Vue Js',
  secondImgUrl: '/technologies/front-end/vuejs.svg',
  thirdTitle: 'Angular Js',
  thirdImgUrl: '/technologies/front-end/angular.svg',
  fourthTitle: 'JavaScript',
  fourthImgUrl: '/technologies/front-end/javascript-icon.svg',
  fifthTitle: 'Tailwind CSS',
  fifthImgUrl: '/technologies/front-end/tailwindcss.svg',
  sixthTitle: 'Sass',
  sixthImgUrl: '/technologies/front-end/sass.svg',
  rightSection: '/technologies/front-end/front-end-mockup.png'
}], [{
  id: (0,external_uuid_.v4)(),
  firstTitle: 'Node Js',
  firstImgUrl: '/technologies/back-end/nodejs-icon.svg',
  secondTitle: 'MongoDB',
  secondImgUrl: '/technologies/back-end/mongodb-icon.svg',
  thirdTitle: 'PHP',
  thirdImgUrl: '/technologies/back-end/php-icon.svg',
  fourthTitle: 'Laravel',
  fourthImgUrl: '/technologies/back-end/laravel-icon.svg',
  fifthTitle: 'MySql',
  fifthImgUrl: '/technologies/back-end/mysql-icon.svg',
  sixthTitle: 'Github',
  sixthImgUrl: '/technologies/back-end/github.svg',
  rightSection: '/technologies/back-end/back-end-mockup.png'
}], [{
  id: (0,external_uuid_.v4)(),
  firstTitle: 'Flutter',
  firstImgUrl: '/technologies/moblieImages/flutterio-icon.svg',
  secondTitle: 'Java',
  secondImgUrl: '/technologies/moblieImages/java-icon.svg',
  thirdTitle: 'Kotlin',
  thirdImgUrl: '/technologies/moblieImages/kotlinlang-icon.svg',
  fourthTitle: 'React Native',
  fourthImgUrl: '/technologies/moblieImages/reactjs-icon.svg',
  fifthTitle: 'Swift',
  fifthImgUrl: '/technologies/moblieImages/swift-icon.svg',
  sixthTitle: 'Golang',
  sixthImgUrl: '/technologies/moblieImages/golang-icon.svg',
  rightSection: '/technologies/moblieImages/mobileMockup.png'
}]];
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/about/howWeWork/SingleLangTool.js





const SingleLangTool = ({
  data,
  cardIndex
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: data[cardIndex].map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "custom-container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-1",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "flex",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex-1",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "flex custom-paragraph my-5",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: item.firstImgUrl,
                  alt: "img",
                  width: "50",
                  height: "50"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "my-auto ml-3",
                  children: item.firstTitle
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "flex custom-paragraph my-5",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: item.secondImgUrl,
                  alt: "img",
                  width: "50",
                  height: "50"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "my-auto ml-3",
                  children: item.secondTitle
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "flex custom-paragraph my-5",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: item.thirdImgUrl,
                  alt: "img",
                  width: "50",
                  height: "50"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "my-auto ml-3",
                  children: item.thirdTitle
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex-1",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "flex custom-paragraph my-5",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: item.fourthImgUrl,
                  alt: "img",
                  width: "50",
                  height: "50"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "my-auto ml-3",
                  children: item.fourthTitle
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "flex custom-paragraph my-5",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: item.fifthImgUrl,
                  alt: "img",
                  width: "50",
                  height: "50"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "my-auto ml-3",
                  children: item.fifthTitle
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "flex custom-paragraph my-5",
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: item.sixthImgUrl,
                  alt: "img",
                  width: "50",
                  height: "50"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "my-auto ml-3",
                  children: item.sixthTitle
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-1 md:mt-0 mt-10",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-4/5 mx-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: item.rightSection,
              alt: "img",
              width: "400",
              height: "400"
            })
          })
        })]
      })
    }, item.id))
  });
};

/* harmony default export */ const howWeWork_SingleLangTool = (SingleLangTool);
;// CONCATENATED MODULE: ./public/languageTools/left-side.png
/* harmony default export */ const left_side = ({"src":"/_next/static/image/public/languageTools/left-side.c6b6217001f52d11ebe4567e77a00668.png","height":683,"width":442,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAm0lEQVR42mMAgf///ws9+fpirfuVuToQgZcMLK++fek58/H7/0n3d6WCBX/9ONb19vOJo8+///9y5Ml5MajWfxbn7l34tv38wf////93Bwuu2PRf4tWHH7c//fgGEtQGC9au/R987/yLe5+2bvn/5+2HJLDg9///Nb+8fDvn88kz7168//D/6YePyxhg4P///3zPP35pf//lRwEATKtirDUTfNMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/languageTools/right-side.png
/* harmony default export */ const right_side = ({"src":"/_next/static/image/public/languageTools/right-side.55b2bf866df7f4f0c44dd0a31264ad23.png","height":691,"width":402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAkElEQVR42mOAgQNvrxc+/vauBS5w5t0D1SvPb/w+9vTscrjg////hT5++fL9/YfTF/78utgDE8w4dfrM/4uXTv/5//9rOFjwz9//Hk+fP/t//dajJ/ee/5eDqUz7/+fn//fv/j6fuPpnCcPDhy9m37//7P+/70Dw6duad1/+ezC8fPUx88nTt3N+/P8vC7MYAPPdYO2ArWvUAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/about/howWeWork/LangToolSection.js









const LangToolSection = () => {
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)('FirstCard');
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: "langTool-section",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "custom-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "title text-center",
        children: "Languages, tools and frameworks"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "custom-paragraph mt-5 text-center",
        children: "Whatever the field or platform, we make it happen"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col lg:flex-row mt-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-auto",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col md:flex-row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex-1",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "mx-auto",
                src: left_side,
                alt: "img"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex-1 details md:mr-5 mr-0 my-32 text-right",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "title",
                children: "Front-end"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "custom-paragraph pt-3 ",
                children: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly."
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-auto md:block hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bg-primary w-1 h-5/6 my-14 rounded-full"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-auto",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col-reverse md:flex-row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex-1 details md:ml-5 ml-0 my-32",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "title",
                children: "Back-end"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "custom-paragraph pt-3",
                children: "Back end development refers to the server side of an application and everything that communicates between the database and the browser. Back end Development refers to the server side of development."
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex-1",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "mx-auto",
                src: right_side,
                alt: "img"
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "langTool-section mt-14",
        children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
          className: "mb-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "flex flex-wrap",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => setActive('FirstCard'),
              className: `lang-navbar-btn ml-0 ${active === 'FirstCard' ? 'active' : ''}`,
              type: "button",
              children: "Design"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => setActive('SecondCard'),
              className: `lang-navbar-btn ${active === 'SecondCard' ? 'active' : ''}`,
              type: "button",
              children: "Front-end"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => setActive('ThirdCard'),
              className: `lang-navbar-btn ${active === 'ThirdCard' ? 'active' : ''}`,
              type: "button",
              children: "Back-end"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => setActive('FourthCard'),
              className: `lang-navbar-btn ${active === 'FourthCard' ? 'active' : ''}`,
              type: "button",
              children: "Mobile"
            })]
          })
        }), active === 'FirstCard' && /*#__PURE__*/jsx_runtime_.jsx(howWeWork_SingleLangTool, {
          data: LangToolData,
          cardIndex: 0
        }), active === 'SecondCard' && /*#__PURE__*/jsx_runtime_.jsx(howWeWork_SingleLangTool, {
          data: LangToolData,
          cardIndex: 1
        }), active === 'ThirdCard' && /*#__PURE__*/jsx_runtime_.jsx(howWeWork_SingleLangTool, {
          data: LangToolData,
          cardIndex: 2
        }), active === 'FourthCard' && /*#__PURE__*/jsx_runtime_.jsx(howWeWork_SingleLangTool, {
          data: LangToolData,
          cardIndex: 3
        })]
      })]
    })
  });
};

/* harmony default export */ const howWeWork_LangToolSection = (LangToolSection);

/***/ })

};
;