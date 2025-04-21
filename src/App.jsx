import { useState } from 'react';

import Header from './Components/Header';
import TaskInput from './Components/TaskInput';

function App() {
  const [ initialTasks, setInitialTasks ] = useState([]);

  return (
    <div className="bg-gray-300"
    >
      <Header />
      <TaskInput initialTasks={initialTasks} 
        setInitialTasks={setInitialTasks} 
      />
    </div>
  );
}

export default App;
