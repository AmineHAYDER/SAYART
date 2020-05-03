import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import FormItem from "../../../utils/FormItem";
import Map from '../../../appointment/Address/Map'
import Address from "./Address";
import UserContext from '../../../../contexts/User/userContext';

const Profile = () => {

    const userContext = useContext(UserContext);
    return (
        <Container>
            <Row>
                <Address />
            </Row>
        </Container>
    );

}

export default Profile;