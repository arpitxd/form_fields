import React, { useEffect } from "react";

import { addScrollClsOnBody, removeScrollClsOnBody } from "../../utils/utility";

import "./style.css";

const Loader = ({ closeLoader = () => {} }) => {
  useEffect(() => {
    addScrollClsOnBody();
    return () => {
      removeScrollClsOnBody();
      closeLoader();
    };
  }, [closeLoader]);

  return (
    <div className="display-flex loader-wrapper">
      <div className="loader" />
    </div>
  );
};

export default Loader;
