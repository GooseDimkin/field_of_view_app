import {createStore, combineReducers} from 'redux';
import wordsSettingsReducer from './reducers/wordsSettingsReducer';

let reducers = combineReducers({
    wordsSettingsData: wordsSettingsReducer
});

let store = createStore(reducers);

export default store;