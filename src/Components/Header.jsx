import React from 'react'

export default function Header() {
  const today= new Date().toLocaleDateString('en-US', {
    weekday: 'long',    
    month:'long',
    day:'numeric'
  })
  return (
    <div className='p-4'>
      <h1 className='text-4xl text-white'>Task Tide</h1>
      <p className='text-white text-lg'>{today}</p>
    </div>
  )
}
