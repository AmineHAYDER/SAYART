import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'



import '../../css/authentification/Register.css';

class Register extends React.Component {
    render() {
        return (
            <Container >

                <Row className="justify-content-md-center">
                    <Col lg={5} md={6} xs={12}>

                        <h3 className="blue">
                            Se Connecter <span className="green">A Sayart.tn</span>
                        </h3>
                        <div className="emptyDiv50px"></div>
                        <Form>
                            <Button variant="outline-dark" type="submit" className="buttonWithIcon" block>

                                CONNEXION FACEBOOK
                            </Button>
                            <hr></hr>

                            <h6>Se connecter en utilisant votre email et votre mot de passe</h6>



                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />

                            </Form.Group>



                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Mot de passe" />
                            </Form.Group>


                            <Form.Group controlId="formRemember">
                                <Form.Check type="checkbox" label="Restez connecté" />
                            </Form.Group>



                            <Button variant="primary" type="submit" block>
                                SE CONNECTER
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        );
    }

}

export default Register;