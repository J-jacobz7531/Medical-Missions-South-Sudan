import React from 'react';

export function Button({ className, size, children, ...props }) {
  const sizeClasses = {
    default: 'py-2 px-4',
    sm: 'py-1 px-3 text-sm',
    lg: 'py-3 px-6 text-lg'
  };

  const sizeClass = size ? sizeClasses[size] : sizeClasses.default;

  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
      disabled:pointer-events-none disabled:opacity-50 ${sizeClass} ${className || ''}`} 
      {...props}
    >
      {children}
    </button>
  );
}
