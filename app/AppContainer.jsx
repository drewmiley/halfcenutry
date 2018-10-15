import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatchToProps } from './ducks/actions';

import ClickMe from './components/ClickMe';
import JokeHistory from './components/JokeHistory';
import SendMessage from './components/SendMessage';

export default class App extends Component {
    render() {
        return <div>
            <ClickMe
                info={'Frontend'}
                clickMe={this.props.getStaticJoke}
            />
            <ClickMe
                info={'Backend'}
                clickMe={this.props.fetchJokeFromServer}
            />
            <SendMessage
            />
            <JokeHistory
                values={this.props.jokes}
            />
        </div>
    }
};

export const AppContainer = connect(state => state, mapDispatchToProps)(App);
