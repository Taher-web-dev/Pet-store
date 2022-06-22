const SEARCH = 'PET/STORE/SearchStatus/SEARCH';
const BROWSE = 'PET/STORE/SearchStatus/BROWSE';
export const setSearch = () => ({
  type: SEARCH,
});

export const setBrowse = () => ({
  type: BROWSE,
});

const searchReducer = (state = false, action) => {
  switch (action.type) {
    case SEARCH:
      return true;
    case BROWSE:
      return false;
    default:
      return state;
  }
};

export default searchReducer;
