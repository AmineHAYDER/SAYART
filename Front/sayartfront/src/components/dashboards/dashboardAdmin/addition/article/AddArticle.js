import React, {useContext, useState} from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';

import FormItem from "../../../../utils/FormItem";
import AdminContext from "../../../../../contexts/Admin/adminContext";


const AddArticle = () => {

    const adminContext = useContext(AdminContext)
    const [article, setArticle] = useState({
        id: '',
        name: '',
        ref: '',
        image: '',
        price: '',
        quantity: '',
        compatibility: '',
        garage: '',
        service: '',
    })


    const onChange = e => {
        setArticle({...article, [e.target.name]: e.target.value})
    };
    const onSubmit = () => {
        if (article.id) {
            adminContext.addArticle(
                {
                    _id: article.id,
                    name: article.name,
                    ref: article.ref,
                    image: article.image,
                    price: article.price,
                    quantity: article.quantity,
                    compatibility: article.compatibility,
                    garage: article.garage,
                    service: article.service,
                }
            )
        } else adminContext.addArticle(
            {
                name: article.name,
                ref: article.ref,
                image: article.image,
                price: article.price,
                quantity: article.quantity,
                compatibility: article.compatibility,
                garage: article.garage,
                service: article.service,

            })

    }

    return (
        <Container>
            <Row>
                <Form>

                    <FormItem type={"text"} placeholder={"id"} name={"id"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"name"} name={"name"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"ref"} name={"ref"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"image"} name={"image"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"price"} name={"price"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"quantity"} name={"quantity"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"compatibility"} name={"compatibility"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"garage"} name={"garage"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"service"} name={"service"} onChange={onChange}/>

                    <Button onClick={onSubmit}>
                        add
                    </Button>

                </Form>
            </Row>
        </Container>

    );

}

export default AddArticle;