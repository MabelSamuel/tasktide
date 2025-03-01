import React from 'react'

export default function TaskItem({ item, index, onDelete, onComplete }) {

  function handleDelete () {
    onDelete(index);
  }

  function handleComplete() {
    onComplete(index);
  }

  return (
    <div>
      {item}
      <button onClick={handleDelete}>
        delete
      </button>
    </div>
  )
}
