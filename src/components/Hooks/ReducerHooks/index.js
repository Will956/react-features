import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  previous: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        previous: state.count
      };
    case 'DECREMENT':
      return {
        count: state.count -1,
        previous: state.count,
      }

    default:
      return state;  
  }
};

const ReducerHooks = () => {
  const [{ count, previous }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button id="add" onClick={() => dispatch({ type: 'INCREMENT' })}>Add one more</button>
      <button id="remove" onClick={() => dispatch({ type: 'DECREMENT' })}>Remove one more</button>
      <p>Count is: {count}</p>
      <p>Previous was: {previous}</p>
    </>
  );
};

export default ReducerHooks;
