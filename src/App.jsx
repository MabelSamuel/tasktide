import { useState } from 'react';

import Header from './Components/Header';
import TaskInput from './Components/TaskInput';

function App() {
  const [ tasks, setTasks ] = useState([]);

  return (
    <div>
      <Header />
      <TaskInput tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
