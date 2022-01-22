import { apiWeather } from "../../Ulils/constants";

export const GET_WEATHER_REQUEST = "WEATHER::GET_WEATHER_REQUEST";
export const GET_WEATHER_SUCCESS = "DOGS::GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "DOGS::GET_WEATHER_FAILURE";

export const getWeatherRequest = () => ({
    type: GET_WEATHER_REQUEST,
});

export const getWeatherSuccess = (data) => ({
    type: GET_WEATHER_SUCCESS,
    payload: data,
})

export const getWeatherFailure = (err) => ({
    type: GET_WEATHER_FAILURE,
    payload: err,
})

export const getWeather = () => async (dispatch) => {
    dispatch(getWeatherRequest());
    try {
        const response = await fetch(apiWeather);
        if (!response.ok) {
            throw new Error('Request error: ' + response.status);
        }
        const result = await response.json();

        dispatch(getWeatherSuccess(result));
    } catch (e) {
        dispatch(getWeatherFailure(e.message));
    }
};