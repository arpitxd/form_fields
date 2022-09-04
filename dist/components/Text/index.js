"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Text = _ref => {
  let {
    id = '',
    className = '',
    children,
    transform,
    size = 'm',
    style = 'normal',
    color = 'black'
  } = _ref;
  let caseClass = '';

  if (transform === 'upper') {
    caseClass = 'upper-case';
  } else if (transform === 'lower') {
    caseClass = 'lower-case';
  } else if (transform === 'capital') {
    caseClass = 'capitalize';
  }

  let fontSizeClass = 'size-medium';

  if (size === 's') {
    fontSizeClass = 'size-small';
  } else if (size === 'l') {
    fontSizeClass = 'size-large';
  }

  let fontWeightClass = 'weight-normal';

  if (style === 'medium') {
    fontWeightClass = 'weight-medium';
  } else if (style === 'bold') {
    fontWeightClass = 'weight-heavy';
  }

  return /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(className, "\n       ").concat(caseClass, " ").concat(fontSizeClass, " ").concat(fontWeightClass),
    id: id,
    style: {
      color: color
    }
  }, children);
};

Text.propTypes = {
  transform: _propTypes.default.string,
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  size: _propTypes.default.string,
  style: _propTypes.default.string,
  color: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
var _default = Text;
exports.default = _default;