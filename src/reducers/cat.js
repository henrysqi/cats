import {GET_CAT_IMAGES, GET_CAT_FACTS} from './../actions/index';

export default function(state = {}, action){
    let newState = Object.assign({}, state);
    switch (action.type){
        case GET_CAT_IMAGES:
            debugger
            newState.catImages = action.payload.data
            return newState;
        case GET_CAT_FACTS:
            debugger;
            newState.catFacts = action.payload.data
            return newState;
        default: 
            return state;
    }
}
