import React, { useContext } from 'react';
import {Nav, Button, NavLink, Row, Container} from 'react-bootstrap';
import {Route, Switch, Link, useHistory} from "react-router-dom";
import AuthContext from '../../contexts/Auth/authContext';

import '../../css/landingpage/Topnav.css'

const Profile = () => {




    const authContext = useContext(AuthContext);

    const { isAuthenticated, user } = authContext;


    const testState = e => {
        e.preventDefault();

    }




    return (
        <Container>
            <p>
                {user.name}
            </p>
            <p>
                {user.lastName}
            </p>
            <p>
                {user.email}
            </p>
            <p>
                {user.login}
            </p>

        </Container>

    );

}

export default Profile;