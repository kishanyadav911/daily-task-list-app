import { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddTaskFormProps {
  onAddTask: (text: string) => void;
}

const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-2 bg-surface rounded-full border border-border focus-within:ring-2 focus-within:ring-primary transition-all">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="w-full bg-transparent px-4 py-2 text-text placeholder-textSecondary focus:outline-none"
      />
      <button
        type="submit"
        className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface focus:ring-primary transition-transform duration-200 ease-in-out hover:scale-110 active:scale-100 disabled:bg-gray-500 disabled:cursor-not-allowed"
        disabled={!text.trim()}
        aria-label="Add Task"
      >
        <Plus className="w-5 h-5" />
      </button>
    </form>
  );
};

export default AddTaskForm;
