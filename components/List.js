import React from 'react';
import Card from './Card';

// Initializing List as a stateful React Component.
class List extends React.Component {
  onAddSubmit (event) {
    event.preventDefault();
    this.props.callback();  // this is how I can pass data up to the parent.
    console.log(event.target.value);
    event.target.value = '';
  }

  onChange (event) {
    event.preventDefault();
    console.log(event.target.value);
    this.props.onChange(event.target.value);
  }

  render () {
    let listCards = [];
    let propsCards = this.props.cards;
    let propsTitle = this.props.title;
    console.log(propsCards);
    for (var i = 0; i < propsCards.length; i++) {
      listCards.push(<Card key={i} title={propsCards[i]} />)
    }
    return (
      <div className='cardList'>
        <div className='list-title'>{propsTitle}</div>
        <div className='list-cards'>{listCards}</div>
        <form onSubmit={this.onAddSubmit.bind(this)}>
          <input type='text' onChange={this.onChange.bind(this)} placeholder='Enter Text Here'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
export default List;
