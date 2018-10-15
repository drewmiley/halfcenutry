import React, { Component } from 'react';

export default class SendMessage extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return false;
        };
    }

    clickMe() {
        console.log('Clicked')
    }

    render() {
        return <div>
            <button
                type='button'
                onClick={(e) => this.clickMe()}
            >
                Click
            </button>
        </div>
    }
};
