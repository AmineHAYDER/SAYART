import React, {useState, useContext, useEffect} from 'react'
import {Form, Button, Modal, Alert} from 'react-bootstrap';
import AuthContext from '../../contexts/Auth/authContext';

import {NotificationManager} from "react-notifications";

import '../../css/authentification/Modal.css';

const RegisterModal = (props) => {

    const authContext = useContext(AuthContext);

    const {register, isAuthenticated, error, clearErrors} = authContext;


    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
    }, [isAuthenticated, props.history]);

    const {firstname, lastname, email, phone, password} = user;


    useEffect(() => {
        if (error === "REGISTER_FAIL") {
            showAlert();
            clearErrors();
            console.log("hooy" + error);
        }

    }, [error,clearErrors]);


    const onChange = e => {

        setUser({...user, [e.target.name]: e.target.value})
    };

    const onSubmit = async e => {
        e.preventDefault();

        let x = Math.floor(Math.random() * 100);

        NotificationManager.success("Connecting...")
        clearErrors();
        await register({
            "login": firstname + lastname + x,
            "role": "user",
            "name": firstname,
            "lastName": lastname,
            "address": "aoizjeâzke",
            "image": "no-photo.jpg",
            "number": phone,
            "email": email,
            "password": password,
            "isGarage": false,
            "rib": "98413219516"
        })
        if (error !== "AUTH_ERROR" && error !== "REGISTER_FAIL") {
            props.onHide();
            console.log("pass");
        }

    }

    const AlreadyUser = () => {
        props.onHide();
        props.showLogin();
    }

    const [alert, setAlert] = useState(false);
    const closeAlert = () => setAlert(false);
    const showAlert = () => setAlert(true);

    return (<div>
        <Modal show={props.show} onHide={props.onHide} className="modalz" dialogClassName="modal-width">
            <Modal.Header closeButton className="modal-header">
                <Modal.Title className="text-center w-100"><h2 className="font-weight-bolder modaltitle">CREER UN
                    COMPTE </h2></Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>


                    <Form.Group controlId="formNom">
                        <Form.Control type="text" placeholder="Nom" name='firstname' value={firstname}
                                      onChange={onChange}/>

                    </Form.Group>
                    <Form.Group controlId="formPrenom">
                        <Form.Control type="text" placeholder="Prénom" name='lastname' value={lastname}
                                      onChange={onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" name='email' value={email} onChange={onChange}/>

                    </Form.Group>
                    <Form.Group controlId="formTel">
                        <Form.Control type="text" placeholder="Num téléphone" name='phone' value={phone}
                                      onChange={onChange}/>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Mot de passe" name='password' value={password}
                                      onChange={onChange}/>
                    </Form.Group>
                    {/*
                        <Form.Group controlId="formFile">
                            <Form.Control type="file" placeholder="upload a photo" name='photo'  />
                        </Form.Group>*/}
                    <Alert variant="danger" show={alert} onClose={closeAlert} className="alertz" dismissible>
                        Adresse email deja utilisé
                    </Alert>

                    <Button variant="outline-dark" type="submit"  className="buttonWithIcon" block>
                        S'INSCRIRE
                    </Button>

                </Form>

                <div className="row ou-div">
                    <div className="col">
                        <hr/>
                    </div>
                    <div className="col-auto">oû</div>
                    <div className="col">
                        <hr></hr>
                    </div>
                </div>

                <Form>
                    <Button variant="primary" type="submit" block>
                        Facebook sign up
                    </Button>
                </Form>
                <div className="mdp-oublie">
                    <a href="/" className="text-secondary">En créant un compte, vous acceptez les conditions
                        d'utilisation et la politique de confidentialité</a>
                </div>

                <div className="noaccount">
                    <span>Vous avez déja un compte? </span> <a href="/" className="inscription" onClick={AlreadyUser}>Connectez
                    vous.</a>
                </div>
            </Modal.Body>

        </Modal>


    </div>);
}

export default RegisterModal;