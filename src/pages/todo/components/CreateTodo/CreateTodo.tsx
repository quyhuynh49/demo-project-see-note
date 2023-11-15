import React, { useState } from 'react'
import { Todo } from '../../../../types/todo'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducer';

const initialState: Todo = {
    id: '',
    title: '',
    completed: false
}

function CreateTodo() {
    const [form, setForm] = useState<Todo>(initialState);
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = { ...form, id: new Date().toISOString() }
        dispatch(addTodo(formData))
        /* clear data after submit */
        setForm(initialState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">enter task: </label>
                <input
                    className='border focus:outline-none'
                    id='title' type="text"
                    onChange={event => setForm(prev => ({ ...prev, title: event.target.value }))}
                    value={form.title} />
                <button className='border' type='submit'>add</button>
            </form>
        </div>
    )
}

export default CreateTodo
