import React, { useEffect } from 'react'
import TaskItem from './TaskItem'
import ComponentsList from './CompletedTasks';

export default function TaskList({ initialTasks, setInitialTasks }) {
  console.log(initialTasks);

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

  const incompleteTasks = initialTasks.filter(task => !task.completed);

  const taskElements = incompleteTasks.map((task) => (
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
        <ComponentsList tasks={initialTasks}
          onToggleComplete={handleToggleComplete}
        />
    </div>
  )
}
