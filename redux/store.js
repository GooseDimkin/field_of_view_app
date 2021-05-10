import {createStore, combineReducers, applyMiddleware} from 'redux';
import wordsSettingsReducer from './reducers/wordsSettingsReducer';

import thunk from 'redux-thunk';

let reducers = combineReducers({
    wordsSettingsData: wordsSettingsReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;