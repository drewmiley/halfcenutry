import * as actiontypes from './actiontypes';

export const mapDispatchToProps = (dispatch: Function) => {
    return { fetchNumber: () => dispatch(fetchNumberFromServer()) };
};

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
