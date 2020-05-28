import React, {useContext, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';

import Menu from "../Menu";
import Addition from './addition/Addition'

import AdminContext from "../../../contexts/Admin/adminContext";


const AdminDashboard = () => {
    const adminContext = useContext(AdminContext)

    const [page, setPage] = useState("dashboard");
    useEffect(() => {
        adminContext.getGarages()
        adminContext.getServices()
    }, [])

    const onChangePage = e => {
        e.preventDefault();
        setPage(e.target.name)
    }
    const renderSwitch = (page) => {
        switch (page) {
            case 'dashboard':
                return <Addition/>;
            default:
                return page;
        }
    }

    return (

        <div className="dashboard">
            <Row>

                <Col className="" lg={2}>
                    <Menu onChange={onChangePage} page={page}/>
                </Col>
                <Col className="content-dashboard">
                    {renderSwitch(page)}
                </Col>

            </Row>
        </div>


    );

}

export default AdminDashboard;