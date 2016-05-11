// main.js
import 'babel-polyfill';
import store from './stores/store';

console.log('Initial State of Store');
console.log(store.getState());

store.dispatch({ type: 'ADD_ONE' });
console.log(store.getState());

store.dispatch({ type: 'RESET_TO_ZERO' });
console.log(store.getState());
