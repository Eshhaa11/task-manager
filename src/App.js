import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { loadTasks, saveTasks } from './services/storage';
import { fetchTasksFromAPI } from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localData = loadTasks();
    if (localData.length) {
      setTasks(localData);
    } else {
      fetchTasksFromAPI().then(apiTasks => setTasks(apiTasks));
    }
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newDescription) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, description: newDescription } : task
    ));
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
