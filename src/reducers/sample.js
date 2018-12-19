import {SAMPLE} from './../actions/index';

export default function(state = {}, action){
    let newState = Object.assign({}, state);
    switch (action.type){
        case SAMPLE:
            return newState;
        default: 
            return state;
    }
}
