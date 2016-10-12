/*
  This is the Board component.
  This is a stateless component.
*/

import React from 'react';
// import List from './List';
import ListContainer from './ListContainer';

let Board = () => {
  return (
    <div className='list'>
      <ListContainer />
    </div>
  );
};

export default Board;
