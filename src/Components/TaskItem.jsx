import React, { useState } from 'react'

export default function TaskItem({ item, index, onDelete }) {
  function handleDelete () {
    onDelete(index);
  }

  return (
    <div>
      {item}
      <button onClick={handleDelete}>
        X
      </button>
    </div>
  )
}
