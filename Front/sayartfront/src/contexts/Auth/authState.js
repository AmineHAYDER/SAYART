import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR

} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: '',
        error: null
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
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: AUTH_ERROR
            })


            console.log(err + ' load user error');
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

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.token
            });

            loadUser();

        } catch (err) {

            console.log(err.message);
            dispatch({
                type: REGISTER_FAIL,
                payload: 'res.data.error'
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
            await axios.post('http://localhost:5000/user/auth/login', data, config).then((res)=>{

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.token
            });

            loadUser();}
        )
        } catch (err) {

            console.log(err.message);
            dispatch({
                type: LOGIN_FAIL,
                payload: err
            });

        }
        console.log(state.isAuthenticated)
    }


    const logout = () => dispatch({ type: LOGOUT });


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

            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;