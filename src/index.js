import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
// import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducer'
import GeoData from './views/GeoData';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <GeoData />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
