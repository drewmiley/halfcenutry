import * as actiontypes from './actiontypes';
import jokes from './jokes';

export const mapDispatchToProps = (dispatch: Function) => {
    return {
        getStaticJoke: () => dispatch(getStaticJoke()),
        fetchJokeFromServer: (input: string) => dispatch(fetchJokeFromServer(input))
    };
};

function getStaticJoke() {
    return (dispatch: Function) => {
        const index = Math.floor(jokes.length * Math.random());
        const joke = jokes[index];
        dispatch(addJoke(joke));
    }
}

function fetchJokeFromServer(input: string) {
    return (dispatch: Function) => {
        fetch(`http://localhost:8000/api/${ input }`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(obj => obj.answer)
            .then(joke => dispatch(addJoke(joke)))
            .catch(() => console.log('Server failed!!!'));
    };
}

function addJoke(joke: string) {
    return {
        type: actiontypes.ADD_JOKE,
        joke
    }
}
