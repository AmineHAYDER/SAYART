import React, { useContext, useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/landingpage/SayartlogoMini.png';
import '../../css/landingpage/Topnav.css'
import AuthContext from '../../contexts/Auth/authContext';


import LoginModal from '../authentification/LoginModal';
import RegisterModal from '../authentification/RegisterModal';

const TopNav = (props) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout } = authContext;



    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);


    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const onLogout = () => {
        logout();
    }

    const NavItem = (props) => {

        return <Nav.Item as="li">
            <Link className="NoUnder" to={props.path} >
                <Nav.Link className="links-items" as="a" onClick={props.onClick} >{props.value}</Nav.Link>
                <div className="underline"></div>
            </Link>
        </Nav.Item>

    }

    const NavLoggedElements = (

        < Nav className="ml-auto links" as="ul" >
            <NavItem path={"/dashboard"} value={props.context.user.name} />
            <Nav.Link className="links-items" as="a" onClick={onLogout} >LOGOUT</Nav.Link>
            <div className="underline"></div>
        </Nav >
    )

    const NavNotLoggedElements = (
        <Nav className="ml-auto links" as="ul">
            <NavItem path={"/"} value={"HOME"} />
            <NavItem path={"/CCM"} value={"CÇM"} />
            <NavItem path={"/"} value={"CONTACT"} />

            <Nav.Item><Button variant='info' onClick={handleShowLogin}>CONNECTER</Button></Nav.Item>
            <Nav.Item><Button variant='info' onClick={handleShowRegister}>INSCRIPTION</Button></Nav.Item>
        </Nav>

    )

    return (
        <div className="navbar-shadow">
            <Navbar expand="lg" className="navbar-shadow" variant="dark" fixed="top">
                <Navbar.Brand href="/takeAppointment" >

                    <img
                        src={logo}
                        className="d-inline-block align-top logo"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    {isAuthenticated ? NavLoggedElements : NavNotLoggedElements}

                </Navbar.Collapse>

            </Navbar>

            <LoginModal show={showLogin} onHide={handleCloseLogin} showRegister={handleShowRegister} />
            <RegisterModal show={showRegister} onHide={handleCloseRegister} showLogin={handleShowLogin} />
        </div>
    )
}

export default TopNav;