import { REQUEST_STATUS } from "../../Ulils/constants";

export const selectWeather = (state) => state.weather.data;
export const selectErrorMessage = (state) => state.weather.error;
export const selectIsLoading = (state) =>
    state.weather.request.status === REQUEST_STATUS.PENDING;
export const selectIsError = (state) =>
    state.weather.request.status === REQUEST_STATUS.FAILURE;
