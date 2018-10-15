import * as actiontypes from './actiontypes';

const addJoke = (state: any, joke: string) => {
    return Object.assign({}, { jokes: state.jokes.concat([joke]) });
}

interface Action {
    type: string,
    joke?: string
}

export default function(state = {}, action: Action) {
    switch (action.type) {
        case actiontypes.ADD_JOKE:
            return addJoke(state, action.joke);
        default:
            return state;
    }
}
