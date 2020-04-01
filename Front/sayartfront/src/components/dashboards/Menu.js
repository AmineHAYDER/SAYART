import React, { useContext } from 'react';
import {Nav, Button, NavLink, Row, Container} from 'react-bootstrap';
import {Route, Switch, Link, useHistory} from "react-router-dom";
import AuthContext from '../../contexts/Auth/authContext';

import '../../css/landingpage/Topnav.css'

const Menu = () => {

    let history = useHistory();



    const authContext = useContext(AuthContext);

    const { isAuthenticated, user } = authContext;


    const testState = e => {
        e.preventDefault();

        history.push(`/dashboard/client/${e.target.name}`);

    }




    return (<Container >
            <Row>
                <div>
                    <div style={{ height: "100px", background: "white" }}>
                    </div>

                    <Button variant="primary" onClick={testState} block>
                        Appointments
                    </Button>
                    <Button variant="primary" onClick={testState} name="profile" block>
                        My Profile
                    </Button>
                    <Button variant="primary" onClick={testState} block>
                        Stock
                    </Button>
                    <Button variant="primary" onClick={testState} block>
                        Analytics
                    </Button>
                    <Switch>
                    </Switch>

                </div>
            </Row>
        </Container>
    );

}

export default Menu;