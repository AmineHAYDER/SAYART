import React from "react";

import {Tab, Nav} from "react-bootstrap";

import CarDetails from "./CarDetails";
import CarHealth from "./CarHealth";

const BodySection = () => {
    return (
        <div>
            <Tab.Container defaultActiveKey="health" id="tab">


                <Nav justify variant="tabs">

                    <Nav.Item>
                        <Nav.Link eventKey="health">Etat voiture</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="details">Detailles voiture</Nav.Link>
                    </Nav.Item>


                </Nav>


                <Tab.Content className="car-body-section">
                    <Tab.Pane eventKey="details">
                        <CarDetails></CarDetails>
                    </Tab.Pane>
                    <Tab.Pane eventKey="health">
                        <CarHealth></CarHealth>
                    </Tab.Pane>
                </Tab.Content>


            </Tab.Container>
        </div>
    )
}


export default BodySection;