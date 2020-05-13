import React, {useContext, useState} from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';

import axios from 'axios';
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
    const [file, setFile] = useState("")


    const onFileChange = event => {


        setFile( event.target.files[0] );

    };

    const onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "image",
            file,
            file.name
        );

        // Details of the uploaded file
        console.log(file);

        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:5000/user/5e742fb64542bb39c0edd8d1/photo", formData);
    };

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
        onFileUpload()
    }

    return (
        <Container>
            <Row>
                <Form>

                    <FormItem type={"text"} placeholder={"id"} name={"id"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"name"} name={"name"} onChange={onChange}/>
                    <FormItem type={"text"} placeholder={"ref"} name={"ref"} onChange={onChange}/>
                    <FormItem type="file" placeholder={"image"} name={"image"} onChange={onFileChange}/>
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