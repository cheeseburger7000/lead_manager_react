import axios from 'axios';
import { returnErrors } from './message';
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './type';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });
    // Get token from state
    const token = getState().authReducer.token;
    // Headers
    const config = {
        headers: {
            'Content-Type': 'applicaiton/json'
        }
    };
    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `${token}`;
    }
    axios.get('/api/auth/user', config)
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: AUTH_ERROR })
    });   
}