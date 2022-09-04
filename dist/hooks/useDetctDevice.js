"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useDetectDevice = () => {
  var _window;

  const [isMobileDevice, setIsMobileDevice] = (0, _react.useState)(((_window = window) === null || _window === void 0 ? void 0 : _window.innerWidth) <= 768);

  const handleWindowResize = () => {
    var _window2;

    const mobiledevice = ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.innerWidth) <= 768;

    if (mobiledevice !== isMobileDevice) {
      setIsMobileDevice(mobiledevice);
    }
  };

  (0, _react.useEffect)(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return isMobileDevice;
};

var _default = useDetectDevice;
exports.default = _default;