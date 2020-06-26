import React, {useContext} from "react";
import {Nav} from "react-bootstrap";

import "../../../css/dashboard/DashboardMenu.css";
import PhotoUpload from '../PhotoUpload'
import AuthContext from "../../../contexts/Auth/authContext";

const Menu = (props) => {

    const authContext = useContext(AuthContext);
    const {user} = authContext;

    return (
        <div>

            <aside>
                <Nav className="flex-column card menu">
                    <div className="profile-div">
                        <PhotoUpload/>

                        <div className="name">
                            {user.name + " " + user.lastName}
                        </div>
                        <div className="email">
                            {user.email}
                        </div>
                    </div>

                    <Nav.Link className={(props.page === "dashboard") ? "active-link" : "non-active-link"}
                              onClick={props.onChange} name="dashboard"><i className="uil uil-dashboard zicon"></i> <span
                        className="ztext"> Dashboard</span></Nav.Link>

                    <Nav.Link className={(props.page === "MyCar") ? "active-link" : "non-active-link"}
                              onClick={props.onChange} name="MyCar"><i className="uil uil-car zicon"> </i> <span
                        className="ztext"> Mon Garage </span></Nav.Link>

                    <Nav.Link className={(props.page === "stock") ? "active-link" : "non-active-link"}
                              onClick={props.onChange} name="stock"><i className="uil uil-car zicon"> </i> <span
                        className="ztext"> Stock </span></Nav.Link>

                    <Nav.Link className={(props.page === "appointments") ? "active-link" : "non-active-link"}
                              onClick={props.onChange} name="appointments"><i className="uil uil-schedule zicon"></i> <span
                        className="ztext"> Mes RDV</span></Nav.Link>

                    <Nav.Link className={(props.page === "analytics") ? "active-link" : "non-active-link"}
                              onClick={props.onChange} name="analytics"><i
                        className="uil uil-chart-line zicon"></i> Analytique</Nav.Link>
                </Nav>

            </aside>
        </div>
    )
}

export default Menu;