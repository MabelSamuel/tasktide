import { useState } from 'react';
import { IoChevronDown, IoChevronForward } from 'react-icons/io5';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

export default function CompletedTasks({ tasks, onToggleComplete }) {
  const [ isOpen, setIsOpen ] = useState(false);
  // Filter only completed tasks
  const completedTasks = tasks?.filter(task => task.completed) || [];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-3/4 mx-auto mt-5">
      <div className='flex items-center cursor-pointer mt-2 p-2 bg-green-50 rounded-sm w-1/3' onClick={toggleDropdown}>
        <button className='text-gray-500 hover:text-gray-700'>
          {isOpen ? <IoChevronDown/> : <IoChevronForward/>}
        </button>
        <h2 className="font-semibold text-gray-500 mb-0 ml-2">
          Completed Tasks <span className='px-2 py-1 text-sm'>
            {completedTasks.length}
          </span>
        </h2>     
      </div>

      {isOpen && (
        <div className="mt-1">
          {completedTasks.length === 0 ? (
            <div className="p-2 bg-green-50 rounded-sm text-gray-500 italic">No completed tasks</div>
          ) : (
            <div className='space-y-2'>
              {completedTasks.map(task => (
                <div key={task.id} className='p-2 bg-green-100 rounded-sm flex items-center'>
                  <button
                    onClick={() => onToggleComplete(task.id)}
                    className='text-white focus:outline-none mr-3'
                  >
                    <MdCheckBox className='h-5 w-5 text-gray-500'/>
                  </button>
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