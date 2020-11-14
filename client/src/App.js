import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <div className="container" >
      <GlobalProvider>
        <TodoInput />
        <TodoList />
      </GlobalProvider>
    </div >
  )
}

export default App;
