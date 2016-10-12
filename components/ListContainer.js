import React from 'react';
import List from './List';

// Initializing ListContainer as a stateful React Component.
class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            list: []
        };
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmited = this.onAddSubmited.bind(this);
    }

    onAddInputChanged(event) {
        this.setState({
            // update the text property of the state.
        });
    }

    onAddSubmited(event) {
        event.preventDefault();
        this.setState({
            // add the contents of the text property of state to the array of cards in state.
        });
    }
    render() {
        // must pass array of cards from state as 'cards' prop
        return (
            <div><List/></div>
        );

    }
}

export default ListContainer;
