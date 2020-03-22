import React from 'react';

import '../../App.css';

//router
import { Route, Switch } from "react-router-dom";

//footer w navbar
import Navbar from './TopNav';
import Footer from './Footer';


//page components
import Register from '../authentification/Register';
import Login from '../authentification/Login'
import Acceuil from './Acceuil';

class Landingpage extends React.Component {
    render() {


        return (
            <div className="App">
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Acceuil} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>


                <Footer />
            </div>
        );
    }
}

export default Landingpage;