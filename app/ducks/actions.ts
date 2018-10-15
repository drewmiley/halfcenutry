import * as actiontypes from './actiontypes';

export const mapDispatchToProps = (dispatch: Function) => {
    return {
        changeNumber: () => dispatch(changeNumber()),
        fetchNumber: () => dispatch(fetchNumberFromServer())
    };
};

function changeNumber() {
    return (dispatch: Function) => {
        const number = Math.floor(100 * Math.random());
        dispatch(addNumber(number));
    }
}

function fetchNumberFromServer() {
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
            .then(number => dispatch(addNumber(number)))
            .catch(() => console.log('Server failed!!!'));
    };
}

function addNumber(number: number) {
    return {
        type: actiontypes.ADD_JOKE,
        number
    }
}
