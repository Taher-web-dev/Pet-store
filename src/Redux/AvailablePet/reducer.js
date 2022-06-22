import { START_AV_PET, GET_AV_PET, FAILURE_AV_PET } from './actions';
const avPetReducers = (state = { av: [] }, action) => {
  switch (action.type) {
    case START_AV_PET:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_AV_PET:
      return {
        ...state,
        av: action.payload,
        loading: false,
        error: null,
      };
    case FAILURE_AV_PET:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default avPetReducers;
