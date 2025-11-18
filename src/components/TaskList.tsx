import { Task } from '../types';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList = ({ tasks, onToggleComplete, onDelete }: TaskListProps) => {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
