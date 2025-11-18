import { CheckSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center p-8">
      <div className="inline-flex items-center gap-3 bg-surface/50 p-4 rounded-2xl border border-border backdrop-blur-sm">
        <CheckSquare className="w-10 h-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold text-text tracking-tight">Zenith</h1>
          <p className="text-textSecondary">Your Daily Task Manager</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
