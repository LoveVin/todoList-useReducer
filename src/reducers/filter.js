import {SET_FILTER} from '../constants/actionTypes';

const filter = (state, action)=>{
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}

export default filter