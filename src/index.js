import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ServiceContext from './components/service-context';
import InfoService from './service';
import store from './store';
import App from './App';
import './normalize.css';
import './index.scss';

const service = new InfoService();

ReactDOM.render( 
  <Provider store={store}>
    <ServiceContext.Provider value={service}>
      <App />
    </ServiceContext.Provider>
  </Provider>
  ,document.getElementById('root')
);
