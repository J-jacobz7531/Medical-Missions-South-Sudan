import React from 'react';

export function Dialog({ children, open, onOpenChange }) {
  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onOpenChange(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  );
}

export function DialogContent({ children, className = '' }) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full mx-4 animate-in fade-in zoom-in-95 duration-300 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
