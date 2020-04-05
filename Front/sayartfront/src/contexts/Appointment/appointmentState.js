import React, { useReducer } from 'react';
import axios from 'axios';
import AppointmentContext from './appointmentContext';
import appointmentReducer from './appointmentReducer';

import Geocode from "react-geocode";
import {
    LOCATION_SET, REGISTER_FAIL, REGISTER_SUCCESS
} from '../types';

const AppointmentState = props => {
    const initialState = {
        address:'',
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(appointmentReducer, initialState);
    const config = {
        headers: {
            'content-type': 'application/json',
        }
    }

    //set location
    const setLocation = async data => {
        try {
            var res = await axios.post('http://localhost:5000/garage/decode/reverser', data,config);
            console.log(res.data.results[0])
            dispatch({
                type:  LOCATION_SET,
                payload: res.data.results[0]
            });


        } catch (err) {

            dispatch({
                type: REGISTER_FAIL,
                payload: 'res.data.error'
            });

        }
        }

    return (
        <AppointmentContext.Provider
            value={{
                address: state.address,
                loading: state.loading,
                error: state.error,
                setLocation,

            }}
        >
            {props.children}
        </AppointmentContext.Provider>
    );
};

export default AppointmentState;