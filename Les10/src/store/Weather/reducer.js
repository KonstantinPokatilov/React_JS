import { REQUEST_STATUS } from '../../Ulils/constants';
import { GET_WEATHER_FAILURE, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, } from './actions';

const initialState = {
    data: [],
    request: {
        error: '',
        status: REQUEST_STATUS.IDLE,
    },
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                request: {
                    error: "",
                    status: REQUEST_STATUS.PENDING,
                },
            };
        case GET_WEATHER_FAILURE:
            return {
                ...state,
                request: {
                    error: action.payload,
                    status: REQUEST_STATUS.FAILURE,
                },
            };
        case GET_WEATHER_SUCCESS: {
            return {
                data: action.payload,
                request: {
                    error: "",
                    status: REQUEST_STATUS.SUCCESS,
                }
            }
        }
        default:
            return state;
    }
};