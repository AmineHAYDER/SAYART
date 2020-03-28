import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'



import '../../css/authentification/Register.css';

const Register = () => {

    const [user, setUser] = useState({

        email: '',

        password: ''
    })

    const { email, password } = user;

    const onChange = (event) => {

        setUser({ ...user, [event.target.name]: event.target.value });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        /* fetch('http://localhost:5000/user/login', {
             method: 'POST',
             body: JSON.stringify(this.state),
             headers: {
                 'Content-Type': 'application/json'
             }
         })
             
 
             .then(res => res.json())
             .then(data => {
 
                 console.log(data.data);
                 if (data.success === true) {
                     this.props.history.push('/');
                 } else if (data.success === false) {
                     alert('invalid credentials');
                 }
             }) */

        console.log(user.password + " " + user.email);

    }


    return (
        <Container >

            <Row className="justify-content-md-center">
                <Col lg={5} md={6} xs={12}>

                    <h3 className="blue">
                        Se Connecter <span className="green">A Sayart.tn</span>
                    </h3>
                    <div className="emptyDiv50px"></div>
                    <Form onSubmit={handleSubmit}>
                        <Button variant="outline-dark" type="submit" className="buttonWithIcon" block>

                            CONNEXION FACEBOOK
                            </Button>
                        <hr></hr>

                        <h6>Se connecter en utilisant votre email et votre mot de passe</h6>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Email" name='email' value={email} onChange={onChange} />
                        </Form.Group>



                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={onChange} />
                        </Form.Group>


                        <Form.Group controlId="formRemember">
                            <Form.Check type="checkbox" label="Restez connecté" />
                        </Form.Group>



                        <Button variant="primary" type="submit" block>
                            Connecter
                            </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    );


}

export default Register;