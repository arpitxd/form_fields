"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Image = _ref => {
  let {
    src,
    className,
    alt
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    className: "cds-image ".concat(className),
    alt: alt
  });
};

Image.propTypes = {
  src: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  alt: _propTypes.default.string.isRequired
};
var _default = Image;
exports.default = _default;