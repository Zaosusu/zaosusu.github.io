import { Hero } from '../sections/Hero';
import { ProjectOverview } from '../sections/ProjectOverview';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';

export function OGCPProject() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Hero />
      <ProjectOverview />
      <Contact />
      <Footer />
    </div>
  );
}
