import React, {useState} from "react";


import AppointmentSection from "./bodySection/AppointmentSection";
import CarSection from "./bodySection/CarSection";
import ActiveAppointmentSection from "./bodySection/ActiveAppointmentSection"
import ProgressionSection from "./bodySection/ProgressionSection"


import AddCarModal from "./modals/AddCarModal";
import MileageModal from "./modals/MileageModal";

const BodySection = (props) => {


    const [showAddCar, setShowAddCar] = useState(false);
    const handleCloseAddCar = () => setShowAddCar(false);
    const handleShowAddCar = () => setShowAddCar(true);


    const [showMileage, setShowMileage] = useState(false);
    const handleCloseMileage = () => setShowMileage(false);
    const handleShowMileage = () => setShowMileage(true);


    return (
        <div>
            <AppointmentSection content="diagnostic"/>
            <CarSection car={props.car} showModal={handleShowAddCar}/>
            <AddCarModal show={showAddCar} onHide={handleCloseAddCar} mileageModal={handleShowMileage}/>
            <MileageModal show={showMileage} onHide={handleCloseMileage}/>
            <ActiveAppointmentSection/>
            <ProgressionSection/>
        </div>
    )
}

export default BodySection;
