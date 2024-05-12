import React from 'react';
import 'leaflet/dist/leaflet.css';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './api/api-cation.ts';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = { store } >
      <App/>
    </Provider>
  </React.StrictMode>
);
