import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
  });
}
