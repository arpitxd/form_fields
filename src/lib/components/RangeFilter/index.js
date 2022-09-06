import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Range, getTrackBackground } from 'react-range';
import './style.css';
const RangeFilter = ({ onChange, step, min, max }) => {
  const [values, setValues] = useState([18, 50]);
  const background = getTrackBackground({
    values,
    colors: ['#ccc', '#000', '#ccc'],
    min,
    max,
  });
  return (
    <Range
      values={values}
      step={step}
      min={min}
      max={max}
      onChange={(values) => {
        setValues(values);
        onChange(values);
      }}
      renderTrack={({ props, children }) => (
        <div
          //   {...props}
          style={{
            ...props.style,
          }}
          // eslint-disable-next-line react/prop-types
          onMouseDown={props.onMouseDown}
          // eslint-disable-next-line react/prop-types
          onTouchStart={props.onTouchStart}
          className="range-line">
          <div
            // eslint-disable-next-line react/prop-types
            ref={props.ref}
            style={{
              background: background,
            }}>
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props }) => {
        const value = props?.ref?.current?.getAttribute('aria-valuenow');
        return (
          <div {...props} className="thumb current-container">
            <div className="current">{value}</div>
          </div>
        );
      }}
    />
  );
};

RangeFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
};

export default RangeFilter;
