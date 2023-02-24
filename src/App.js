import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Doctors appointment',
        day: '2023-02-29',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at Scholl',
        day: '2023-04-15',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: '2023-03-07',
        reminder: false,
    },
]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

return (
    <div className="container">
        <Header title="Task Tracker" />
        {tasks.length > 0 ? (
        <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
        />
      ) : (
        'There is no tasks to show.'
      )}
    </div>
  );
}

export default App;
