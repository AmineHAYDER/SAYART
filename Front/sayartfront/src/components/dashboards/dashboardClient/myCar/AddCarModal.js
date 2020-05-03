import React, { useContext, useState, useEffect } from "react";

import { Form, Button, Modal, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AuthContext from "../../contexts/Auth/authContext";



import '../../css/authentification/Modal.css';

const AddCarModal = (props) => {

    const authContext = useContext(AuthContext);
    let history = useHistory();


    const onChange = e => {

    };


    const onSubmit = async e => {
        e.preventDefault();
    }

    const [selects, setSelects] = useState({
        mark: true,
        model: false,
        year: false
    });


    const mark = (
        <Fragment>
            <option>Audi</option>
            <option>Audi</option>
            <option>Mercedes</option>
            <option>Peugot</option>
            <option>Opel</option>
        </Fragment>
    )

    const model = (
        <Fragment>
            <option>Y8</option>
            <option>XZ</option>
            <option>EZ</option>
            <option>AZ</option>
            <option>RZ</option>
        </Fragment>
    )

    const year = (
        <Fragment>
            <option>year</option>
            <option>1996</option>
            <option>1997</option>
            <option>1998</option>
            <option>1999</option>
        </Fragment>
    )






    return (
        <div>

            <Modal show={props.show} onHide={props.onHide} className="modalz" dialogClassName="modal-width">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title className="text-center w-100"> <h2 className="font-weight-bolder modaltitle">AJOUTER UNE VOITURE </h2></Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={onSubmit}>

                        <Form.Control as="select">
                            {mark}
                        </Form.Control>
                        <Form.Control as="select">
                            {year}
                        </Form.Control>
                        <Form.Control as="select">
                            {model}
                        </Form.Control>




                        <Button variant="warning" type="submit" block>
                            AJOUTER
                        </Button>
                    </Form>




                </Modal.Body>

            </Modal>

        </div>
    );



}

export default AddCar;