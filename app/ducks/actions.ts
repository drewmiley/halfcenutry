import * as actiontypes from './actiontypes';

export const mapDispatchToProps = (dispatch: Function) => {
    return {
        getStaticJoke: () => dispatch(getStaticJoke()),
        fetchJokeFromServer: (input: string) => dispatch(fetchJokeFromServer(input))
    };
};

function getStaticJoke() {
    return (dispatch: Function) => {
        const number = Math.floor(100 * Math.random());
        dispatch(addJoke(number + ''));
    }
}

function fetchJokeFromServer(input: string) {
    return (dispatch: Function) => {
        fetch(`http://localhost:8000/api/${ input }`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                console.log(input);
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
