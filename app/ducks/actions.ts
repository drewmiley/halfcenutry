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
        dispatch(setNumber(number));
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
            .then(number => dispatch(setNumber(number)))
            .catch(() => console.log('Server failed!!!'));
    };
}

function setNumber(number: number) {
    return {
        type: actiontypes.SET_NUMBER,
        number
    }
}
