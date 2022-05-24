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
    {params:{numOfRows : dataToSubmit.numOfRows, kindcd : dataToSubmit.kindcd,
        upr_cd : dataToSubmit.upr_cd
    }})
        .then(response => response.data)
        //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: LOAD_ANIMAL,
        payload: request
    }
}

export async function dibsAnimal(dataToSubmit){
    const request = await axios.post(`/animal/animalDibs`,null, 
    {params:{age : dataToSubmit.age, careAddr:dataToSubmit.careAddr, careNm:dataToSubmit.careNm,careTel:dataToSubmit.careTel,
        kindCd : dataToSubmit.kindCd, desertionNo : dataToSubmit.desertionNo, 
        popfile:dataToSubmit.popfile,sexCd:dataToSubmit.sexCd,processState:dataToSubmit.processState,
        specialMark:dataToSubmit.specialMark,weight:dataToSubmit.weight, name : dataToSubmit.user
    }})
        .then(response => response.data)
        //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: LOAD_ANIMAL,
        payload: request
    }
}