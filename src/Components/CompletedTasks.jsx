import { useState, useRef, useEffect } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { MdCheckBox } from 'react-icons/md';

export default function CompletedTasks({ tasks, onToggleComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  
  // Filter only completed tasks
  const completedTasks = tasks?.filter(task => task.completed) || [];
  
  // Set content height when isOpen changes or completed tasks change
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, completedTasks.length]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  // Don't render anything if there are no completed tasks
  if (completedTasks.length === 0) {
    return null;
  }

  return (
    <div className="w-3/4 mx-auto mt-5">
      <div className='flex items-center cursor-pointer mt-2 p-2 bg-green-50 rounded-sm w-1/3' onClick={toggleDropdown}>
        <button className='text-gray-500 hover:text-gray-700 transition-transform duration-300' style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          <IoChevronForward />
        </button>
        <h2 className="font-semibold text-gray-500 mb-0 ml-2">
          Completed Tasks <span className='px-2 py-1 text-sm'>
            {completedTasks.length}
          </span>
        </h2>
      </div>

      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out" 
        style={{ maxHeight: `${height}px`, opacity: height ? '1' : '0' }}
      >
        <div ref={contentRef}>
          <div className='space-y-2 mt-1'>
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
        </div>
      </div>
    </div>
  );
}