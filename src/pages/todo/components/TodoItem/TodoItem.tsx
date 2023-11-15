import React from 'react'
import { Todo } from '../../../../types/todo'
import TrashIcon from '../../../../components/TrashIcon'
type TodoItemProps = {
    todo: Todo
    handleDelete: (todoId: string) => void

}
function TodoItem({ todo, handleDelete }: TodoItemProps) {

    return (
        <div className='flex items-center gap-2'>
            <input id={todo.id} type="checkbox" defaultChecked={todo.completed} />
            <label htmlFor={todo.id}>{todo.title}</label>
            <button onClick={() => handleDelete(todo.id)}><TrashIcon /></button>
            {/* lưu ý chổ delete: onClick là ta cần truyền 1 callback fn : () => handleDelete(todo.id)
                còn nếu truyền handleDelete(todo.id) là đang truyền 1 "giá trị" của handleDetele, gọi xong nó return
            */}
        </div>
    )
}

export default TodoItem
