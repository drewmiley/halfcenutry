import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatchToProps } from './ducks/actions';

import ClickMe from './components/ClickMe';
import NumeralDisplay from './components/NumeralDisplay';

export default class App extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchNumber();
    }

    render() {
        console.log(this.props);
        return <div>
            <ClickMe
                clickMe={this.props.changeNumber}
            />
            <NumeralDisplay
                number={this.props.number}
            />
        </div>
    }
};

export const AppContainer = connect(state => state, mapDispatchToProps)(App);
