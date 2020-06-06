import React, {useContext} from "react"

import {Row, Col, ProgressBar, Button} from "react-bootstrap";
import UserContext from '../../../../../../contexts/User/userContext'

const OilChangeSection = () => {

    const userContext = useContext(UserContext)
    const lastOilChangeDate = () => {
        if (userContext.car && userContext.car.dates) {
            return userContext.car.dates.oilChangeDate.split("T")[0]
        }
    }
    const approximateNextOilChangeDate = () => {

        if (userContext.car && userContext.car.dates && userContext.car.mileage) {
            let days = (9000 / userContext.car.mileage.mileagePerDay) * 24 * 60 * 60 * 1000
            let nextDate = new Date((new Date(userContext.car.dates.oilChangeDate) - 0) + days)
            return (nextDate.toLocaleDateString())
        }

    }

    const NextOilChangeDate = () => {
        if (userContext.car && userContext.car.dates && userContext.car.mileage) {
            let days = (9000 / userContext.car.mileage.mileagePerDay)
            let datePassed = new Date() - new Date(userContext.car.dates.oilChangeDate)
            let daysPassed = (datePassed / 1000 / 60 / 60 / 24).toString().split(".")[0]

            return ((daysPassed / days) * 100).toString().split(".")[0]
        }

    }


    const HasOilChanged =
        <div>
            <h3 style={{"textAlign": "left"}}>Vidange</h3>
            <div className="car-health-vidange">
                <div>
                    <Row>
                        <Col style={{"textAlign": "left"}}>
                            <h4 style={{"paddingBottom": "30px"}}> Date dernier vidange: {lastOilChangeDate()}</h4>
                        </Col>
                        <Col style={{"textAlign": "right"}}>
                            <h4 style={{"paddingBottom": "30px"}}> Date
                                recommandé: {approximateNextOilChangeDate()} </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ProgressBar now={NextOilChangeDate()} label={NextOilChangeDate() + '%'}/>
                        </Col>
                    </Row>
                    {(NextOilChangeDate() > 100) ? <Button className="add-car-button">
                        Prenez un Vidange
                    </Button> : null}
                </div>
            </div>
        </div>
    const HasNotOilChanged =
        <div>
            <div>
                <h3>Vidange </h3>
            </div>
            <h3 className="text-secondary">
                Vous n'avez pris aucun rendez-vous de Vidange
                vous pouvez completeer les info de votre profil
            </h3>
            <Button className="add-car-button">
                Prenez un rendez-vous
            </Button>
        </div>

    return (
        <div className="car-section">
            <div>
                {(userContext.car && userContext.car.dates && userContext.car.dates.oilChangeDate && userContext.car.mileage) ? HasOilChanged : HasNotOilChanged}
            </div>
        </div>)

}

export default OilChangeSection;