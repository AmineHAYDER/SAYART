import React from 'react'
import {Button, Card} from 'react-bootstrap'
import remaining from "../../../../utils/RemainingTime";


const AppointmentCard = (props) => {


    return (
        <Card style={{width: '14rem'}} className={"appointment-card"}>
            <Card.Img variant="button" className={"img-appointment"} src={props.img}/>
            <Card.Body>
                <Card.Title>{props.serviceName} </Card.Title>
                <Card.Text>
                    <h3>{props.car}</h3>
                </Card.Text>
                {remaining(props.date)}

            </Card.Body>
            <Card.Footer>
                <Button onClick={props.onClick} variant={"secondary"}>Check details</Button>
            </Card.Footer>
        </Card>);
}

export default AppointmentCard;