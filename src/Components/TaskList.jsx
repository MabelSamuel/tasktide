import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ initialTasks, setInitialTasks }) {
  console.log(initialTasks);
  // const [ completedTasks, setCompletedTasks ] = useState([]);

  // Update local state
  useEffect(() => {
    setInitialTasks(initialTasks);
  }, [initialTasks]);

  function handleDeleteTask(id) {
    const updatedTasks = initialTasks.filter(task => task.id !== id);
    setInitialTasks(updatedTasks);
  }

  function handleToggleComplete(id) {
    const updatedTasks = initialTasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setInitialTasks(updatedTasks);
  }

  const taskElements = initialTasks.map((task) => (
    <TaskItem 
      key={task.id} 
      task={task}       
      onDelete={handleDeleteTask}
      onToggleComplete={handleToggleComplete}
    />
  ));

  return (
    <div>
        {taskElements}
    </div>
  )
}
