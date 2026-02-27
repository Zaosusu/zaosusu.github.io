import { Hero } from './sections/Hero';
import { ProjectOverview } from './sections/ProjectOverview';
import { AboutMe } from './sections/AboutMe';
import { Timeline } from './sections/Timeline';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Hero />
      <ProjectOverview />
      <AboutMe />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
