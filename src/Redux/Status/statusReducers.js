const AVAILABLE = 'PET/STORE/STATUS/AVAILABLE';
const PENDING = 'PET/STORE/STATUS/PENDING';
const SOLD = 'PET/STORE/STATUS/SOLD';

export const setStatusToAvailable = ({
  type: AVAILABLE,
});
export const setStatusToPending = ({
  type: PENDING,
});
export const setStatusToSols = ({
  type: SOLD,
});
const statusReducers = (state = 'available', action) => {
  switch (action.type) {
    case AVAILABLE:
      return 'available';
    case PENDING:
      return 'pending';
    case SOLD:
      return 'sold';
    default:
      return state;
  }
};
export default statusReducers;
