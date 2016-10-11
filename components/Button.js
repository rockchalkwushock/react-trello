/*
  This is the Button component.
  This is a stateless component.
  Data is passed to it through 'props'.
  Data is passed from the Parent Component: List.
  Button is controlled by the event: onClick.
*/

import React from 'react';

let Button = (props) => {
  return (
    <button onClick={props.onClick}>Add Card</button>;
  );
};

export default Button;
