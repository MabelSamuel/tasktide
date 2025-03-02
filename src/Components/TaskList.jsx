import React, { useState } from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ initialTasks }) {
  const [ tasks, setTasks ] = useState(initialTasks);
  const [ completedTasks, setCompletedTasks ] = useState([]);

  function handleDeleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setCompletedTasks((prevCompleted) => 
      prevCompleted.filter((task) => task.id !==id)
    );
  }

  function handleCompleteTask(indexToComplete) {
    const taskToComplete = tasks[indexToComplete]
    setCompletedTasks([...completedTasks, taskToComplete])
    handleDeleteTask(indexToComplete);
  }

  const taskElements = initialTasks.map((task) => (
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
