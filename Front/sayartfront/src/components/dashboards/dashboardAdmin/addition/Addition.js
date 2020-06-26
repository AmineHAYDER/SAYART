import React, {useContext, useState} from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';

import Article from './article/Article'
import Service from './service/Service'
import Garage from './garage/Garage'
import Filter from './article/filter/Filter'
import Oil from './article/oil/Oil'
import Wheel from'./article/wheel/Wheel'
import AdminContext from "../../../../contexts/Admin/adminContext";
import '../../../../css/dashboard/adminDashboard/addition.css'
const Addition = () => {

    const adminContext = useContext(AdminContext)

    const [model,setModel] = useState("Wheel")

    const renderSwitch = (page) => {
        switch(page) {
            case 'Article':
                return <Article/>;
            case 'Service':
                return <Service/>;
            case 'Garage':
                return <Garage/>;
            case 'Filter':
                return <Filter/>;
            case 'Oil':
                return <Oil/>;
            case 'Wheel':
                return <Wheel/>;
            default:
                return page;
        }
    }
    console.log(    `../img/article/${adminContext.article.articleType}/${adminContext.article.data.reference}.jpg`)

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col lg={4} className={"active-garage-section-admin"}>
                    <Row className={"active-page-admin"}>
                        <h1> Page : {model} </h1>
                    </Row>
                    <Row className={"active-garage-admin"}>
                       <h6>Selected garage : {adminContext.garage ? adminContext.garage.name :"Noting"} </h6>
                    </Row>
                    <Row className={"active-garage-admin"}>
                        <Col>
                            <h6>Selected Article :</h6> <h5>{adminContext.article.data ? adminContext.article.data.name :"Noting"} </h5>
                        </Col>
                        <Col>
                            {adminContext.article.articleType?
                                <img alt=" " style={{height:"100px"}} src={`../img/article/${adminContext.article.articleType}/${adminContext.article.data.reference}.jpg`} />
                                :null}
                        </Col>


                    </Row>
                </Col>
                <Col>
                    <Button onClick={()=>setModel("Article")}>
                        Article
                    </Button>
                    <Button onClick={()=>setModel("Filter")}>
                        Filter
                    </Button>
                    <Button onClick={()=>setModel("Service")}>
                        Service
                    </Button>
                    <Button onClick={()=>setModel("Garage")}>
                        Garage
                    </Button>
                    <Button onClick={()=>setModel("Oil")}>
                        Oil
                    </Button>
                    <Button onClick={()=>setModel("Wheel")}>
                        Wheel
                    </Button>
                </Col>
            </Row>
            <Row>
                {renderSwitch(model)}
            </Row>
        </Container>

    );

}

export default Addition;