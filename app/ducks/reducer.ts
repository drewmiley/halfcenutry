import * as actiontypes from './actiontypes';

const addJoke = (state: any, number: number) => {
    return Object.assign({}, { jokes: state.jokes.concat([number]) });
}

interface Action {
    type: string,
    number?: number
}

export default function(state = {}, action: Action) {
    switch (action.type) {
        case actiontypes.ADD_JOKE:
            return addJoke(state, action.number);
        default:
            return state;
    }
}
