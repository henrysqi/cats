import {GET_CAT_IMAGES, GET_CAT_FACTS, CREATE_CAT_TILES, TOGGLE_FAVORITE_CAT_TILE} from './../actions/index';
import {parseString} from 'xml2js';

export default function(state = {catImages: [], catFacts: [], catTiles: []}, action){
    let newState = Object.assign({}, state);
    switch (action.type){
        case GET_CAT_IMAGES:
            let jsonData;
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
        case GET_CAT_FACTS:
            if (action.payload.data && action.payload.data.data) {
                newState.catFacts = action.payload.data.data
            }
            return newState;
        case CREATE_CAT_TILES:
            const catTiles = [];
            for (let i = 0; i < newState.catImages.length; i++) {
                catTiles.push({
                    image: newState.catImages[i].url[0],
                    fact: newState.catFacts[i].fact,
                    id: i
                })
            }
            newState.catTiles = catTiles;
            return newState;
        case TOGGLE_FAVORITE_CAT_TILE:
            const currentCatTiles = newState.catTiles;
            for (let i = 0; i < currentCatTiles.length; i++) {
                if (currentCatTiles[i].id === action.payload) {
                    newState.catTiles[i].favorite = newState.catTiles[i].favorite ? false : true;
                    break;
                }
            }
            return newState;
        default: 
            return state;
    }
}
