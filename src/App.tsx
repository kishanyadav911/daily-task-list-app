import { Task } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const handleAddTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 -z-1"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 50%)' }}
      ></div>
      <main className="container mx-auto max-w-2xl px-4 py-8">
        <Header />
        <div className="mt-8 space-y-6">
          <AddTaskForm onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        </div>
        <footer className="text-center mt-12 text-textSecondary text-sm">
          <p>
            Design by{' '}
            <a
              href="https://kishanyadav.online"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline transition-colors duration-300"
            >
              Kishan Yadav
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
