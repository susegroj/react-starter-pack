import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/* Translations */
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
/* Translations */
import AppContext from '@context/AppContext';
import useInitialState from "@hooks/useInitialState";

import enTranslations from '../assets/i18n/en.json';
import espTranslations from '../assets/i18n/esp.json';

import PrivateRoute from './PrivateRoute';
import CustomRoute from './CustomRoute';
import routes from './routes';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'esp',
  resources: {
    en: { common: enTranslations },
    esp: { common: espTranslations },
  },
});

const App = () => {
  const initialState = useInitialState();

  const getRoutes = () =>
    routes.map(({ key, exact, path, component, privateRoute, role }) => {
      if (privateRoute) {
        return (
          <PrivateRoute
            key={key}
            exact={exact}
            path={path}
            component={component}
            role={role}
          />
        );
      }
      return (
        <CustomRoute
          key={key}
          exact={exact}
          path={path}
          component={component}
        />
      );
    });

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <AppContext.Provider value={initialState}>
          <Switch>{getRoutes()}</Switch>
        </AppContext.Provider>
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
