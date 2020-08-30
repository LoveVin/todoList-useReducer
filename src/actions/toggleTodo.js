import {TOGGLE_TODO} from '../constants/actionTypes';

const toggleTodo = (index)=>{
    return {
        type: TOGGLE_TODO,
        index
    }
}

export default toggleTodo