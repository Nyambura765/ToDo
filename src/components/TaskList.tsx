import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteCompleted: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDeleteCompleted }) => {
  return (
    <div>
      <button onClick={onDeleteCompleted}>Delete Completed Tasks</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
