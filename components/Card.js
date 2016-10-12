/*
  This is the Card component.
  This is a stateless component.
  Data is passed to it through 'props'.
  Data is passed from the Parent Component: List.
*/

import React from 'react';

const Card = (props) => (
    <div className='card'>
      <div className='card-text'>{props.title}</div>
    </div>
);

export default Card;
