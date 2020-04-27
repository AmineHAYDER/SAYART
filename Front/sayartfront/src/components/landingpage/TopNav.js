import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/landingpage/SayartlogoMini.png';
import '../../css/landingpage/Topnav.css'
import AuthContext from '../../contexts/Auth/authContext';
import logo2 from '../../img/landingpage/SayartlogoMini2.png';



const TopNav = (props) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout } = authContext;

    const onLogout = () => {
        logout();
    }

    const NavItem = (props)=>{

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
            <NavItem path={"/"} value={"LOGOUT"} onClick={onLogout} />
        </Nav >
    )

    const NavNotLoggedElements = (
        <Nav className="ml-auto links" as="ul">
            <NavItem path={"/"} value={"HOME"} />
            <NavItem path={"/CCM"} value={"CÇM"} />
            <NavItem path={"/"} value={"CONTACT"} />
            <NavItem path={"/register"} value={"INSCRIPTION"} />
            <NavItem path={"/login"} value={"CONNECTER"} />
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
        </div>
    )
}

export default TopNav;