/* eslint-disable import/no-unresolved */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import notFound from '@images/404.svg';

import './not-found.scss';

const NotFound = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Helmet>
        <title>{t('tabs.notFound')}</title>
      </Helmet>
      <div className="not-found">
        <figure>
          <img src={notFound} alt="Not Found" loading="lazy" />
        </figure>

        <Link className="link-btn primary" to="/">
          {t('commons.goBackHome')}
        </Link>
      </div>
    </>
  );
};

export default NotFound;
