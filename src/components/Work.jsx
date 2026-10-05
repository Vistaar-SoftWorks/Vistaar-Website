import { work } from '../siteConfig.js';
import './Work.css';

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow" style={{ color: 'var(--color-purple-strong)' }}>
            Capabilities in Action
          </span>
          <h2>A glimpse of what we build.</h2>
          <p style={{ color: 'var(--color-muted-dark)' }}>
            We're a new studio — these are concept previews of the kind of work we do, not past
            client projects.
          </p>
        </div>
        <div className="work__grid">
          {work.map((item, index) => (
            <div key={index} className="work__card">
              <div className="work__preview">
                <span>[Project Preview]</span>
              </div>
              <div className="work__body">
                <div className="work__header">
                  <h3 className="work__name">{item.name}</h3>
                  <span className="work__tag">{item.tag}</span>
                </div>
                <p className="work__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
