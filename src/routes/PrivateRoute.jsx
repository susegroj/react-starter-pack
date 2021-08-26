/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

// import { isAuthLoggedIn } from '@utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { role } = rest;

  const [auth, setAuth] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const fetchAuth = await isAuthLoggedIn(role);
    // setAuth(fetchAuth);
    setAuth({ loggedIn: true, allowed: true });
    setIsLoading(false);
  }, []);

  const redirectTo = () => {
    if (auth.loggedIn && !auth.allowed) {
      return <Redirect to="/not-found" />;
    }
    return <Redirect to="/login" />;
  };

  return isLoading ? null : (
    <Route
      {...rest}
      render={(props) =>
        auth.loggedIn && auth.allowed ? <Component {...props} /> : redirectTo()}
    />
  );
};

export default PrivateRoute;
