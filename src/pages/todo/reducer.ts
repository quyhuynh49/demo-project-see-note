import { createAction, createReducer } from "@reduxjs/toolkit"
import { Todo } from "../../types/todo"

type TodoState = {
    todoList: Todo[]
}

const initialState: TodoState = {
    todoList: [
        { id: '1', title: 'task 1', completed: false },
        { id: '2', title: 'task 2', completed: false },
        { id: '3', title: 'task 3', completed: true }
    ]
}

export const addTodo = createAction<Todo>('todo/addTodo');
/* todo/addTodo: tiền tố todo nên đặt thống nhất với store (reducer: { todo: todoReducer }) */
export const deleteTodo = createAction<string>('todo/deleteTodo');

const todoReducer = createReducer(initialState, builder => {
    builder.addCase(addTodo, (state, action) => {
        /* 
            redux thông thường ta không được mutate state tức là state.todoList.push() mà chúng ta dùng clone object để add
            nhưng hiện tại dùng redux-toolkit nó sẽ giúp ta mutate 1 state an toàn thông qua immerjs (tạo ra 1 draft value: giá trị nháp và chúng ta mutate trên giá trị nháp đó nên không ảnh hưởng giá trị gốc)
        */
        state.todoList.push(action.payload)
    }).addCase(deleteTodo, (state, action) => {
        const todoId = action.payload
        const foundTodoIndex = state.todoList.findIndex(todo => todo.id === todoId);
        if (foundTodoIndex !== -1) {
            state.todoList.splice(foundTodoIndex, 1)
        }
    })

})

export default todoReducer