import React, { useContext, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'mapbox-gl/dist/mapbox-gl.css';
import AuthState from './contexts/Auth/authState';

import PageContainer from './components/PageContainer';





const App = () => {



  return (

    <div className="App">

      <AuthState>
        <PageContainer />
      </AuthState>
    </div>
  );


}

export default App;


