import React from "react"

import {Row, Col, ProgressBar, Image} from "react-bootstrap";

import essenceIcon from "../../../../img/dashboard/petrol.png";
import kiloIcon from "../../../../img/dashboard/car.png";
import moneyIcon from "../../../../img/dashboard/money.png";

const VidangeSection = () => {
    return (<div><h3 style={{"textAlign": "left"}}>Vidange</h3>
        <div className="car-health-vidange">
            <div>
                <Row>
                    <Col style={{"textAlign": "left"}}>
                        <h4 style={{"paddingBottom": "30px"}}> Date dernier vidange: 2020-14-2</h4>
                    </Col>
                    <Col style={{"textAlign": "right"}}>
                        <h4 style={{"paddingBottom": "30px"}}> Date recommandé: 2022-16-4 </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProgressBar now={30} label={'30 jours restant'}></ProgressBar>
                    </Col>
                </Row>
            </div>
        </div>
    </div>)
}

const CarCard = () => {
    return (

        /*  <div>
              <Col><Image src={essenceIcon} /></Col>
              <Col> <div>
                  <h4 className="mb-2 h5">Consommation Essence</h4>
                  <span className="text-secondary font-small">10 Litres</span>
              </div>
              </Col>
          </div> */
        <Row>
            <Col className="car-card mb-5 p-5">

                <Image src={essenceIcon}/>
                <div>
                    <h4 className="mb-2 ">Essence</h4>
                    <span className="text-secondary font-small">10 Litres</span>
                </div>


            </Col>
            <Col className="car-card mb-5 p-5">

                <Image src={moneyIcon}/>
                <div>
                    <h4 className="mb-2 ">Money</h4>
                    <span className="text-secondary font-small">20 DT</span>
                </div>


            </Col>
            <Col className="car-card mb-5 p-5">

                <Image src={kiloIcon}/>
                <div>
                    <h4 className="mb-2 ">Kilométrage</h4>
                    <span className="text-secondary font-small">30 Km</span>
                </div>


            </Col>
        </Row>
    )
}

const LavageSection = () => {
    return (<div><h3 style={{"textAlign": "left"}}>Lavage</h3>
        <div className="car-health-vidange">
            <div>
                <Row>
                    <Col style={{"textAlign": "left"}}>
                        <h4 style={{"paddingBottom": "30px"}}> Date dernier lavage: 2020-14-2</h4>
                    </Col>
                    <Col style={{"textAlign": "right"}}>
                        <h4 style={{"paddingBottom": "30px"}}> Date recommandé: 2022-16-4 </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProgressBar now={60} label={'60 jours restant'}></ProgressBar>
                    </Col>
                </Row>
            </div>
        </div>
    </div>)
}

const AutresServices = () => {
    return (
        <div><h3 style={{"textAlign": "left"}}>Autres services recommandés</h3>
            <div className="car-health-vidange">
                <h4 className="text-secondary mb-5 p-5">
                    Vous n'avez aucun autre service recommandé actuellement, veuillez remplir tous les détails à propos
                    de votre voiture pour prendre avantage de cette service
                </h4>
            </div>
        </div>
    )
}

const CarHealth = () => {

    return (<div>
        <div>
            <CarCard></CarCard>
        </div>
        <VidangeSection></VidangeSection>
        <LavageSection></LavageSection>
        <AutresServices></AutresServices>
    </div>)
}

export default CarHealth;