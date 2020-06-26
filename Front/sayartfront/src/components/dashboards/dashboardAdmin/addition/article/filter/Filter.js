import React, {useEffect,useContext, useState} from 'react';
import {Container, Button, Row} from 'react-bootstrap';
import GetAllFilters from "./GetAllFilters";
import AddFilter from "./AddFilter";
import AdminContext from "../../../../../../contexts/Admin/adminContext";



const Garage = () => {
    const adminContext = useContext(AdminContext)
    useEffect(()=>{
        adminContext.getFilters()
    },[])
    const [model,setModel] = useState("All")

    const renderSwitch = (page) => {
        switch(page) {
            case 'All':
                return <GetAllFilters/>;
            case 'Add':
                return <AddFilter/>;
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