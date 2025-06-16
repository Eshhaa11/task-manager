import React, { useState } from 'react';
import '../styles/TaskItem.css';

function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleEdit = () => {
    if (isEditing && newDesc.trim()) {
      editTask(task.id, newDesc);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
      ) : (
        <span className={task.completed ? 'completed' : ''}>
          {task.description}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
