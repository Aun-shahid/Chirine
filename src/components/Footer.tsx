import React from 'react';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
          <Terminal size={18} style={{ color: '#818cf8' }} />
          <span className="gradient-text">Chirine Studio</span>
        </div>
        <p style={{ fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Chirine Creative Platform. Built with React, Vite & TypeScript.
        </p>
      </div>
    </footer>
  );
};
