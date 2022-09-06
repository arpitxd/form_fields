import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProfileDetailPath } from 'src/utils/path';
import Image from '../Image';

import './style.css';
import Text from '../Text';

const ListingItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  const onClickListItem = (e) => {
    navigate(createProfileDetailPath(e.currentTarget.id));
  };
  return (
    <div
      className="listing-container"
      id={item?.id}
      onClick={onClickListItem}
      key={item?.id}>
      <div className="item-wrapper">
        <div className="item-card">
          <div className="card">
            <div className="image-container">
              <div>
                <div>
                  <Image src={item.photos[0]} />
                </div>
              </div>
            </div>
            <div className="  gap-5 detail-section">
              <div className="display-flex flex-direction-row gap-5">
                <Text>{item.name},</Text>
                <Text>{item.age}</Text>
              </div>
              <Text>{item.occupation}</Text>
              <Text>{item.city}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ListingItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default ListingItem;
