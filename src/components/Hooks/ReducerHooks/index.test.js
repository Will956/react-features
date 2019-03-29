import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import ReducerHooks from './index';

//TODO: Add more tests (ie. test if fn called..)

afterEach(cleanup);

describe('ReducerHooks', () => {
  it('renders ReducerHooks', () => {
    const { container } = render(<ReducerHooks />);
    expect(container.querySelectorAll('p')[0].textContent).toBe('Count is: 0');
    expect(container.querySelectorAll('p')[1].textContent).toBe('Previous was: 0');
  });

  it('update ReducerHooks counter', () => {
    const { container, getByText } = render(<ReducerHooks />);

    const addBtn = getByText('Add one more');
    fireEvent.click(addBtn);

    expect(container.querySelectorAll('p')[0].textContent).toBe('Count is: 1');
    expect(container.querySelectorAll('p')[1].textContent).toBe('Previous was: 0');
  });
});