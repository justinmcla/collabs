import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain="dev--db8unc5.us.auth0.com"
    clientId="EsyBndC2rhQKoQmnSmOe8T1syJVvkb2v"
    redirectUri={'http://localhost:3000/home'}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);