import React from 'react'
import {Form} from 'react-bootstrap'


const FormItem = (props) => {


    return(
    <Form.Group controlId="formBasic">

        <Form.Label>{props.label}</Form.Label>
        <Form.Control
            as={props.as}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        >
            {props.as === "select" ? props.options.split(",").map(option =>{ return <option>{option}</option> }) :null}
        </Form.Control>
    </Form.Group> );
}

export default FormItem;