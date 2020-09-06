import React from 'react'

import { Container, ButtonGroup, Row, Col, Button, Modal, Form } from 'react-bootstrap';

import '../../../css/authentification/Modal.css';



const AddCarModal = (props) => {

    return (
        <div>

            <Modal show={props.show} onHide={props.onHide} className="modalz" dialogClassName="modal-width">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title className="text-center w-100">
                        <h2 className="font-weight-bolder modaltitle"></h2>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <img height="64" width="64" className="mb-6" src={require("../../../img/dashboard/password.png")} />
                    <h2 >Changer Mot De Passe</h2>
                    <Form>


                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="password" placeholder="Mot de passe actuel" name='currentPw' required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Nouveau mot de passe" name='newPw' required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Confirmer mot de passe" name='confirmPw' required
                            />
                        </Form.Group>


                        <Button variant="warning" type="submit" block>
                            Soumettre
                        </Button>
                    </Form>

                </Modal.Body>

            </Modal>

        </div >
    );


}

export default AddCarModal;