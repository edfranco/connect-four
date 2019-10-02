import React, { Component } from 'react';

import Column from './components/Column/Column';
import './ConnectFour.css';

class ConnectFour extends Component {
    state = {
        color: 'red'
    }

    makeColumns = () => {
        const columns = [];
        for (let i = 0; i <= 7; i++) {
            columns.push(<Column color={this.state.color} />)
        };
        return columns;
    }

    render() {
        return (
            <div className="connect-four">
                <div className="columns">
                    {this.makeColumns()}
                    <div className="rows">
                        <div className="row">
                            row
                        </div>
                        <div className="row">
                            row
                        </div>
                        <div className="row">
                            row
                        </div>
                        <div className="row">
                            row
                        </div>
                        <div className="row">
                            row
                        </div>
                        <div className="row">
                            row
                        </div>
                    </div>
                </div>

            </div>
        );
    };
};

export default ConnectFour;
