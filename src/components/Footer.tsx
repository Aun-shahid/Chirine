import { Link } from 'react-router-dom';
import { Home, Mail, FileText, HelpCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        padding: '1.5rem 1rem',
        marginTop: '3rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(244, 114, 182, 0.15)',
        position: 'relative',
        zIndex: 20,
        borderRadius: 'var(--radius)',
      }}
    >
      <Link to="/" className="footer-link">
        <Home size={18} /> Home
      </Link>
      <Link to="/letter" className="footer-link">
        <FileText size={18} /> The Letter
      </Link>
      <Link to="/hint" className="footer-link">
        <HelpCircle size={18} /> The Hint
      </Link>
      <Link to="/support" className="footer-link">
        <Mail size={18} /> Support
      </Link>
    </footer>
  );
};
