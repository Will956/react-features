import React from 'react';

import BasicHooks from '../../components/Hooks/BasicHooks';
import EffectHooks from '../../components/Hooks/EffectHooks';

import './index.scss';

const Playground = () => (
  <header className="app-header">
    <div className="app-block">
      <p>BasicHooks:</p>
      <BasicHooks />
    </div>
    <div className="app-block">
      <p>EffectHooks:</p>
      <EffectHooks />
    </div>
  </header>
);

export default Playground;
