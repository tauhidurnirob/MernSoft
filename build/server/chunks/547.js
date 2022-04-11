exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 5897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Nav)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(3802);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
var external_react_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_);
;// CONCATENATED MODULE: ./public/mernSoftLogo.svg
/* harmony default export */ const mernSoftLogo = ({"src":"/_next/static/image/public/mernSoftLogo.17895b11455d5fc0d1e5b68843da4715.svg","height":105,"width":481});
;// CONCATENATED MODULE: ./public/navIcon/people.png
/* harmony default export */ const people = ({"src":"/_next/static/image/public/navIcon/people.15593cbf760e8e007e4e8793fbb51fdc.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAk0lEQVR42oXMsQ3CQAyFYUfKBCg7RIIBsgCF75iCOhvACpQotkSVBdjH3oMa/ig0ocGSddb3zhb1aIpFKz9VPFu82aLlFbxsUC168FE8KtfehcbqYtWyF4aBflXPPRfOxWmLw9cGKVN0dcodoYI3ddpCTxaLdQImW6Naruedd53HJRPCO1tH4MmnGZyVeTElk3/1AS1IZKamhwV2AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/navIcon/workspace.png
/* harmony default export */ const workspace = ({"src":"/_next/static/image/public/navIcon/workspace.4305035ca6c3d9363528b0be90e65210.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAkElEQVR42l2OOwqFMBREA9avdAE+sLJ2H/YmFoIrsHcDlpY2go0I7sxaKz9nIIIYOGSYnHuJufI8OKyNTmv/H6KrKAJDaGFC6g7nem7Rnc5N0BrKGULzOUghzNowQkwnuaFslJmOYZQp4eendqRNWZ3eZC5QeyFFSJXVwaKQQAYDrEyuyr5L3p8qoWKDKJ/+BkzqatmoigGGAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/navIcon/personalGrowth.png
/* harmony default export */ const personalGrowth = ({"src":"/_next/static/image/public/navIcon/personalGrowth.0d2b0509b2788aa382139836ef7d9de5.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAr0lEQVR42lWOMQoCMRBFR1gLS+0WwQOIhbDVZKLb2Ch4B72CNxBB+wS8gIhYi2C/eARPYekB1ldki/3wmWTe/ExEkIvWkSQNs8wFv8Z5C2q0uQtWCgJWFq2QRmngg+/ABa5c9McyKGHE5QzcpvRTg9W89qPfFw5d1owYGALH1Cug1ui/DA6EQ5aSO+CDuqG+CF0EASzn8qa5B96oS3wifWg+18MrGhOsyipc4KmIyB+YhEWInqKFcAAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Nav.js












const Link = (external_react_scroll_default()).Link;

const Nav = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: changeNavPosition,
    1: setChangeNavPosition
  } = (0,external_react_.useState)(false);

  const navbarPositionHandler = () => {
    if (window.scrollY >= 1) {
      setChangeNavPosition(true);
    } else {
      setChangeNavPosition(false);
    }
  };

  external_react_default().useEffect(() => {
    window.addEventListener('scroll', navbarPositionHandler);
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "relative",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: `bg-white ${changeNavPosition ? 'fixed' : 'sticky'} w-full z-10 top-0 text-bold`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "max-w-7xl mx-auto px-4 py-5",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-between h-16",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex-shrink-0",
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "text-3xl font-bold",
              onClick: () => external_react_scroll_.animateScroll.scrollToTop(),
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: mernSoftLogo,
                  alt: "MernSoft Logo",
                  className: "cursor-pointer",
                  width: "200",
                  height: "200"
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex items-center my-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "hidden md:block",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "ml-10 flex items-baseline space-x-4 font-bold lg:text-base text-xs",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Link, {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      className: "dropdown relative flex hover:text-primary px-2 py-2 cursor-pointer ",
                      children: ["About", /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronDownIcon */.v4q, {
                        className: "dropdown-arrow lg:w-7 lg:h-7 w-5 h-5 text-primary"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                        className: "dropdown-menu hidden absolute top-10 w-max rounded-lg shadow-default bg-white pt-2",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                            href: "/ourCompany",
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "flex  text-secondary py-4 px-6  whitespace-no-wrap",
                              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                                src: people,
                                alt: "img"
                              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "ml-2",
                                children: "Our Company"
                              })]
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                            href: "/howWeWork",
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "flex  text-secondary py-4 px-6  whitespace-no-wrap",
                              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                                src: workspace,
                                alt: "img"
                              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "ml-2",
                                children: "How We Work"
                              })]
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                            href: "/career",
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "flex  text-secondary py-4 px-6  whitespace-no-wrap",
                              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                                src: personalGrowth,
                                alt: "img"
                              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                                className: "ml-2",
                                children: [' ', "Career"]
                              })]
                            })
                          })
                        })]
                      })]
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Link, {
                    className: "hover:text-primary px-2 py-2 cursor-pointer",
                    to: "service-section",
                    offset: -200,
                    smooth: true,
                    duration: 1000,
                    children: "Services"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Link, {
                    className: "hover:text-primary px-2 py-2 cursor-pointer",
                    to: "langTool-section",
                    offset: -200,
                    smooth: true,
                    duration: 1000,
                    children: "Technologies"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Link, {
                    className: "hover:text-primary px-2 py-2 cursor-pointer ",
                    to: "portfolio-section",
                    offset: -200,
                    smooth: true,
                    duration: 1000,
                    children: "Portfolio"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Link, {
                    className: "hover:text-primary px-2 py-2 cursor-pointer",
                    to: "blog-section",
                    offset: -200,
                    smooth: true,
                    duration: 1000,
                    children: "Blog"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Link, {
                    className: "call-to-action cursor-pointer",
                    to: "contactUs-section",
                    offset: -200,
                    smooth: true,
                    duration: 1000,
                    children: "Contact Us"
                  })
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "-mr-2 flex md:hidden",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              onClick: () => setIsOpen(!isOpen),
              type: "button",
              className: "inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
              "aria-controls": "mobile-menu",
              "aria-expanded": "false",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "Open main menu"
              }), !isOpen ? /*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {
                className: "block h-6 w-6"
              }) : /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
                className: "block h-6 w-6"
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Transition, {
        show: isOpen,
        enter: "transition ease-out duration-100 transform",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "transition ease-in duration-75 transform",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: ref => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:hidden mb-10",
          id: "mobile-menu",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            ref: ref,
            className: "w-full h-full  space-y-1 sm:px-3 font-bold",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "absolute top-15 left-0 bg-white w-full px-5 pb-10 z-50 overflow-hidden",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Link, {
                href: "#",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "dropdown flex justify-between hover:text-primary px-3 py-2 text-base",
                  children: ["About", /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronDownIcon */.v4q, {
                    className: "dropdown-arrow lg:w-7 lg:h-7 w-6 h-6 text-primary"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "dropdown-menu hidden absolute top-15 my-8 w-11/12 rounded-lg shadow-default bg-white pt-2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/ourCompany",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          className: "flex text-secondary py-4 px-6  whitespace-no-wrap",
                          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                            src: people,
                            alt: "img"
                          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "ml-2",
                            children: "Our Company"
                          })]
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/howWeWork",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          className: "flex text-secondary py-4 px-6  whitespace-no-wrap",
                          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                            src: workspace,
                            alt: "img"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                            className: "ml-2",
                            children: [' ', "How We Work"]
                          })]
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: "/career",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          className: "flex text-secondary py-4 px-6  whitespace-no-wrap",
                          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                            src: personalGrowth,
                            alt: "img"
                          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "ml-2",
                            children: "Career"
                          })]
                        })
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
                to: "service-section",
                offset: -200,
                smooth: true,
                duration: 1000,
                className: "cursor-pointer",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: " hover:text-primary block px-3 py-2",
                  children: "Services"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
                to: "langTool-section",
                offset: -200,
                smooth: true,
                duration: 1000,
                className: "cursor-pointer",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "hover:text-primary block px-3 py-2",
                  children: "Technologies"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
                to: "portfolio-section",
                offset: -200,
                smooth: true,
                duration: 1000,
                className: "cursor-pointer",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "dropdown flex justify-between hover:text-primary  px-3 py-2",
                  children: "Portfolio"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
                to: "blog-section",
                offset: -200,
                smooth: true,
                duration: 1000,
                className: "cursor-pointer",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "hover:text-primary block px-3 pt-2 pb-6",
                  children: "Blog"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
                to: "contactUs-section",
                offset: -200,
                smooth: true,
                duration: 1000,
                className: "cursor-pointer",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "call-to-action",
                  children: "Contact Us"
                })
              })]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ const components_Nav = (Nav);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;