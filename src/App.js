import React, {useReducer} from 'react';
import reducer from './reducers';
import Context from './context';
import TodoList from './components/TodoList';
import filterOptions from './constants/filterOptions';
import Filter from './components/Filter';
import AddTodo from './components/AddTodo';

function App() {
    const [state, dispatch] = useReducer(reducer, {
        filter: filterOptions.SHOW_ALL,
        todoList: []
    });
    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className="App">
                我是 APP，要点：useReducer 的初始值不要传 null，要初始化,否则使用 ajax fetch 不成功
                <AddTodo/>
                <TodoList/>
                <Filter/>
            </div>
        </Context.Provider>
    );
}

export default App;
