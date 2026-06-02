import { useState } from 'react';
import { FloatingHearts } from '../components/FloatingHearts';
import { Header } from '../components/Header';
import { HelpCircle, ZoomIn, ZoomOut, RefreshCw, Move } from 'lucide-react';

export const HintPage = () => {
  const [zoomScale, setZoomScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.x;
    const newY = touch.clientY - dragStart.y;
    setPosition({ x: newX, y: newY });
  };

  return (
    <>
      <FloatingHearts />
      <div
        className="page"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 240, 245, 0.45), rgba(255, 240, 245, 0.45)), url("https://tse2.mm.bing.net/th/id/OIP.Ye0VzayEbOT5ppOqQnhrcAHaDj?rs=1&pid=ImgDetMain&o=7&rm=3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Header />
        <div className="glass-card animate-fade-in-up" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <HelpCircle size={48} style={{ color: 'var(--pink-500)' }} />
          </div>

          <h1 className="gradient-text" style={{ marginBottom: '1.5rem', fontSize: '2.2rem' }}>
            The Hint Card
          </h1>

          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Need a little extra nudge? Here is the hint card to guide you.
          </p>

          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              border: '2px solid var(--pink-200)',
              boxShadow: 'var(--shadow-pink)',
              background: '#fff3f8',
              marginBottom: '1.5rem',
            }}
          >
            {/* Zoom Control Bar */}
            <div
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                zIndex: 10,
                display: 'flex',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '0.4rem',
                borderRadius: '9999px',
                border: '1px solid var(--pink-200)',
                boxShadow: '0 2px 10px rgba(236, 72, 153, 0.1)',
              }}
            >
              <button
                type="button"
                onClick={() => setZoomScale((s) => Math.min(4, s + 0.25))}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--pink-600)',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s',
                }}
                title="Zoom In"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--pink-100)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <ZoomIn size={18} />
              </button>

              <button
                type="button"
                onClick={() => {
                  setZoomScale((s) => {
                    const next = Math.max(1, s - 0.25);
                    if (next === 1) setPosition({ x: 0, y: 0 });
                    return next;
                  });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--pink-600)',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s',
                }}
                title="Zoom Out"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--pink-100)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <ZoomOut size={18} />
              </button>

              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--pink-700)', alignSelf: 'center', padding: '0 0.25rem' }}>
                {Math.round(zoomScale * 100)}%
              </span>

              <button
                type="button"
                onClick={() => {
                  setZoomScale(1);
                  setPosition({ x: 0, y: 0 });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--pink-600)',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s',
                }}
                title="Reset Zoom"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--pink-100)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <RefreshCw size={14} />
              </button>
            </div>

            {/* Instruction Overlay when zoomed */}
            {zoomScale > 1 && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: 'rgba(74, 32, 64, 0.8)',
                  color: 'white',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  pointerEvents: 'none',
                }}
              >
                <Move size={12} /> Drag or swipe to pan!
              </div>
            )}

            {/* Drag Wrapper */}
            <div
              style={{
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                cursor: zoomScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              <img
                src="/hint.png"
                alt="The Hint"
                draggable={false}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: `scale(${zoomScale}) translate(${position.x / zoomScale}px, ${position.y / zoomScale}px)`,
                  transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                  transformOrigin: 'center center',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const div = document.createElement('div');
                    div.style.padding = '3rem 1.5rem';
                    div.style.color = 'var(--text-medium)';
                    div.innerHTML = '📁 [hint.png placeholder]<br/>Please place hint.png inside the public/ directory.';
                    parent.appendChild(div);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
