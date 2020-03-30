import React, { useContext, useEffect } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../img/landingpage/SayartlogoMini.png';

import '../../css/landingpage/Topnav.css'

import AuthContext from '../../contexts/Auth/authContext';
import setAuthToken from '../../contexts/Auth/setAuthToken';

const TopNav = (props) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, loadUser, logout, user } = authContext

    useEffect(() => {
        setAuthToken(localStorage.token);
        loadUser();

    }, [])



    const onLogout = () => {
        logout();
    }

    const NavLoggedElements = (
        <Nav className="ml-auto links" as="ul">



            <Nav.Item as="li">
                <Link className="NoUnder" to="/"><Nav.Link className="links-items" onClick={onLogout} as="a" >LOUGOUT</Nav.Link>
                    <div className="underline"></div></Link>
            </Nav.Item>


        </Nav>
    )

    const NavNotLoggedElements = (
        <Nav className="ml-auto links" as="ul">



            <Nav.Item as="li">
                <Link className="NoUnder" to="/"><Nav.Link className="links-items" as="a" >ACCEUIL</Nav.Link>
                    <div className="underline"></div></Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link className="links-items" as="a" >CÇM</Nav.Link>
                <div className="underline"></div>
            </Nav.Item>

            <Nav.Item as="li">
                <Nav.Link className="links-items" as="a"  >CONTACT</Nav.Link>
                <div className="underline"></div>
            </Nav.Item>
            <Nav.Item as="li">
                <Link className="NoUnder" to="/register"> <Nav.Link className="links-items" as="a"  >INSCRIPTION</Nav.Link>
                    <div className="underline"></div></Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link className="NoUnder" to="/login"><Nav.Link className="links-items" as="a"  >CONNECTER</Nav.Link>
                    <div className="underline"></div></Link>
            </Nav.Item>
        </Nav>

    )

    return (
        <div>
            <Navbar expand="lg" className="navbarc" fixed="top">
                <Navbar.Brand href="#home">
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
        </div>
    )




}

export default TopNav;