import React from 'react'

export default function TaskItem({ 
  task,  
  onDelete, 
  onToggleComplete
}) {

  function handleDelete () {
    onDelete(task.id);
  }

  function handleComplete() {
    onToggleComplete(task.id);
  }

  return (
    <div className='mt-5 p-4 bg-white rounded-lg shadow-md'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <input 
            type='checkbox'
            checked={task.completed}
            onChange={handleComplete}
            className='form-checkbox h-5 w-5 rounded-lg border-2'
          />
          <span className={`text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}`}> 
            {task.name} 
          </span>
        </div>
        <button 
          onClick={handleDelete}
          className='px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'
        >
          Delete
        </button>
      </div>
    </div>
  )
}