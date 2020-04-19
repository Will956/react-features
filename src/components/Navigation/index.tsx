import React, { FC } from 'react';

import s from './index.module.scss';

const Navigation: FC = () => {
  return (
    <div className={s.container}>
      <ol className={s.list}>
        <li>🌞</li>
        <li>Home 🏡</li>
        <li>Hooks ⛓</li>
        <li>Error Boundaries 😵</li>
      </ol>
    </div>
  );
};

export default Navigation;
