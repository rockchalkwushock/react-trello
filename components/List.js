import React from 'react';
import Card from './Card';
// import Button from './Button';

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
        this.onAddInputChange = this.onAddInputChange.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    //-------------------------------
    // Methods attached to List Class
    //-------------------------------

    onAddInputChange(event) {
        this.setState({
            text: event.target.value // text will be taken into Card Component.
        });
    }

    onAddSubmit(event) {
        event.preventDefault();
        let card = [this.state.text];
        this.setState({text: '', cards: this.state.cards.concat(card)});
    }

    render() {
        let cardsList = [];
        for (var i = 0; i < this.state.cards.length; i++) {
            cardsList.push(<Card title={this.state.cards[i]} key={i}/>);
        }
        return (
            <form onSubmit={this.onAddSubmit}>
                <input onChange={this.onAddInputChange}></input>
                <button type='submit'>Click Here</button>
                {cardsList}
            </form>
        );
    }
}

export default List;
