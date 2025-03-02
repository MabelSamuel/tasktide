import React, { useState } from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ initialTasks }) {
  const [ tasks, setTasks ] = useState(initialTasks);
  const [ completedTasks, setCompletedTasks ] = useState([]);

  function handleDeleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function handleToggleComplete(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);

    const taskToToggle = tasks.find(task => task.id === id);
    if (taskToToggle) {
      if (!taskToToggle.completed) {
        setCompletedTasks([...completedTasks, taskToToggle]);
      } else {
        setCompletedTasks(completedTasks.filter(task => task.id !==id));
      }
    }
  }

  const taskElements = tasks.map((task) => (
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
