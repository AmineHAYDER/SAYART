import React, {useContext, useEffect} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import articleImage from "../../../../img/dashboard/quartz_5000_20w50_4.png";
import GarageContext from "../../../../contexts/Garage/garageContext";


const Wheel =()=> {
    const garageContext = useContext(GarageContext)


    useEffect(() => {
        garageContext.loadWheels();
    }, [])

    const Articles = (a) => {
       if (garageContext.wheels) return garageContext.wheels.map((wheel)=>{

           const article = wheel.wheelDetail[0]
           return <Row className={"article "+a}>
               <Col lg={1} >
                   <Image fluid
                          src={`../img/article/wheel/${article.reference}.jpg`}
                          style={{height: "60px"}}
                          alt="mechanic image loading"
                   />
               </Col>
               <Col lg={3} className={"column-article"}>
                   <h6> {article.name} </h6>
               </Col>
               <Col lg={2} className={"column-article"} >
                   <h6> {article.reference} </h6>
               </Col>
               <Col lg={1} className={"column-article"}>
                   <h6> {wheel.quantity} </h6>
               </Col>


               <Col lg={3} className={"column-article"}>
                   <Image fluid
                          src={`../img/article/wheel/${article.manufacture}.svg`}
                          alt="mechanic image loading"
                   />
               </Col>
               <Col lg={2} className={"column-article"}>
                   <h6> {wheel.price} </h6>
               </Col>
           </Row>

       })
    }

    const HasArticles = (
        <div>
            <Row className={"article-table-header"}>

                <Col lg={1} >
                </Col>
                <Col lg={3} >
                    <h6> NOM </h6>
                </Col>
                <Col lg={2} >
                    <h6> REF </h6>
                </Col>
                <Col lg={1}>
                    <h6> QUANTITY </h6>
                </Col>
                <Col lg={3}>
                    <h6> PROVIDER </h6>
                </Col>
                <Col lg={2}>
                    <h6> UNIT PRICE </h6>
                </Col>
            </Row>
            <div className="article-table-Content">


                { Articles("article-danger")}
            </div>
        </div>
    )
    return (
        <div >

            <Row>

                <Col>
                    <h3 className="downloadText">Articles</h3>
                </Col>

            </Row>
            {HasArticles}
        </div>);

}


export default Wheel;
