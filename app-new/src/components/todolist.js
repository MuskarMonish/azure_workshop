import React, { useState } from 'react';

const TodoList = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // State to hold the current todo input
  const [todoInput, setTodoInput] = useState('');

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (todoInput.trim() === '') {
      return;
    }

    // Create a new todo object with a unique id and the todo description
    const newTodo = {
      id: new Date().getTime(),
      description: todoInput.trim(),
      completed: false,
    };

    // Add the new todo to the list of todos
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // Clear the todo input
    setTodoInput('');
  };

  // Function to handle marking a todo as completed
  const handleToggleComplete = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to handle removing a todo
  const handleRemoveTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter your todo..."
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.description}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;