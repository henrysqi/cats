import {combineReducers} from 'redux';

import CatReducer from './cat';

const rootReducer = combineReducers({
    cat: CatReducer
});

export default rootReducer;