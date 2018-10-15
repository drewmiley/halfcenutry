import * as actiontypes from './actiontypes';

export const mapDispatchToProps = (dispatch: Function) => {
    return {
        getStaticJoke: () => dispatch(getStaticJoke()),
        fetchJokeFromServer: () => dispatch(fetchJokeFromServer())
    };
};

function getStaticJoke() {
    return (dispatch: Function) => {
        const number = Math.floor(100 * Math.random());
        dispatch(addJoke(number + ''));
    }
}

function fetchJokeFromServer() {
    return (dispatch: Function) => {
        fetch('http://localhost:8000/api')
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
