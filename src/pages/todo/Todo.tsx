import React from 'react'
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'

function Todo() {
    return (
        <div>
            <CreateTodo />
            <TodoList />
        </div>
    )
}

export default Todo
