import { rootReducer } from './redusers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

// Для работы в старом редаксе с ассинхронными запросами необходимо установить applyMiddleware
// Положить его в composeWithDevTools(applyMiddleware())
//  Установить redux-thunk  и принять внурь composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//Создать store  нужно с помощью createStore
export default store;
