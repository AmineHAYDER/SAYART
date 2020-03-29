import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL

} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);



    //register user 
    const register = async data => {

        const config = {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        }

        try {
            var res = await axios.post('http://localhost:5000/user/auth/create', data, config);

            console.log(res.data)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.token
            });

        } catch (err) {

            console.log(err.message);
            dispatch({
                type: REGISTER_FAIL,
                payload: res.data.error
            });

        }
    }


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register

            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;