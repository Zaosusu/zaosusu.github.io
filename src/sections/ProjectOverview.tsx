import { Github, BookOpen, ExternalLink } from 'lucide-react';

export function ProjectOverview() {
  return (
    <section id="project" className="bg-bg-secondary py-16 md:py-20 px-5">
      <div className="max-w-content mx-auto">
        {/* Title */}
        <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-8">
          关于这个项目
        </h2>
        
        {/* Content */}
        <div className="font-noto text-base text-text-primary leading-relaxed space-y-6">
          <p>
            OpenGuitarChordProject 是一个开源的吉他和弦识别项目。
          </p>
          
          {/* Goals */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">目标：</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>从音频文件中自动识别吉他和弦</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>生成标准六线谱</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>填补开源领域的空白</span>
              </li>
            </ul>
          </div>
          
          {/* Tech Roadmap */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">技术路线：</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>Phase 1: 和弦识别（数据集采集中）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>Phase 2: 和弦进行/和弦转换识别</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>Phase 3: 完整六线谱生成</span>
              </li>
            </ul>
          </div>
          
          {/* Why */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">为什么做这个？</h3>
            <p className="text-text-secondary mb-4">
              市面上的吉他扒谱工具，要么收费，要么不开源。
            </p>
            <p className="mb-4">
              作为一个吉他爱好者 + AI学习者，我决定自己做一个：
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>开源、免费</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>可复现、可扩展</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>欢迎社区贡献</span>
              </li>
            </ul>
          </div>
          
          {/* Current Status */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">当前状态：</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>项目处于早期阶段（Phase 1数据集采集中）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>预计将发表论文至相关学术平台</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>数据集将开源至Hugging Face等平台</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
          <a
            href="https://github.com/zaosusu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group"
          >
            <Github className="w-4 h-4" />
            <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">
              GitHub仓库
            </span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#project"
            className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group"
          >
            <BookOpen className="w-4 h-4" />
            <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">
              项目文档
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
