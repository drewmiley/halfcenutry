import * as actiontypes from './actiontypes';

export const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeNumber: () => dispatch(changeNumber()),
        fetchNumber: () => dispatch(fetchJokeFromServer())
    };
};

function changeNumber() {
    return (dispatch: Function) => {
        const number = Math.floor(100 * Math.random());
        dispatch(addJoke(number));
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
            .then(obj => {
                console.log(obj.answer);
                return obj.number;
            })
            .then(number => dispatch(addJoke(number)))
            .catch(() => console.log('Server failed!!!'));
    };
}

function addJoke(number: number) {
    return {
        type: actiontypes.ADD_JOKE,
        number
    }
}
