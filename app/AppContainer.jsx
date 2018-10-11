import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatchToProps } from './ducks/actions';

import NumeralDisplay from './components/NumeralDisplay';

export default class App extends Component {
    componentDidMount() {
        this.props.fetchNumber();
    }

    render() {
        console.log(this.props);
        return <div>
            <NumeralDisplay
                number={this.props.number}
            />
        </div>
    }
};

export const AppContainer = connect(state => state, mapDispatchToProps)(App);
