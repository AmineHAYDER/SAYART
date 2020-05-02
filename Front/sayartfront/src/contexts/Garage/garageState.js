import React, { useReducer } from 'react';
import axios from 'axios';
import GarageContext from './garageContext';
import garageReducer from './garageReducer';

import {
    APPOINTMENTS_LOADED,
    GARAGE_LOADED,
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

    //load garage information
    const loadGarage = async () => {

        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }

        try {
            const res = await axios.get('http://localhost:5000/user/garage/myGarage', config);

            dispatch({
                type: GARAGE_LOADED,
                payload: res.data.data
            })
        } catch (err) {
            console.log(err + ' load user error');
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

            dispatch({
                type: APPOINTMENTS_LOADED,
                payload: res.data.data,
            })
            setTimeout(function() {
                dispatch({
                    type: NOT_LOADING
                })
            }, 1000)
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
            var res = await axios.put('http://localhost:5000/user/garage/myGarage', data,config);
            console.log(res.data.results[0])
            dispatch({
                type: GARAGE_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
        dispatch({
            type: NOT_LOADING
        })
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
                loadGarage,
                updateCar,

            }}
        >
            {props.children}
        </GarageContext.Provider>
    );
};

export default GarageState;