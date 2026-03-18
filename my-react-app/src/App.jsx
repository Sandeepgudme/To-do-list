import React, { useState } from "react";
import Header from "./components/Header.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  // State to store all todos
  const [todos, setTodos] = useState([]);

  // State for input field
  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),        // unique id
      text: input,           // task text
      completed: false       // status
    };

    setTodos([...todos, newTodo]); // add to list
    setInput(""); // clear input
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Edit todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Header />

      {/* Input field */}
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Add button */}
      <button className="task-btn" onClick={addTodo}>Add</button>

      {/* Passing data and functions as props */}
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;