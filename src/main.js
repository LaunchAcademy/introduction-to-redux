// main.js
import 'babel-polyfill';
import store from './stores/store';

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('Initial State of Store');
console.log(store.getState());

store.dispatch({ type: 'ADD_ONE' });
store.dispatch({ type: 'RESET_TO_ZERO' });
store.dispatch({ type: 'INCREASE_BY', numberToAdd: 2 });
store.dispatch({ type: 'SUBSTRACT_BY', numberToSubstract: 2 });
