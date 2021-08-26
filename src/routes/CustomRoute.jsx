/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

// import { isAuthLoggedIn } from '@utils/auth';

const CustomRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(() => {
    // const { path } = rest;
    // if(path === '/login' || path === '/signup') {
    //   const auth = await isAuthLoggedIn('regular');

    //   setIsLoggedIn(auth);
    // }
    setIsLoggedIn({ loggedIn: true, allowed: false });
  }, []);

  const redirectTo = () => history.goBack('/');

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn.loggedIn && isLoggedIn.allowed ? (
          redirectTo()
        ) : (
          <Component {...props} />
        )}
    />
  );
};

export default CustomRoute;
