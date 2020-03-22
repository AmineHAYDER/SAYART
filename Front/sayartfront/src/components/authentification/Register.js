import React from 'react'
import { Container, Form, Button, Image, Row, Col } from 'react-bootstrap'

import fbLogo from '../../img/landingpage/facebookIcon.png';

import '../../css/authentification/Register.css';

class Register extends React.Component {
    render() {
        return (
            <Container >

                <Row className="justify-content-md-center">
                    <Col lg={5} md={6} xs={12}>
                        <h2 className="blue">
                            Créez un compte
                        </h2>
                        <div className="emptyDiv50px"></div>
                        <Form>
                            <Button variant="outline-dark" type="submit" className="buttonWithIcon" block>

                                Facebook sign up
                            </Button>
                            <hr></hr>

                            <h5>Entrez vos coordonnées ci-dessous</h5>

                            <Form.Group controlId="formNom">
                                <Form.Control type="text" placeholder="Nom" />
                            </Form.Group>
                            <Form.Group controlId="formPrenom">
                                <Form.Control type="text" placeholder="Prénom" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />

                            </Form.Group>
                            <Form.Group controlId="formTel">
                                <Form.Control type="text" placeholder="Num téléphone" />
                            </Form.Group>


                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Mot de passe" />
                            </Form.Group>


                            <Form.Group controlId="formConditionUt">
                                <Form.Check type="checkbox" label="En cochant cette case, vous indiquez que vous avez lu et accepté nos conditions et notre politique de confidentialité." />
                            </Form.Group>

                            <Form.Group controlId="formNewLetter">
                                <Form.Check type="checkbox" label="Cochez cette case si vous souhaitez recevoir des offres exclusives et des notifications concernant votre voiture par e-mail." />
                            </Form.Group>

                            <Button variant="primary" type="submit" block>
                                S'INSCRIRE
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        );
    }

}

export default Register;