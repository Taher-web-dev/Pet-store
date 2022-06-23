import {
  startAvailablePet, failureAvailablePet, getAvailablePet, getPendingPet, getSoldPet,
} from './actions';

const url = 'https://petstore.swagger.io/v2/pet/findByStatus?status=';
const fetchAvPets = (status) => (fetch(url + status));
const avPetsThunk = (status) => (dispatch) => {
  dispatch(startAvailablePet);
  if (status === 'available') {
    fetchAvPets(status)
      .then((resp) => resp.json())
      .then((result) => dispatch(getAvailablePet(result)))
      .catch((error) => dispatch(failureAvailablePet(error.message)));
  } else if (status === 'pending') {
    fetchAvPets(status)
      .then((resp) => resp.json())
      .then((result) => dispatch(getPendingPet(result)))
      .catch((error) => dispatch(failureAvailablePet(error.message)));
  } else if (status === 'sold') {
    fetchAvPets(status)
      .then((resp) => resp.json())
      .then((result) => dispatch(getSoldPet(result)))
      .catch((error) => dispatch(failureAvailablePet(error.message)));
  }
};
export default avPetsThunk;
