import React from "react";
import ToDoItem from "./ToDoItem.jsx";

function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <div>
      {/* Loop through todos using map */}
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id} // unique key required
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;