import React, { useContext } from 'react';

import { ThemeContext } from '../../../containers/Playground';

const ContextHooks = () => {
  const theme = useContext(ThemeContext);

  return <><p>Theme is: {theme}</p></>;
};

export default ContextHooks;
