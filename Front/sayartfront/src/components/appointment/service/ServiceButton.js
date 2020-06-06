import React from 'react'
import {Col, Image} from 'react-bootstrap'

const ServiceButton = (props) => {

    return (
        <div>
            <h4 className="label-button"
                onClick={props.onClick}
               > {props.label} </h4>
            <Image
                classname={{width: "200px", height: "200px",paddingTop:"20px"}}
                onClick={props.onClick}
                name={props.name}
                src={props.image}
                fluid
            />
        </div>)
}

export default ServiceButton;