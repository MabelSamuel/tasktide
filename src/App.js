import { useState } from "react";
import Header from './components/Header';
import TaskInput from './components/TaskInput';

function App() {
  const [ tasks, setTasks ] = useState([]);

  return (
    <div>
      <Header />
      <TaskInput tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
