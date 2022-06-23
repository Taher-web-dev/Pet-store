import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { Alert } from 'react-bootstrap';
import { setCurrentList } from '../../Redux/CurrentListPet/currentListReducers';
import PetCard from './petCard';
import cleanItems from './listContainerHelper';

const ListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useSelector((state) => state.search);
  const currentList = useSelector((state) => state.currentList);
  const petStatus = useSelector((state) => state.petStatus);
  const currentPets = useSelector((state) => state.pets);
  const currentMessage = useSelector((state) => state.message);
  const createPet = () => {
    navigate('/new', { state: { op: 'create' } });
  };
  const updateCurrentList = () => {
    if ((petStatus === 'available') && (!search)) {
      dispatch(setCurrentList(cleanItems(currentPets.av)));
    } else if ((petStatus === 'pending') && (!search)) {
      dispatch(setCurrentList(cleanItems(currentPets.pd)));
    } else if ((petStatus === 'sold') && (!search)) {
      dispatch(setCurrentList(cleanItems(currentPets.sd)));
    }
  };
  useEffect(() => updateCurrentList(), [currentPets, search, petStatus]);
  return (
    <div className="list-container" style={{ backgroundColor: 'rgb(239, 238, 241)', paddingTop: '150px' }}>
      <Alert variant="info" style={{ width: '60%', marginLeft: '20%', display: currentMessage === '' ? 'none' : 'block' }}>
        {currentMessage}
      </Alert>
      <Typography
        variant="h6"
        style={{
          fontFamily: 'Nexa-Regular, arial, helvetica, sans-serif', fontWeight: '400', lineHeight: '48px', fontSize: '40px', color: '#6504b5', textTransform: 'capitalize', textAlign: 'center',
        }}
      >
        {petStatus}
        &nbsp;Pets
      </Typography>
      <button
        type="submit"
        onClick={createPet}
        style={{
          background: 'linear-gradient(rgb(52, 37, 83), rgb(123, 91, 186))', border: '1px solid rgb(239, 238, 241)', color: 'white', width: '50%', margin: '25px 0 25px 25%', padding: '1.25% 0', borderRadius: '4px', fontWeight: 700,
        }}
      >
        <AddIcon />
        Add new item
      </button>
      <Grid container spacing={1} style={{ width: '95%', marginLeft: '2.5%' }}>
        {(currentList.length > 0) && (currentList.map((pet) => (
          <Grid item xs={2} key={pet.id} style={{ height: '300px', marginBottom: '2.5%' }}>
            <PetCard ident={pet.id} imgUrl={pet.photoUrls[0]} name={pet.name} />
          </Grid>
        )))}
      </Grid>

    </div>
  );
};
export default ListContainer;
