import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom';
import {Container, Form, Button, Row, Col} from 'react-bootstrap'


import '../../css/authentification/Register.css';
import AuthContext from "../../contexts/Auth/authContext";

const Login = () => {
    const authContext = useContext(AuthContext);

    let history = useHistory();

    const {login} = authContext;

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const {email, password} = user;

    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const onSubmit = async e => {
        e.preventDefault();

        await login({
            "email": email,
            "password": password
        })

        history.push('/dashboard/')


    }


    return (
        <Container>

            <Row className="justify-content-md-center">
                <Col lg={5} md={6} xs={12}>

                    <h3 className="yellowColor">
                        Se Connecter <span className="purpleColor">A Sayart.tn</span>
                    </h3>
                    <div className="emptyDiv50px"></div>
                    <Form onSubmit={onSubmit}>
                        <Button variant="outline-dark" type="submit" className="buttonWithIcon" block>

                            CONNEXION FACEBOOK
                        </Button>
                        <hr></hr>

                        <h6>Se connecter en utilisant votre email et votre mot de passe</h6>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Email" name='email' required value={email}
                                          onChange={onChange}/>
                        </Form.Group>


                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name='password' required
                                          value={password} onChange={onChange}/>
                        </Form.Group>


                        <Form.Group controlId="formRemember">
                            <Form.Check type="checkbox" label="Restez connecté"/>
                        </Form.Group>


                        <Button variant="warning" type="submit" block>
                            Connecter
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    );


}

export default Login;