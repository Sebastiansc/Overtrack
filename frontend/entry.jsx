import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
  window.store = store;
  ReactDOM.render(<h1>React goes here</h1>, document.getElementById('root'));
});
