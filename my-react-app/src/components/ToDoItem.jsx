import React, { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  // State for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // Save edited text
  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div style={{ margin: "10px" }}>
      
      {/* Checkbox to mark complete */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {/* Show input if editing, else show text */}
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            margin: "0 10px"
          }}
        >
          {todo.text}
        </span>
      )}

      {/* Edit button */}
      <button   className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>

      {/* Delete button */}
      <button   className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;