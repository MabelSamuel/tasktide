import React, { useState } from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ initialTasks }) {
  const [ tasks, setTasks ] = useState(initialTasks);
  const [ completedTasks, setCompletedTasks ] = useState([]);

  function handleDeleteTask(indexToDelete) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete))
  }

  function handleCompleteTask(indexToComplete) {
    const taskToComplete = tasks[indexToComplete]
    setCompletedTasks([...completedTasks, taskToComplete])
    handleDeleteTask(indexToComplete);
  }

  const taskElements = tasks.map((task) => (
    <TaskItem 
      key={task.id} 
      task={task}       
      onDelete={handleDeleteTask}
    />
  ));

  return (
    <div>
        {taskElements}
    </div>
  )
}
