import {
  START_AV_PET, GET_AV_PET, FAILURE_AV_PET, GET_PD_PET, GET_SD_PET,
} from './actions';

const PetReducers = (state = { av: [], pd: [], sd: [] }, action) => {
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
    case GET_PD_PET:
      return {
        ...state,
        loading: false,
        error: null,
        pd: action.payload,
      };
    case GET_SD_PET:
      return {
        ...state,
        loading: false,
        error: null,
        sd: action.payload,
      };
    default:
      return state;
  }
};
export default PetReducers;
