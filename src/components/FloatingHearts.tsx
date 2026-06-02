import { useMemo } from 'react';

const HEART_CHARS = ['♥', '♡', '❤', '💕', '💗', '💖', '💝'];

export const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 22,
        delay: Math.random() * 18,
        duration: 12 + Math.random() * 16,
        opacity: 0.12 + Math.random() * 0.22,
        char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
      })),
    []
  );

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
};
