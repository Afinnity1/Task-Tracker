import { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Footer from './Footer';
import About from './About';

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Food shopping',
        day: 'Jan 1st at 1:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Learning React',
        day: 'Jan 11st at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Tech conference',
        day: 'Jan 15st at 11:30am',
        reminder: true,
    }
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask]) 
}

// Delete Task
const HandleDelete = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id ))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks( tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task) )
}

  return (
      <div className="container"> 
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          { showAddTask && <AddTask onAdd={addTask} /> }
          { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={HandleDelete} onToggle={toggleReminder} />) : ('No Tasks available')}
          <Footer />
      </div>
  );
}

export default App;
