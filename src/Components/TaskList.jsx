import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ tasks, setTasks }) {
  function handleDeleteTask(indexToDelete) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete))
  }

  const taskElements = tasks.map((item, index) => (
    <TaskItem 
      key={index} 
      item={item} 
      index={index}
      onDelete={handleDeleteTask}
    />
  ));

  return (
    <div>
        {taskElements}
    </div>
  )
}
