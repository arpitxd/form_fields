import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Text = ({
  id = '',
  className = '',
  children,
  transform,
  size = 'm',
  style = 'normal',
  color = 'black',
}) => {
  let caseClass = '';
  if (transform === 'upper') {
    caseClass = 'upper-case';
  } else if (transform === 'lower') {
    caseClass = 'lower-case';
  } else if (transform === 'capital') {
    caseClass = 'capitalize';
  }
  let fontSizeClass = 'size-medium';
  if (size === 's') {
    fontSizeClass = 'size-small';
  } else if (size === 'l') {
    fontSizeClass = 'size-large';
  }
  let fontWeightClass = 'weight-normal';
  if (style === 'medium') {
    fontWeightClass = 'weight-medium';
  } else if (style === 'bold') {
    fontWeightClass = 'weight-heavy';
  }

  return (
    <p
      className={`cds-text ${className}
       ${caseClass} ${fontSizeClass} ${fontWeightClass}`}
      id={id}
      style={{ color: color }}>
      {children}
    </p>
  );
};

Text.propTypes = {
  transform: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Text;
