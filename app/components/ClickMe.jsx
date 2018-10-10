import React from 'react';

export default class ClickMe extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = function(nextProps, nextState) {
            return false;
        };
    }
    clickMe() {
        this.props.setNumber(Math.floor(100 * Math.random()));
    }
    render() {
        return <div>
            <button type='button' onClick={(e) => this.clickMe()}>Click Me</button>
        </div>
    }
};
