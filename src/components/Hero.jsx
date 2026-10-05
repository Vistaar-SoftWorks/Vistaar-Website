import { site } from '../siteConfig.js';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__blob hero__blob--a float-a" />
      <div className="hero__blob hero__blob--b float-b" />
      <div className="container hero__inner">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span>{site.tagline}</span>
            </div>
            <h1 className="hero__title">
              We build the software your business runs on —{' '}
              <span className="gradient-text">apps, web, and AI included.</span>
            </h1>
            <p className="hero__subtitle">
              {site.companyName} is a product studio for founders and growing businesses — we
              design, build, and ship mobile apps, websites, web platforms, and AI-powered tools,
              then get them published and supported.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn-primary">
                Start a Project
              </a>
              <a href="#services" className="btn btn-secondary">
                See What We Do
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__card-code">
              <div className="hero__card-dots">
                <span style={{ background: '#5B3DF5' }} />
                <span style={{ background: '#7C5CFC' }} />
                <span style={{ background: '#22D3EE' }} />
              </div>
              <div className="hero__card-lines">
                <div className="hero__line" style={{ width: '70%', background: 'rgba(124,92,252,0.5)' }} />
                <div className="hero__line" style={{ width: '90%' }} />
                <div className="hero__line" style={{ width: '55%', background: 'rgba(34,211,238,0.45)' }} />
                <div className="hero__line" style={{ width: '80%' }} />
                <div className="hero__line" style={{ width: '40%', background: 'rgba(124,92,252,0.5)' }} />
              </div>
            </div>
            <div className="hero__card-phone float-a">
              <div className="hero__phone-bar" />
              <div className="hero__phone-screen" />
              <div className="hero__phone-button" />
            </div>
            <div className="hero__pill float-b">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="#22D3EE">
                <polygon points="7,0 8.6,5.4 14,7 8.6,8.6 7,14 5.4,8.6 0,7 5.4,5.4" />
              </svg>
              <span>AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
