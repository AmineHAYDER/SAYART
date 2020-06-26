import React, { useReducer } from 'react';
import axios from 'axios';
import GarageContext from './garageContext';
import garageReducer from './garageReducer';
import io from 'socket.io-client';
import {
    GARAGE_LOADED,
    WHEELS_LOADED,
    APPOINTMENTS_LOADED,
    NEW_APPOINTMENT,
    LOADING,
    NOT_LOADING,
} from '../types';

var socket = io.connect('http://localhost:4000');
const GarageState = props => {
    const initialState = {
        appointments:'',
        wheels:'',
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

        try {
            const res = await axios.get('http://localhost:5000/user/appointment/', config);
            dispatch({
                type: APPOINTMENTS_LOADED,
                payload: res.data.data,
            })
        } catch (err) {
            console.log(err + ' load user error');
        }
        socket.on(state.garage._id, function(data){
            console.log(data)
            dispatch({
                type: NEW_APPOINTMENT,
                payload: data
            })
        });
    }

    //load all user appointments
    const loadWheels = async () => {

        try {
            const res = await axios.get('http://localhost:5000/stock/wheel/', config);
            dispatch({
                type: WHEELS_LOADED,
                payload: res.data.data,
            })
        } catch (err) {
            console.log(err + ' load user error');
        }
    }

    //update car information
    const ConfirmAppointment = async data => {

        try {
            var res = await axios.put('http://localhost:5000/appointment/confirm', data,config);
            console.log(res.data)
            if (res.data.success === "True") dispatch({
                type: "APPOINTMENT_CONFIRMED",
                payload: data.appointment._id,
            })
            return (res.data.success)
        } catch (err) {
            console.log(err)
        }

    }


    //get appointment garages

    return (
        <GarageContext.Provider
            value={{
                garage:state.garage,
                appointments: state.appointments,
                wheels:state.wheels,
                loading: state.loading,
                error: state.error,
                loadAppointments,
                loadGarage,
                ConfirmAppointment,
                loadWheels

            }}
        >
            {props.children}
        </GarageContext.Provider>
    );
};

export default GarageState;