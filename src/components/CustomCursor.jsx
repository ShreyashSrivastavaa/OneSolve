import React, { useEffect, useState } from 'react';

export default function CustomCursor({ enabled = true }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOverLink = (e) => {
      const target = e.target.closest('a, button, input, textarea, select, .interactive-hover');
      if (target) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOverLink);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOverLink);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    let animationFrameId;

    const follow = () => {
      setFollower((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Small Lead Dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y - 4,
          left: position.x - 4,
          width: 8,
          height: 8,
          backgroundColor: '#00d9ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s ease',
          transform: isClicking ? 'scale(0.5)' : isHovered ? 'scale(1.5)' : 'scale(1)',
          boxShadow: '0 0 10px #00d9ff',
        }}
      />
      {/* Trailing Glow Ring */}
      <div
        style={{
          position: 'fixed',
          top: follower.y - 20,
          left: follower.x - 20,
          width: 40,
          height: 40,
          border: `1.5px solid ${isHovered ? '#ff006e' : 'rgba(0, 217, 255, 0.4)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s',
          backgroundColor: isHovered ? 'rgba(255, 0, 110, 0.15)' : 'transparent',
          transform: isClicking ? 'scale(0.8)' : isHovered ? 'scale(1.6)' : 'scale(1)',
          backdropFilter: isHovered ? 'blur(2px)' : 'none',
        }}
      />
    </>
  );
}
