import React, {useEffect,useContext, useState} from 'react';
import {Container, Button, Row} from 'react-bootstrap';
import GetAllWheel from "./GetAllWheel";
import AddWheel from "./AddWheel";
import AdminContext from "../../../../../../contexts/Admin/adminContext";



const Garage = () => {
    const adminContext = useContext(AdminContext)
    useEffect(()=>{
        adminContext.getWheels()
    },[])
    const [model,setModel] = useState("All")

    const renderSwitch = (page) => {
        switch(page) {
            case 'All':
                return <GetAllWheel/>;
            case 'Add':
                return <AddWheel/>;
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
                <Button onClick={()=>setModel("Add")}>
                    Add stock 
                </Button>
            </Row>

            <Row>
                {renderSwitch(model)}
            </Row>
        </Container>

    );

}

export default Garage;