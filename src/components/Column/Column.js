import React, { Component } from 'react';


class Column extends Component {
    state = {
        backgroundColor: '',
        player: this.props.player
    };

    componentDidMount() {
        this.setState({ player: this.props.player })
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.player !== this.state.player) {
            this.setState({ startTime: nextProps.player });
        }
    }

    render() {
        return (
            <div onClick={() => {
                this.setState({ backgroundColor: this.state.player.color, });
                this.props.handleClick(this.state.player.name, { x: this.props.coordinates.column, y: this.props.coordinates.row });
            }} style={{ cursor: 'pointer' }} className="column">
                {this.props.coordinates.row === 0 && this.props.coordinates.column}
                {this.props.coordinates.column !== this.props.coordinates.row && this.props.coordinates.column === 0 && this.props.coordinates.row}
                <div className="circle" style={{ backgroundColor: this.state.backgroundColor }}>

                </div>
            </div>
        );
    };
};

export default Column;
