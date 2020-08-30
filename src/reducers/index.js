import todoList from './todoList';
import filter from './filter';

const reducer = (state, action)=>{
    return {
        todoList: state ? todoList(state.todoList, action) : [],
        filter: state ? filter(state.filter, action): ''
    }
}

export default reducer