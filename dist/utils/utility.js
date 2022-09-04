"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeScrollClsOnBody = exports.delayed = exports.addScrollClsOnBody = void 0;

require("core-js/modules/es.promise.js");

const delayed = async () => {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve('done');
    }, [5000]);
  });
  const response = await promise;
  return response;
};

exports.delayed = delayed;

const addScrollClsOnBody = () => {
  document.body.classList.add('scroll-disabled');
};

exports.addScrollClsOnBody = addScrollClsOnBody;

const removeScrollClsOnBody = () => {
  document.body.classList.remove('scroll-disabled');
};

exports.removeScrollClsOnBody = removeScrollClsOnBody;