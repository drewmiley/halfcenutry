import React from 'react';

export default class NumeralDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return this.props.number !== nextProps.number;
        };
    }
    render() {
        return <div>
            <span>{this.props.number}</span>
        </div>
    }
};
