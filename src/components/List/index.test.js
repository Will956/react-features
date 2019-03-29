import React from 'react';
import { cleanup, render } from 'react-testing-library';
import List from './index';

global.console = {
  error: jest.fn()
};

const listProps = {
  title: 'my title',
  content: 'my content',
  list: [
    {
      content: 'a'
    },
    {
      content: 'b'
    }
  ]
};

afterEach(cleanup);

describe('List', () => {
  it('renders List with props', () => {
    const component = render(<List {...listProps}/>);
    expect(component).toMatchSnapshot();
  });
});