import React, {useContext} from "react";
import {Col, Image, Row} from "react-bootstrap";
import GarageContext from "../../../../contexts/Garage/garageContext";
import "../../../../css/dashboard/mechanicDashboard/mainDashboard/ArticleSection.css";
import articleImage from '../../../../img/dashboard/quartz_5000_20w50_4.png'
const ArticleSection = (props) => {
    const garageContext = useContext(GarageContext)
    const {appointments} = garageContext

    const NoProblemArticle = (
        <div>

            <div>
                <h3>Mes Articles</h3>
            </div>
            <h3 className="text-secondary">
                vous n'avez aucun problem avec les article
            </h3>
        </div>
    )
    const Articles = (a) => {
        return <Row className={"article "+a}>
            <Col lg={1} >
                <Image fluid
                       src={articleImage}
                       style={{height: "60px"}}
                       alt="mechanic image loading"
                />
            </Col>
            <Col lg={3} className={"column-article"}>
                <h6> Huile 40W5 </h6>
            </Col>
            <Col lg={2} className={"column-article"} >
                <h6> 1xh5d4 </h6>
            </Col>
            <Col lg={1} className={"column-article"}>
                <h6> 3 </h6>
            </Col>
            <Col lg={3} className={"column-article"}>
                <h6> Total </h6>
            </Col>
            <Col lg={2} className={"column-article"}>
                <h6> 80 DT </h6>
            </Col>
        </Row>
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
                { Articles("article-warning")}
                { Articles("article-danger")}
                { Articles("article-danger")}
                { Articles("article-danger")}
                { Articles("article-danger")}
            </div>
        </div>
    )

    return (
        <div  className={"article-section"}>

                <div>
                    <h3>Articles Information</h3>
                </div>
                <div className={"article-table"}>
                { HasArticles}
                </div>
        </div>
    );
}

export default ArticleSection;