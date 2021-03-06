import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../Context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {

    const {loggedInUser} = useAuth();
    console.log(loggedInUser)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser?.isAdmin ? (
                children
                ) : (
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;