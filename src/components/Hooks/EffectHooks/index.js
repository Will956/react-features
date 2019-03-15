import React, { useState, useEffect } from 'react';

const EffectHooks = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(`Component mounted/updated with ${count}`);
    return () => console.log('[EffectHooks] Component was unmounted');
  }, [count]); // only re-run if count changes 🤓

  return (
    <>
      <button id="add" onClick={() => setCount(count + 1)}>Add one more</button>
      <button id="remove" onClick={() => setCount(count - 1)}>Remove one more</button>
      <p data-testid="counter">Counter: {count}</p>
      {status && <p data-testid="status">{status}</p>}
    </>
  );
};

export default EffectHooks;
