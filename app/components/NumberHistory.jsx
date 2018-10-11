import React, { Component } from 'react';

export default class NumberHistory extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.values !== nextProps.values;
        };
    }
    render() {
        console.log(this.props.values);
        return <div>
            <span>{this.props.values.length}</span>
        </div>
    }
};
