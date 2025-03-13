import React from 'react';
import { IoTrash } from 'react-icons/io5';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

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
    <div className='mt-2 p-2 bg-green-400 rounded-sm shadow-sm w-3/4 mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <button
            onClick={handleComplete}
            className='text-white focus:outline-none'
          >
            {task.completed ?
              <MdCheckBox className='h-5 w-5'/> :
              <MdCheckBoxOutlineBlank className='h-5 w-5'/>
            }
          </button>

          <span className={`text-white ${task.completed ? 'line-through text-gray-500' : ''}`}> 
            {task.name} 
          </span>
        </div>
        <button 
          onClick={handleDelete}
          className='p-2 text-white hover:text-red-400 transition-colors rounded-sm'
          aria-label="Delete task"
        >
          <IoTrash className="h-5 w-5"/>
        </button>
      </div>
    </div>
  )
}