import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  shape: 'rect' | 'circle' | 'heart';
}

const COLORS = [
  '#f472b6', '#ec4899', '#db2777', '#fce7f3',
  '#f9a8d4', '#fda4af', '#ff6b9d', '#c084fc',
  '#e879f9', '#fb7185', '#f43f5e', '#fbbf24',
];

const PARTICLE_COUNT = 200;

export const Confetti = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const particles: Particle[] = [];

    // Create burst particles from the center-top area
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const velocity = 4 + Math.random() * 14;
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 300,
        y: canvas.height * 0.3 + (Math.random() - 0.5) * 100,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - Math.random() * 8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 3 + Math.random() * 8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        opacity: 1,
        shape: (['rect', 'circle', 'heart'] as const)[Math.floor(Math.random() * 3)],
      });
    }

    let animationFrame: number;
    const gravity = 0.25;
    const friction = 0.985;

    const drawHeart = (ctx: CanvasRenderingContext2D, size: number) => {
      const s = size * 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.4);
      ctx.bezierCurveTo(-s, -s * 1.4, -s * 1.8, s * 0.2, 0, s * 1.2);
      ctx.bezierCurveTo(s * 1.8, s * 0.2, s, -s * 1.4, 0, -s * 0.4);
      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let alive = false;

      for (const p of particles) {
        if (p.opacity <= 0.01) continue;
        alive = true;

        p.vy += gravity;
        p.vx *= friction;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Slow fade after particles pass canvas midpoint
        if (p.y > canvas.height * 0.5) {
          p.opacity -= 0.008;
        } else {
          p.opacity -= 0.002;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          drawHeart(ctx, p.size);
        }

        ctx.restore();
      }

      if (alive) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Slight delay so the user sees the page first
    const startTimeout = setTimeout(() => animate(), 100);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="confetti-canvas" />;
};
