import React, {useContext, useState} from "react";

import {Container, DropdownButton, ButtonGroup, Dropdown, Row, Col, Button, Modal} from 'react-bootstrap';
import {NotificationManager} from "react-notifications";
import UserContext from '../../../../../contexts/User/userContext'
import FormItem from "../../../../utils/FormItem";
import 'react-notifications/lib/notifications.css';
import '../../../../../css/authentification/Modal.css';


import data from "../../../../carIdentification/data/_cars"

const carsData = data.cars;

const AddCarModal = (props) => {

    const userContext = useContext(UserContext)

    const [car, setCar] = useState(
        {
            mark: '',
            model: '',
            version: '',
            vehicleIdentificationNumber: ""
        });

    const click = (e, value) => {
        setCar({...car, [e.target.name]: value})
    }
    const setIN = (e) => {
        setCar({...car, [e.target.name]: e.target.value })
    }
    console.log(car.vehicleIdentificationNumber)
    const addCar = () => {
        if (car.mark !== '' && car.model !== '') {
            userContext.addCar({
                mark: car.mark,
                model: car.model,
                version: car.version,
                photo: car.version + '.jpg',
                vehicleIdentificationNumber: car.vehicleIdentificationNumber
            })
            /*props.onHide();
            props.mileageModal();*/

        userContext.loadCar()
            .then((success) => success ? NotificationManager.success('Success message', 'Voiture Ajoutée') : NotificationManager.error('non Success message', 'Voiture pas Ajoutée'))

    }
    }

    return (
        <div>

            <Modal show={props.show} onHide={props.onHide} className="modalz" dialogClassName="modal-width">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title className="text-center w-100">
                        <h2 className="font-weight-bolder modaltitle"> كرهبتك </h2>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Container id="modal-container">
                        <Row>
                            <Col>
                                <DropdownButton
                                    className="drop-down-color"
                                    as={ButtonGroup}
                                    id={`dropdown-button-drop-down`}
                                    drop={"down"}
                                    variant="outline-dark"
                                    title={` Marque `}
                                >
                                    {carsData.map((item, i) => {
                                        if (item.mark) {
                                            return <Dropdown.Item name={"mark"} onClick={(e) => click(e, item.mark)}
                                                                  eventKey={i}>{item.mark}</Dropdown.Item>
                                        } else return null
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col>
                                <h4 className="car-modal-label">  {car.mark} </h4>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <DropdownButton
                                    as={ButtonGroup}
                                    id={`dropdown-button-drop-down`}
                                    drop={"down"}
                                    variant="outline-dark"
                                    title={`Modéle`}
                                >
                                    {carsData.map((item) => {
                                        if (item.mark === car.mark) {
                                            return item.models.map((model, i) => {
                                                return <Dropdown.Item name={"model"}
                                                                      onClick={(e) => click(e, model.model)}
                                                                      eventKey={i}>{model.model}</Dropdown.Item>
                                            })
                                        } else return null
                                    })}
                                </DropdownButton>
                            </Col>

                            <Col>
                                <h4 className="car-modal-label">  {car.model} </h4>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <DropdownButton
                                    as={ButtonGroup}
                                    id={`dropdown-button-drop-down`}
                                    drop={"down"}
                                    variant="outline-dark"
                                    title={` Version `}
                                >
                                    {carsData.map((item, i) => {
                                        if (item.mark === car.mark) {
                                            return item.models.map((models) => {
                                                if (models.model === car.model) {
                                                    return models.versions.map((version, i) => {
                                                        return <Dropdown.Item name={"version"}
                                                                              onClick={(e) => click(e, version)}
                                                                              eventKey={i}>{version}</Dropdown.Item>
                                                    })
                                                } else return null
                                            })
                                        } else return null
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col>
                                <h4 className="car-modal-label">  {car.version} </h4>
                            </Col>
                        </Row>
                        <FormItem name={"vehicleIdentificationNumber"} value={car.vehicleIdentificationNumber} placeholder={"Numéro de chassis"} onChange={setIN}/>
                    </Container>
                    <Button className="add-car-button" variant={"secondary"} onClick={addCar}> Ajouter </Button>
                </Modal.Body>

            </Modal>

        </div>
    );


}

export default AddCarModal;