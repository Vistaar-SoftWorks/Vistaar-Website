import { Link } from 'react-router-dom';
import { site, footerLinks } from '../siteConfig.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">{site.companyName}</span>
            <p className="footer__tagline">
              A product studio building mobile apps, websites, web platforms, and AI-powered
              tools for growing businesses.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn" className="footer__social-icon">
                in
              </a>
              <a href="#" aria-label="Instagram" className="footer__social-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#D6D7E8" strokeWidth="1.5">
                  <rect x="1" y="1" width="14" height="14" rx="4" />
                  <circle cx="8" cy="8" r="3.2" />
                  <circle cx="12" cy="4" r="0.6" fill="#D6D7E8" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="footer__social-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#D6D7E8" strokeWidth="1.6">
                  <line x1="1" y1="1" x2="13" y2="13" />
                  <line x1="13" y1="1" x2="1" y2="13" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer__column">
            <span className="footer__heading">Services</span>
            {footerLinks.services.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer__column">
            <span className="footer__heading">Company</span>
            {footerLinks.company.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer__column">
            <span className="footer__heading">Contact</span>
            <a href={`mailto:${site.contactEmail}`} className="footer__link">
              {site.contactEmail}
            </a>
            {site.contactPhones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className="footer__link">
                {phone.display}
              </a>
            ))}
            <span className="footer__link">{site.location}</span>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copyright">
            © {new Date().getFullYear()} {site.companyName}. All rights reserved.
          </span>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
