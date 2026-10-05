import { technologies } from '../siteConfig.js';
import './TechStack.css';

export default function TechStack() {
  return (
    <section className="tech-stack">
      <div className="container">
        <span className="section-eyebrow" style={{ color: 'var(--color-muted-dark)' }}>
          Technologies We Work With
        </span>
        <div className="tech-stack__row">
          {technologies.map((tech) => (
            <span key={tech} className="tech-stack__pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
