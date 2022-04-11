"use strict";
exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 9760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ourCompany_ImageGallery)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/imageGallery/item-one.jpg
/* harmony default export */ const item_one = ({"src":"/_next/static/image/public/imageGallery/item-one.51b7b826e3136a37c931836dfc0fc5d7.jpg","height":684,"width":432,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAHf/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAH//xAAdEAACAgEFAAAAAAAAAAAAAAACAwEFEgAEFGFj/9oACAEBAAE/AE7a9uQ5CHppvHCCM+yjHX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAgf/aAAgBAwEBPwCP/9k="});
;// CONCATENATED MODULE: ./public/imageGallery/item-two.jpg
/* harmony default export */ const item_two = ({"src":"/_next/static/image/public/imageGallery/item-two.1546f711bfc8dac6658b7d010290775d.jpg","height":331,"width":561,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAE//xAAdEAABBAIDAAAAAAAAAAAAAAABAgMREgATBBQh/9oACAEBAAE/AOFt7YJeNWXjZIEbJlPuf//EABcRAAMBAAAAAAAAAAAAAAAAAAACITH/2gAIAQIBAT8AaYf/xAAWEQEBAQAAAAAAAAAAAAAAAAABIQD/2gAIAQMBAT8AKXf/2Q=="});
;// CONCATENATED MODULE: ./public/imageGallery/item-three.jpg
/* harmony default export */ const item_three = ({"src":"/_next/static/image/public/imageGallery/item-three.503285dbecb33ddcfc35083b6ca6fa49.jpg","height":385,"width":626,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAC//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAH//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMEBSIAEqH/2gAIAQEAAT8ArZe1Jja8eoR5ZdVVQoZCw7ec/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAISIXL/2gAIAQIBAT8AS5aP/8QAGREAAQUAAAAAAAAAAAAAAAAAAgABESFh/9oACAEDAQE/ADpg0ZX/2Q=="});
;// CONCATENATED MODULE: ./public/imageGallery/item-four.jpg
/* harmony default export */ const item_four = ({"src":"/_next/static/image/public/imageGallery/item-four.1ca83018a36783352f65c5705cca0012.jpg","height":625,"width":434,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAEf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAC//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAF//xAAcEAACAgIDAAAAAAAAAAAAAAABEQIDAAQFE1H/2gAIAQEAAT8As5iVmvp2RkjKt9aESAfWw8//xAAXEQEAAwAAAAAAAAAAAAAAAAABACEi/9oACAECAQE/AHNE/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAhMf/aAAgBAwEBPwAvQn//2Q=="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/about/ourCompany/ImageGallery.js









const ImageGallery = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "custom-container my-14 overflow-hidden",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col sm:flex-row gap-6 mx-auto",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item-one",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ml-auto w-full sm:w-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: item_one,
              alt: "img"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item-three mt-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-full sm:w-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              alt: "img",
              src: item_two
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item-two",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-full",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: "w-full",
              src: item_three,
              alt: "img"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item-four mt-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-full sm:w-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: item_four,
              alt: "img"
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const ourCompany_ImageGallery = (ImageGallery);

/***/ })

};
;