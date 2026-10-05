import LegalPage from '../components/LegalPage.jsx';
import { site } from '../siteConfig.js';

const sections = [
  {
    heading: 'Information we collect',
    paragraphs: [
      'This website is a showcase for our services and does not have user accounts, logins, or payments. We only collect information you choose to give us, plus basic technical data that is collected automatically when you visit.',
    ],
    points: [
      'Information you send us: your name, email address, phone number, and the details of your project when you email or call us.',
      'Technical data: IP address, browser type, device type, pages visited, and timestamps, recorded in standard server logs by our hosting provider.',
    ],
  },
  {
    heading: 'How we use your information',
    points: [
      'To respond to your enquiries and prepare proposals or quotes.',
      'To deliver, support, and invoice projects you engage us for.',
      'To keep the website secure, diagnose errors, and understand how it performs.',
      'To meet legal, tax, and accounting obligations.',
    ],
    paragraphs: ['We do not sell your personal information, and we do not use it for third-party advertising.'],
  },
  {
    heading: 'Third-party services',
    paragraphs: [
      'We rely on a small number of providers to run this site. When you visit, they may receive technical data such as your IP address:',
    ],
    points: [
      'Vercel Inc., which hosts this website.',
      'Google Fonts, which serves the typefaces used on this site.',
      'Email and telephone providers you use to contact us (for example, Gmail).',
    ],
  },
  {
    heading: 'Cookies and tracking',
    paragraphs: [
      'This website does not set advertising or profiling cookies. If we add analytics in the future, we will update this policy and, where required, ask for your consent.',
    ],
  },
  {
    heading: 'How long we keep your information',
    paragraphs: [
      'We keep enquiry details only as long as needed to respond to you and, if you become a client, for the duration of the engagement plus the period required for tax and legal purposes. Server logs are retained for short periods by our hosting provider.',
    ],
  },
  {
    heading: 'Data security',
    paragraphs: [
      'We use reasonable technical and organisational measures, including encrypted (HTTPS) connections, to protect information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'In line with applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may ask us to:',
    ],
    points: [
      'Tell you what personal data of yours we hold.',
      'Correct or update inaccurate data.',
      'Delete your data, subject to legal retention requirements.',
      'Withdraw consent you have previously given.',
    ],
  },
  {
    heading: 'Children',
    paragraphs: [
      'Our services are aimed at businesses and are not directed at children under 18. We do not knowingly collect personal data from children.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. The "Last updated" date at the top shows when it last changed, and the latest version is always available on this page.',
    ],
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This Privacy Policy explains how ${site.companyName} ("we", "us") collects, uses, and protects your information when you visit this website or contact us.`}
      sections={sections}
    />
  );
}
