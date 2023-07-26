import React from 'react';
import TodoList from './components/todolist';

function App() {
  return (
    <center>
      <div className="App">
      <header className="App-header">
        <h1>Todo Application</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
    </center>
  );
}

export default App;