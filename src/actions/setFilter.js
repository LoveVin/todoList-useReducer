import {SET_FILTER} from '../constants/actionTypes';

const setFilter = (filter)=>{
    return {
        type: SET_FILTER,
        filter
    }
}

export default setFilter