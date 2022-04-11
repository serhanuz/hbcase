import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import App from './containers/App';
import { store } from './redux/store';
import './index.css';
import './App.scss';

ReactDOM.render(
  <Provider store={store} >
  	<App />
  </Provider>,
  document.getElementById('root')
);