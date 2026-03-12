import { Mail, Github, MessageCircle, Star, BookOpen, Bell } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-bg-primary py-16 md:py-20 px-5">
      <div className="max-w-content mx-auto text-center">
        {/* Title */}
        <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-8">
          合作 & 贡献
        </h2>
        
        {/* Content */}
        <div className="font-noto text-base text-text-primary leading-relaxed space-y-6 text-left">
          {/* If you */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">如果你：</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>对OpenGuitarChordProject感兴趣，想贡献代码/数据</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>在做音频AI/音乐AI相关研究，想交流</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>想提供建议或反馈</span>
              </li>
            </ul>
          </div>
          
          <p className="text-text-secondary">
            欢迎通过以下方式联系：
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 py-4">
            <a
              href="mailto:qinqiao2014@gmail.com"
              className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group"
            >
              <Mail className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">
                qinqiao2014@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/zaosusu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group"
            >
              <Github className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">
                github.com/zaosusu
              </span>
            </a>
            <a
              href="https://github.com/zaosusu/ogcp-pilot/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">
                GitHub Discussions
              </span>
            </a>
          </div>
          
          {/* Follow */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">想围观项目进展：</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6">
              <a
                href="https://github.com/Zaosusu/ogcp-pilot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <Star className="w-4 h-4" />
                <span className="font-noto text-sm">Star项目仓库</span>
              </a>
              <a
                href="#project"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <BookOpen className="w-4 h-4" />
                <span className="font-noto text-sm">阅读文档</span>
              </a>
              <a
                href="https://github.com/Zaosusu/ogcp-pilot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <Bell className="w-4 h-4" />
                <span className="font-noto text-sm">Watch项目更新</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
