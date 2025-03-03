import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskList from './TaskList';

export default function TaskInput({ initialTasks, setInitialTasks }) {
    const [ task, setTask ] = useState({
        name:'',
        id: uuidv4(),
        completed: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setInitialTasks([...initialTasks, task]);
        setTask({
            name:'', 
            id: uuidv4(), 
            completed: false
        });
    }

    const handleChange = (e) => {
        setTask({
            ...task,
            name: e.target.value
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input 
                 type='text'
                 value={task.name}
                 onChange={handleChange}
                 placeholder='Enter task'
                />
                
                <button type='submit'>
                    Add
                </button>
                
            </form>
            <TaskList initialTasks={initialTasks} 
                setInitialTasks={setInitialTasks}
            />
        </div>
    )
}
