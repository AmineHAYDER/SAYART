import React, {useContext, useState} from 'react';
import {Container, Row, Form,Button} from 'react-bootstrap';

import FormItem from "../../../../utils/FormItem";
import AdminContext from "../../../../../contexts/Admin/adminContext";


const AddService = () => {

    const adminContext = useContext(AdminContext)
    const [service,setService]=useState({
        id: '',
        name: '',
        duration:'',
        price:'',
        garage:'',
    })
    const onChange = e => {
        setService({ ...service, [e.target.name]: e.target.value })
    };
    const onSubmit = ()=> {
      if (service.id) { adminContext.addService(
            {
                _id:service.id,
                name:service.name,
                duration:service.duration,
                price:service.price,
                garage:service.garage,

            }
        )}else adminContext.addService(
          {
              name:service.name,
              duration:service.duration,
              price:service.price,
              garage:service.garage,

          })

    }

    return (
        <Container>
            <Row>
                <Form>

                    <FormItem type={"text"} placeholder={"id"} name={"id"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"name"} name={"name"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"duration"} name={"duration"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"price"} name={"price"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"garage"} name={"garage"} onChange={onChange}/>
                    <Button onClick={onSubmit}>
                        add
                    </Button>

                 </Form>
            </Row>
        </Container>

    );

}

export default AddService;