export function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'primary' }) {
  const styles = variant === 'primary' 
    ? 'bg-primary text-white' 
    : 'bg-gray-200 text-gray-700';
  
  return (
    <span className={`px-3 py-1 rounded-2xl text-sm font-medium ${styles}`}>
      {children}
    </span>
  );
}
