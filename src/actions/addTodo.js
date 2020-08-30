import {ADD_TODO} from '../constants/actionTypes';

const addTodo = (text)=>{
    return {
        type: ADD_TODO,
        text
    }
}

export default addTodo