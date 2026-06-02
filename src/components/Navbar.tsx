import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Compass, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo" id="nav-logo-link">
          <Sparkles className="animate-float" style={{ color: '#c084fc' }} size={24} />
          <span>Chirine</span>
        </NavLink>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                id="nav-link-home"
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Compass size={16} /> Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tools" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                id="nav-link-tools"
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Terminal size={16} /> Workspace
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
