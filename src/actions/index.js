import axios from 'axios';

export const GET_CAT_IMAGES = 'GET_CAT_IMAGES';
export const GET_CAT_FACTS = 'GET_CAT_FACTS';

const CROSS_ORIGIN_ME = 'https://cors-anywhere.herokuapp.com'
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
        url: `${CAT_FACTS_URL}`,
        method: 'get'
    })
    return {
        type: GET_CAT_FACTS,
        payload: request
    }
}