import {createStore, combineReducers} from 'redux';
import wordsSettingsReducer from './reducers/wordsSettingsReducer';
import wordsSpaceReducer from './reducers/wordsSpaceReducer';

let reducers = combineReducers({
    wordsSettingsData: wordsSettingsReducer,
    wordsData: wordsSpaceReducer
});

let store = createStore(reducers);

export default store;