import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';

// Tüm middleware'lar middleware/index.js'in içerisinde toplanıyor.
export default applyMiddleware(
  	thunk,
  	logger
);