import React, {useContext} from 'react';
import GarageContext from '../../../../contexts/Garage/garageContext';
import GeneralInformation from "./GeneralInformation";
import NextAppointmentSection from "./NextAppointmentSection";
import ArticleSection from "./ArticleSection";

const MainDashboard = () => {


    const garageContext = useContext(GarageContext);
    return (
        <div>

                <GeneralInformation/>
                <NextAppointmentSection/>
                <ArticleSection/>
        </div>

    );
}

export default MainDashboard;