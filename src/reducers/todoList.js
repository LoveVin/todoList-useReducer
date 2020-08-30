import {ADD_TODO, INIT_TODOS, TOGGLE_TODO} from '../constants/actionTypes';

const todoList = (state, action)=>{
    switch (action.type) {
        case INIT_TODOS:
            return action.todoList
        case TOGGLE_TODO:
            return state.map((todo, index)=>{
                if(index === action.index)
                    return {...todo, isComplete: !todo.isComplete}
                return todo
            })
        case ADD_TODO:
            return [...state, { text: action.text,  isComplete: false}]
        default:
            return state
    }
}

export default todoList