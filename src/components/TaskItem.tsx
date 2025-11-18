import { Trash2, Circle, CheckCircle2 } from 'lucide-react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggleComplete, onDelete }: TaskItemProps) => {
  return (
    <li className="flex items-center justify-between p-4 bg-surface rounded-2xl border border-border transition-all duration-300 hover:border-primary/50">
      <div className="flex items-center gap-4">
        <button onClick={() => onToggleComplete(task.id)} className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full">
          {task.completed ? (
            <CheckCircle2 className="w-6 h-6 text-primary" />
          ) : (
            <Circle className="w-6 h-6 text-textSecondary" />
          )}
        </button>
        <span className={`text-lg ${task.completed ? 'line-through text-textSecondary' : 'text-text'}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-textSecondary hover:text-error p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-error"
        aria-label={`Delete task: ${task.text}`}
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </li>
  );
};

export default TaskItem;
