import React,{useContext,useEffect} from "react"


import CarCard from "./CarCard";
import OilChangeSection from "./carHealth/OilChangeSection";
import WashSection from "./carHealth/WashSection";
import UserContext from "../../../../../contexts/User/userContext";

const CarHealth = () => {

    const  userContext = useContext(UserContext)
    useEffect(() => {
        userContext.loadCar();
    }, [])

const AutresServices =
        <div>
            <h3 style={{"textAlign": "left"}}>Autres services recommandés</h3>
            <div className="car-health-vidange">
                <h4 className="text-secondary mb-5 p-5">
                    Vous n'avez aucun autre service recommandé actuellement, veuillez remplir tous les détails à propos
                    de votre voiture pour prendre avantage de cette service
                </h4>
            </div>
        </div>



    return (<div>
        <div>
            <CarCard/>
        </div>
        <OilChangeSection/>
        <WashSection/>
      {  AutresServices}
    </div>)
}

export default CarHealth;