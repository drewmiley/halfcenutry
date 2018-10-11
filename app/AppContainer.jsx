import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatchToProps } from './ducks/actions';

import ClickMe from './components/ClickMe';
import NumeralDisplay from './components/NumeralDisplay';

export default class App extends Component {
    render() {
        return <div>
            <ClickMe
                info={'Frontend'}
                clickMe={this.props.changeNumber}
            />
            <ClickMe
                info={'Backend'}
                clickMe={this.props.fetchNumber}
            />
            <NumeralDisplay
                number={this.props.number}
            />
        </div>
    }
};

export const AppContainer = connect(state => state, mapDispatchToProps)(App);
