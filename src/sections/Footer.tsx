import { useLang } from '../context/LanguageContext';

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="bg-bg-primary py-10 px-5 border-t border-border-custom">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <p className="font-noto text-sm text-text-muted">
          © {new Date().getFullYear()} 阿早 · Zaosusu
        </p>
        <p className="font-noto text-xs text-text-muted mt-2">
          {lang === 'zh' ? '开源、免费、可复现' : 'Open source · Free · Reproducible'}
        </p>
      </div>
    </footer>
  );
}
