import React, {useContext, useState} from "react";
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AuthContext from "../../../../../contexts/Auth/authContext";
import UserContext from "../../../../../contexts/User/userContext";
import AppointmentContext from "../../../../../contexts/Appointment/appointmentContext";

import {Col, Row} from "react-bootstrap";

import "../../../../../css/dashboard/clienDashboard/Acceuil/TopSection.css"


const Welcome = () => {

    const authContext = useContext(AuthContext)
    const userContext = useContext(UserContext)
    const appointmentContext = useContext(AppointmentContext)
    const ProfilePercentage = () => {
        let num = 50
        if (authContext.user.location) {
            num += 10
        }
        if (userContext.car) {
            num += 15
            if (userContext.mileage.value) {
                num += 5
            }
        }
        if (appointmentContext.appointments.length > 0) {
            num += 20
        }
        return num
    }
    return (
        <div>
            <h1 className="h4 mb-0">Bienvenu {authContext.user.name}!</h1>
            <CircularProgressbarWithChildren
                value={ProfilePercentage()}
                styles={{
                    path: {
                        stroke: `rgba(148, 0, 166, 0.71)`,
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    }}}
                className={"progress-bar-profile"}
            >
                <div style={{fontSize: 16, marginTop: 300}}>
                    <h6>Profile</h6>
                    <strong>{ProfilePercentage()} %</strong>
                </div>
            </CircularProgressbarWithChildren>
            {!userContext.car ? "mafamech car" : null}
            {!authContext.user.location ? "mafamech location" : null}
            {!userContext.mileage.value ? "mafamech mileage" : null}
            {!appointmentContext.appointments.length > 0 ? "khouth awel rendez vous" : null}
        </div>
    );
}

export default Welcome;