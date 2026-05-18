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
          {lang === 'zh' ? '独立AI研究者 · 开源实践者 · 长期主义自学者' : 'Independent AI Researcher · Open Source Practitioner · Long-term Self-learner'}
        </p>
      </div>
    </footer>
  );
}
