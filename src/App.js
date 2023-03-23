import './App.css';
import AddNewTask from './components/AddNewTask';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <AddNewTask/>
      <TaskList/>
      
    </div>
  );
}

export default App;
