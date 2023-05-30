import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import productsReducer from './productsReduser';

export const rootReducer = combineReducers({
    counter: counterReducer,
    products: productsReducer,
});
