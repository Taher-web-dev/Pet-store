export const START_AV_PET = 'PET/STORE/PETS/START';
export const GET_AV_PET = 'PET/STORE/PETS/AVAILABLE/GET';
export const FAILURE_AV_PET = 'PET/STORE/PETS/FAILURE';
export const GET_PD_PET = 'PET/STORE/PETS/PENDING/GET';
export const GET_SD_PET = 'PET/STORE/PETS/SOLD/GET';

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
export const getPendingPet = (payload) => ({
  type: GET_PD_PET,
  payload,
});
export const getSoldPet = (payload) => ({
  type: GET_SD_PET,
  payload,
});
