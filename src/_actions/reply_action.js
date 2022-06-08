import axios from 'axios';

import {
    SHOW_REPLY,
    SAVE_REPLY,
    REMOVE_REPLY
} from './types';
// import { USER_SERVER } from '../components/Config.js';

export async function saveReply(dataToSubmit) {
    const request = await axios.post(`/reply/new`, null,
        {
            params: {
                 content: dataToSubmit.content,
                writer: dataToSubmit.writer, postId: dataToSubmit.postId,
                responseTo:dataToSubmit.responseTo, commentId:dataToSubmit.commentId,
                date:dataToSubmit.created_at
            }
        })
        .then(response => response.data)
    //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: SAVE_REPLY,
        payload: request
    }
}

export async function showReply(dataToSubmit) {
    const request = await axios.post(`/reply/replyList`, null,
        {
            params: {  
                postId: dataToSubmit
            }
        })
        .then(response => response.data)
    //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: SHOW_REPLY,
        payload: request
    }
}
export async function editReply(dataToSubmit) {
    const request = await axios.post(`/reply/edit`, null,
        {
            params: {  
                commentId: dataToSubmit.commentId, content:dataToSubmit.content
            }
        })
        .then(response => response.data)
    //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: SAVE_REPLY,
        payload: request
    }
}
export async function removeReply(dataToSubmit) {
    const request = await axios.post(`/reply/remove`, null,
        {
            params: {  
                commentId: dataToSubmit,
            }
        })
        .then(response => response.data)
    //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: REMOVE_REPLY,
        payload: request
    }
}