import { ClipboardCheck } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="text-center py-16 px-8 bg-surface/50 rounded-2xl border border-dashed border-border">
      <ClipboardCheck className="w-16 h-16 mx-auto text-primary/50" />
      <h3 className="mt-4 text-xl font-semibold text-text">All tasks completed!</h3>
      <p className="mt-1 text-textSecondary">Ready to add something new?</p>
    </div>
  );
};

export default EmptyState;
