import { HIDE_ALERT, SHOW_ALERT } from "../types";
// functional

export function alertReducer(state, action){
    switch(action.type){
        case SHOW_ALERT: return action.payload;
        case HIDE_ALERT: return null;
        default: return state
    }
}