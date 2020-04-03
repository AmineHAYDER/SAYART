import React, {useContext, useState} from 'react';
import Map from './Map'
import AppointmentContext from '../../contexts/Appointment/appointmentContext';

const Address = () => {
        const appointmentContext = useContext(AppointmentContext);
        console.log(appointmentContext.lng +' xxx '+ appointmentContext.lat)
        return (
            <Map/>
        )

};

export default Address;