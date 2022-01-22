import { REQUEST_STATUS } from '../../Ulils/constants';
import { GET_DOGS_FAILURE, GET_DOGS_REQUEST, GET_DOGS_SUCCESS, } from './actions';

const initialState = {
    data: [],
    request: {
        error: '',
        status: REQUEST_STATUS.IDLE,
    },
};

export const dogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS_REQUEST:
            return {
                ...state,
                request: {
                    error: "",
                    status: REQUEST_STATUS.PENDING,
                },
            };
        case GET_DOGS_FAILURE:
            return {
                ...state,
                request: {
                    error: action.payload,
                    status: REQUEST_STATUS.FAILURE,
                },
            };
        case GET_DOGS_SUCCESS: {
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