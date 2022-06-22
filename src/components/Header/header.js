import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { setSearch, setBrowse } from '../../Redux/SearchStatus/searchReducer';
import { setCurrentList } from '../../Redux/CurrentListPet/currentListReducers';
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
            <div className="status-wrapper" key={order}>
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
