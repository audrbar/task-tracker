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

  return (
    <div className="container">
        <Header title="Task Tracker" />
        <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
