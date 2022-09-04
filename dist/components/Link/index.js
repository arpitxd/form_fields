"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Link = _ref => {
  let {
    children,
    to
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: to,
    className: "cds-anchor"
  }, children);
};

Link.propTypes = {
  to: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired
};
var _default = Link;
exports.default = _default;