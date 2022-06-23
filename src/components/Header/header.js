import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { setSearch, setBrowse } from '../../Redux/SearchStatus/searchReducer';
import { setCurrentList } from '../../Redux/CurrentListPet/currentListReducers';
import { setStatusToAvailable, setStatusToPending, setStatusToSold } from '../../Redux/Status/statusReducers';
import cleanItems from '../petList/listContainerHelper';
import AV from '../../assets/images/available.png';
import PD from '../../assets/images/pending.png';
import SD from '../../assets/images/sold.png';
import './header.css';

const Header = () => {
  const dispatch = useDispatch();
  const status = ['available', 'pending', 'sold'];
  const statusIcons = [AV, PD, SD];
  const currentList = useSelector((state) => state.currentList);
  const changeStatus = (e) => {
    let targetELement = e.target;
    targetELement = targetELement.className === 'status-wrapper' ? targetELement : targetELement.parentNode;
    const { id } = targetELement;
    const statusWrapper = document.querySelectorAll('.status-wrapper');
    Array.from(statusWrapper).forEach((wrapper) => {
      const elem = wrapper;
      elem.style.backgroundColor = 'white';
    });
    if (id === 'available') {
      dispatch(setStatusToAvailable);
      targetELement.style.backgroundColor = '#a7742a';
    } else if (id === 'pending') {
      dispatch(setStatusToPending);
      targetELement.style.backgroundColor = '#a7742a';
    } else if (id === 'sold') {
      dispatch(setStatusToSold);
      targetELement.style.backgroundColor = '#a7742a';
    }
  };
  const search = (e) => {
    const text = e.target.value;
    if (text === '') {
      dispatch(setBrowse());
      return;
    }
    dispatch(setSearch());
    const newList = currentList.filter((item) => item.name.includes(text));
    dispatch(setCurrentList(cleanItems(newList)));
  };
  return (
    <div className="header-wrapper">
      <input type="search" placeholder="Search Pet, Cat, etc." className="search-bar" onChange={search} />
      <Typography
        variant="h2"
        style={{
          color: 'white', textAlign: 'center', fontSize: '45px', fontFamily: 'Nexa-Regular, Helvetica, Arial, sans-serif', fontWeight: 700, lineHeight: '54px',
        }}
      >
        Welcome to Pet store
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          color: 'white', textAlign: 'center', fontSize: '25px', fontFamily: 'Nexa-Regular, Helvetica, Arial, sans-serif', fontWeight: 400, verticalAlign: 'middle',
        }}
      >
        Browse pets from our Pet store
      </Typography>
      <div className="all-status-wrapper">
        {status.map((st) => {
          const order = status.indexOf(st);
          return (
            <div className="status-wrapper" key={order} id={st} onClick={changeStatus} aria-hidden="true" style={{ backgroundColor: order === 0 ? '#a7742a' : 'white' }}>
              <img src={statusIcons[order]} alt="status-icon" className="status-icon" />
              <p className="status-title">
                {st}
              </p>
            </div>
          );
        })}

      </div>
    </div>
  );
};
export default Header;
