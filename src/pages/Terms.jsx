import LegalPage from '../components/LegalPage.jsx';
import { site } from '../siteConfig.js';

const sections = [
  {
    heading: 'Acceptance of terms',
    paragraphs: [
      'By accessing or using this website you agree to these Terms of Service. If you do not agree, please do not use the site.',
    ],
  },
  {
    heading: 'About our services',
    paragraphs: [
      'We design and build mobile apps, websites, web applications, and AI/ML solutions, and help publish them to app stores. The content on this website is for general information and is not a binding offer. Any paid engagement is governed by a separate written proposal, quote, or agreement agreed by both parties.',
    ],
  },
  {
    heading: 'Use of this website',
    points: [
      'Use the site only for lawful purposes.',
      'Do not attempt to gain unauthorised access to the site, its servers, or related systems.',
      'Do not introduce malware, scrape the site at a rate that harms its performance, or interfere with other visitors.',
      'Do not misrepresent your identity or affiliation when contacting us.',
    ],
  },
  {
    heading: 'Project engagements',
    paragraphs: [
      'For client projects, scope, timelines, fees, payment schedule, ownership of deliverables, and confidentiality are set out in the written agreement for that project. Unless that agreement says otherwise, timelines depend on timely feedback, content, and approvals from the client, and third-party fees (such as app store developer accounts, hosting, or API usage) are the client\'s responsibility.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      `The text, design, graphics, and code of this website are owned by ${site.companyName} unless stated otherwise, and may not be copied or reused without our written permission. Names and logos of third-party products and technologies mentioned on the site belong to their respective owners.`,
      'The projects shown in the "Capabilities in Action" section are concept previews of our capabilities and are not client work.',
    ],
  },
  {
    heading: 'No warranties',
    paragraphs: [
      'This website is provided "as is" and "as available". We make no warranties, express or implied, that it will be uninterrupted, error-free, or that the information on it is complete or current.',
    ],
  },
  {
    heading: 'Limitation of liability',
    paragraphs: [
      `To the fullest extent permitted by law, ${site.companyName} will not be liable for any indirect, incidental, or consequential loss arising from your use of this website or reliance on its content. Liability for paid project work is limited as set out in the applicable project agreement.`,
    ],
  },
  {
    heading: 'Third-party links',
    paragraphs: [
      'This site may link to third-party websites. We do not control them and are not responsible for their content or practices.',
    ],
  },
  {
    heading: 'Changes to these terms',
    paragraphs: [
      'We may revise these terms at any time by updating this page. Continued use of the website after a change means you accept the revised terms.',
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of India. Any dispute arising from them is subject to the exclusive jurisdiction of the courts at Hanumangarh, Rajasthan.',
    ],
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These Terms of Service govern your use of the ${site.companyName} website. Please read them carefully.`}
      sections={sections}
    />
  );
}
