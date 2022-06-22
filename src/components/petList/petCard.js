import React from 'react';
import PropTypes from 'prop-types';
import './petCard.css';

const PetCard = (props) => {
  const { key, imgUrl, name } = props;
  const defaultUrl = 'https://ik.imagekit.io/0ofixtqpt/tr:n-service_widget_hover/143729/default-placeholder.png';
  return (
    <div key={key} className="pet-card-wrapper" style={{ marginTop: '200px' }}>
      <img src={imgUrl.startsWith('https') ? imgUrl : defaultUrl} alt="pet-img" className="pet-img" />
      <p className="pet-name">
        {name}
      </p>
      <button type="submit" className="edit-btn">
        Update
      </button>
      <button type="submit" className="delete-btn">
        Delete
      </button>
    </div>
  );
};
PetCard.propTypes = {
  key: PropTypes.instanceOf(Number).isRequired,
  imgUrl: PropTypes.instanceOf(String).isRequired,
  name: PropTypes.instanceOf(String).isRequired,
};
export default PetCard;
