import * as actiontypes from './actiontypes';

const addNumber = (state: any, number: number) => {
    return Object.assign({}, { numbers: state.numbers.concat([number]) });
}

interface Action {
    type: string,
    number?: number
}

export default function(state = {}, action: Action) {
    switch (action.type) {
        case actiontypes.ADD_JOKE:
            return addNumber(state, action.number);
        default:
            return state;
    }
}
