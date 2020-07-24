import React from 'react';
import GeneralInformation from "./GeneralInformation";
import NextAppointmentSection from "./NextAppointmentSection";
import ArticleSection from "./ArticleSection";

const MainDashboard = () => {


    return (
        <div>

                <GeneralInformation/>
                <NextAppointmentSection/>
                <ArticleSection/>
        </div>

    );
}

export default MainDashboard;