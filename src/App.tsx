import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LangProvider } from './context/LanguageContext';
import { Navbar } from './components/ui/Navbar';
import { Home } from './pages/Home';
import { OGCPProject } from './pages/OGCPProject';
import { WalkingXiuxian } from './pages/WalkingXiuxian';
import { XiaohongshuProject } from './pages/XiaohongshuProject';
import { InfiniteAcademyProject } from './pages/InfiniteAcademyProject';
import { DuckEscapeProject } from './pages/DuckEscapeProject';
import { NPCAgentProject } from './pages/NPCAgentProject';
import { TwoLinkProject } from './pages/TwoLinkProject';

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
            <Route path="/projects/xiaohongshu" element={<XiaohongshuProject />} />
            <Route path="/projects/infinite-academy" element={<InfiniteAcademyProject />} />
            <Route path="/projects/duck-escape" element={<DuckEscapeProject />} />
            <Route path="/projects/npc-agent" element={<NPCAgentProject />} />
            <Route path="/projects/2link" element={<TwoLinkProject />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </LangProvider>
    </HashRouter>
  );
}

export default App;
