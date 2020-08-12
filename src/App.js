import React from 'react';
import { Header } from './components/Header';
import { AddToDo } from './components/AddToDo';
import { ToDoList } from './components/ToDoList';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <AddToDo />

        <ToDoList />
      </div>
    </GlobalProvider>
  );
}

export default App;
