import React, { Component } from 'react';

import Column from './components/Column/Column';
import Row from './components/Row/Row';
import './ConnectFour.css';

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

const players = [PLAYER_ONE, PLAYER_TWO];

class ConnectFour extends Component {
    state = {
        color: 'white',
        player: PLAYER_ONE
    };

    makeLayout = (grid, num, coordinate = 0) => {
        const gameBoard = [];
        if (grid === 'row') {
            for (let r = 0; r < num; r++) {
                gameBoard.push(<Row coordinate={r} key={r} columns="7" makeLayout={this.makeLayout} />);
            };
        } else {
            for (let c = 0; c < num; c++) {
                gameBoard.push(<Column backgroundColor={this.state.player.color} handleClick={this.handleClick} player={this.state.player} key={c} coordinates={{ row: coordinate, column: c }} />);
            };
        }
        return gameBoard;
    };

    handleClick = (name, coordinates) => {
        console.log(name, PLAYER_ONE.name)
        players.forEach(player => {
            if (player.name === name) {
                player.array.push(coordinates);
            };
        });
        this.setState({
            backgroundColor: this.state.player.color,
            player: name === PLAYER_ONE.name ? PLAYER_TWO : PLAYER_ONE,
        });
    }

    render() {
        return (
            <>
                <div>It's {this.state.player.name}'s turn</div>
                <div className="connect-four">

                    <div className="rows">
                        {this.makeLayout('row', 6)}
                    </div>
                </div>
            </>
        );
    };
};

export default ConnectFour;
