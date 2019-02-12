import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import EffectHooks from './index';

global.console = {
  log: jest.fn()
};

afterEach(cleanup);

describe('BasicHooks', () => {
  it('renders EffectHooks', () => {
    const { getByTestId } = render(<EffectHooks />);
    expect(getByTestId('counter').textContent).toBe('Counter: 0');
    expect(getByTestId('status').textContent).toBe('Component mounted/updated with 0');
  });

  it('update status when component did update', () => {
    const { getByTestId, getByText } = render(<EffectHooks />);
    const addBtn = getByText('Add one more');
    fireEvent.click(addBtn);
    expect(getByTestId('status').textContent).toBe('Component mounted/updated with 1');
  });

  it('trigger console.log when component did unmount', () => {
    const { getByText } = render(<EffectHooks />);
    const addBtn = getByText('Add one more');
    fireEvent.click(addBtn);
    expect(console.log).toHaveBeenCalledWith('[EffectHooks] Component was unmounted');
  });
});