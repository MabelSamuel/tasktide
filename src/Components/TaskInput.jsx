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
        <>
            <TaskList initialTasks={initialTasks} 
                setInitialTasks={setInitialTasks}
            />
            
            <div className='min-h-screen flex flex-col justify-end items-center pb-8'>
                
                <form onSubmit={handleSubmit}
                    className="w-3/4 fixed bottom-8"
                >
                    <div className='flex justify-center'>
                        
                        <input 
                            type='text'
                            value={task.name}
                            onChange={handleChange}
                            placeholder=' Enter task'
                            className='w-full border-none bg-black bg-opacity-50 text-white
                            rounded-sm shadow-sm focus:outline-none placeholder-gray-200'
                        />
                        
                        <button type='submit'
                            className='ml-2 px-4 py-2 bg-green-600 text-white rounded-sm 
                            hover:bg-green-700 focus:ring-2 focus:ring-green-700'
                        >
                            Add
                        </button>

                    </div>                               
                </form>
            </div>            
        </>
    )
}
