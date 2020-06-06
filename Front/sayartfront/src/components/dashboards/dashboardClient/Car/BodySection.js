import React, {useContext, useEffect} from "react";

import {Tab, Nav, Badge} from "react-bootstrap";

import CarDetails from "./bodySection/CarDetails";
import CarHealth from "./bodySection/CarHealth";
import UserContext from "../../../../contexts/User/userContext";

const BodySection = () => {
    const userContext = useContext(UserContext)
    const {car} = userContext
    const BadgeValue = () => {
        if (!car.dates && !car.mileage.value) {
            return 5
        }
        if (!car.dates ) {
            return 3
        }

        if (!car.mileage ) {
            return 2
        }
      return 0
    }
    return (
        <div>
            <Tab.Container defaultActiveKey="health" id="tab">


                <Nav justify variant="tabs">

                    <Nav.Item>
                        <Nav.Link eventKey="health">Etat voiture</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="details">Detailles voiture <Badge
                            variant="danger">{BadgeValue()}</Badge></Nav.Link>
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