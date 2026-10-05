import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import Work from '../components/Work.jsx';
import WhyUs from '../components/WhyUs.jsx';
import TechStack from '../components/TechStack.jsx';
import Contact from '../components/Contact.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Work />
      <WhyUs />
      <TechStack />
      <Contact />
    </>
  );
}
