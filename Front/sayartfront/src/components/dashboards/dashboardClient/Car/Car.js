import React, {useContext, useState} from "react";

import {Button} from "react-bootstrap";

import TopSection from "../Car/TopSection"
import BodySection from "./BodySection"
import AddCarModal from "../mainDashboard/modals/AddCarModal";

import UserContext from '../../../../contexts/User/userContext'
import "../../../../css/dashboard/clienDashboard/Car/Car.css"

const Car = (props) => {
    const userContext = useContext(UserContext)
    const {car} = userContext
    const [showAddCar, setShowAddCar] = useState(false);
    const handleCloseAddCar = () => setShowAddCar(false);
    const handleShowAddCar = () => setShowAddCar(true);
    const hasCar = (
        <div>
            <TopSection car={car}/>
            <BodySection car={car}/>
        </div>
    );

    const hasNoCar = (
        <div>
            <h3 className="text-secondary">
                Vous n'avez pas encore une voiture associé à votre compte
            </h3>
            <Button className="add-car-button" onClick={handleShowAddCar}>
                Ajoutez une voiture
            </Button></div>
    );

    return (
        <div>

            <AddCarModal show={showAddCar} onHide={handleCloseAddCar} />
            {car !== '' ? hasCar : hasNoCar}
        </div>
    )
}


export default Car;