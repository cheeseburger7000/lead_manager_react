import { CREATE_MESSAGE, GET_ERRORS } from '../actions/type';

// CREATE MESSAGE
// 3
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    };
};