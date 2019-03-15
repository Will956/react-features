import React, { createContext } from 'react';

import BasicHooks from '../../components/Hooks/BasicHooks';
import EffectHooks from '../../components/Hooks/EffectHooks';
import ContextHooks from '../../components/Hooks/ContextHooks';

import './index.scss';

export const ThemeContext = createContext();

const Playground = () => (
  <ThemeContext.Provider value="blue">
    <header className="app-header">
      <div className="app-block">
        <p>BasicHooks:</p>
        <BasicHooks />
      </div>
      <div className="app-block">
        <p>EffectHooks:</p>
        <EffectHooks />
      </div>
      <div className="app-block">
        <p>ContextHooks:</p>
        <ContextHooks />
      </div>
    </header>
  </ThemeContext.Provider>
);

export default Playground;
