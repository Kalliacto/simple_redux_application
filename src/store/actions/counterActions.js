import { INCREMENT } from '../types/types';

export function incrementAction(data) {
    return {
        type: INCREMENT,
        payload: data,
    };
}
// ИЛИ так достать можно  type: 'DECREMENT'
export function decrementAction(data) {
    return {
        type: 'DECREMENT',
        payload: data,
    };
}

export function increaseAction(data) {
    return {
        type: 'INCREASE',
        payload: data,
    };
}
