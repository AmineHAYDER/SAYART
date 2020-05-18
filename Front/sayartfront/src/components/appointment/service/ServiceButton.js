import React from 'react'
import {Col, Image} from 'react-bootstrap'

const ServiceButton = (props) => {

    return (
        <Col>
            <hr></hr>
            <h4 className="label-button"> {props.name} </h4>
            <hr></hr>
            <Image
                className={props.state}
                onClick={props.onClick}
                name={props.name}
                src={props.image}
                fluid
            />
        </Col>
    )
}

export default ServiceButton;