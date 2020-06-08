import React from "react";
import {Row, Col} from "react-bootstrap";

import ServicesCounters from "./ServicesCounters";

const analytics = () => {

    return <div>

        <Row>
            <Col lg={6}>{ServicesCounters()}</Col>
        </Row>


    </div>

}

export default analytics;