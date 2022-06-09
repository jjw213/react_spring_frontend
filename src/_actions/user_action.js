import axios from 'axios';

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    KAKAO_USER
} from './types';
// import { USER_SERVER } from '../components/Config.js';

export async function registerUser(dataToSubmit){
    const request = await axios.post(`/members/new`,null, 
    {params:{name : dataToSubmit.name, password : dataToSubmit.password,
        kakao_id : dataToSubmit.kakao_id, email:dataToSubmit.email
    }})
        .then(response =>  {return response.data})
        //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export async function checkUser(dataToSubmit){
    const request = await axios.post(`/members/check`,null, 
    {params:{name : dataToSubmit }})
        .then(response =>  {return response.data})
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export async function loginUser(dataToSubmit){
    const request = await axios.post(`/members/memberLogin`,null, 
    {params:{email : dataToSubmit.email, password : dataToSubmit.password
    }, withCredentials:true})
                //.then(response => response.data)
                .then(response => {return response.data})
    
    return {
        type: LOGIN_USER,
        payload: request
    }
}
export async function kakaoLoginUser(dataToSubmit){
    const request = await axios.post(`/members/kakaoLogin`,null, 
    {params:{kakao_id : dataToSubmit.id}, withCredentials:true})
                //.then(response => response.data)
                .then(response => {return response.data})
    
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export async function deleteUser(dataToSubmit){
    
    const request = await axios.post(`/members/memberDelete`,null, 
    {params:{name : dataToSubmit.name, password:dataToSubmit.password}, withCredentials:true})
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export async function logoutUser(){
    
    const request = await axios.get(`/members/memberLogout`,{withCredentials:true})
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}
export async function emailUser(dataToSubmit){
    const request = await axios.post(`/members/sendEmail`,null, 
    {params:{userEmail : dataToSubmit.email, name:dataToSubmit.name
    }})
        .then(response =>  {return response.data})
        //.then(setAuthHeader(response => response.dataToSubmit.token));
    return {
        type: REGISTER_USER,
        payload: request
    }
}