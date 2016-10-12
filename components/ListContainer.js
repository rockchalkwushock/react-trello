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
        this.addSubmit = this.addSubmit.bind(this);
    }

    onAddInputChanged (text) {
        this.setState({
            text: text
        });
    }

    addSubmit () {
        this.setState({
            list: this.state.list.concat(this.state.text)
        });
    }

    render() {
        return <List cards={this.state.list} callback={this.addSubmit} onChange={this.onAddInputChanged}/>
      }
}

export default ListContainer;
