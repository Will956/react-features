import React, { useState } from 'react';

export default () => {

    const [count, setCount] = useState(0);

    return (
      <>
        <button onClick={() => setCount(count + 1)}>Add one more</button>
        <button onClick={() => setCount(count - 1)}>Add one more</button>
        <p>Counter: {count}</p>
      </>
    )
};