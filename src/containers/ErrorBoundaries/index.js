import React from 'react';

import List from '../../components/List';

import './index.scss';

/**
 * Note:
 * In order to see that working, you need to close the warning
 * in development that CRA creates.
 */

const Playground = () => (
  <div className="container">
    <List title={'My title'} content={'My content'} list={null}/>
    <List title={'My title'} content={'My content'} list={[{ content: 'a' }, { content: 'b' }]}/>
  </div>
);

export default Playground;
