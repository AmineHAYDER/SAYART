import React from 'react';
import { Button, Container } from 'react-bootstrap';

import '../../css/landingpage/CallForGarage.css'

class CallForGarage extends React.Component {
    render() {
        return (
            <div className="divColor">
                <Container className="align-content-center">
                    <div className="">
                        <h5>
                            Vous êtes un garage, un lavage ou un mécanicien et souhaitez  nous rejoindre?
                        </h5>

                        <Button variant="outline-light">
                            En savoir plus
                        </Button>
                    </div>
                </Container>
            </div>);
    }
}


export default CallForGarage;
