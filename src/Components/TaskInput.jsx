import React, { useState } from 'react'

import TaskList from './TaskList';

export default function TaskInput({ initialTasks, setInitialTasks }) {
    const [ task, setTask ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInitialTasks([...initialTasks, task]);
        setTask('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input 
                 type='text'
                 value={task}
                 onChange={(e) => setTask(e.target.value)}
                 placeholder='Enter task'
                />
                
                <button type='submit'>
                    Add
                </button>
                
            </form>
            <TaskList initialTasks={initialTasks} />
        </div>
    )
}
