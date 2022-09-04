import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Text from '../Text';
import useOutsideClick from '../../hooks/useOutsideClick';

const Dropdown = ({
  options = [],
  className,
  label,
  selectedValue,
  onSelect = () => {},
}) => {
  const dropDownRef = useRef(null);
  const [displayedValue, setDisplayedValue] = useState('');
  const isOutsideClicked = useOutsideClick(dropDownRef);
  const [showOptions, setShowOptions] = useState(false);
  const onSelectOption = (selectedId) => {
    onSelect(selectedId);
    setShowOptions(false);
  };
  useEffect(() => {
    if (isOutsideClicked) {
      setShowOptions(false);
    }
  }, [isOutsideClicked]);

  const displayedSelectedValue = () => {
    options.filter((option) => {
      if (option.value === selectedValue) {
        setDisplayedValue(option.title);
      }
    });
  };

  useEffect(() => {
    displayedSelectedValue();
  }, [selectedValue, options]);

  const renderOption = (option) => {
    return (
      <div
        key={option.value}
        className={`dropdown-option ${
          selectedValue === option.value ? 'selected' : ''
        }`}
        id={option.value}
        onClick={() => onSelectOption(option.value)}>
        <Text>{option.title}</Text>
      </div>
    );
  };
  return (
    <div
      className={`cds-dropdown-container ${className}`}
      tabIndex={0}
      ref={dropDownRef}>
      <div onClick={() => setShowOptions(true)} className={'dropdown-box'}>
        <div className="drop-down-placeholder">
          <Text>{displayedValue || label}</Text>
        </div>
        <div
          className={`drop-down-arrow ${
            showOptions ? 'opened' : 'closed'
          }`}></div>
      </div>
      {showOptions && options?.length && (
        <div className="dropdown-menu-container">
          {options.map(renderOption)}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  selectedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string.isRequired,
};

export default Dropdown;
