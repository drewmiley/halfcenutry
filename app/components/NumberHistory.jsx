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
        return <table id='jokes'>
            <thead>
                <tr>
                    <th>{this.props.values.length}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.props.values.length}</td>
                </tr>
            </tbody>
        </table>
    }
};
