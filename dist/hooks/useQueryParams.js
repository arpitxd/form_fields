"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _queryString = _interopRequireDefault(require("query-string"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useQueryParams = () => {
  var _useLocation;

  const searchParams = (_useLocation = (0, _reactRouterDom.useLocation)()) === null || _useLocation === void 0 ? void 0 : _useLocation.search;
  const [params, setParams] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    setParams(_queryString.default.parse(searchParams));
  }, [searchParams]);
  return params;
};

var _default = useQueryParams;
exports.default = _default;