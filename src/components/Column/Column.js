import React, { Component } from 'react';

class Column extends Component {
    state = {
        backgroundColor: '',
        player: this.props.player
    };

    handleClick = () => {
        this.setState({ backgroundColor: this.state.backgroundColor === 'red' ? 'white' : this.state.player.color });
    }

    render() {
        return (
            <div onClick={this.handleClick} style={{ cursor: 'pointer', backgroundColor: this.state.backgroundColor }} className="column">
                {this.props.coordinates.row === 0 && this.props.coordinates.column}
                {this.props.coordinates.column !== this.props.coordinates.row && this.props.coordinates.column === 0 && this.props.coordinates.row}
            </div>
        );
    };
};

export default Column;
