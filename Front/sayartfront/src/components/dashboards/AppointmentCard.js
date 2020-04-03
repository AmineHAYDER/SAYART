import React, { useContext } from 'react';
import {Nav, Button, Row, Container,Card} from 'react-bootstrap';
import AuthContext from '../../contexts/Auth/authContext';

import logo from '../../img/landingpage/SayartlogoMini.png';
import '../../css/dashboard/Menu.css'

const AppointmentCard = (props) => {


    return (<Container >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Appointment 1 </Card.Title>
                    <Card.Text>
                        15:30
                        <p>ali fathi</p>
                    </Card.Text>
                    <Button variant="primary">Check details</Button>
                </Card.Body>
            </Card>
        </Container>
    );

}

export default AppointmentCard;