import React, {useContext, useState, useEffect} from "react";

import {Form, Button, Modal, Alert} from 'react-bootstrap';
import AuthContext from "../../contexts/Auth/authContext";


import '../../css/authentification/Modal.css';

const LoginModal = (props) => {

    const authContext = useContext(AuthContext);
    const {login, error, clearErrors, isAuthenticated} = authContext;

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const {email, password} = user;

    const onChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        if (error === 'LOGIN_FAIL') {
            showAlert();
        }

        if (isAuthenticated) {
            if (!authContext.user.isGarage) {

                /* history.push('/dashboard');*/
            }
            props.onHide();
        }

    }, [error, isAuthenticated,authContext.user.isGarage,props])

    const onSubmit = async e => {
        e.preventDefault();
        clearErrors();
        await login({
            "email": email,
            "password": password
        })

    }

    const NoAccount = () => {
        props.onHide();
        props.showRegister();
    }


    const [alert, setAlert] = useState(false);

    const closeAlert = () => setAlert(false);
    const showAlert = () => setAlert(true);

    return (
        <div>

            <Modal show={props.show} onHide={props.onHide} className="modalz" dialogClassName="modal-width">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title className="text-center w-100"><h2 className="font-weight-bolder modaltitle">SE
                        CONNECTER </h2></Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={onSubmit}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Email" name='email' required value={email}
                                          onChange={onChange}/>
                        </Form.Group>


                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name='password' required
                                          value={password} onChange={onChange}/>
                        </Form.Group>


                        <Button variant="warning" type="submit" block>
                            Connecter
                        </Button>
                    </Form>
                    <div>

                        <Alert variant="danger" show={alert} onClose={closeAlert} className="alertz" dismissible>
                            Email ou mot de passe incorrect, Vérifiez les informations fournies
                        </Alert>

                    </div>
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
                        <Button variant="outline-dark" type="submit" className="buttonWithIcon" block>
                            CONNEXION FACEBOOK
                        </Button>
                    </Form>
                    <div className="mdp-oublie">
                        <a href="/" className="text-secondary">Mot De Passe Oublié?</a>
                    </div>

                    <div className="noaccount">
                        <span>Vous n'avez pas un compte? </span> <a href="/" className="inscription"
                                                                    onClick={NoAccount}>Inscrivez vous.</a>
                    </div>
                </Modal.Body>

            </Modal>

        </div>
    );


}

export default LoginModal;