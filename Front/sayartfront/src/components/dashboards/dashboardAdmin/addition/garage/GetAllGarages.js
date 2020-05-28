import React, {useContext} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import AdminContext from "../../../../../contexts/Admin/adminContext";
import GarageLogo from "../../../../../img/dashboard/mechanic-Logo.jpg";

const GetAllGarages = () => {

    const adminContext = useContext(AdminContext)
    const {garages} = adminContext
    const recommendedGarage = (garage) => {
        console.log(garage.recommended)
        if (garage.recommended.length > 0) return "recommended:"+garage.recommended[0].service
    }
    console.log(garages)
    const Garages = (garages) => {
        if (garages) return garages.map((garage, i) => {
                return (
                    <Row key={i}>
                        <Col className="col-3">
                            <Image fluid
                                   src={GarageLogo}
                                   alt="garage logo"
                            />
                        </Col>
                        <Col className="col-9">
                            <h1>{garage.name}</h1>
                            <h4>{garage._id}</h4>
                            <h4>user id : {garage.user}</h4>
                            <h4> <strong>{recommendedGarage(garage)}</strong></h4>

                        </Col>
                        <div style={{height: 5, width: "100%", backgroundColor: "#151514"}}/>
                    </Row>
                )
            }
        )
    }

    return (
        <Container>

            {Garages(garages)}

        </Container>

    );

}

export default GetAllGarages;