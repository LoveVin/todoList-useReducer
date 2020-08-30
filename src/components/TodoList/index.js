import React, {useContext, useEffect} from 'react';
import Context from '../../context';
import fetchTodoList from '../../actions/fetchTodoList';
import toggleTodo from '../../actions/toggleTodo';
import filterOptions from '../../constants/filterOptions';

const TodoList = () => {
    const {state, dispatch} = useContext(Context);
    useEffect(()=> {
        fetchTodoList(dispatch)
    },[])
    const getVisibleTodoList = (state, filter)=>{
        switch (filter) {
            case filterOptions.SHOW_ALL:
                return state.todoList
            case filterOptions.SHOW_COMPLETE:
                return state.todoList.filter(todo => todo.isComplete)
            case filterOptions.SHOW_UNCOMPLETE:
                return state.todoList.filter(todo => !todo.isComplete)
        }
    }
    return state.todoList.length > 0 ? (
        <ul>
            {getVisibleTodoList(state, state.filter).map((todo, index) => (
                <li key={index} onClick={() => dispatch(toggleTodo(index))}
                    style={{textDecoration: todo.isComplete ? 'line-through' : 'none'}}>{todo.text}</li>
            ))}
        </ul>
    ) : (<div>加载中...</div>);
};

export default TodoList;