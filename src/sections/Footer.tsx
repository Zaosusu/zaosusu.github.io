export function Footer() {
  return (
    <footer className="bg-bg-primary py-8 px-5 border-t border-border-custom">
      <div className="max-w-content mx-auto text-center">
        <p className="font-noto text-sm text-text-muted">
          © {new Date().getFullYear()} 阿早 · OpenGuitarChordProject
        </p>
        <p className="font-noto text-xs text-text-muted mt-2">
          开源、免费、可复现
        </p>
      </div>
    </footer>
  );
}
