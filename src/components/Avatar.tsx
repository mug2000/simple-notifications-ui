export function Avatar({ name, color, icon }: { name: string; color: string; icon?: string }) {
  return (
    <div className="relative">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white text-lg font-medium`}>
        {name}
      </div>
      {icon && (
        <div className={`absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full ${icon} flex items-center justify-center text-white text-xs`}>
          {icon === 'bg-primary' && '@'}
          {icon === 'bg-cyan-500' && '⚡'}
          {icon === 'bg-red-500' && '✕'}
          {icon === 'bg-blue-600' && '💬'}
          {icon === 'bg-gray-800' && '+'}
        </div>
      )}
    </div>
  );
}
