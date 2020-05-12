import React, {useContext, useState} from 'react';
import {Container, Button, Row} from 'react-bootstrap';

import Article from './article/Article'
import Service from './service/Service'
import Garage from './garage/Garage'

const Addition = () => {

    const [model,setModel] = useState("article")

    const renderSwitch = (page) => {
        switch(page) {
            case 'Article':
                return <Article/>;
            case 'Service':
                return <Service/>;
            case 'Garage':
                return <Garage/>;
            default:
                return page;
        }
    }

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Button onClick={()=>setModel("Article")}>
                    Article
                </Button>
                <Button onClick={()=>setModel("Service")}>
                    Service
                </Button>
                <Button onClick={()=>setModel("Garage")}>
                    Garage
                </Button>
            </Row>
            <Row> you re changing {model}</Row>
            <Row>
                {renderSwitch(model)}
            </Row>
        </Container>

    );

}

export default Addition;