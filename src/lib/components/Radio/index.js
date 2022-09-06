import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Text from '../Text';
const Radio = (props) => {
  return (
    <div className="cds-radio-wrapper">
      <div className="radio-options flex-direction-row gap-10">
        <input type="radio" id="html" name="fav_language" value="age_asc" />
        <label htmlFor="html">
          <Text>Age: Younger to Elder</Text>
        </label>
      </div>
      <div className="radio-options flex-direction-row gap-10">
        <input type="radio" id="css" name="fav_language" value="age_dsc" />
        <label htmlFor="css">
          <Text>Age: Elder to Younger</Text>
        </label>
      </div>
      <div className="radio-options flex-direction-row gap-10">
        <input type="radio" id="html" name="fav_language" value="pkg_asc" />
        <label htmlFor="html">
          <Text>Package: Low to High</Text>
        </label>
      </div>
      <div className="radio-options flex-direction-row gap-10">
        <input type="radio" id="css" name="fav_language" value="pkg_dsc" />
        <label htmlFor="css">
          <Text>Package: High to Low</Text>
        </label>
      </div>
    </div>
  );
};

Radio.propTypes = {};

export default Radio;
