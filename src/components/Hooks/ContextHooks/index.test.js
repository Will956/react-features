import React from 'react';
import { cleanup, render } from 'react-testing-library';
import ContextHooks from './index';
import { ThemeContext } from '../../../containers/Hooks';

afterEach(cleanup);

describe('ContextHooks', () => {
  it('renders EffectHooks and should have blue as theme', () => {
    const { container } = render(<ThemeContext.Provider value="random color"><ContextHooks /></ThemeContext.Provider>);
    expect(container.querySelector('p').textContent).toBe('Theme is: random color');
  });
});