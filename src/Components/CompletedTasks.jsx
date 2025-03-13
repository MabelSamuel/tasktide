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
    <div className="mt-6 p-3 bg-green-50 rounded-sm w-3/4 mx-auto">
      <div className='flex items-center' onClick={toggleDropdown}>
        <button className='text-gray-500 hover:text-gray-700'>
          {isOpen ? <IoChevronDown/> : <IoChevronForward/>}
        </button>
        <h2 className="font-semibold text-gray-500 mb-0 ml-2">
          Completed Tasks <span className='px-2 py-1 text-sm'>{completedTasks.length}</span>
        </h2>     
      </div>
      
      {isOpen && (
        <div className='mt-3'>
          {completedTasks.length === 0 ? (
            ''
          ) : (
            <div className='space-y-2'>
              {completedTasks.map(task => (
                <div key={task.id} className='p-2 bg-green-100 rounded-sm flex items-center'>
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