import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {offers} from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeCardsNum={52} offers={offers}/>
  </React.StrictMode>
);
