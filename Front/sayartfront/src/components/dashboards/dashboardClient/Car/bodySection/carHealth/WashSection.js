import React, {useContext} from "react"

import {Row, Col, ProgressBar, Button} from "react-bootstrap";
import UserContext from '../../../../../../contexts/User/userContext'

const WashSection = () => {

    const userContext = useContext(UserContext)
    const lastWashDate = () => {
        if (userContext.car && userContext.car.dates) {
            return userContext.car.dates.washDate.split("T")[0]
        }
    }
    const approximateNextWashDate = () => {
        if (userContext.car && userContext.car.dates) {
            let nextDate = new Date((new Date(userContext.car.dates.washDate) - 0) + (30 * 24 * 60 * 60 * 1000))

            return (nextDate.toLocaleDateString())
        }
    }

    const NextWashDate = () => {
        if (userContext.car && userContext.car.dates) {
            let nextDate = new Date() - new Date(userContext.car.dates.washDate)
            let daysPassed = (nextDate / 1000 / 60 / 60 / 24).toString().split(".")[0]

            return ((daysPassed / 30) * 100).toString().split(".")[0]
        }
    }
    const HasWashed =
        <div>
            <h3 style={{"textAlign": "left"}}>Lavage</h3>
            <div className="car-health-vidange">
                <div>
                    <Row>
                        <Col style={{"textAlign": "left"}}>
                            <h4 style={{"paddingBottom": "30px"}}> Date dernier Lavage: {lastWashDate()}</h4>
                        </Col>
                        <Col style={{"textAlign": "right"}}>
                            <h4 style={{"paddingBottom": "30px"}}> Date recommandé: {approximateNextWashDate()} </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ProgressBar now={NextWashDate()} label={NextWashDate() + '%'}/>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    const HasNotWashed =
        <div>
            <div>
                <h3>Lavage </h3>
            </div>
            <h3 className="text-secondary">
                Vous n'avez pris aucun rendez-vous de Lavage
            </h3>
            <Button className="add-car-button">
                Prenez un rendez-vous
            </Button>
        </div>

    return (
        <div className="car-section">
            <div>
                {(userContext.car && userContext.car.dates && userContext.car.dates.washDate) ? HasWashed : HasNotWashed}
            </div>
        </div>)

}

export default WashSection;