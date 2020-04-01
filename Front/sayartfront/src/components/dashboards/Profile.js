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
        <div>
            <div style={{ height: "100px", background: "white" }}>
            </div>
                    <a>
                    {user.name}
                    </a>

        </div>

    );

}

export default Profile;