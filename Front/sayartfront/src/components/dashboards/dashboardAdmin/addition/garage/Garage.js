import React, {useState} from 'react';
import {Container, Button, Row} from 'react-bootstrap';
import GetAllGarages from "./GetAllGarages";
import AddGarage from "./AddGarage";


const Garage = () => {

    const [model,setModel] = useState("All")

    const renderSwitch = (page) => {
        switch(page) {
            case 'All':
                return <GetAllGarages/>;
            case 'AddGarage':
                return <AddGarage/>;
            default:
                return page;
        }
    }
    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Button onClick={()=>setModel("All")}>
                    get All
                </Button>
                <Button onClick={()=>setModel("AddGarage")}>
                    Add
                </Button>
            </Row>

            <Row>
                {renderSwitch(model)}
            </Row>
        </Container>

    );

}

export default Garage;