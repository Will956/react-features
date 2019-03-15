import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import BasicHooks from './index';

afterEach(cleanup);

describe('BasicHooks', () => {
  let counter;
  let addBtn;
  let removeBtn;

  beforeEach(() => {
    const { container, getByText } = render(<BasicHooks />);
    counter = container.querySelector('p');
    addBtn = getByText('Add one more');
    removeBtn = getByText('Remove one more');
  });

  it('renders BasicHooks', () => {
    expect(counter.textContent).toBe('Counter: 0');
  });

  it('update BasicHooks counter', () => {
    fireEvent.click(addBtn);
    expect(counter.textContent).toBe('Counter: 1');
  });

  it('update BasicHooks counter', () => {
    fireEvent.click(removeBtn);
    expect(counter.textContent).toBe('Counter: -1');
  });
});