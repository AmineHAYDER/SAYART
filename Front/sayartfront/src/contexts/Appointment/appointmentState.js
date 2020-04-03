import React, { useReducer } from 'react';
import axios from 'axios';
import AppointmentContext from './appointmentContext';
import appointmentReducer from './appointmentReducer';


import {
    LOCATION_SET
} from '../types';

const AppointmentState = props => {
    const initialState = {
        lat:'10',
        lng:'',
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(appointmentReducer, initialState);



    //set location
    const setLocation = async (lat,lng) => {
        dispatch({
            type: LOCATION_SET,
            payload: {lat,lng}
        });
        }

    return (
        <AppointmentContext.Provider
            value={{
                lat:state.lat,
                lng:state.lng,
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