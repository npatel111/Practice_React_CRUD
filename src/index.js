import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {getBooks} from './actions/bookListActions'

import App from './components/app';
import rootReducer from './reducers/index';

// const store = configureStore()
const createStoreWithMiddleware = applyMiddleware()(createStore);
// store.dispatch(getBooks())

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
  //  document.getElementById('root')?
