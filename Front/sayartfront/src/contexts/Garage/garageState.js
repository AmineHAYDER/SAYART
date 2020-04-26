import React, { useReducer } from 'react';
import axios from 'axios';
import GarageContext from './garageContext';
import garageReducer from './garageReducer';

import {
    APPOINTMENTS_LOADED,
    CAR_LOADED,
    LOADING,
    NOT_LOADING,
} from '../types';

const GarageState = props => {
    const initialState = {
        appointments:'',
        loading: false,
        garage:'',
        error: null,
    };

    const [state, dispatch] = useReducer(garageReducer, initialState);
    const config = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token
        }
    }

    //load all user appointments
    const loadAppointments = async () => {

        dispatch({
            type: LOADING
        })
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }

        try {
            const res = await axios.get('http://localhost:5000/user/appointment/', config);
            console.log(res.data)
            setTimeout(function() {
                dispatch({
                type: NOT_LOADING
            })
            }, 500)
            dispatch({
                type: APPOINTMENTS_LOADED,
                payload: res.data.data,
            })
        } catch (err) {
            console.log(err + ' load user error');
        }
    }

    //update car information
    const updateCar = async data => {
        dispatch({
            type: LOADING
        })
        try {
            var res = await axios.put('http://localhost:5000/user/car', data,config);
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

    //get appointment garages

    return (
        <GarageContext.Provider
            value={{
                loading: state.loading,
                error: state.error,
                appointments: state.appointments,
                garage:state.garage,
                loadAppointments,
                loadCar,
                updateCar,

            }}
        >
            {props.children}
        </GarageContext.Provider>
    );
};

export default GarageState;