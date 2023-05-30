import { PRODUCTS_ADD_ALL, PRODUCTS_SET_LOADING } from '../types/types';

const initialState = {
    list: [],
    iLoading: false,
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_ADD_ALL:
            return { ...state, list: action.payload };
        case PRODUCTS_SET_LOADING:
            return { ...state, iLoading: action.payload };
        default:
            return state;
    }
}

export default productsReducer;
