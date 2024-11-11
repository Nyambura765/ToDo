import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Function to handle adding a new task
  const handleAddTask = (newTask: string) => {
    const newTaskObj: Task = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
  };

  // Function to toggle task completion
  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete completed tasks
  const handleDeleteCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTaskForm onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onDeleteCompleted={handleDeleteCompleted}
      />
    </div>
  );
};

export default App;
