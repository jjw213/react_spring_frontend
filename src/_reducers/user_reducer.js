import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    AUTH_FETCH_USER,
    CHECK_CODE
} from '../_actions/types';
 

export default function saga(state={},action){
    switch(action.type){
        case REGISTER_USER:
            return {...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, userData: action.payload.name }
        case CHECK_CODE:
            return {...state, userCode: action.payload.code }
        case LOGOUT_USER:
            return {...state, userData: action.payload.name,register:action.payload.name }
        case AUTH_FETCH_USER:
            return {...state, user: action.payload,};
        // case KAKAO_USER:
        //     return {...state, userData: action.payload,};
        default:
            return state;
    }
}