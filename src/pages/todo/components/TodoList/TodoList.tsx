import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import TodoItem from '../TodoItem';
import { deleteTodo } from '../../reducer';

function TodoList() {
    const todoList = useSelector((state: RootState) => state.todo.todoList);
    const dispatch = useDispatch();

    const handleDelete = (todoId: string) => { dispatch(deleteTodo(todoId)) }
    console.log(todoList)
    return (
        <div>
            {todoList.map(todo => (<TodoItem todo={todo} key={todo.id} handleDelete={handleDelete} />))}
        </div>
    )
}

export default TodoList
