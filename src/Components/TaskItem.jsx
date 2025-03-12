import React from 'react';

export default function TaskItem({ 
  task,  
  onDelete, 
  onToggleComplete
}) {

  function handleDelete() {
    onDelete(task.id);
  }

  function handleComplete() {
    onToggleComplete(task.id);
  }

  return (
    <div className='mt-2 p-2 bg-green-300 rounded-sm shadow-sm w-3/4 mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <input 
            type='checkbox'
            checked={task.completed}
            onChange={handleComplete}
            className='form-checkbox h-5 w-5 rounded-md border-2'
          />
          <span className={`text-white ${task.completed ? 'line-through text-gray-500' : ''}`}> 
            {task.name} 
          </span>
        </div>
        <button 
          onClick={handleDelete}
          className='p-2 text-red-500 hover:text-red-600 transition-colors hover:bg-red-100 rounded-sm'
          aria-label="Delete task"
        >
          {/* Trash icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}