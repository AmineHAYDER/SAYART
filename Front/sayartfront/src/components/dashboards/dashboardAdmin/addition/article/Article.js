import React, {useEffect,useContext, useState} from 'react';
import {Container, Button, Row} from 'react-bootstrap';
import GetAllArticles from "./GetAllArticles";
import AddArticle from "./AddArticle";
import AdminContext from "../../../../../contexts/Admin/adminContext";



const Garage = () => {
    const adminContext = useContext(AdminContext)
    useEffect(()=>{
        adminContext.getArticles()
    },[])
    const [model,setModel] = useState("All")

    const renderSwitch = (page) => {
        switch(page) {
            case 'All':
                return <GetAllArticles/>;
            case 'Add':
                return <AddArticle/>;
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