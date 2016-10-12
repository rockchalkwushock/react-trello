import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Board title='Board Title'/>,
        document.getElementById('app'));
});
