/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCreditCard } from 'react-icons/fa';

import { Layout, Loader } from '@components';

import './home.scss';

const Home = () => {
  const { t } = useTranslation('common');
  return (
    <Layout tabTitle={t('tabs.home')}>
      <div className="main-home">
        <h2>{t('tabs.home')}</h2>
        <section className="inputs">
          <p>Custom inputs</p>
          <input type="text" placeholder="ei. myUserName" />
          <label className="input-wrapper">
            <FaCreditCard />
            <input type="text" placeholder="ei. myUserName" />
          </label>
          <label className="input-wrapper">
            <input type="text" placeholder="ei. myUserName" />
            <FaCreditCard />
          </label>
        </section>

        <section className="links">
          <p>Custom Links</p>
          <a href="#" className="link-btn">
            Link btn
          </a>
          <a href="#">Normal link</a>
        </section>

        <section className="links">
          <p>Custom Links</p>
          <button className="btn" type="button">
            Link btn
          </button>
          <button className="btn secondary" type="button">
            Link btn
          </button>
          <button disabled className="btn" type="button">
            Link btn
          </button>
          <button disabled className="btn secondary" type="button">
            Link btn
          </button>
        </section>

        <section className="loaders">
          <p>Custom Loaders</p>
          <Loader size="s" />
          <Loader label="Loading" size="s" />
          <Loader label="Loading" />
          <Loader label="Loading" size="l" color="royalblue" />
          <Loader label="Loading" size="xl" color="red" />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
