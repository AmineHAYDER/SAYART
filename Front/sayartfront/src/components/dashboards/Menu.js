import React, { useContext } from "react";
import { Nav, Image } from "react-bootstrap";

import "../../css/dashboard/DashboardMenu.css";

import profilePic from "../../img/profile/manpic.png"
import AuthContext from "../../contexts/Auth/authContext";

const Menu = (props) => {

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    return (
        <div>

            <aside >
                <Nav className="flex-column card menu">
                    <div className="profile-div">
                        <div><Image rounded
                            src={profilePic}

                        /></div>
                        <div className="name">
                            {user.name + " " + user.lastName}
                        </div>
                        <div className="email">
                            {user.email}
                        </div>
                    </div>

                    <Nav.Link className={(props.page === "dashboard") ? "active-link" : "non-active-link"} onClick={props.onChange} name="dashboard"><i class="uil uil-dashboard zicon"></i> <span className="ztext"> Dashboard</span></Nav.Link>

                    <Nav.Link className={(props.page === "MyCar") ? "active-link" : "non-active-link"} onClick={props.onChange} name="MyCar"><i className="uil uil-car zicon"> </i> <span className="ztext"> Ma voiture</span></Nav.Link>

                    <Nav.Link className={(props.page === "appointments") ? "active-link" : "non-active-link"} onClick={props.onChange} name="appointments"><i class="uil uil-schedule zicon"></i> <span className="ztext"> Mes RDV</span></Nav.Link>

                    <Nav.Link className={(props.page === "analytics") ? "active-link" : "non-active-link"} onClick={props.onChange} name="analytics"><i class="uil uil-chart-line zicon"></i>   Analytique</Nav.Link>
                </Nav>

            </aside>
        </div>
    )
}

export default Menu;