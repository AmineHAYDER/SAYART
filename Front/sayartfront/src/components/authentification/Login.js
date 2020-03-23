import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'



import '../../css/authentification/Register.css';

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });

    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/user/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            /*.then((res) => {
                console.log(res);
                if (res.status === 200) {
                    this.props.history.push('/account');
                } else if (res.status === 401) {
                    alert('invalid credentials')
                }
            }).catch((err) => {
                alert(err)
            }) */

            .then(res => res.json())
            .then(data => {

                console.log(data.data);
                if (data.success === true) {
                    this.props.history.push('/account');
                } else if (data.success === false) {
                    alert('invalid credentials');
                }
            })



    }

    render() {
        return (
            <Container >

                <Row className="justify-content-md-center">
                    <Col lg={5} md={6} xs={12}>

                        <h3 className="blue">
                            Se Connecter <span className="green">A Sayart.tn</span>
                        </h3>
                        <div className="emptyDiv50px"></div>
                        <Form onSubmit={this.handleSubmit}>
                            <Button variant="outline-dark" type="submit" className="buttonWithIcon" block>

                                CONNEXION FACEBOOK
                            </Button>
                            <hr></hr>

                            <h6>Se connecter en utilisant votre email et votre mot de passe</h6>

                            <Form.Group controlId="formBasicEmail">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </Form.Group>



                            <Form.Group controlId="formBasicPassword">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </Form.Group>


                            <Form.Group controlId="formRemember">
                                <Form.Check type="checkbox" label="Restez connecté" />
                            </Form.Group>



                            <Button variant="primary" type="submit" block>
                                <input type="submit" value="Submit" />
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        );
    }

}

export default Register;