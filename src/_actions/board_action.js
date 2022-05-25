import axios from 'axios';

import {
    SAVE_POST,
    LOAD_ANIMAL,
    CANCEL_ANIMAL,
    DIBS_ANIMAL,
    DIBS_LIST
} from './types';
// import { USER_SERVER } from '../components/Config.js';

export async function savePost(dataToSubmit) {
    const request = await axios.post(`/board/new`, null,
        {
            params: {
                title: dataToSubmit.title, content: dataToSubmit.content,
                writer: dataToSubmit.writer
            }
        })
        .then(response => response.data)
    //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: SAVE_POST,
        payload: request
    }
}
export async function loadAnimal(dataToSubmit) {
    const request = await axios.post(`/animal/animalList`, null,
        {
            params: {
                numOfRows: dataToSubmit.numOfRows, kindcd: dataToSubmit.kindcd,
                upr_cd: dataToSubmit.upr_cd
            }
        })
        .then(response => response.data)
    //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: LOAD_ANIMAL,
        payload: request
    }
}

export async function dibsAnimal(dataToSubmit) {
    const request = await axios.post(`/animal/animalDibs`, null,
        {
            params: {
                age: dataToSubmit.age, careAddr: dataToSubmit.careAddr, careNm: dataToSubmit.careNm, careTel: dataToSubmit.careTel,
                kindCd: dataToSubmit.kindCd, desertionNo: dataToSubmit.desertionNo,
                popfile: dataToSubmit.popfile, sexCd: dataToSubmit.sexCd, processState: dataToSubmit.processState,
                specialMark: dataToSubmit.specialMark, weight: dataToSubmit.weight, name: dataToSubmit.user
            }
        })
        .then(response => response.data)
    //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: DIBS_ANIMAL,
        payload: request
    }
}

export async function dibsList(dataToSubmit) {
    const request = axios.post(`/animal/dibsList`, null,
        { params: { name: dataToSubmit } })
        .then(response => response.data)
    return {
        type: DIBS_LIST,
        payload: request
    }
}

export async function dibsCancel(dataToSubmit) {
    const request = await axios.post(`/animal/dibsCancel`, null,
        {
            params: {
                desertionNo: dataToSubmit.desertionNo
            }
        })
        .then(response => response.data)
    //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: CANCEL_ANIMAL,
        payload: request
    }
}