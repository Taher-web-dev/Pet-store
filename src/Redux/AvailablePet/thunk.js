import { startAvailablePet, failureAvailablePet, getAvailablePet } from './actions';

const url = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available';
const fetchAvPets = () => (fetch(url));
const avPetsThunk = () => (dispatch) => {
  dispatch(startAvailablePet);
  fetchAvPets()
    .then((resp) => resp.json())
    .then((result) => dispatch(getAvailablePet(result)))
    .catch((error) => dispatch(failureAvailablePet(error.message)));
};
export default avPetsThunk;
