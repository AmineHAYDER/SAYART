import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload);
            console.log('register sucess');
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case AUTH_ERROR:
        case REGISTER_FAIL:
            localStorage.removeItem('token');

            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: 'Register failed'
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            console.log('login sucess');
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            }

        case LOGOUT:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            console.log('login fail');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: 'Login failed'
            }

        case USER_LOADED:
            console.log('user loaded');
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }




        default: return state;
    }
}