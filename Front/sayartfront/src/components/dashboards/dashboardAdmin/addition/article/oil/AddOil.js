import React, {useContext, useState} from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';
import {NotificationManager} from "react-notifications";
import FormItem from "../../../../../utils/FormItem";
import AdminContext from "../../../../../../contexts/Admin/adminContext";


const AddOil = () => {

    const adminContext = useContext(AdminContext)
    const [article, setArticle] = useState({
        id: '',
        price: '',
        quantity: '',
        garage: adminContext.garage._id ,
        name: '',
        reference:"",
        capacity:"",
        viscosity:"",
        type:"",
        manufacture:""
    })

    const onChange = e => {
        setArticle({...article, [e.target.name]: e.target.value})
    };
    const onSubmit = () => {
        if (article.id) {
            adminContext.addToStock(
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
    const addToStock = () => {
        if (adminContext.article && adminContext.garage && article.price && article.quantity) {
            adminContext.addToStock(
                {
                    price: article.price,
                    quantity: article.quantity,
                    oil: adminContext.article.data._id,
                    garage: article.garage,
                }).then(success => {
                if (success) NotificationManager.success('stock added')
                else NotificationManager.error('article not added','article')
            })
        } else NotificationManager.error(
            'Missing',
            `${article.quantity ?"":"quantity " }`+ `${adminContext.article._id ? "" :"_id " }`+
            `${article.price ?"" :"price " }`+
            `${article.garage ?"" :"garage " }`)
    }

    return (
        <Container>
            <Row>
                <FormItem type={"text"} placeholder={"garage"} name={"garage"}
                          value={adminContext.garage ? adminContext.garage._id : null} onChange={onChange}/>
                <FormItem type={"text"} placeholder={"quantity"} required name={"quantity"} onChange={onChange}/>
                <FormItem type={"text"} placeholder={"price"} required name={"price"} onChange={onChange}/>
                <Button onClick={addToStock}>
                    add To Stock
                </Button>
            </Row>
            <Row>
                <Form>
                    <FormItem type={"text"}
                              placeholder={"name"}
                              name={"name"}
                              value={adminContext.article.name}
                              onChange={onChange}/>
                    <FormItem type={"text"}
                              placeholder={"reference"}
                              name={"reference"}
                              value={adminContext.article.reference}
                              onChange={onChange}/>
                    <FormItem type="text"
                              placeholder={"capacity"}
                              name={"capacity"}
                              value={adminContext.article.capacity}
                              onChange={onChange}/>
                    <FormItem type={"text"}
                              placeholder={"viscosity"}
                              name={"viscosity"}
                              value={adminContext.article.viscosity}
                              onChange={onChange}/>
                    <FormItem type={"text"}
                              placeholder={"norms"}
                              name={"norms"}
                              onChange={onChange}/>
                    <FormItem type={"text"}
                              placeholder={"type"}
                              name={"type"}
                              value={adminContext.article.type}
                              onChange={onChange}/>
                    <FormItem type={"text"}
                              placeholder={"manufacture"}
                              name={"manufacture"}
                              value={adminContext.article.manufacture}
                              onChange={onChange}/>
                    <Button onClick={onSubmit}>
                        add
                    </Button>

                </Form>
            </Row>
        </Container>

    );

}

export default AddOil;