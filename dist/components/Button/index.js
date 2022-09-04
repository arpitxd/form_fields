"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const themeClassMapping = {
  peelGreen: 'peelGreen',
  white: 'white',
  transparent: 'transparent',
  orange: 'orange'
};

const Button = _ref => {
  let {
    onClick = () => {},
    className = '',
    id = '',
    children,
    theme,
    disabled
  } = _ref;
  const themeClass = themeClassMapping[theme] || 'orange';
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    className: "".concat(themeClass, " cds-button pointer ").concat(className),
    id: id,
    disabled: disabled
  }, children);
};

Button.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  id: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  theme: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
var _default = Button;
exports.default = _default;