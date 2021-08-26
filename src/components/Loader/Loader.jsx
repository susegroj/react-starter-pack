import React from 'react';
import PropTypes from 'prop-types';

import './loader.scss';

const Loader = ({ label, size, color }) => (
  <div className={`loader ${size}`}>
    <div
      style={{ borderTopColor: color }} 
      className="loader-spin"
    />
    {label && <span className="loader-label">{label}</span>}
  </div>
);

Loader.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  label: '',
  size: 'm',
  color: '#111',
};

export default Loader;
