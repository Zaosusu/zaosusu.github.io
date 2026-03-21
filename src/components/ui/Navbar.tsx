import { useLang } from '../../context/LanguageContext';

export function Navbar() {
  const { lang, toggle } = useLang();

  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <button
        onClick={toggle}
        className="font-inter text-xs text-text-muted hover:text-text-primary border border-border-custom px-3 py-1.5 rounded transition-colors duration-200"
      >
        {lang === 'zh' ? 'EN' : '中文'}
      </button>
    </nav>
  );
}
