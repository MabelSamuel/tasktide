import React, { useState } from 'react'

import TaskList from './TaskList';

export default function TaskInput({ tasks, setTasks }) {
    const [ task, setTask ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, task]);
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
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}
