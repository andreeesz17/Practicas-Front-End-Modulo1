import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Stats from './components/Stats';
import FilterBar from './components/FilterBar';

function App() {
  return (
    <div className="App">
      <FilterBar />
      <TaskInput />
      <TaskList />
      <Stats />
    </div>
  );
}

export default App;

