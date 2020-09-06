import React, { useContext, useState } from "react";

import { InputGroup, FormControl, Button, Form, Row, Col } from "react-bootstrap"

import AuthContext from "../../../contexts/Auth/authContext";
import PasswordModal from "./PasswordModal";

import "../../../css/dashboard/Settings.css";

const SettingsPage = (props) => {
    const authContext = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);

    const handleClosePassword = () => setShowPassword(false);
    const handleShowPassword = () => setShowPassword(true);

    return (
        <div>
            <div>
                <h3 className="settings-title mb-0">Mon Profil</h3>
                <h6 className="settings-undertitle mt-2 mb-0 text-secondary"> Gérez vos informations personnelles et de compte</h6>
            </div>
            <section className="settings-section">
                <header className=" border-bottom ">
                    <h5 className="settings-header">Détails du compte</h5>
                </header>

                <div className="settings-input">
                    <div className="settings-subheader">
                        Email
                    </div>
                    <div className="settings-inputgroup">
                        <InputGroup>
                            <FormControl
                                placeholder={authContext.user.email}
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Changer</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <div className="settings-inputgroup settings-input">
                        <a href="#" onClick={handleShowPassword}>Modifier votre mot de passe</a>
                    </div>
                    <div className="div25px"></div>
                </div>
            </section>


            <div className="div25px"></div>


            <section className="settings-section">
                <header className=" border-bottom ">
                    <h5 className="settings-header">Vos informations</h5>
                </header>

                <div className="settings-input">
                    <Form>
                        <Row className="settings-inputgroup">
                            <Col>
                                <div className="settings-subheader">Prénom</div>
                                <div><Form.Control placeholder={authContext.user.name} /></div>
                            </Col>
                            <Col>
                                <div className="settings-subheader">Nom</div>
                                <div><Form.Control placeholder={authContext.user.lastName} /></div>
                            </Col>
                        </Row>
                    </Form>
                    <Button className="settings-button"> Update</Button>
                    <div className="div25px"></div>
                </div>
            </section>
            <div className="div50px"></div>
            <PasswordModal show={showPassword} onHide={handleClosePassword} />
        </div>
    )
}

export default SettingsPage;