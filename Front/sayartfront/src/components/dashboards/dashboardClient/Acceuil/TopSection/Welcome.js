import React, { useContext } from "react";

import AuthContext from "../../../../../contexts/Auth/authContext";

import "../../../../../css/dashboard/clienDashboard/Acceuil/TopSection.css"


const Welcome = () => {

    const authContext = useContext(AuthContext)

    return (
        <div >
            <h1 className="h4 mb-0">Bienvenu {authContext.user.name}!</h1>
            <p className="h6 font-weight-normal text-secondary mt-2 mb-0">
                Votre profile est 66% complet
            </p>
        </div>
    );
}

export default Welcome;