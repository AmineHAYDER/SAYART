import React, { useContext } from 'react';
import {Container} from 'react-bootstrap';
import AuthContext from '../../contexts/Auth/authContext';

import '../../css/landingpage/Topnav.css'

const Profile = () => {

    const authContext = useContext(AuthContext);

    const { user } = authContext;
console.log(authContext.loading)
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