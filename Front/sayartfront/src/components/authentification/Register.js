import React, { useState, useContext, useEffect } from 'react'
import {Container, Form, Button, Image, Row, Col, Nav} from 'react-bootstrap';
import axios from 'axios';
import fbLogo from '../../img/landingpage/facebookIcon.png';
import AuthContext from '../../contexts/Auth/authContext';

import '../../css/authentification/Register.css';
import {Link} from "react-router-dom";

const Register = (props) => {

    const authContext = useContext(AuthContext);

    const { register, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
    }, [isAuthenticated, props.history]);

    const { firstname, lastname, email, phone, password } = user;


    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/dashboard/client');
        }
    })

    const onChange = e => {

        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = e => {
        e.preventDefault();

        let x = Math.floor(Math.random() * 100);
        register({
            "login": firstname + lastname + x,
            "role": "user",
            "name": firstname,
            "lastName": lastname,
            "address": "aoizjeâzke",
            "image": "aziej6545.jpg",
            "number": phone,
            "email": email,
            "password": password,
            "isGarage": false,
            "rib": "98413219516"

        })
        console.log('called register');


    }

    const testState = e => {
        e.preventDefault();
        console.log(isAuthenticated);
        console.log(authContext.user);

    }
    return (
        <Container >

            <Row className="justify-content-md-center">
                <Col lg={5} md={6} xs={12}>
                    <h2 className="blue">
                        Créez un compte
                        </h2>
                    <div className="emptyDiv50px"></div>
                    <Form onSubmit={onSubmit}>
                        <Button variant="outline-dark" type="submit" className="buttonWithIcon" block>

                            Facebook sign up
                            </Button>
                        <hr></hr>

                        <h5>Entrez vos coordonnées ci-dessous</h5>

                        <Form.Group controlId="formNom">
                            <Form.Control type="text" placeholder="Nom" name='firstname' value={firstname} onChange={onChange} />

                        </Form.Group>
                        <Form.Group controlId="formPrenom">
                            <Form.Control type="text" placeholder="Prénom" name='lastname' value={lastname} onChange={onChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={onChange} />

                        </Form.Group>
                        <Form.Group controlId="formTel">
                            <Form.Control type="text" placeholder="Num téléphone" name='phone' value={phone} onChange={onChange} />
                        </Form.Group>


                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Mot de passe" name='password' value={password} onChange={onChange} />
                        </Form.Group>
                        {/*
                        <Form.Group controlId="formFile">
                            <Form.Control type="file" placeholder="upload a photo" name='photo'  />
                        </Form.Group>*/}

                        <Form.Group controlId="formConditionUt">
                            <Form.Check type="checkbox" label="En cochant cette case, vous indiquez que vous avez lu et accepté nos conditions et notre politique de confidentialité." />
                        </Form.Group>

                        <Form.Group controlId="formNewLetter">
                            <Form.Check type="checkbox" label="Cochez cette case si vous souhaitez recevoir des offres exclusives et des notifications concernant votre voiture par e-mail." />
                        </Form.Group>


                            <Link className="NoUnder" to="/login"><Nav.Link className="links-items" as="a" >LOUGOUT</Nav.Link>
                                <div className="underline"></div></Link>


                        <Button variant="primary" type="submit" block>
                            S'INSCRIRE
                            </Button>
                        
                    </Form>
                </Col>
            </Row>
        </Container>

    );


}

export default Register;