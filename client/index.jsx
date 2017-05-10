require('../assets/style.scss');

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer.js';
import { configureStore } from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  window.store = store;

  const root = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>, root
  );

});
