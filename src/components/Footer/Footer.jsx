import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  FiFacebook,
  FiInstagram,
  FiPhone,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';

import './footer.scss';

const Footer = () => {
  const { t } = useTranslation('common');
  const appContact = [
    {
      key: 'facebook',
      icon: <FiFacebook className="icon" />,
      href: t('app.facebook'),
    },
    {
      key: 'whatsapp',
      icon: <FaWhatsapp className="icon" />,
      href: `https://wa.me/${t('app.whatsapp')}`,
    },
    {
      key: 'instagram',
      icon: <FiInstagram className="icon" />,
      href: t('app.instagram'),
    },
    {
      key: 'phone',
      icon: <FiPhone className="icon" />,
      href: `tel:+${t('app.phone')}`,
    },
    {
      key: 'mail',
      icon: <FiMail className="icon" />,
      href: `mailto:${t('app.mail')}`,
    },
    {
      key: 'location',
      icon: <FiMapPin className="icon" />,
      href: t('app.location'),
    },
  ];

  return (
    <footer className="main-footer">
      <h3>{t('app.name')}</h3>
      <section className="icons-wrapper">
        {appContact.map(({ key, icon, href }) => (
          <a 
            target="_blank"
            rel="noreferrer"
            key={key}
            href={href}
          >
            {icon}
          </a>
        ))}
      </section>
      <div className="devs">
        <small>{t('app.devs.name')}</small>
        <a 
          target="_blank"
          rel="noreferrer"
          href={t('app.devs.website')}
        >
          <GrGithub className="icon" />
        </a>
        <a href={`mailto:${t('app.devs.mail')}`}>
          <FiMail className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
