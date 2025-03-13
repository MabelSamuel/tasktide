import { useState } from 'react';
import { IoChevronDown, IoChevronForward } from 'react-icons/io5';

export default function CompletedTasks({ tasks }) {
  const [ isOpen, setIsOpen ] = useState(false);
  // Filter only completed tasks
  const completedTasks = tasks?.filter(task => task.completed) || [];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mt-6 p-3 bg-gray-100 rounded-md w-3/4 mx-auto">
      <div className='flex items-center justify-between' onClick={toggleDropdown}>
        <h2 className=" font-semibold text-gray-700 mb-0">
          Completed Tasks <span className='px-2 py-1 text-sm'>{completedTasks.length}</span>
        </h2>
        <button className='text-gray-500 hover:text-gray-700'>
          {isOpen ? <IoChevronDown/> : <IoChevronForward/>}
        </button>
      </div>
      
      {isOpen && (
        <div className='mt-3'>
          {completedTasks.length === 0 ? (
            ''// <p className='italic'>No completed tasks yet</p>
          ) : (
            <div className='space-y-2'>
              {completedTasks.map(task =>(
                <div key={task.id} className='p-2 bg-white rounded-sm flex items-center'>
                  <span className='text-gray-500 line-through'>{task.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}