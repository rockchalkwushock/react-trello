/*
  This is the Card component.
  This is a stateless component.
  Data is passed to it through 'props'.
  Data is passed from the Parent Component: List.
*/

import React from 'react';

let Card = () => {
  let hello = 'This is a card';
  return (
    <div className='card'>
      <p>{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
