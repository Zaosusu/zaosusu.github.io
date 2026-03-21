import { LangProvider } from './context/LanguageContext';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './sections/Hero';
import { ProjectOverview } from './sections/ProjectOverview';
import { AboutMe } from './sections/AboutMe';
import { Timeline } from './sections/Timeline';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-bg-primary">
        <Navbar />
        <Hero />
        <ProjectOverview />
        <AboutMe />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
