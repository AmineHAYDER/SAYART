import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from "react-router-dom";

import Landingpage from './components/landingpage/Landingpage';
import Account from './components/Account';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      logged: false
    }
    this.isLogged = this.isLogged.bind(this);
  }

  isLogged() {
    return this.state.logged ? <h1>Logged</h1> : <h1>not logged</h1>;
  }

  render() {
    const loggedIn = this.state.logged;
    let page;

    if (!loggedIn) {
      page = <Landingpage />
    } else {
      page = <Account />
    }

    return (
      <div className="App">

        {page}

      </div>);
  }

}

export default App;


