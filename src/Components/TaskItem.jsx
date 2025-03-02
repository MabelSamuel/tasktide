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
    <div>
      <input 
        type='checkbox'
        onChange={handleComplete}
      />
      <span>{task.name}</span>
      <button onClick={handleDelete}>
        delete
      </button>
    </div>
  )
}
