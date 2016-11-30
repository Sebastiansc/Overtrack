import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';
import { summonerSoloQueue } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.summonerSoloQueue = summonerSoloQueue;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
