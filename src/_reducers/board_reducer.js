import {
    SAVE_POST
} from '../_actions/types';
 

export default function saga(state={},action){
    switch(action.type){
        case SAVE_POST:
            return {...state, savedPost: action.payload }
        default:
            return state;
    }
}