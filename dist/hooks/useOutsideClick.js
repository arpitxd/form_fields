"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useOutsideClick = ref => {
  const [isOutsideClicked, setIsOutsideClicked] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const handleClickOutside = event => {
      var _ref$current;

      if (ref !== null && ref !== void 0 && ref.current && !(ref !== null && ref !== void 0 && (_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(event.target))) {
        setIsOutsideClicked(true);
      } else {
        setIsOutsideClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return isOutsideClicked;
};

var _default = useOutsideClick;
exports.default = _default;