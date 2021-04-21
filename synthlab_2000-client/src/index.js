import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import presetReducer from './reducers/presetReducer';

const store = createStore(presetReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className="App" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
