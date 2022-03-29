import axios from 'axios';

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,

} from './types';
// import { USER_SERVER } from '../components/Config.js';

export async function registerUser(dataToSubmit){
    const request = await axios.post(`/members/new`,null, 
    {params:{name : dataToSubmit.name, password : dataToSubmit.password
    }})
        .then(response => response.data)
        //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export async function loginUser(dataToSubmit){
    const request = await axios.post(`/members/memberLogin`,null, 
    {params:{name : dataToSubmit.name, password : dataToSubmit.password
    }, withCredentials:true})
                //.then(response => response.data)
                .then(response => {localStorage.setItem('usertoken', response.data.name)
                return response.data})
    
    return {
        type: LOGIN_USER,
        payload: request
    }
}

// export async function auth(){
//     const request = await axios.get(`${USER_SERVER}/user`,{withCredentials:true})
//     .then(response => response.data);

//     return {
//         type: AUTH_USER,
//         payload: request
//     }
// }

export async function logoutUser(){
    
    const request = await axios.get(`/members/memberLogout`,{withCredentials:true})
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}
