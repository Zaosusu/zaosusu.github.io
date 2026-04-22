import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LangProvider } from './context/LanguageContext';
import { Navbar } from './components/ui/Navbar';
import { Home } from './pages/Home';
import { OGCPProject } from './pages/OGCPProject';
import { WalkingXiuxian } from './pages/WalkingXiuxian';

function App() {
  return (
    <HashRouter>
      <LangProvider>
        <div className="min-h-screen bg-bg-primary">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/ogcp" element={<OGCPProject />} />
            <Route path="/projects/walking-xiuxian" element={<WalkingXiuxian />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </LangProvider>
    </HashRouter>
  );
}

export default App;
