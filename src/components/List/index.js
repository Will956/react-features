import React from 'react';
import { string, arrayOf, object } from 'prop-types';

import ErrorBoundaries from '../../hoc/ErrorBoundaries';

const List = ({ title, content, list }) => (
  <>
    <h1>{title}</h1>
    <p>{content}</p>
    <ul>
      {list.map(item => <li key={item.content}>{item.content}</li>)}
    </ul>
  </>
);

List.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  list: arrayOf(object)
};

export default ErrorBoundaries(List);