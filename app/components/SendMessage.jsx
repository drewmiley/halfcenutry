import React, { Component } from 'react';

export default class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return nextState.input !== this.state.input;
        };
        this.state = { input: '' };
    }

    handleInput(e) {
        this.setState({ input: e.target.value });
    }

    onClick() {
        const input = this.state.input
        this.setState({ input: '' });
        this.props.sendMessage(input);
    }

    render() {
        return <div>
            <input
                value={this.state.input}
                onKeyUp={(e) => {if (e.keyCode === 13) { this.onClick(); }}}
                onChange={(e) => {this.handleInput(e)}}
                placeholder='Doodle'
            />
            <button
                type='button'
                onClick={(e) => this.onClick()}
            >
                Click
            </button>
        </div>
    }
};
