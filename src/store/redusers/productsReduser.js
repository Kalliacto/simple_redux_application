import { PRODUCTS_ADD_ALL, PRODUCTS_SET_LOADING } from '../types/types';

const initialState = {
    list: [],
    iLoading: false,
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_ADD_ALL:
            console.log(state.list, action.payload.data);
            return { ...state, list: [...state.list, ...action.payload.data] };
        case PRODUCTS_SET_LOADING:
            return { ...state, iLoading: action.payload };
        case 'DELETE':
            return { ...state, list: [] };
        default:
            return state;
    }
}

export default productsReducer;
