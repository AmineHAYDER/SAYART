import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import FormItem from "../../../utils/FormItem";
import Map from '../../../appointment/address/Map'
import UserContext from '../../../../contexts/User/userContext';

const Address = () => {

    const userContext = useContext(UserContext);
    const {address} = userContext
    console.log(userContext.address)
    return (
        <Container>
            <Row>
                <h1>Address</h1>
            </Row>
            <Row>
                <Col>
                    <FormItem   disabled type="text" placeholder={address.city} value={address.city} name="city"/>
                    <FormItem   disabled type="text" placeholder={address.streetName} value={address.streetName} name="city"/>
                    <FormItem   disabled type="text" placeholder={address.stateCode} value={address.stateCode} name="city"/>
                    <FormItem   disabled type="text" placeholder={address.countryCode} value={address.countryCode} name="city"/>
                </Col>
                <Col>
                    <Map user={true}/>
                </Col>
            </Row>
        </Container>
    );

}

export default Address;