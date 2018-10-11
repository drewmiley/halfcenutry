import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './AppContainer';

import configureStore from './ducks/store';

ReactDOM.render(
    <Provider store={ configureStore() }>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
