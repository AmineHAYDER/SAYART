import React, {useState} from "react";

import {Container, DropdownButton, ButtonGroup, Dropdown, Row, Col, Button, Modal} from 'react-bootstrap';

import '../../../../css/authentification/Modal.css';
import data from "../../../carIdentification/data/_cars"

const carsData = data.cars;


const AddCarModal = (props) => {

    const [car, setCar] = useState(
        {
            mark: 'het mark',
            model: 'het model',
            version: 'het version'
        });

    const click = (e, value) => {
        setCar({...car, [e.target.name]: value})
    }

    const addCar = () => {
        if (car.mark !== 'het mark' && car.model !== 'het model') {
            console.log("add car");
            props.onHide();
            props.mileageModal();
        }
    }

    return (
        <div>

            <Modal show={props.show} onHide={props.onHide} className="modalz" dialogClassName="modal-width">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title className="text-center w-100">
                        <h2 className="font-weight-bolder modaltitle">نوع كرهبتك </h2>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Container id="modal-container">
                        <h1 className="label-mark">karhabtek ya fraise</h1>

                        <Row>
                            <Col>
                                <DropdownButton
                                    className="drop-down-color"
                                    as={ButtonGroup}
                                    id={`dropdown-button-drop-down`}
                                    drop={"down"}
                                    variant="secondary"
                                    title={` Mark `}
                                >
                                    {carsData.map((item, i) => {
                                        if (item.mark) {
                                            return <Dropdown.Item name={ "mark"} onClick={(e) => click(e, item.mark)}
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
                                    variant="secondary"
                                    title={` Model `}
                                >
                                    {carsData.map((item) => {
                                        if (item.mark === car.mark) {
                                            return item.models.map((model, i) => {
                                                return <Dropdown.Item name={ "model"} onClick={(e) => click(e, model.model)}
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
                                    variant="secondary"
                                    title={` Version `}
                                >
                                    {carsData.map((item, i) => {
                                        if (item.mark === car.mark) {
                                            return item.models.map((models) => {
                                                if (models.model === car.model) {
                                                    console.log('oui')
                                                    return models.versions.map((version, i) => {
                                                        console.log(version)
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
                    </Container>
                    <Button className="add-car-button" onClick={addCar}> Ajouter </Button>
                </Modal.Body>

            </Modal>

        </div>
    );


}

export default AddCarModal;