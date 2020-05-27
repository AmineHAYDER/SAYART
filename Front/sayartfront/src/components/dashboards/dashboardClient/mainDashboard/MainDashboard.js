import React from "react";


import TopSection from "./TopSection";
import BodySection from "./BodySection";


const MainDashboard = (props) => {

    return (
        <div>
            <TopSection/>
            <BodySection  car={props.car}/>
        </div>
    )
}

export default MainDashboard;
