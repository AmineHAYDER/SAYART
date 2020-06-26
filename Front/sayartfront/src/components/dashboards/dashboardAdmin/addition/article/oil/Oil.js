import React, {useEffect,useContext, useState} from 'react';
import {Container, Button, Row} from 'react-bootstrap';
import GetAllOils from "./GetAllOils";
import AddOil from "./AddOil";
import AdminContext from "../../../../../../contexts/Admin/adminContext";



const Garage = () => {
    const adminContext = useContext(AdminContext)
    useEffect(()=>{
        adminContext.getOils()
    },[])
    const [model,setModel] = useState("All")

    const renderSwitch = (page) => {
        switch(page) {
            case 'All':
                return <GetAllOils/>;
            case 'Add':
                return <AddOil/>;
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