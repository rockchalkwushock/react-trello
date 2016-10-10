import React from 'react';
import ReactDOM from 'react-dom';

// Card Component
let Card = () => {
  let hello = 'This is a card';
  return (
    <div className='card'>{hello}</div>
  );
}

// List Component
let List = () => {
  return (
    <div className='list'>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

// Board Component
let Board = () => {
  return (
    <div className='board'>
      <List />
      <List />
      <List />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  // ReactDOM.render(what, where);
    ReactDOM.render(<Board />, document.getElementById('app'));
});
