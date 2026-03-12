import { Github, ExternalLink } from 'lucide-react';

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
                <span>Phase 1: 和弦识别（进行中）— Pilot v1.0 已发布</span>
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
          
          {/* Current Status */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">当前状态：</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>Pilot v1.0 数据集：660样本，14类和弦（自然大/小三和弦）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>待扩展：强力和弦、增减三和弦、七和弦家族、九/十一/十三和弦、挂留和弦、加音和弦、六和弦、变化和弦、转位与多把位、全部升降调...</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>GitHub：代码 + JAMS标注</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>Hugging Face：音频数据集</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
          <a
            href="https://github.com/Zaosusu/ogcp-pilot"
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
            href="https://huggingface.co/datasets/Zaosusu/ogcp-pilot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group"
          >
            <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">
              🤗 Hugging Face数据集
            </span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
}
