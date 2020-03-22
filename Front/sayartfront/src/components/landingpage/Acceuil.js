import React from 'react';

import CallToAction from './CallToAction';
import CCM from './Carousel';
import CallForGarage from './CallForGarage';
import Qualities from './Qualities';

import Steps from './Steps';

class Acceuil extends React.Component {
    render() {
        return (
            <div>
                <CallToAction />
                <Qualities />
                <div className="div50px"></div>
                <div className="div25px"></div>
                <Steps />
                <div className="div50px"></div>
                <div className="div25px"></div>

                <CallForGarage />
                <div className="div50px"></div>


            </div>
        )
    }
}

export default Acceuil;