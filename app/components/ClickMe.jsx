import React, { Component } from 'react';

export default class ClickMe extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return false;
        };
    }
    clickMe() {
        this.props.clickMe();
    }
    render() {
        return <div>
            <button
                type='button'
                onClick={(e) => this.clickMe()}
            >
                {this.props.info}
            </button>
        </div>
    }
};
