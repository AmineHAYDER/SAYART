import React, {useContext, useEffect} from 'react';
import { ProgressBar, Col, Row } from 'react-bootstrap';
import AuthContext from '../../../../../contexts/Auth/authContext';
import GarageContext from '../../../../../contexts/Garage/garageContext';


const RowTable = (props) => {
    console.log(props.hours)
    return (
            <Row className="row-table" >
                <Col className="box-table">
                    {props.day}
                </Col>
                <Col className="box-table">
                    <div className="box-appointment-30mn">
                        <div className="box-appointment-content">
                        </div>
                    </div>
                    <div className="box-appointment-1hour">
                        <div className="box-appointment-content">
                        </div>
                    </div>
                    <div className="box-appointment-30mn">
                        <div className="box-appointment-content">
                        </div>
                    </div>
                </Col>
                <Col className="box-table">
                    <div className="box-appointment-30mn">
                        <div className="box-appointment-content">
                        </div>
                    </div>
                    <div className="box-appointment-30mn">
                        <div className="box-appointment-content">
                        </div>
                    </div>
                </Col>
                <Col className="box-table">
                </Col>
                <Col className="box-table">
                </Col>
                <Col className="box-table">
                    <div className="box-appointment-30mn">
                        <div className="box-appointment-content">
                        </div>
                    </div>
                    <div className="box-appointment-30mn">
                        <div className="box-appointment-content">
                        </div>
                    </div>
                </Col>
                <Col className="box-table">
                    {"..."}
                </Col>
                <Col className="box-table">
                    {"..."}
                </Col>
                <Col className="box-table">
                    {"..."}
                </Col>
                <Col className="box-table">
                    {"..."}
                </Col>
                <Col className="box-table">
                    {"..."}
                </Col>
                <Col className="box-table">
                    {"..."}
                </Col>
                <Col className="box-table">
                    {"..."}
                </Col>

            </Row>

    );

}

export default RowTable;