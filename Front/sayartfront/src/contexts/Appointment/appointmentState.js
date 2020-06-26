import React, { useReducer } from 'react';
import axios from 'axios';
import AppointmentContext from './appointmentContext';
import appointmentReducer from './appointmentReducer';
import io from 'socket.io-client';


import {
    APPOINTMENTS_LOADED,
    LOCATION_SET,
    LOADING,
    NOT_LOADING,
    APPOINTMENTS_GARAGES_LOADED
} from '../types';

var socket = io.connect('http://localhost:4000');
const AppointmentState = props => {
    const initialState = {
        address:'',
        appointments:'',
        pages:{
              address:{
                  state:false,
                  step:{
                      localisationStep:false,
                      validationStep:false
                  }},
              service:{
                  state:false,
                  name:'',
                  detail:''
              },
              timing:{
                  state:false,
                  states:{
                      date:false,
                      hour:false,},
                  date:''
              },
              active:"confirmation"
              },
        car:'',
        loading: false,
        chosenService:'',
        availableGarage:'',
        appointmentGarages:'',
        error: null
    };

    const [state, dispatch] = useReducer(appointmentReducer, initialState);
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

            dispatch({
                type: APPOINTMENTS_LOADED,
                payload: res.data.data,
            })
        } catch (err) {
            console.log(err + ' load user error');
        }
    }

    //decode back
    const setLocation = async data => {
        try {
            var res = await axios.post('http://localhost:5000/garage/decode/reverser', data,config);
            console.log(res.data.results[0])
            dispatch({
                type:  LOCATION_SET,
                payload: res.data.results[0]
            });


        } catch (err) {


        }
    }

    //get appointment garages
    const loadAppointmentGarages = async (data,distance) => {
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
            const res = await axios.post('http://localhost:5000/service/garage/'+distance,data, config);
            console.log(res.data)
            dispatch({
                type: APPOINTMENTS_GARAGES_LOADED,
                payload: res.data.data
            })
        } catch (err) {
            console.log(err + ' load user error');
        }

        dispatch({
            type: NOT_LOADING
        })
    }

    const CheckAvailableGarage = async (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/appointment/available',data, config);
            dispatch({
                type: 'CheckAvailableGarage',
                payload: res.data.data
            })
        } catch (err) {
            console.log(err + ' load user error');
        }

    }
    const setChosenService = (data) => {

            dispatch({
                type: 'setChosenService',
                payload: data
            })
    }

    const resetAvailableGarage = () => {

        dispatch({
            type: 'resetAvailableGarage',
        })
    }

    //take appointment request
    const takeAppointment = async (data) => {

        try {
            await axios.post('http://localhost:5000/user/appointment/',data, config).then((res)=>{
               console.log(res.data.data)
                socket.emit('NewAppointmentCreated',res.data.data);
            });

        } catch (err) {
            console.log(err + ' load user error');
        }
    }
    const sendAppointment = async (data) => {


    }
    return (
        <AppointmentContext.Provider
            value={{
                address: state.address,
                loading: state.loading,
                pages: state.pages,
                error: state.error,
                car: state.car,
                appointments: state.appointments,
                appointmentGarages: state.appointmentGarages,
                garage:state.garage,
                chosenService:state.chosenService,
                availableGarage:state.availableGarage,
                loadAppointments,
                setLocation,
                loadAppointmentGarages,
                takeAppointment,
                CheckAvailableGarage,
                setChosenService,
                resetAvailableGarage,
                sendAppointment

            }}
        >
            {props.children}
        </AppointmentContext.Provider>
    );
};

export default AppointmentState;