import React from 'react';
import {Container, Row} from 'react-bootstrap';

import Address from "./Address";

const Profile = () => {

    return (
        <Container>
            <Row>
                <Address/>
            </Row>
        </Container>
    );

}

export default Profile;