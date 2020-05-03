import React from "react";

import { Row, Col, Button, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const carCard = (props) => {
    return (
        <Row>
            <Col>
                <div><Link onClick={props.mycar}>{props.mark + " " + props.model} </Link></div>
            </Col>
        </Row>
    )

}


export default carCard;