import React, { useContext, useState } from "react";

import { Col, Row, Image, Button } from "react-bootstrap";

import "../../../../../css/dashboard/clienDashboard/Acceuil/TopSection.css"
import UserContext from '../../../../../contexts/User/userContext'
import GarageLogo from "../../../../../img/dashboard/mechanic-Logo.jpg"

const RecommendedGarage = () => {
    const userContext = useContext(UserContext)
    const { recommendedGarages } = userContext
    const [i, setI] = useState(0)
    return (
        <div>
            {recommendedGarages.length > 0 ?
                <Row>
                    <Col className="col-3">
                        <Image fluid
                            src={GarageLogo}
                            alt="garage logo"
                        />
                    </Col>
                    <Col className="col-9">
                        <h5 className="mb-0">
                            {recommendedGarages[i].name}
                        </h5>
                        <p className="h6 font-weight-normal text-secondary mt-2 mb-0">
                            Promotion chez  {recommendedGarages[i].name}, {recommendedGarages[i].recommended[0].discount}% remise 2020-2021
                    </p>
                        <a href="/">Prenez un rendez-vous</a>
                        <hr />
                        <Button variant={"secondary"} onClick={() => setI((i + 1) % (recommendedGarages.length))} >
                            {"<"}
                        </Button>
                        <Button variant={"secondary"} onClick={() => setI((i + 1) % (recommendedGarages.length))} >
                            >
                    </Button>
                    </Col>
                </Row> : "no recommended"}
        </div>
    );
}

export default RecommendedGarage;