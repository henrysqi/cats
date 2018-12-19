import axios from 'axios';

export const SAMPLE = 'SAMPLE';

const ROOT_URL = 'http://localhost:3001';

export function sampleAction(props) {
    const request = axios({
        url: `${ROOT_URL}/api/sample`,
        method: 'post',
        data: {data: props}
    })
    return {
        type: SAMPLE,
        payload: request
    }
}