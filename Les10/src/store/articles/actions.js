import { apiUrl } from "../../Ulils/constants";

export const GET_DOGS_REQUEST = "DOGS::GET_DOGS_REQUEST";
export const GET_DOGS_SUCCESS = "DOGS::GET_DOGS_SUCCESS";
export const GET_DOGS_FAILURE = "DOGS::GET_DOGS_FAILURE";

export const getDogsRequest = () => ({
    type: GET_DOGS_REQUEST,
});

export const getDogsSuccess = (data) => ({
    type: GET_DOGS_SUCCESS,
    payload: data,
})

export const getDogsFailure = (err) => ({
    type: GET_DOGS_FAILURE,
    payload: err,
})

export const getDogs = () => async (dispatch) => {
    dispatch(getDogsRequest());
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Request error: ' + response.status);
        }
        const result = await response.json();

        dispatch(getDogsSuccess(result));
    } catch (e) {
        dispatch(getDogsFailure(e.message));
    }
};