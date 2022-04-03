import axios from 'axios';

import {
  SAVE_POST,

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

