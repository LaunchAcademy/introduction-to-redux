// src/stores/store.js
import count from '../reducers/count';

const createStore = reducer => {
  let state;
  let callbacks = [];

  let store = {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);
      callbacks.forEach(callback => callback());
    },

    subscribe(newCallback) {
      callbacks.push(newCallback);
      return () => {
        callbacks = callbacks.filter(callback => callback !== newCallback);
      };
    }
  };

  store.dispatch({ type: '@@redux/INIT' });

  return store;
};

const store = createStore(count);

export default store;
