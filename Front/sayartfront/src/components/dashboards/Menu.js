import React from 'react';
import { Container, Nav} from 'react-bootstrap';

import '../../css/dashboard/Menu.css'
import img from '../../img/dashboard/car icon .png'
const Menu = (props) => {



    return (<Container>
            <Nav className="flex menu-container">
                <Nav.Link as="button" className={(props.page === "MyCar")?"button-menu-active":"button-menu" } onClick={props.onChange} name="MyCar" >
                    <img src={img} name="MyCar" onClick={props.onChange}></img>OnLineGarage</Nav.Link>
                <Nav.Link as="button" className={(props.page === "appointments")?"button-menu-active":"button-menu" } onClick={props.onChange} name="appointments" >appointments</Nav.Link>
                <Nav.Link as="button" className={(props.page === "profile")?"button-menu-active":"button-menu" } onClick={props.onChange} name="profile" >profile</Nav.Link>
                <Nav.Link as="button" className={(props.page === "stock")?"button-menu-active":"button-menu" } onClick={props.onChange} name="stock" >stock</Nav.Link>
                <Nav.Link as="button" className={(props.page === "analytics")?"button-menu-active":"button-menu" } onClick={props.onChange} name="analytics" >analytics</Nav.Link>
            </Nav>
        </Container>
    );

}

export default Menu;