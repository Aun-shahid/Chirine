import { FloatingHearts } from '../components/FloatingHearts';
import { Footer } from '../components/Footer';
import { FileText } from 'lucide-react';

export const LetterPage = () => {
  return (
    <>
      <FloatingHearts />
      <div className="page">
        <div className="glass-card animate-fade-in-up" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <FileText size={48} style={{ color: 'var(--pink-500)' }} />
          </div>

          <h1 className="gradient-text" style={{ marginBottom: '1.5rem', fontSize: '2.2rem' }}>
            The Physical Letter
          </h1>

          <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
            Here is the physical letter that was shared with you.
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
              src="/letter.jpg"
              alt="The Letter"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              onError={(e) => {
                // Fallback text if file isn't uploaded yet
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const div = document.createElement('div');
                  div.style.padding = '3rem 1.5rem';
                  div.style.color = 'var(--text-medium)';
                  div.innerHTML = '📁 [letter.jpg placeholder]<br/>Please place letter.jpg inside the public/ directory.';
                  parent.appendChild(div);
                }
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
