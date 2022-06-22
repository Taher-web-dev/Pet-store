const SET_LIST = 'PET/STORE/CURRENTLISTPET/SET';
export const setCurrentList = (payload) => ({
  type: SET_LIST,
  payload,
});

const currentListReducer = (state = [], action) => {
  switch (action.type) {
    case SET_LIST:
      return action.payload;
    default:
      return state;
  }
};
export default currentListReducer;
