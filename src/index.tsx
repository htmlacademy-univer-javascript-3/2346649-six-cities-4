import React from 'react';
import 'leaflet/dist/leaflet.css';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {offers} from './mocks/offers.ts';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchOffersAction} from './api/api-cation.ts';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = { store } >
      <App offers={ offers }/>
    </Provider>
  </React.StrictMode>
);
