import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const themeClassMapping = {
  peelGreen: 'peelGreen',
  white: 'white',
  transparent: 'transparent',
  orange: 'orange',
};

const Button = ({
  onClick = () => {},
  className = '',
  id = '',
  children,
  theme,
  disabled,
}) => {
  const themeClass = themeClassMapping[theme] || 'orange';
  return (
    <button
      onClick={onClick}
      className={`${themeClass} cds-button pointer ${className}`}
      id={id}
      disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
