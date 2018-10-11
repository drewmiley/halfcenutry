import {compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default createStoreDevTools(reducer, { number: 0 }, applyMiddleware(thunk));
