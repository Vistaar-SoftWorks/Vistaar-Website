import { whyUs, site } from '../siteConfig.js';
import './WhyUs.css';

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow" style={{ color: 'var(--color-purple-strong)' }}>
            Why {site.companyName}
          </span>
          <h2>Built for founders who want it done right the first time.</h2>
        </div>
        <div className="why-us__grid">
          {whyUs.map((item) => (
            <div key={item.title} className="why-us__card">
              <h3 className="why-us__title">{item.title}</h3>
              <p className="why-us__description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
