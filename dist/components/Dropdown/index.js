"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

var _Text = _interopRequireDefault(require("../Text"));

var _useOutsideClick = _interopRequireDefault(require("../../hooks/useOutsideClick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Dropdown = _ref => {
  let {
    options = [],
    className,
    label,
    selectedValue,
    onSelect = () => {}
  } = _ref;
  const dropDownRef = (0, _react.useRef)(null);
  const [displayedValue, setDisplayedValue] = (0, _react.useState)('');
  const isOutsideClicked = (0, _useOutsideClick.default)(dropDownRef);
  const [showOptions, setShowOptions] = (0, _react.useState)(false);

  const onSelectOption = selectedId => {
    onSelect(selectedId);
    setShowOptions(false);
  };

  (0, _react.useEffect)(() => {
    if (isOutsideClicked) {
      setShowOptions(false);
    }
  }, [isOutsideClicked]);

  const displayedSelectedValue = () => {
    options.filter(option => {
      if (option.value === selectedValue) {
        setDisplayedValue(option.title);
      }
    });
  };

  (0, _react.useEffect)(() => {
    displayedSelectedValue();
  }, [selectedValue, options]);

  const renderOption = option => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: option.value,
      className: "dropdown-option ".concat(selectedValue === option.value ? 'selected' : ''),
      id: option.value,
      onClick: () => onSelectOption(option.value)
    }, /*#__PURE__*/_react.default.createElement(_Text.default, null, option.title));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cds-dropdown-container ".concat(className),
    tabIndex: 0,
    ref: dropDownRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setShowOptions(true),
    className: 'dropdown-box'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "drop-down-placeholder"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, null, displayedValue || label)), /*#__PURE__*/_react.default.createElement("div", {
    className: "drop-down-arrow ".concat(showOptions ? 'opened' : 'closed')
  })), showOptions && (options === null || options === void 0 ? void 0 : options.length) && /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu-container"
  }, options.map(renderOption)));
};

Dropdown.propTypes = {
  options: _propTypes.default.array.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  selectedValue: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  label: _propTypes.default.string.isRequired
};
var _default = Dropdown;
exports.default = _default;