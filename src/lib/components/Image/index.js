import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Image = ({ src, className, alt }) => {
  return <img src={src} className={`cds-image ${className}`} alt={alt}/>;
};
Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Image;
