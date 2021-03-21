import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTH0_REDIRECT_URI}
      audience={process.env.REACT_APP_AUTH0_API_AUDIENCE}
    >
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);