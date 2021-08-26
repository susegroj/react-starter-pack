import React from 'react';
import ReactDOM from 'react-dom';

import '@styles/_main.scss';

import App from './routes/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
