import * as actiontypes from './actiontypes';

export const mapDispatchToProps = (dispatch: Function) => {
    return { fetchNumber: () => dispatch(fetchNumberFromServer()) };
};

function fetchNumberFromServer() {
    return (dispatch: Function) => {
        console.log("Running 1");
        fetch('http://localhost:8000/api')
            .then(response => {
                console.log("Running 2");
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(number => dispatch(setNumber(2)))
            .catch(() => console.log('Server failed!!!'));
    };
}

function setNumber(number: number) {
    console.log("Running 3");
    return {
        type: actiontypes.SET_NUMBER,
        number
    }
}
