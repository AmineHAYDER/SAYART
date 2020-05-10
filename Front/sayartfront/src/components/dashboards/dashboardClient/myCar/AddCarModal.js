import React, { useContext, useState, useEffect } from "react";

import { Container, DropdownButton, ButtonGroup, Dropdown, Row, Col, Form, Button, Modal } from 'react-bootstrap';

import '../../../../css/authentification/Modal.css';
import data from "../../../carIdentification/data/_cars"

const carsData = data.cars;



const AddCarModal = (props) => {

    const [mark, setMark] = useState('het mark');
    const [model, setModel] = useState('het model');
    const [version, setVersion] = useState('het version');

    const clickMark = (e) => {
        setMark(e.target.name)
    }
    const clickModel = (e) => {
        setModel(e.target.name)
    }

    const clickVersion = (e) => {
        setVersion(e.target.name)
    }

    const addCar = () => {
        if (mark != 'het mark' && model != 'het model') {
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
                        <h1 className="label-mark"> </h1>

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
                                            return <Dropdown.Item name={item.mark} onClick={clickMark} eventKey={i}>{item.mark}</Dropdown.Item>
                                        }
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col>
                                <h4 className="car-modal-label">  {mark} </h4>
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
                                        if (item.mark === mark) {
                                            return item.models.map((model, i) => { return <Dropdown.Item name={model.model} onClick={clickModel} eventKey={i}>{model.model}</Dropdown.Item> })
                                        }
                                    })}
                                </DropdownButton>
                            </Col>

                            <Col>
                                <h4 className="car-modal-label">  {model} </h4>
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
                                        if (item.mark === mark) {
                                            return item.models.map((models) => {
                                                if (models.model === model) {
                                                    console.log('oui')
                                                    return models.versions.map((version, i) => {
                                                        console.log(version)
                                                        return <Dropdown.Item name={version} onClick={clickVersion} eventKey={i}>{version}</Dropdown.Item>
                                                    })
                                                }
                                            })
                                        }
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col>
                                <h4 className="car-modal-label">  {version} </h4>
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