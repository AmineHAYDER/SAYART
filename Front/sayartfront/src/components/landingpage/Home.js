import React from 'react';
import {NotificationContainer} from "react-notifications";

import CallToAction from './CallToAction';
import CallForGarage from './CallForGarage';
import Qualities from './Qualities';
import Services from './Services';
import Steps from './Steps';
import AppSection from './AppSection';
import Footer from './Footer';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NotificationContainer/>
                <CallToAction></CallToAction>

                <div className="div50px"></div>
                <Qualities />
                <div className="div50px"></div>

                <Services />
                <div className="div50px"></div>

                <Steps />
                <div className="div50px"></div>
                <div className="div25px"></div>
                <CallForGarage />
                <AppSection />
                <Footer />
            </div>
        )
    }
}

export default Home;