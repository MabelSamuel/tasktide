import { useState } from 'react';

import Header from './Components/Header';
import TaskInput from './Components/TaskInput';

function App() {
  const [ initialTasks, setInitialTasks ] = useState([]);

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
     style={{ backgroundImage:"url('/background.jpg')"}}
    >
      <Header />
      <TaskInput initialTasks={initialTasks} 
        setInitialTasks={setInitialTasks} 
      />
    </div>
  );
}

export default App;
