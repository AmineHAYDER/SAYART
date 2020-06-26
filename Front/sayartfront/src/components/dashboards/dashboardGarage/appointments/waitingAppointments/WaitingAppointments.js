import React, {useContext, useState} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import CardApp from '../AppointmentCard'
import GarageContext from "../../../../../contexts/Garage/garageContext";
import RemainingTime from "../../../../../utils/RemainingTime";
import mechanicImage from '../../../../../img/landingpage/icons/entretien.png';
import wheelImage from '../../../../../img/landingpage/icons/tires.png';
import washImage from '../../../../../img/landingpage/icons/lavage.png';
import oilChangeImage from '../../../../../img/landingpage/icons/vidange.png';


const WaitingAppointments = (props) => {

    const garageContext = useContext(GarageContext)
    let app = []
    const [page, setPage] = useState(app.length)
    let nb = [page, 1 + page, 2 + page, 3 + page]
    const img = (name) => {
        switch (name) {
            case"wheel":
                return wheelImage
            case"wash":
                return washImage
            case"oilChange":
                return oilChangeImage
            case"mechanic":
                return mechanicImage
            default:
                return ''
        }
    }

    const waitingAppointments = () => {

        if (garageContext.appointments) {
            garageContext.appointments.map(appointment => {
                if (RemainingTime(appointment.date).startsWith("dans") && appointment.state === "AppointmentRequest") {
                    return app.push(appointment)
                }
            })
            return nb.map(i => {
                if (app[i]) return <Col lg={3}>
                    <CardApp
                        serviceName={app[i].service.name}
                        car={app[i].car.model}
                        img={img(app[i].service.name)}
                        date={app[i].date}
                        onClick={() => props.setAppointment(app[i])}
                    />
                </Col>
            })

        }
    }
    const NextPage = () => {
        setPage(page + 4)
        if (app.length  < page+4) setPage(0)
    }
    return (<div>
            <Row className={"title-appointment"}>
                <h4>Rendez vous à venir </h4>
                <Button onClick={NextPage}> Next </Button>
            </Row>
            <Row className={"waiting-appointments-container"}>
                {waitingAppointments()}
            </Row>
        </div>
    );

}

export default WaitingAppointments;