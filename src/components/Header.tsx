import { Link } from 'react-router-dom';
import { Home, Mail, FileText, HelpCircle } from 'lucide-react';

export const Header = () => {
  return (
    <header
      style={{
        width: 'fit-content',
        maxWidth: '100%',
        padding: '0.85rem 2.2rem',
        marginBottom: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.75rem',
        flexWrap: 'wrap',
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(244, 114, 182, 0.22)',
        position: 'relative',
        zIndex: 20,
        borderRadius: 'var(--radius-full)',
        boxShadow: 'var(--shadow-pink)',
      }}
    >
      <Link to="/" className="header-link">
        <Home size={18} /> Home
      </Link>
      <Link to="/letter" className="header-link">
        <FileText size={18} /> The Letter
      </Link>
      <Link to="/hint" className="header-link">
        <HelpCircle size={18} /> The Hint
      </Link>
      <Link to="/support" className="header-link">
        <Mail size={18} /> Support
      </Link>
    </header>
  );
};
