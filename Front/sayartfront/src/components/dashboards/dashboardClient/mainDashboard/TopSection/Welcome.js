import React, {useContext, useState} from "react";

import AuthContext from "../../../../../contexts/Auth/authContext";
import UserContext from "../../../../../contexts/User/userContext";


import "../../../../../css/dashboard/clienDashboard/Acceuil/TopSection.css"


const Welcome = () => {

    const authContext = useContext(AuthContext)
    const userContext = useContext(UserContext)

    const ProfilePourcentage = () => {
        let num = 50
        if (authContext.user.location) {
            num += 10
        }
        if (userContext.car) {
            num += 10
            if (userContext.mileage.value){ num += 5}
        }

        return num
    }
    return (
        <div>
            <h1 className="h4 mb-0">Bienvenu {authContext.user.name}!</h1>
            <p className="h6 font-weight-normal text-secondary mt-2 mb-0">
                Votre profile est {ProfilePourcentage()}% complet
            </p>
            {!userContext.car ? "mafamech car" : null}
            {!authContext.user.location ? "mafamech location" : null}
            {!userContext.mileage.value ? "mafamech mileage" : null}
        </div>
    );
}

export default Welcome;