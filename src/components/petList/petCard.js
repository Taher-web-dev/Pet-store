import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import avPetsThunk from '../../Redux/Pets/thunk';
import { setMessage } from '../../Redux/Message/message';
import './petCard.css';

const PetCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.petStatus);
  const { ident, imgUrl, name } = props;
  const defaultUrl = 'https://ik.imagekit.io/0ofixtqpt/tr:n-service_widget_hover/143729/default-placeholder.png';
  const changeMessage = (msg) => dispatch(setMessage(msg));
  const deleteItem = async (e) => {
    const container = e.target.parentNode.parentNode;
    const { id } = container;
    let loginResponse = await fetch('https://petstore.swagger.io/v2/user/login?username=test&password=abc123');
    loginResponse = await loginResponse.json();
    const { code } = loginResponse;
    clearTimeout(changeMessage);
    if (code !== 200) {
      changeMessage('Something went wrong !');
      setTimeout(changeMessage, 10000, '');
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
      changeMessage('Something went wrong !');
      setTimeout(changeMessage, 10000, '');
      return;
    }
    changeMessage('Item deleted successfuly');
    setTimeout(changeMessage, 10000, '');
    dispatch(avPetsThunk(currentStatus));
  };
  const updateItem = (e) => {
    const { id } = e.target.parentNode.parentNode;
    navigate('/update', { state: { op: 'update', id } });
  };
  return (
    <div id={ident} className="pet-card-wrapper">
      <img src={imgUrl.startsWith('https') ? imgUrl : defaultUrl} alt="pet-img" className="pet-img" />
      <div className="inf">
        <p className="pet-name">
          {name}
        </p>
        <button type="submit" className="edit-btn" onClick={updateItem}>
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
