import React from "react";
import {Col,Row} from 'react-bootstrap'


const Counter = (props)=>{
    const CounterValue = (props.value/props.max)*100
    console.log((props.value/props.max) + "   "+CounterValue)
    return <Row>
        <Col>
            <div className={"Counter"} style={{width:props.value*10+"px"}}>
                {props.value}
            </div>

        </Col>
    </Row>

}

export default Counter;