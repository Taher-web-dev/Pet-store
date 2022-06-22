const SET_MESSAGE = 'PET/STORE/MESSAGE/SET';

export const setMessage = (payload) => ({
  type: SET_MESSAGE,
  payload,
});

const messageReducer = (state = '', action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
export default messageReducer;
