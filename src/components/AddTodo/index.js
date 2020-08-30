import React, {useContext, useRef} from 'react';
import Context from '../../context';
import addTodo from '../../actions/addTodo';

const AddTodo = ()=>{
    const {state, dispatch} = useContext(Context)
    const inputRef = useRef(null)
    const onSubmit = (e)=>{
        e.preventDefault()
        if(inputRef.current.value.trim()){
            dispatch(addTodo(inputRef.current.value))
            inputRef.current.value = ''
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <input ref={inputRef}/>
            <button type="submit">添加</button>
        </form>
    )
}

export default AddTodo