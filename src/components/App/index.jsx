
import { useState } from "react";
import Container from "../Container";
import Header from "../Header";
import s from './style.module.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (e) => {
    e.preventDefault();

    let day = e.target.selectDay.value;
    let priority = e.target.selectPriority.value;
    let description = e.target.description.value;
  
    let taskObj = {
      id: Date.now(),
      day,
      priority,
      description
    }
    setTasks([...tasks,taskObj])
    
    e.target.selectDay.value='';
    e.target.selectPriority.value='';
    e.target.description.value='';

  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const deleteTasksAll = (day) => {
    const newTasks = tasks.filter((task) => task.day !== day);
    setTasks(newTasks);
  };


  return (
    <div className={s.body}>
      <Header createTask={createTask} />
      <Container 
      tasks={tasks}
      deleteTask={deleteTask}
      deleteTasksAll={deleteTasksAll} />
    </div>
  );
}

export default App;
