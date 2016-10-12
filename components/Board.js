/*
  This is the Board component.
  This is a stateless component.
*/

import React from 'react';
import ListContainer from './ListContainer';

let Board = (props) => {
  let listTitles = [];
  for (var i = 0; i < 1; i++) {
    listTitles.push(<ListContainer key={i} />)
  }
  return (
    <div className='board'>
      <div className='board-title'>{props.title}</div>
      <div className='board-lists'>{listTitles}</div>
    </div>
  );
};

export default Board;
