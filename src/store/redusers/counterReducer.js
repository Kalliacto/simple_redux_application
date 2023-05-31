import { DECREMENT, INCREASE, INCREMENT } from '../types/types';

const initialState = {
    value: 1,
    flag: true,
};

function counterReducer(state = initialState, action) {
    // console.log(state, action);
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value + action.payload };
        case DECREMENT:
            return { ...state, value: state.value - action.payload };
        case INCREASE:
            return { ...state, value: state.value * action.payload };
        default:
            return state;
    }
}

export default counterReducer;
