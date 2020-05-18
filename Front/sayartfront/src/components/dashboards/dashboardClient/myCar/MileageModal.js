import React, {useState} from "react";

import {Container, Form, Button, Modal} from 'react-bootstrap';

import '../../../../css/authentification/Modal.css';


const MileageModal = (props) => {

    const [mileage, setMileage] = useState('');
    const [dailyMileage, setDailyMileage] = useState('');


    const onChangeMileage = e => {
        setMileage(e.target.value)
        console.log("mileage")
    };

    const onChangeDailyMileage = e => {
        setDailyMileage(e.target.value)
    }


    const saveMileage = () => {
        console.log("save mileage")
    }

    return (
        <div>

            <Modal show={props.show} onHide={props.onHide} className="modalz" dialogClassName="modal-width">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title className="text-center w-100">
                        <h2 className="font-weight-bolder modaltitle">Votre kilométrage</h2>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Container id="modal-container">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="number" placeholder="Kilométrage" name='mileage' value={mileage}
                                              onChange={onChangeMileage}/>
                            </Form.Group>


                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="number" placeholder="Kilométrage par jour" name='dailyMileage'
                                              value={dailyMileage} onChange={onChangeDailyMileage}/>
                            </Form.Group>
                        </Form>
                    </Container>
                    <Button className="add-car-button" onClick={saveMileage}> Save </Button>
                </Modal.Body>

            </Modal>

        </div>
    );


}

export default MileageModal;