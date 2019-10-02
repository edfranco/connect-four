import React, { Component } from 'react';

import Column from './components/Column/Column';
import Row from './components/Row/Row';
import './ConnectFour.css';



class ConnectFour extends Component {
    state = {
        color: 'white',
    };

    makeLayout = (grid, num, coordinate = 0) => {
        const gameBoard = [];
        if (grid === 'row') {
            for (let r = 0; r < num; r++) {
                gameBoard.push(<Row coordinate={r} key={r} columns="7" makeLayout={this.makeLayout} />);
            };
        } else {
            for (let c = 0; c < num; c++) {
                gameBoard.push(<Column player={this.state.player} key={c} coordinates={{ row: coordinate, column: c }} />);
            };
        }
        return gameBoard;
    };



    render() {
        return (
            <div className="connect-four">
                <div className="rows">
                    {this.makeLayout('row', 6)}
                </div>
            </div>
        );
    };
};

export default ConnectFour;
