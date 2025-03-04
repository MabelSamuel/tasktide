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
    <div className='mt-5 flex items-center space-x-3'>
      <input 
        type='checkbox'
        onChange={handleComplete}
        className='form-checkbox h-5 w-5 rounded-lg border-2'
      />
      <span className="text-white"
      
      > 
        {task.name} 
      </span>
      <button onClick={handleDelete}>
        delete
      </button>
    </div>
  )
}
