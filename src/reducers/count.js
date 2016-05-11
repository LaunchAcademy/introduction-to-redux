// src/reducers/count.js
const initialState = 0;

const count = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    case 'RESET_TO_ZERO':
      return 0;
    default:
      return state;
  }
};

export default count;
