import React from 'react';
import { useTranslation } from 'react-i18next';

import './header.scss';

const Header = () => {
  const { t } = useTranslation('common');
  return (
    <header className="header">
      <h1>
        {t('app.name')}
      </h1>
    </header>
  );
};

export default Header;
