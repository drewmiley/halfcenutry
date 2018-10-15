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
                    <th>Jokes</th>
                </tr>
            </thead>
            <tbody>
                {this.props.values.map((value, i) =>
                    <tr key={`jokes-${ i }`}>
                        <td>{value}</td>
                    </tr>
                )}
            </tbody>
        </table>
    }
};
