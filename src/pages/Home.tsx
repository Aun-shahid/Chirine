import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Cpu, Layers, Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container animate-fade-in-up" style={{ paddingTop: '2rem' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }}>
        {/* Decorative background glows */}
        <div className="animate-pulse-slow" style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '9999px', marginBottom: '1.5rem', backdropFilter: 'blur(8px)' }}>
          <Sparkles size={14} style={{ color: '#c084fc' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Introducing Chirine Workspace</span>
        </div>

        <h1 style={{ marginBottom: '1.5rem' }}>
          Unleash Creativity on <br />
          <span className="gradient-text">A Stunning Platform</span>
        </h1>
        
        <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
          Experience a modular, responsive workspace crafted with React, TypeScript, and modern glassmorphic styles. Build the future with high performance.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            id="btn-explore" 
            className="btn btn-primary"
            onClick={() => navigate('/tools')}
          >
            Explore Workspace <ArrowRight size={18} />
          </button>
          <a 
            href="https://vite.dev" 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-secondary"
            id="btn-docs-external"
          >
            Vite Docs
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Designed for Modern Web Apps</h2>
        <div className="grid-cards">
          {/* Card 1 */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#6366f1' }}>
              <Cpu size={24} />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Lightning Fast</h3>
            <p>
              Powered by Vite, HMR (Hot Module Replacement) occurs instantly, ensuring an efficient, responsive, and seamless coding flow.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#a855f7' }}>
              <Layers size={24} />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Modular Architecture</h3>
            <p>
              Built using strong TypeScript interfaces, clear separation of concerns, and component-driven architecture for scalability.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#ec4899' }}>
              <Sparkles size={24} />
            </div>
            <h3 style={{ marginBottom: '0.75rem' }}>Rich Aesthetics</h3>
            <p>
              Features premium glassmorphic UI components, smooth gradients, light/dark mode compliance, and elegant hover transitions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
