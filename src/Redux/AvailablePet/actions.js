export const START_AV_PET = 'PET/STORE/AVAILABLE/START';
export const GET_AV_PET = 'PET/STORE/AVAILABLE/GET';
export const FAILURE_AV_PET = 'PET/STORE/AVAILABLE/FAILURE';

export const startAvailablePet = () => ({
  type: START_AV_PET,
});
export const getAvailablePet = (payload) => ({
  type: GET_AV_PET,
  payload,
});
export const failureAvailablePet = (payload) => ({
  type: FAILURE_AV_PET,
  payload,
});
