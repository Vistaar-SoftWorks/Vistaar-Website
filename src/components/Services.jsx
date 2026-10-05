import { services } from '../siteConfig.js';
import ServiceIcon from './ServiceIcons.jsx';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow" style={{ color: 'var(--color-purple-strong)' }}>
            What We Do
          </span>
          <h2>Every layer of your product, built by one team.</h2>
          <p style={{ color: 'var(--color-muted-dark)' }}>
            From the first sketch to the app going live, we handle the full stack — so you're not
            stitching together five different vendors.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="services__card">
              <div className="services__icon">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
