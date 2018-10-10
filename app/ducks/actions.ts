import * as actiontypes from './actiontypes';

export function setNumber(number: number) {
    return {
        type: actiontypes.SET_NUMBER,
        number
    }
}
