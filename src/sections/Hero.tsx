import { Github, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-bg-primary px-5">
      <div className="max-w-content w-full text-center animate-fade-in">
        {/* Main Title */}
        <h1 className="font-inter font-bold text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
          OpenGuitarChordProject
        </h1>
        
        {/* Subtitle */}
        <p className="font-noto text-lg md:text-xl text-text-secondary mb-3">
          开源吉他和弦识别项目
        </p>
        
        {/* Description */}
        <p className="font-noto text-sm md:text-base text-text-muted mb-8">
          让每个吉他爱好者都能轻松学习和创作
        </p>
        
        {/* Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://github.com/zaosusu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-custom rounded text-text-primary hover:border-text-secondary hover:text-text-secondary transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span className="font-noto text-sm">GitHub</span>
          </a>
          <a
            href="#project"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-custom rounded text-text-primary hover:border-text-secondary hover:text-text-secondary transition-colors duration-200"
          >
            <BookOpen className="w-4 h-4" />
            <span className="font-noto text-sm">Documentation</span>
          </a>
        </div>
        
        {/* Author */}
        <p className="font-noto text-sm text-text-muted">
          by 阿早
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-border-custom rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-text-muted rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
