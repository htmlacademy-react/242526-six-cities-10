import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PLACES_FOUND } from './const/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placesFound={PLACES_FOUND} />
  </React.StrictMode>,
);
