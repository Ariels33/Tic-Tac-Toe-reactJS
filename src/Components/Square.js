import React, { Component } from 'react';

export default class Square extends Component {

    isEmpty(i) {
        if (this.props.Value === null && !(this.props.win))
            this.props.onClickTrigger(i)
    }


    render() {
        return (
            <button onClick={() => this.isEmpty(this.props.Value)}>
                {this.props.Value}
            </button>
        )
    }
}