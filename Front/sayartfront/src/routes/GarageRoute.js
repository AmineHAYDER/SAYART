import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../contexts/Auth/authContext'

const GarageRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;

    return (
        <Route
            {...rest}
            render={props =>
                (!isAuthenticated && !loading  && !authContext.user.isGarage) ? (
                    <Redirect to='/login' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default GarageRoute;