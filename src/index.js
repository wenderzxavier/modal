import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import GeoData from './views/GeoData';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GeoData />, document.getElementById('root'));
registerServiceWorker();
