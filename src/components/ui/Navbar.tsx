import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';

const navt = {
  zh: {
    home: '阿早',
    ogcp: 'OGCP',
    walking: '走路修仙',
    xhs: '小红书筛选',
    academy: '无限学园',
  },
  en: {
    home: 'Zaosusu',
    ogcp: 'OGCP',
    walking: 'WalkingXiuxian',
    xhs: 'XHS Filter',
    academy: 'Infinite Academy',
  },
};

export function Navbar() {
  const { lang, toggle } = useLang();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const c = navt[lang];

  const linkClass = (path: string) =>
    `font-noto text-sm transition-colors duration-200 ${
      location.pathname === path
        ? 'text-text-primary border-b border-[#6cbcb2] pb-0.5'
        : 'text-text-muted hover:text-[#9bd8cf]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/72 backdrop-blur-xl border-b border-border-custom/80">
      <div className="max-w-content mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-inter font-bold text-base text-text-primary hover:text-[#9bd8cf] transition-colors duration-200"
          onClick={() => setMobileOpen(false)}
        >
          {c.home}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/projects/ogcp" className={linkClass('/projects/ogcp')}>
            {c.ogcp}
          </Link>
          <Link to="/projects/walking-xiuxian" className={linkClass('/projects/walking-xiuxian')}>
            {c.walking}
          </Link>
          <Link to="/projects/xiaohongshu" className={linkClass('/projects/xiaohongshu')}>
            {c.xhs}
          </Link>
          <Link to="/projects/infinite-academy" className={linkClass('/projects/infinite-academy')}>
            {c.academy}
          </Link>
          <button
            onClick={toggle}
            className="font-inter text-xs text-text-muted hover:text-text-primary border border-border-custom bg-bg-secondary/70 px-3 py-1.5 rounded transition-colors duration-200"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="font-inter text-xs text-text-muted hover:text-text-primary border border-border-custom bg-bg-secondary/70 px-3 py-1.5 rounded transition-colors duration-200"
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-t border-border-custom px-5 py-4 space-y-3">
          <Link
            to="/projects/ogcp"
            className={`block font-noto text-sm ${location.pathname === '/projects/ogcp' ? 'text-text-primary' : 'text-text-muted'}`}
            onClick={() => setMobileOpen(false)}
          >
            {c.ogcp}
          </Link>
          <Link
            to="/projects/walking-xiuxian"
            className={`block font-noto text-sm ${location.pathname === '/projects/walking-xiuxian' ? 'text-text-primary' : 'text-text-muted'}`}
            onClick={() => setMobileOpen(false)}
          >
            {c.walking}
          </Link>
          <Link
            to="/projects/xiaohongshu"
            className={`block font-noto text-sm ${location.pathname === '/projects/xiaohongshu' ? 'text-text-primary' : 'text-text-muted'}`}
            onClick={() => setMobileOpen(false)}
          >
            {c.xhs}
          </Link>
          <Link
            to="/projects/infinite-academy"
            className={`block font-noto text-sm ${location.pathname === '/projects/infinite-academy' ? 'text-text-primary' : 'text-text-muted'}`}
            onClick={() => setMobileOpen(false)}
          >
            {c.academy}
          </Link>
        </div>
      )}
    </nav>
  );
}
