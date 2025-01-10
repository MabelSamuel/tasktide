import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ tasks }) {
  return (
    <div>
        {tasks.map((item) => (
            <TaskItem key={item} item={item}/>
        ))}
    </div>
  )
}
