import React from 'react'

export default function Header() {
  const today= new Date().toLocaleDateString('en-US', {
    weekday: 'long',    
    month:'long',
    day:'numeric'
  })
  return (
    <div className='p-6 mb-5'>
      <h1 className='text-4xl text-white font-semibold'>Task Tide</h1>
      <p className='text-white text-lg'>{today}</p>
    </div>
  )
}
