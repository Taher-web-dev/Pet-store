import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import avPetsThunk from '../../Redux/AvailablePet/thunk';
import { setMessage } from '../../Redux/Message/message';
import './petCard.css';

const PetCard = (props) => {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.petStatus);
  const { ident, imgUrl, name } = props;
  const defaultUrl = 'https://ik.imagekit.io/0ofixtqpt/tr:n-service_widget_hover/143729/default-placeholder.png';
  const deleteItem = async (e) => {
    const container = e.target.parentNode.parentNode;
    const { id } = container;
    let loginResponse = await fetch('https://petstore.swagger.io/v2/user/login?username=test&password=abc123');
    loginResponse = await loginResponse.json();
    const { code } = loginResponse;
    clearTimeout();
    if (code !== 200) {
      dispatch(setMessage('Something went wrong !'));
      setTimeout(dispatch(setMessage('')), 5000);
      return;
    }
    const token = loginResponse.message.split(':')[1];
    let deleteResponse = await fetch(`https://petstore.swagger.io/v2/pet/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        api_key: token,
      },
    });
    let deleteCode;
    try {
      deleteResponse = await deleteResponse.json();
      deleteCode = deleteResponse.code;
    } catch {
      deleteCode = deleteResponse.status;
    }
    if (deleteCode !== 200) {
      dispatch(setMessage('Something went wrong !'));
      setTimeout(dispatch(setMessage('')), 5000);
      return;
    }
    setMessage('Item deleted successfuly');
    setTimeout(dispatch(setMessage('')), 5000);
    if (currentStatus === 'available') {
      dispatch(avPetsThunk());
    }
  };
  return (
    <div id={ident} className="pet-card-wrapper">
      <img src={imgUrl.startsWith('https') ? imgUrl : defaultUrl} alt="pet-img" className="pet-img" />
      <div className="inf">
        <p className="pet-name">
          {name}
        </p>
        <button type="submit" className="edit-btn">
          Update
        </button>
        <button type="submit" className="delete-btn" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </div>
  );
};
PetCard.propTypes = {
  ident: PropTypes.instanceOf(Number).isRequired,
  imgUrl: PropTypes.instanceOf(String).isRequired,
  name: PropTypes.instanceOf(String).isRequired,
};
export default PetCard;
