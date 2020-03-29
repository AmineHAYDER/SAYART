import React from 'react';
import { Nav } from 'react-bootstrap';
import { Route, Switch, Link } from "react-router-dom";


class ClientDashboard extends React.Component {

    


    render() {



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

                <div style={{height: "300px",background:"blue"}}></div>
                <Switch>
                </Switch>

            </div>
        );
    }
}

export default ClientDashboard;