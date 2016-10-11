import React from 'react';
import Card from './Card';
import Button from './Button';


// Initializing List as a stateful React Component.
class List extends React.Component {
  constructor(props) {
    super(props);
    // this.state = getInitialState()
    this.state = {
      text: '',
      cards: [],
      list: ['List 1']
    };
  }

  //-------------------------------
  // Methods attached to List Class
  //-------------------------------

  onAddInputChange (event) {
    console.log("Typed in input box.");
    this.setState({
      text: event.target.value // text will be taken into Card Component.
    });
  }

  onAddSubmit (event) {
    event.preventDefault();
        console.log("Call to add new card.");
            let card = [this.state.text];
            this.setState({
                text:'',
                cards: this.state.cards.concat(card)
            });
  }

  render () {
    return (

    );
  }
}

export default List;
