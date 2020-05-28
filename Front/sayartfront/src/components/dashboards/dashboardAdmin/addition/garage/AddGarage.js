import React, {useContext, useState} from 'react';
import {Container, Row, Form,Button} from 'react-bootstrap';

import FormItem from "../../../../utils/FormItem";
import AdminContext from "../../../../../contexts/Admin/adminContext";


const AddGarage = () => {

    const adminContext = useContext(AdminContext)
    const [garage,setGarage]=useState({
        id: '',
        name: '',
        photo:'',
        phone:'',
        user:'',
        address:''
    })
    const onChange = e => {
        setGarage({ ...garage, [e.target.name]: e.target.value })
    };
    const onSubmit = ()=> {
     if (garage.id)   adminContext.addGarage(
            {
                _id:garage.id,
                name:garage.name,
                photo:garage.photo,
                phone:garage.phone,
                user:garage.user,
                recommended:["service","wash","discount","20"],
                address:{
                    formattedAddress:garage.address,
                    lat:garage.lat,
                    lng:garage.lng,
                }
            }
        )
        else adminContext.addGarage(
         {
             name:garage.name,
             photo:garage.photo,
             phone:garage.phone,
             user:garage.user,
             recommended:[{service:"wash",discount:20}],
             address:{
                 formattedAddress:garage.address,
                 lat:garage.lat,
                 lng:garage.lng,
             }
         }
     )

    }

    return (
        <Container>
            <Row>
                <Form>

                    <FormItem type={"text"} placeholder={"id"} name={"id"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"name"} name={"name"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"photo"} name={"photo"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"phone"} name={"phone"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"user"} name={"user"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"lat"} name={"lat"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"lng"} name={"lng"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"address"} name={"address"} onChange={onChange}/>
                    <Button onClick={onSubmit}>
                        add
                    </Button>

                 </Form>
            </Row>
        </Container>

    );

}

export default AddGarage;