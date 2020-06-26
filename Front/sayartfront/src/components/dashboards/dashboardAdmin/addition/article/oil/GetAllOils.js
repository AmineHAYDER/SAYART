import React, {useContext} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import AdminContext from "../../../../../../contexts/Admin/adminContext";
const GetAllOils = () => {

    const adminContext = useContext(AdminContext)
    const {oils} = adminContext
    const Garages = (oils) => {
        if (oils) return oils.map((oil, i) => {
                return <Row key={i} className={"row-admin"} onClick={()=>adminContext.setArticle(oil,"oil")}>
                    <Col lg={2} >
                        <Image alt={'img'} style={{height: '130px'}} src={`../img/article/oil/${oil.reference}.jpg`}/>
                    </Col>
                    <Col lg={2}>
                        <h4>{oil.name}</h4>
                    </Col>
                    <Col>
                        <h6>_id : {oil._id}</h6>
                    </Col>
                    <Col>
                        <h6>viscosity : {oil.viscosity}</h6>
                    </Col>
                    <Col>
                        <h6>ref : {oil.reference}</h6>
                    </Col>
                </Row>
            }
        )
    }

    return (
        <Container>
            <h1>OILS</h1>
            {Garages(oils)}

        </Container>

    );

}

export default GetAllOils;