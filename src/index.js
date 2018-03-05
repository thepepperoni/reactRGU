import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MainRouter from "./router";


ReactDOM.render(<MainRouter />, document.getElementById('root'));
registerServiceWorker();
