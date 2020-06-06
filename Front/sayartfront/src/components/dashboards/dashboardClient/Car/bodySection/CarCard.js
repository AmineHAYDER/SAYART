import React, {useContext} from "react"

import {Row, Col, Image} from "react-bootstrap";

import essenceIcon from "../../../../../img/dashboard/petrol.png";
import kiloIcon from "../../../../../img/dashboard/car.png";
import moneyIcon from "../../../../../img/dashboard/money.png";
import UserContext from "../../../../../contexts/User/userContext";

import AppointmentContext from "../../../../../contexts/Appointment/appointmentContext";

const CarCard = () => {
    const userContext = useContext(UserContext)
    const appointmentContext = useContext(AppointmentContext)

    const Mileage = () => {
        if (userContext.car.mileage) {
            return (
                userContext.car.mileage.value/1
                +
                (
                    userContext.car.mileage.mileagePerDay
                    *
                    (
                        ((Date.now() - new Date(userContext.car.mileage.date)) / 1000 / 60 / 60 / 24)
                        .toString()
                        .split(".")[0])
                ).valueOf()
            )
        } return  'null'
    }
    const MileagePerDay = () => {
        if (userContext.car && userContext.car.mileage) return (userContext.car.mileage.mileagePerDay)
    }
    const moneySpent = () => {
        let money = 0
        if (appointmentContext.appointments) {
            appointmentContext.appointments.map(app => {
                money += app.service.price
            })
        }
        return money
    }
    const fuel = () => {
        if (userContext.car && userContext.car.fuel) {
            switch (userContext.car.fuel.type) {
                case 'Gasoil super':
                    return 1775
                case 'Super sans plomb':
                    return 2005
                case 'Gasoil':
                    return 1530
                default:
                    return 0;
            }
        }
    }
    return (


        <Row>
            <Col className="car-card mb-5 p-5">

                <Image src={essenceIcon}/>
                <div>
                    <h4 className="mb-2 ">Essence</h4>
                    <span className="text-secondary font-small">{fuel()} Dt/Litres</span>
                </div>


            </Col>
            <Col className="car-card mb-5 p-5">

                <Image src={moneyIcon}/>
                <div>
                    <h4 className="mb-2 ">Money</h4>
                    <span className="text-secondary font-small">{moneySpent()} DT</span>
                </div>


            </Col>
            <Col className="car-card mb-5 p-5">

                <Image src={kiloIcon}/>
                <div>
                    <h4 className="mb-2 ">Kilométrage</h4>
                    <span className="text-secondary font-small">{Mileage()} Km</span>
                    <hr/>
                    <span className="text-secondary font-small">{MileagePerDay()} Km/jour</span>
                </div>


            </Col>
        </Row>
    )
}


export default CarCard;