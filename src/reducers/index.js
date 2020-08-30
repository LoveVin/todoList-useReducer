import todoList from './todoList';
import filter from './filter';

const reducer = (state, action)=>{
    return {
        todoList: todoList(state.todoList, action),
        filter: filter(state.filter, action)
    }
}

export default reducer