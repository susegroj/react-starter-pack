import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import { Header, Footer } from '@components';

import './layout.scss';

const Layout = ({ children, tabTitle }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <Helmet>
        <title>{`${tabTitle} | ${t('app.name')}`}</title>
      </Helmet>
      <main className="layout">
        <Header />
        <section className="main-content">{children}</section>
        <Footer />
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tabTitle: PropTypes.string,
};

Layout.defaultProps = {
  tabTitle: '',
};

export default Layout;
