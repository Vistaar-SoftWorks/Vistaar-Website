import { useEffect } from 'react';
import { site } from '../siteConfig.js';
import './LegalPage.css';

export default function LegalPage({ title, intro, sections }) {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} — ${site.companyName}`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return (
    <div className="legal">
      <div className="container legal__inner">
        <span className="section-eyebrow legal__eyebrow">Legal</span>
        <h1 className="legal__title">{title}</h1>
        <p className="legal__updated">Last updated: {site.legalUpdated}</p>
        <p className="legal__intro">{intro}</p>
        {sections.map((section, index) => (
          <section key={section.heading} className="legal__section">
            <h2>
              {index + 1}. {section.heading}
            </h2>
            {section.paragraphs?.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {section.points && (
              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <section className="legal__section legal__contact">
          <h2>Contact us</h2>
          <p>
            Questions about this page? Email us at{' '}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> or call{' '}
            {site.contactPhones.map((phone, i) => (
              <span key={phone.tel}>
                {i > 0 && ' / '}
                <a href={`tel:${phone.tel}`}>{phone.display}</a>
              </span>
            ))}
            . Our address: {site.companyName}, {site.location}.
          </p>
        </section>
      </div>
    </div>
  );
}
