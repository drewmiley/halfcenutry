import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapDispatchToProps } from './ducks/actions';

import JokeHistory from './components/JokeHistory';
import SendMessage from './components/SendMessage';

export default class App extends Component {
    render() {
        return <div>
            <SendMessage
                getNLPJoke={this.props.fetchJokeFromServer}
                getRandomJoke={this.props.getStaticJoke}
            />
            <JokeHistory
                values={this.props.jokes}
            />
        </div>
    }
};

export const AppContainer = connect(state => state, mapDispatchToProps)(App);
