import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { Alert } from 'react-bootstrap';
import { setCurrentList } from '../../Redux/CurrentListPet/currentListReducers';
import PetCard from './petCard';
import cleanItems from './listContainerHelper';

const ListContainer = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const currentList = useSelector((state) => state.currentList);
  const petStatus = useSelector((state) => state.petStatus);
  const availablesPets = useSelector((state) => state.availables);
  const updateCurrentList = () => {
    if ((petStatus === 'available') && (!search)) {
      dispatch(setCurrentList(cleanItems(availablesPets.av)));
    }
  };
  useEffect(() => updateCurrentList(), [availablesPets, search]);
  return (
    <div className="list-container" style={{ backgroundColor: 'rgb(239, 238, 241)', paddingTop: '150px' }}>
      <Alert variant="info" style={{ width: '60%', marginLeft: '20%', display: 'none' }}>
        test text
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
