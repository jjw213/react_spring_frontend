import {
    SHOW_REPLY,
    SAVE_REPLY,
    REMOVE_REPLY
} from '../_actions/types';

export default function saga(state = {}, action) {
    switch (action.type) {
        case SAVE_REPLY:
            return { ...state, saveReply: action.payload }
        case SHOW_REPLY:
            return { ...state, showReply: action.payload }
        case REMOVE_REPLY:
            return { ...state, removeReply: action.payload }
        default:
            return state;
    }
}