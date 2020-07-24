import React, {useContext, useState} from "react";
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AuthContext from "../../../../../contexts/Auth/authContext";
import UserContext from "../../../../../contexts/User/userContext";
import AppointmentContext from "../../../../../contexts/Appointment/appointmentContext";

import {Col, Row, OverlayTrigger,Tooltip} from "react-bootstrap";

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
            if (userContext.mileage) {
                if (userContext.mileage) {
                    num += 5
                }
            }
        }
        if (appointmentContext.appointments.length > 0) {
            num += 20
        }
        return num
    }
    function renderTooltip(props) {

        return (
            <Tooltip id="button-tooltip" {...props}>
               <h6>{!userContext.car ? "les informations كمل عمر   متاع كرهبتك" : null}</h6>
            </Tooltip>
        );
    }
    return (
        <div>
            <h1 className="h4 mb-0">Bienvenu {authContext.user.name}!</h1>
            <CircularProgressbarWithChildren
                value={ProfilePercentage()}
                styles={{
                    path: {
                        stroke: `rgb(135, 0, 102)`,
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    }
                }}
                className={"progress-bar-profile"}
            >
                <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                    <div style={{fontSize: 16, marginTop: 340,position:"relative"}}>
                        <h6>Profile</h6>
                        <strong>{ProfilePercentage()} %</strong>
                    </div>
            </OverlayTrigger>
            </CircularProgressbarWithChildren>

        </div>
    );
}

export default Welcome;