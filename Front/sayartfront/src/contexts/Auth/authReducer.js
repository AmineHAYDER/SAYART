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
                user: '',
                error: 'Register failed'
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            }

        case LOGOUT:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: '',
                error: 'Login failed'
            }

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload.data
            }




        default: return state;
    }
}