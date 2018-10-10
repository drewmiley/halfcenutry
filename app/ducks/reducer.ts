import * as actiontypes from './actiontypes';

const setNumber = (state: Object, number: number) => {
    return Object.assign({}, { number });
}

interface Action {
    type: string,
    number?: number
}

export default function(state = {}, action: Action) {
    switch (action.type) {
        case actiontypes.SET_NUMBER:
            return setNumber(state, action.number);
        default:
            return state;
    }
}
