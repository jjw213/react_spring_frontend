import {
    LOAD_ANIMAL,
    SAVE_POST,
    DIBS_ANIMAL,
    CANCEL_ANIMAL,
    DIBS_LIST
} from '../_actions/types';


export default function saga(state = {}, action) {
    switch (action.type) {
        case SAVE_POST:
            return { ...state, savedPost: action.payload }
        case LOAD_ANIMAL:
            return { ...state, loadAnimal: action.payload }
        case DIBS_ANIMAL:
            return { ...state, isDibs: action.payload }
        case DIBS_LIST:
            return { ...state, dibsList: action.payload }
        case CANCEL_ANIMAL:
            return { ...state, isDibs: action.payload }
        default:
            return state;
    }
}