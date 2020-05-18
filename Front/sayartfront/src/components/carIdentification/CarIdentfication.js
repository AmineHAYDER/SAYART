import React, {useState} from "react";
import {Container, DropdownButton, ButtonGroup, Dropdown, Row, Col} from "react-bootstrap";
import '../../css/carIdentification/carIdentification.css'
//data
import data from './data/_cars'

const carsData = data.cars;


const CarIdentification = () => {
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
    return (
        <Container className="car-identification-container">
            <h1 className="label-mark">نوع كرهبتك </h1>
            <hr style={{"border-color": "white"}}></hr>
            <Row>
                <Col>
                    <DropdownButton
                        as={ButtonGroup}
                        id={`dropdown-button-drop-down`}
                        drop={"down"}
                        variant="secondary"
                        title={` Marque de voiture `}
                    >
                        {carsData.map((item, i) => {
                            if (item.mark) {
                                return <Dropdown.Item name={item.mark} onClick={clickMark}
                                                      eventKey={i}>{item.mark}</Dropdown.Item>
                            } else return null
                        })}
                    </DropdownButton>
                </Col>
                <Col>
                    <h4 className="label-mark">  {mark} </h4>
                </Col>
            </Row>
            <hr style={{"border-color": "rgb(234,225,234)"}}></hr>
            <Row>
                <Col>
                    <DropdownButton
                        as={ButtonGroup}
                        id={`dropdown-button-drop-down`}
                        drop={"down"}
                        variant="secondary"
                        title={` Marque de voiture `}
                    >
                        {carsData.map((item) => {
                            if (item.mark === mark) {
                                return item.models.map((model, i) => {
                                    return <Dropdown.Item name={model.model} onClick={clickModel}
                                                          eventKey={i}>{model.model}</Dropdown.Item>
                                })
                            } else return null
                        })}
                    </DropdownButton>
                </Col>

                <Col>
                    <h4 className="label-mark">  {model} </h4>
                </Col>
            </Row>
            <hr style={{"border-color": "rgb(250,231,255)"}}></hr>
            <Row>
                <Col>
                    <DropdownButton
                        as={ButtonGroup}
                        id={`dropdown-button-drop-down`}
                        drop={"down"}
                        variant="secondary"
                        title={` Marque de voiture `}
                    >
                        {carsData.map((item, i) => {
                            if (item.mark === mark) {
                                return item.models.map((models) => {
                                    if (models.model === model) {
                                        console.log('oui')
                                        return models.versions.map((version, i) => {
                                            console.log(version)
                                            return <Dropdown.Item name={version} onClick={clickVersion}
                                                                  eventKey={i}>{version}</Dropdown.Item>
                                        })
                                    } else return null
                                })
                            } else return null
                        })}
                    </DropdownButton>
                </Col>
                <Col>
                    <h4 className="label-mark">  {version} </h4>
                </Col>
            </Row>
        </Container>
    )

}


export default CarIdentification;