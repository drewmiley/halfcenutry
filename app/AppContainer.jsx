import React from 'react';
import {connect} from 'react-redux';

import * as actions from './ducks/actions';

import ClickMe from './components/ClickMe';
import NumeralDisplay from './components/NumeralDisplay';

export default class App extends React.Component {
    render() {
        console.log(this.props);
        return <div>
            <ClickMe
                setNumber={this.props.setNumber}
            />
            <NumeralDisplay
                number={this.props.number}
            />
        </div>
    }
};

function mapStateToProps(state) {
    return state;
}

export const AppContainer = connect(mapStateToProps, actions)(App);
