import React, { Component } from 'react';

const PLAYER_ONE = {
    name: 'player1',
    color: 'red',
    array: []
};

const PLAYER_TWO = {
    name: 'player2',
    color: 'yellow',
    array: []
};


class Column extends Component {
    state = {
        backgroundColor: '',
        player: this.props.player,
        player: PLAYER_ONE
    };

    players = [PLAYER_ONE, PLAYER_TWO]

    handleClick = (name, coordinates) => {
        this.players.forEach(player => {
            if (player.name === name) {
                player.array.push(coordinates)
            }
        })
        this.setState({ backgroundColor: this.state.backgroundColor === 'red' ? 'white' : this.state.player.color });
        console.log(this.state.player.array)
    }

    render() {
        return (
            <div onClick={() => this.handleClick(this.state.player.name, { x: this.props.coordinates.column, y: this.props.coordinates.row })} style={{ cursor: 'pointer', backgroundColor: this.state.backgroundColor }} className="column">
                {this.props.coordinates.row === 0 && this.props.coordinates.column}
                {this.props.coordinates.column !== this.props.coordinates.row && this.props.coordinates.column === 0 && this.props.coordinates.row}
            </div>
        );
    };
};

export default Column;
