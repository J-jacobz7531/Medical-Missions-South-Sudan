import React, { useRef, useEffect, useState } from 'react';

export const GlowingEffect = ({ 
  spread = 40, 
  glow = true, 
  disabled = false, 
  proximity = 100, 
  inactiveZone = 0.01 
}) => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      setIsHovering(true);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled, proximity, inactiveZone]);

  if (disabled) return null;

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none rounded-2xl md:rounded-3xl"
        style={{
          background: isHovering && glow
            ? `radial-gradient(${spread * 2}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1) 50%, transparent 70%)`
            : 'transparent',
          transition: 'background 0.2s ease-out',
          zIndex: 1,
        }}
      />
      {isHovering && glow && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl md:rounded-3xl"
          style={{
            boxShadow: `0 0 ${spread}px rgba(59, 130, 246, 0.3), 0 0 ${spread * 2}px rgba(147, 51, 234, 0.2), inset 0 0 ${spread}px rgba(59, 130, 246, 0.1)`,
            transition: 'box-shadow 0.2s ease-out',
            zIndex: 0,
          }}
        />
      )}
    </>
  );
};
