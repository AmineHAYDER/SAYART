import React from "react"

import { Col, Row, Form, Alert, Button } from "react-bootstrap";

const CarDetails = () => {

    return (<div>

        <Form>
            <Row>
                <Alert variant="secondary">
                    Veuillez remplir les informations ci-dessous. Plus vous fournissez d'informations, plus  nous pourrons fournir des conseils personnalisés a votre voiture.
               </Alert>
                <Col lg={1}></Col>
                <Col>
                    <Form.Group controlId="1">
                        <Form.Label>Kilométrage actuel</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="3">
                        <Form.Label>Type huile de votre voiture</Form.Label>
                        <Form.Control as="select">
                            <option>Huile</option>
                            <option>Zit zitouna</option>
                            <option>Total</option>
                            <option>Je ne sais pas</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="5">
                        <Form.Label>Date dérnier visite</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="3">
                        <Form.Label>Type essence</Form.Label>
                        <Form.Control as="select">
                            <option>Essence</option>
                            <option>Sans plomb</option>
                            <option>Zit</option>

                        </Form.Control>
                    </Form.Group>


                </Col>
                <Col lg={1}></Col>
                <Col>
                    <Form.Group controlId="2">
                        <Form.Label>Kilométrage par jour</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="3">
                        <Form.Label>Type conduite</Form.Label>
                        <Form.Control as="select">
                            <option>Manuel</option>
                            <option>Tomatique</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="5">
                        <Form.Label>Date dérnier vidange</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="2">
                        <Form.Label>Essence par mois</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Button type="submit">Sauvegarder</Button>
        </Form>

    </div>)
}

export default CarDetails;