import axios from 'axios';

import {
    SAVE_POST,
    LOAD_ANIMAL
} from './types';
// import { USER_SERVER } from '../components/Config.js';

export async function savePost(dataToSubmit){
    const request = await axios.post(`/board/new`,null, 
    {params:{title : dataToSubmit.title, content : dataToSubmit.content, 
        writer : dataToSubmit.writer
    }})
        .then(response => response.data)
        //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: SAVE_POST,
        payload: request
    }
}
export async function loadAnimal(dataToSubmit){
    const request = await axios.post(`/animal/animalList`,null, 
    {params:{numOfRows : dataToSubmit.numOfRows, kindcd : dataToSubmit.kindcd
    }})
        .then(response => response.data)
        //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: LOAD_ANIMAL,
        payload: request
    }
}

