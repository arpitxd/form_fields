"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useOnScreen = ref => {
  const [isIntersecting, setIntersecting] = (0, _react.useState)(false);
  const observer = (0, _react.useMemo)(() => new IntersectionObserver(_ref => {
    let [entry] = _ref;
    return setIntersecting(entry.isIntersecting);
  }), []);
  (0, _react.useEffect)(() => {
    observer.observe(ref.current); // Remove the observer as soon as the component is unmounted

    return () => {
      observer.disconnect();
    };
  }, [observer, ref]);
  return isIntersecting;
};

var _default = useOnScreen;
exports.default = _default;