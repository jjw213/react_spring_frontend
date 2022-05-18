import {
    LOAD_ANIMAL,
    SAVE_POST
} from '../_actions/types';


export default function saga(state = {}, action) {
    switch (action.type) {
        case SAVE_POST:
            return { ...state, savedPost: action.payload }
        case LOAD_ANIMAL:
            return { ...state, loadAnimal: action.payload }
        default:
            return state;
    }
}