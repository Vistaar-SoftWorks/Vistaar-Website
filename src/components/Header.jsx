import { useState } from 'react';
import { site, navLinks } from '../siteConfig.js';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <a href="/#top" className="header__logo">
          {site.companyName}
        </a>
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="btn btn-primary">
            Start a Project
          </a>
        </nav>
        <button
          className="header__toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#F4F4FA" strokeWidth="1.8" strokeLinecap="round">
              <line x1="3" y1="3" x2="17" y2="17" />
              <line x1="17" y1="3" x2="3" y2="17" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#F4F4FA" strokeWidth="1.8" strokeLinecap="round">
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="header__mobile-menu">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="header__mobile-link">
              {link.label}
            </a>
          ))}
          <a href="/#contact" onClick={closeMenu} className="btn btn-primary header__mobile-cta">
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
