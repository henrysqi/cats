import axios from 'axios';

export const GET_CAT_IMAGES = 'GET_CAT_IMAGES';
export const GET_CAT_FACTS = 'GET_CAT_FACTS';
export const CREATE_CAT_TILES = 'CREATE_CAT_TILES';
export const TOGGLE_FAVORITE_CAT_TILE = 'TOGGLE_FAVORITE_CAT_TILE';

const CROSS_ORIGIN_ME = 'https://cors-anywhere.herokuapp.com'
// const CROSS_ORIGIN_ME = 'https://crossorigin.me'
const CAT_IMAGES_URL = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=25';
const CAT_FACTS_URL = 'https://catfact.ninja/facts?limit=25';

export function getCatImages() {
    const request = axios({
        url: `${CROSS_ORIGIN_ME}/${CAT_IMAGES_URL}`,
        method: 'get'
    })
    return {
        type: GET_CAT_IMAGES,
        payload: request
    }
}

export function getCatFacts() {
    const request = axios({
        url: `${CROSS_ORIGIN_ME}/${CAT_FACTS_URL}`,
        method: 'get'
    })
    return {
        type: GET_CAT_FACTS,
        payload: request
    }
}

export function createCatTiles() {
    return {
        type: CREATE_CAT_TILES
    }
}

export function toggleFavoriteTile(props) {
    return {
        type: TOGGLE_FAVORITE_CAT_TILE,
        payload: props
    }
}