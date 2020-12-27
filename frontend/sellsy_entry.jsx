import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined
  let store;
  // debugger
  if (window.user) {
    preloadedState = {
      entities: {
        user: {
          [window.user.id]: window.user
        }
      },
      session: {
        user: window.user,
      }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});

