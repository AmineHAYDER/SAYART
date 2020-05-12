import React, {useState} from 'react';
import {Container, Button, Row} from 'react-bootstrap';
import GetAllServices from "./GetAllServices";
import AddService from "./AddService";


const Garage = () => {

    const [model,setModel] = useState("All")

    const renderSwitch = (page) => {
        switch(page) {
            case 'All':
                return <GetAllServices/>;
            case 'AddService':
                return <AddService/>;
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
                <Button onClick={()=>setModel("AddService")}>
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