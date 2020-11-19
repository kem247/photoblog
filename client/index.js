const React = require('react');
const ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';

const App = require('./app');

ReactDOM.render(
  <Provider>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
