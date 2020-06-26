import React, {useContext} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import AdminContext from "../../../../../../contexts/Admin/adminContext";
const GetAllWheel = () => {

    const adminContext = useContext(AdminContext)
    const {wheels} = adminContext
    const Garages = (wheels) => {
        if (wheels) return wheels.map((wheel, i) => {
                return <Row key={i} className={"row-admin"} onClick={()=>adminContext.setArticle(wheel,"wheel")}>
                    <Col lg={2} >
                        <Image alt={'img'} style={{height: '130px'}} src={`../img/article/wheel/${wheel.reference}.jpg`}/>
                    </Col>
                    <Col lg={3}>
                        <h4>{wheel.name}</h4>
                    </Col>
                    <Col lg={3}>
                        <h6>_id : {wheel._id}</h6>
                    </Col>
                    <Col>
                        <h6>caractéristique : {wheel.width+'/'+wheel.height+' '+wheel.diameter+wheel.speed}</h6>
                    </Col>
                    <Col>
                        <h6>ref : {wheel.reference}</h6>
                    </Col>
                </Row>
            }
        )
    }

    return (
        <Container>
            <h1>OILS</h1>
            {Garages(wheels)}

        </Container>

    );

}

export default GetAllWheel;