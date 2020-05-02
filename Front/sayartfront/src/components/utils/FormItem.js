import React from 'react'
import {Form} from 'react-bootstrap'


const FormItem = (props) => {


    return(
    <Form.Group controlId="formBasic">
        <Form.Control
            readOnly
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
        />
    </Form.Group> );
}

export default FormItem;