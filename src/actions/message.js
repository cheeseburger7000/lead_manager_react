import { CREATE_MESSAGE } from '../actions/type';

// CREATE MESSAGE
// 3
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};