import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import userReducer from './userReducer';

import {
    CAR_LOADED,
    LOADING,
    LOCATION_SET,
    NOT_LOADING,
    ADD_CAR
} from '../types';

const UserState = props => {
    const initialState = {
        address: '',
        car: '',
        mileage: '',
        loading: false,
        error: null
    };

    const [state, dispatch] = useReducer(userReducer, initialState);
    const config = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token
        }
    }



    //update car information
    const updateCar = async data => {
        dispatch({
            type: LOADING
        })
        try {
            var res = await axios.put('http://localhost:5000/user/car', data, config);
            console.log(res.data.results[0])
            dispatch({
                type: CAR_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
        dispatch({
            type: NOT_LOADING
        })
    }

    const addCar = async data => {
        dispatch({
            type: LOADING
        })
        try {
            await axios.post('http://localhost:5000/user/car', data);
            console.log(data);
            dispatch({
                type: ADD_CAR
            })

        } catch (err) {
            console.log("post doesn't work");
        }
        dispatch({
            type: NOT_LOADING
        })
    }



    //decode back
    const setLocation = async data => {
        try {
            var res = await axios.post('http://localhost:5000/garage/decode/reverser', data, config);
            console.log(res.data.results[0])
            dispatch({
                type: LOCATION_SET,
                payload: res.data.results[0]
            });


        } catch (err) {


        }
    }
    //load car information
    const loadCar = async () => {

        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }

        try {
            const res = await axios.get('http://localhost:5000/user/car/', config);
            console.log(res.data.data)
            dispatch({
                type: CAR_LOADED,
                payload: res.data.data
            })
        } catch (err) {
            console.log(err + ' load user error');
        }
    }



    return (
        <UserContext.Provider
            value={{
                car: state.car,
                mileage: state.mileage,
                loading: state.loading,
                error: state.error,
                address: state.address,
                loadCar,
                updateCar,
                setLocation,

            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;