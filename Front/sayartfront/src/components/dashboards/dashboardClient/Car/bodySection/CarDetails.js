import React, {useContext, useState} from "react"

import {Col, Row, Form, Alert, Button} from "react-bootstrap";
import FormItem from "../../../../utils/FormItem";
import UserContext from '../../../../../contexts/User/userContext'
import {NotificationManager} from "react-notifications";

const CarDetails = () => {

    const userContext = useContext(UserContext)
    const [data, setData] = useState({
        mileage: '',
        mileagePerDay: '',
        visitDate: '',
        fuelType: '',
        oilChangeDate: '',
        fuelPerMonth: '',
        washDate: ''
    });
    const onChange = e => {
        setData({...data, [e.target.name]: e.target.value})
    };

    const submit = () => {
        if (data.mileage.match(/^[0-9]{1,6}$/)) {
            if (data.mileagePerDay.match(/^[0-9]{1,4}$/)) {
                userContext.updateCar({
                    mileage: {
                        value: data.mileage,
                        mileagePerDay: data.mileagePerDay,
                        date: new Date()
                    }
                }).then(NotificationManager.success('success', 'Mileage updated'))
            } else NotificationManager.error('error', 'MileageperDay wrong')
        } else NotificationManager.error('error', 'Mileage wrong')

        if (data.fuelType) {
            if (data.fuelPerMonth.match(/^[0-9]{1,3}$/)) {
                userContext.updateCar({
                    fuel: {
                        type: data.fuelType,
                        fuelPerMonth: data.fuelPerMonth
                    }
                }).then(NotificationManager.success('success', 'fuel updated'))
            } else NotificationManager.error('error', 'fuelPerDay wrong')
        } else NotificationManager.error('error', 'fuel type not selected')

        if (data.oilChangeDate) {
            if (data.washDate) {
                if (data.visitDate) {
                    userContext.updateCar({
                        dates: {
                            oilChangeDate: data.oilChangeDate,
                            washDate: data.washDate,
                            visitDate: data.visitDate
                        }
                    }).then(NotificationManager.success('success', 'dates updated'))
                }else NotificationManager.error('error', 'visitdate missing')
            } else NotificationManager.error('error', 'washDate missing')
        } else NotificationManager.error('error', 'oilChangeDate missing')

    }
    return (<div>

        <Form>
            <Row>
                <Alert variant="secondary">
                    Veuillez remplir les informations ci-dessous. Plus vous fournissez d'informations, plus nous
                    pourrons fournir des conseils personnalisés a votre voiture.
                </Alert>
                <Col lg={1}></Col>
                <Col>
                    <FormItem label={"Kilométrage actuel"} type="text" placeholder="mileage" name='mileage'
                              value={data.mileage}
                              onChange={onChange}/>
                    <FormItem label={"Date dérnier visite"} type="date" placeholder="visitDate" name='visitDate'
                              value={data.visitDate}
                              onChange={onChange}/>
                    <FormItem label={"Type d'essence"} as={"select"} placeholder="fuelType"
                              name='fuelType' value={data.fuelType}
                              onChange={onChange}
                              options={" ,Super sans plomb,Gasoil super,Gazoil"}/>
                    <FormItem label={"Date dérnier Lavage"} type="date" placeholder="washDate" name='washDate'
                              value={data.washDate}
                              onChange={onChange}/>

                </Col>
                <Col lg={1}></Col>
                <Col>
                    <FormItem label={"Kilométrage par jour"} type="text" placeholder="mileagePerDay"
                              name='mileagePerDay'
                              value={data.mileagePerDay}
                              onChange={onChange}/>
                    <FormItem label={"Date dérnier vidange"} type="date" placeholder="oilChangeDate"
                              name='oilChangeDate'
                              value={data.oilChangeDate}
                              onChange={onChange}/>
                    <FormItem label={"Essence par mois"} type="text" placeholder="fuelPerMonth" name='fuelPerMonth'
                              value={data.fuelPerMonth}
                              onChange={onChange}/>
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Button onClick={submit}>Update</Button>
        </Form>

    </div>)
}

export default CarDetails;