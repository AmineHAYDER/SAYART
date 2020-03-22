import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';



import '../../css/landingpage/CallToAction.css';

class CallToAction extends React.Component {
    render() {
        return (
            <div>

                <Jumbotron className="jumbo">
                    <div className="spaceDiv"></div>
                    <h1 className="text">RESERVEZ MAINTENANT!</h1>

                    <h5 className="text">
                        Choisissez parmi une variété de services automobiles qualifiés et fiables pour vos entretien automobiles
                    </h5>
                    <div className="spaceDiv2"></div>
                    <Button variant="dark" size="lg">Commençez!</Button>
                </Jumbotron>

            </div>);
    }
}


export default CallToAction;