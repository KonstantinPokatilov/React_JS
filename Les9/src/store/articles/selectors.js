import { REQUEST_STATUS } from "../../Ulils/constants";

export const selectDogs = (state) => state.dogs.data;
export const selectErrorMessage = (state) => state.dogs.error;
export const selectIsLoading = (state) =>
    state.dogs.request.status === REQUEST_STATUS.PENDING;
export const selectIsError = (state) =>
    state.dogs.request.status === REQUEST_STATUS.FAILURE;
