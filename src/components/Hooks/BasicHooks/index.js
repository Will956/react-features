import React, { useState } from 'react';

const BasicHooks = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button id="add" onClick={() => setCount(count + 1)}>Add one more</button>
      <button id="remove" onClick={() => setCount(count - 1)}>Remove one more</button>
      <p>Counter: {count}</p>
    </>
  )
};

export default BasicHooks;
