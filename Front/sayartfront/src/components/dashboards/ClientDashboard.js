import React, { useContext } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Route, Switch, Link } from "react-router-dom";
import AuthContext from '../../contexts/Auth/authContext';

const ClientDashboard = () => {


    const authContext = useContext(AuthContext);

    const { isAuthenticated } = authContext;

    const testState = e => {
        e.preventDefault();
        console.log(isAuthenticated);
        console.log(authContext.user);
    }




    return (
        <div>

            <Nav>
                <Nav.Item as="li">
                    <Link exact to="/"><Nav.Link as="a" >account</Nav.Link> </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link exact to="/dashboard"><Nav.Link as="a" >dash</Nav.Link> </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link exact to="/history"><Nav.Link as="a" >history</Nav.Link> </Link>
                </Nav.Item>

            </Nav>

            <div style={{ height: "300px", background: "blue" }}>


            </div>

            <Button variant="primary" onClick={testState} block>
                TEST STATE
                            </Button>
            <Switch>
            </Switch>

        </div>
    );

}

export default ClientDashboard;