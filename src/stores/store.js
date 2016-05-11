// src/stores/store.js
import count from '../reducers/count';

const createStore = reducer => {
  let state;

  let store = {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);
    }
  };

  store.dispatch({ type: '@@redux/INIT' });

  return store;
};

const store = createStore(count);

export default store;
