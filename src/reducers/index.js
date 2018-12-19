import {combineReducers} from 'redux';

import SampleReducer from './sample';

const rootReducer = combineReducers({
    sample: SampleReducer
});

export default rootReducer;