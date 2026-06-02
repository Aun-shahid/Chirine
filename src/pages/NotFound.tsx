import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, HelpCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container animate-fade-in-up" style={{ textAlign: 'center', padding: '4rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
      <div className="animate-float" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', color: '#ef4444' }}>
        <HelpCircle size={48} />
      </div>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}><span className="gradient-text">404</span> - Page Not Found</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
        The page you are looking for does not exist or has been moved to another location.
      </p>

      <button 
        id="btn-back-home"
        className="btn btn-primary" 
        onClick={() => navigate('/')}
        style={{ display: 'inline-flex', gap: '8px' }}
      >
        <Home size={18} /> Return Home
      </button>
    </div>
  );
};
