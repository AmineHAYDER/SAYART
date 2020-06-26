import React, {useContext, useState} from 'react';
import {Col, Row, Container} from "react-bootstrap";
import '../../../css/takeAppointment/selectGarage/SelectGarege.css'
import {Icon, InlineIcon} from '@iconify/react';
import starEmpty from '@iconify/icons-el/star-empty';
import star from '@iconify/icons-el/star';

import AppointmentContext from '../../../contexts/Appointment/appointmentContext';
import AuthContext from '../../../contexts/Auth/authContext'
import washImage from '../../../img/dashboard/mechanic-Logo.jpg';
import Map from '../../map/Map'
import Rating from "react-rating";

const SelectGarage = (props) => {

    const appointmentContext = useContext(AppointmentContext);
    const authContext = useContext(AuthContext);
    const {user} = authContext
    const [label, setlabel] = useState(false)

    let onMap = []
    const loadAppointmentGarages = (e) => {
        appointmentContext.loadAppointmentGarages({
            name: "oilChange"/* appointmentContext.pages.service.name*/,
            lat: appointmentContext.address.latitude ,
            lng: appointmentContext.address.longitude
        }, e.target.name)

    }
    console.log(appointmentContext.address)
    const garages = () => {
        if (appointmentContext.appointmentGarages) {
            return appointmentContext.appointmentGarages.map((service, i) => {
                onMap.push({coordinates: service.garage.location.coordinates, name: service.garage.name})
                return <Row className={"appointment-garage"} key={i}>
                    <Col lg={3}>
                        <img className={"appointment-garage-image"} alt={''} src={washImage}/>
                    </Col>
                    <Col lg={7} >
                        <h3>{service.garage.name}</h3>
                        <h5>{service.garage.location.formattedAddress}</h5>
                        <h5>Soum :{service.price}</h5>

                        <Rating
                            initialRating={4.5}
                            emptySymbol={<Icon icon={starEmpty} style={{height: "20px",width:'20px'}}/>}
                            fullSymbol={<Icon icon={star} style={{height: "20px",width:'20px'}}/>}
                            fractions={2}
                            readonly
                        />
                    </Col>
                    <Col lg={2}>
                        <button onClick={() => {
                            appointmentContext.setChosenService(service)
                            props.choose(true)
                        }}
                                style={{marginTop: "50px"}}
                                className={"button-select-garage"}> select this
                        </button>
                    </Col>
                </Row>
            })
        }
    }
    return (
        <Container className="select-garage">

            <Row>
                <button className="button-select-garage" name="1" onClick={loadAppointmentGarages}>search for garage 1
                    KM
                </button>
                <button className="button-select-garage" name="5" onClick={loadAppointmentGarages}>dans 5 Km</button>
                <button className="button-select-garage" name="10" onClick={loadAppointmentGarages}>dans 10 Km</button>
            </Row>

            {garages()}

            <button className="button-select-garage" name="10" onClick={() => {
                setlabel(!label)
            }}>show On Map
            </button>
            <Map garages={onMap}/>
        </Container>
    )

};

export default SelectGarage;