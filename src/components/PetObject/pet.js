import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Typography from '@mui/material/Typography';
import { setMessage } from '../../Redux/Message/message';
import './pet.css';

const Pet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const h = window.innerHeight;
  const location = useLocation();
  const { state } = location;
  const { op, id } = state;
  const currentList = useSelector((state) => state.currentList);
  const obj = id !== undefined
    ? currentList.filter((item) => item.id === parseInt(id, 10))[0]
    : undefined;
  const [message, updateMessage] = useState('');
  const changeGlobalMessage = (msg) => dispatch(setMessage(msg));
  const submitForm = async (e) => {
    e.preventDefault();
    const name = document.getElementById('username').value;
    const photosInput = document.getElementsByName('photo-url');
    const urlImages = [];
    photosInput.forEach((inp) => urlImages.push(inp.value));
    const url = 'https://petstore.swagger.io/v2/pet';
    clearTimeout(changeGlobalMessage);
    if (op === 'create') {
      const request = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ name, photoUrls: [urlImages[0]] }),
      });
      const code = request.status;
      if (code !== 200) {
        updateMessage('Something went wrong');
        return;
      }
      changeGlobalMessage('New Pet Created Successfully');
      setTimeout(changeGlobalMessage, 10000, '');
      navigate('/');
    } else if (op === 'update') {
      const request = await fetch(`${url}/${id}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ name }),
      });
      const code = request.status;
      console.log(code);
      if (code !== 200) {
        updateMessage('Something went wrong');
        return;
      }
      changeGlobalMessage(`Pet of id ${id} updated successfully`);
      setTimeout(changeGlobalMessage, 10000, '');
      navigate('/');
    }
  };
  return (
    <div className="login-wrapper" style={{ height: `${h}px` }}>
      <div className="login-window" style={{ height: `${h * 0.8}px`, position: 'absolute', top: `${h * 0.1}px` }}>
        <Typography variant="h4" style={{ textAlign: 'center', color: '#6504b5', margin: '5% 0 2.5% 0' }}>
          {op === 'create' ? 'Create new Pet' : `Update Pet of id: ${id}`}
        </Typography>
        <Alert
          variant="warning"
          className="alert"
          style={{
            width: '90%', marginLeft: '5%', marginTop: '0', display: message === '' ? 'none' : 'block',
          }}
        >
          {message}
        </Alert>
        <hr style={{ width: '90%', marginLeft: '5%' }} />
        <form>
          <p className="input-title">Pet Name</p>
          <input type="text" name="petname" id="username" placeholder="Pet Name" defaultValue={obj !== undefined ? obj.name : ''} required />
          <p className="input-title">Photos Url</p>
          <div className="urls-wrapper">
            {(obj !== undefined) && (obj.photoUrls.map((url) => (
              <input key={obj.photoUrls.indexOf(url)} type="url" name="photo-url" className="input-url" placeholder="Photo url" value={url} disabled />
            )))}
            {(obj === undefined) && ([0, 1, 2, 3, 4].map((nb) => (
              <input key={nb} type="url" name="photo-url" className="input-url" placeholder="Photo url" />
            )))}
          </div>
          <button type="submit" className="submit-btn" onClick={submitForm}>
            {op === 'create' ? 'Create' : 'Update'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pet;
