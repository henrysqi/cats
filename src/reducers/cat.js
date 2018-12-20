import {GET_CAT_IMAGES, GET_CAT_FACTS} from './../actions/index';
import {parseString} from 'xml2js';

export default function(state = {}, action){
    let newState = Object.assign({}, state);
    switch (action.type){
        case GET_CAT_IMAGES:
            var jsonData;
            if (action.payload.data) {
                parseString(action.payload.data, {async:false},(err, res) => {
                    if (res) {
                        jsonData = res;
                    }
                })
                if (jsonData) {
                    newState.catImages = jsonData.response.data[0].images[0].image;
                }
            }
            return newState;
            break;
        case GET_CAT_FACTS:
            if (action.payload.data && action.payload.data.data) {
                newState.catFacts = action.payload.data.data
            }
            return newState;
            break;
        default: 
            return state;
    }
}
