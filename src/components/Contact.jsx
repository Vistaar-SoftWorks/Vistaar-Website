import { site } from '../siteConfig.js';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <h2 className="contact__title">Have an idea? Let's build it.</h2>
        <p className="contact__subtitle">
          Tell us what you're trying to build — a mobile app, a website, an AI feature — and
          we'll get back to you with next steps within a day.
        </p>
        <a href={`mailto:${site.contactEmail}`} className="btn contact__cta">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
