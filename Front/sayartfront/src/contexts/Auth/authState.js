import React, {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERRORS

} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: '',
        error: ''
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    //load user 
    const loadUser = async () => {


        //setAuthToken(localStorage.token);
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }

        try {
            const res = await axios.get('http://localhost:5000/user/auth/me', config);
            console.log(res)
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: AUTH_ERROR
            })
        }
    }


    //register user 

    const register = async data => {

        const config = {
            headers: {
                'content-type': 'application/json',

            }
        }

        try {
            var res = await axios.post('http://localhost:5000/user/auth/create', data, config);

            console.log(res.data)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.token
            });

            loadUser();

        } catch (err) {

            console.log(err.message);
            dispatch({
                type: REGISTER_FAIL,
                payload: err
            });

        }
    }

    //login
    const login = async data => {

        const config = {
            headers: {
                'content-type': 'application/json',
            }
        }

        try {
            await axios
                .post('http://localhost:5000/user/auth/login', data, config)
                .then(async (res) => {


                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: res.data.token
                    });
                    console.log(res)

                    await loadUser();
                })
            console.log("here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            return true
        } catch (err) {

            console.log(err.message.split(' ')[5])
            switch (err.message.split(' ')[5]) {
                case '404':
                    return 'No user with this email'
                case '401':
                    return 'Invalid password'
                default:
                    break;
            }

        }
    }


    const logout = () => dispatch({type: LOGOUT});


    const clearErrors = () => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                login,
                logout,
                loadUser,
                clearErrors

            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;