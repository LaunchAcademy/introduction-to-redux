// src/reducers/count.js
const initialState = 0;

const count = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    case 'RESET_TO_ZERO':
      return 0;
    case 'INCREASE_BY':
      return state + action.numberToAdd;
    case 'SUBSTRACT_BY':
      return state - action.numberToSubstract;
    default:
      return state;
  }
};

export default count;
