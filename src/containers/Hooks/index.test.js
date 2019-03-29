import React from 'react';
import ReactDOM from 'react-dom';
import Playground from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Playground />, div);
  ReactDOM.unmountComponentAtNode(div);
});
