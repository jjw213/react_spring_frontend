import axios from 'axios';

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,

} from './types';
// import { USER_SERVER } from '../components/Config.js';

// export async function registerUser(dataToSubmit){
//     const request = await axios.post(`${USER_SERVER}/user/join`,dataToSubmit)
//         .then(response => response.data)
//         //.then(setAuthHeader(response => response.dataToSubmit.token));
//     return {
//         type: REGISTER_USER,
//         payload: request
//     }
// }

export async function loginUser(dataToSubmit){
    const request = await axios.post(`/members/memberLogin`,null, 
    {params:{name : dataToSubmit.name, password : dataToSubmit.password
    }})
                .then(response => response.data
                )
    // const request = await axios(
    //     {
    //       url: `/members/memberLogin`,
    //       method: 'post',
    //       data: {
    //         name : dataToSubmit.name,
    //         password : dataToSubmit.password
    //       } , 
         
    //       baseURL: 'http://localhost:3000',
    //       //withCredentials: true,
    //     }
    //   ).then(function (response) {
    //     console.log(response.data)
    //     //console.log(response.data.theMember[0].name)
    //   });
    console.log(request);
    
    return {
        type: LOGIN_USER,
        payload: request
    }
}

    // useEffect(async()  => {
    //      await fetch(`/members/memberLogin`)
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setMessage(data);
    //         });
    // }, []);

// export async function auth(){
//     const request = await axios.get(`${USER_SERVER}/user`,{withCredentials:true})
//     .then(response => response.data);

//     return {
//         type: AUTH_USER,
//         payload: request
//     }
// }

// export async function logoutUser(){
    
//     const request = await axios.get(`${USER_SERVER}/user/logout`,{withCredentials:true})
//     .then(response => response.data);

//     return {
//         type: LOGOUT_USER
//     }
// }
