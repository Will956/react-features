import React from 'react';
import { cleanup, render } from 'react-testing-library';
import ErrorBoundaries from './index';

afterEach(cleanup);

const FakeComponent = ({ title, list }) => (
  <>
    <p>{title}</p>
    <ul>
      {list.map(item => <li key={item.content}>{item.content}</li>)}
    </ul>
  </>
);

const componentProps = {
  title: 'my title',
  list: [
    {
      content: 'a'
    },
    {
      content: 'b'
    }
  ]
};

// @TOFIX
describe('ErrorBoundaries', () => {
  it.skip('renders Component with props', () => {
    const Component = render(<FakeComponent {...componentProps} />);
    const ErrorBoundedComponent = ErrorBoundaries(FakeComponent);
    
    expect(Component).toEqual(render(<ErrorBoundedComponent {...componentProps} />));
  });
});