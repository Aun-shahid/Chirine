import { FloatingHearts } from '../components/FloatingHearts';
import { Header } from '../components/Header';
import { HelpCircle } from 'lucide-react';

export const HintPage = () => {
  return (
    <>
      <FloatingHearts />
      <div className="page">
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
              width: '100%',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              border: '2px solid var(--pink-200)',
              boxShadow: 'var(--shadow-pink)',
              background: 'white',
              marginBottom: '1.5rem',
            }}
          >
            <img
              src="/hint.jpg"
              alt="The Hint"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const div = document.createElement('div');
                  div.style.padding = '3rem 1.5rem';
                  div.style.color = 'var(--text-medium)';
                  div.innerHTML = '📁 [hint.jpg placeholder]<br/>Please place hint.jpg inside the public/ directory.';
                  parent.appendChild(div);
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
