import ajax from '../ajax/index ';
import {INIT_TODOS} from '../constants/actionTypes';

const fetchTodoList = (dispatch)=>{
    ajax('./todos').then((todoList)=>{
        dispatch({
            type: INIT_TODOS,
            todoList
        })
    })
}

export default fetchTodoList