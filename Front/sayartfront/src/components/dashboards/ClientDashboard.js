import React, { useContext ,useState} from 'react';
import {Nav, Button, NavLink, Row, Container,Col} from 'react-bootstrap';
import Menu from './Menu'
import Profile from './Profile'
import OnLineGarage from './OnLineGarage'
import AuthContext from '../../contexts/Auth/authContext';
import '../../css/landingpage/Topnav.css'

const ClientDashboard = () => {

    const [page,setPage] = useState("appointments");


    const authContext = useContext(AuthContext);

    const { isAuthenticated, user } = authContext;


    const onChangePage = e => {
        e.preventDefault();
        setPage(e.target.name)
    }

    const renderSwitch = (page) => {
        switch(page) {
            case 'profile':
                return <Profile/>;
            case 'onLineGarage':
                return <OnLineGarage/>;
            default:
                return page;
        }
    }


    return (<div>

               <Row>
                   <Col xs lg={2}  >
                         <Menu onChange={onChangePage}/>
                   </Col>
                   <Col >
                       { renderSwitch(page)}
                   </Col>
               </Row>
            </div>);

}

export default ClientDashboard;