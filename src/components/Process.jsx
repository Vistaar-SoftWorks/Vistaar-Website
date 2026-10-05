import { process } from '../siteConfig.js';
import './Process.css';

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow" style={{ color: 'var(--color-cyan)' }}>
            How We Work
          </span>
          <h2 style={{ color: 'var(--color-text-light)' }}>
            A clear process, from first call to launch day.
          </h2>
        </div>
        <div className="process__grid">
          {process.map((item) => (
            <div key={item.step} className="process__card">
              <span className="process__step gradient-text">{item.step}</span>
              <h3 className="process__title">{item.title}</h3>
              <p className="process__description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
