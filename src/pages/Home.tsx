import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

const t = {
  zh: {
    heroTitle: '阿早',
    heroSubtitle: '独立AI研究者 · 开源实践者',
    heroDesc: '15年商业历练后转型技术，相信"不依赖人"的系统才是未来。',
    heroCta: '查看项目',
    aboutTitle: '关于我',
    aboutIntro: '我叫阿早，过去15年做过导演、MCN操盘手、淘宝店主，写过10万多字的行业研报，也曾是网易、腾讯、美图秀秀的内容供应商。2022年供应链崩盘让我意识到：依赖人的系统永远是脆弱的。有了时间和资源，我决定做一件"不依赖人"的事——学AI，做开源。',
    aboutGoal: '2026-2030年目标：考研CS，发表论文，成为能做深度研究的独立AI研究者。',
    timelineTitle: '转型之路',
    timeline: [
      { year: '2012-2022', title: '商业实践', desc: '影视、MCN、电商。积累认知，但看清「依赖人」的脆弱性' },
      { year: '2019-2025', title: '财务自由', desc: 'ToB业务爆发期带来主要财富积累；股市验证周期理论，做到稳定盈利' },
      { year: '2026', title: 'AI研究启动', desc: 'OpenGuitarChordProject立项。开始系统学习CS/数学/AI。准备2030考研' },
      { year: '2026-2030', title: '独立研究者之路', desc: '推进项目，发表论文，开源数据集和工具。目标：成为能做深度研究的独立AI研究者' },
    ],
    projectsTitle: '项目',
    ogcpCardTitle: 'OpenGuitarChordProject',
    ogcpCardDesc: '开源吉他和弦识别项目。996样本物理感知数据集，目标是从音频自动识别和弦并生成六线谱。',
    walkingCardTitle: '走路修仙',
    walkingCardDesc: '将真实步数转化为修仙修为的跨端App。Flutter + FastAPI，21阶境界系统，Android 真机计步验证通过。',
    contactTitle: '联系我',
    contactDesc: '如果你对我的研究或项目感兴趣，欢迎交流：',
    email: 'qinqiao2014@gmail.com',
    github: 'github.com/zaosusu',
  },
  en: {
    heroTitle: 'Zaosusu',
    heroSubtitle: 'Independent AI Researcher · Open Source Practitioner',
    heroDesc: '15 years in business before pivoting to tech. Believing systems that don\'t depend on people are the future.',
    heroCta: 'View Projects',
    aboutTitle: 'About Me',
    aboutIntro: "I'm Zaosusu. Over the past 15 years I've been a director, MCN operator, and e-commerce seller. I wrote 100,000+ words of industry research and was a content supplier for NetEase, Tencent, and Meitu. In 2022, a supply chain collapse taught me: systems that depend on people are always fragile. With time and resources, I decided to build something that doesn't depend on people — learn AI, build open-source.",
    aboutGoal: '2026-2030 Goal: Apply for CS graduate school, publish papers, and become an independent AI researcher capable of deep research.',
    timelineTitle: 'The Transition',
    timeline: [
      { year: '2012–2022', title: 'Business Practice', desc: 'Film, MCN, e-commerce. Built experience, but realized the fragility of people-dependent systems.' },
      { year: '2019–2025', title: 'Financial Independence', desc: 'ToB business boom drove major wealth accumulation. Validated cycle theory in the stock market.' },
      { year: '2026', title: 'AI Research Begins', desc: 'OpenGuitarChordProject founded. Started systematic study of CS, math, and AI. Preparing for grad school in 2030.' },
      { year: '2026–2030', title: 'Path to Independent Researcher', desc: 'Advance projects, publish papers, open-source datasets and tools. Goal: become a deep-research independent AI researcher.' },
    ],
    projectsTitle: 'Projects',
    ogcpCardTitle: 'OpenGuitarChordProject',
    ogcpCardDesc: 'Open-source guitar chord recognition. 996-sample physics-aware dataset. Goal: recognize chords from audio and generate guitar tablature.',
    walkingCardTitle: 'WalkingXiuxian',
    walkingCardDesc: 'Turn real-world steps into cultivation power. Cross-platform Flutter App + FastAPI backend. 21-realm system. Verified on Android devices.',
    contactTitle: 'Contact',
    contactDesc: 'If you are interested in my research or projects, feel free to reach out:',
    email: 'qinqiao2014@gmail.com',
    github: 'github.com/zaosusu',
  },
};

export function Home() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <div className="min-h-screen bg-bg-primary pt-14">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-5">
        <div className="max-w-content w-full text-center animate-fade-in">
          <h1 className="font-inter font-bold text-4xl md:text-6xl text-text-primary tracking-tight mb-4">
            {c.heroTitle}
          </h1>
          <p className="font-noto text-lg md:text-xl text-text-secondary mb-3">
            {c.heroSubtitle}
          </p>
          <p className="font-noto text-sm md:text-base text-text-muted mb-10 max-w-lg mx-auto">
            {c.heroDesc}
          </p>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-custom rounded text-text-primary hover:border-text-secondary hover:text-text-secondary transition-colors duration-200 cursor-pointer"
          >
            <span className="font-noto text-sm">{c.heroCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* About */}
      <section className="bg-bg-secondary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-8">{c.aboutTitle}</h2>
          <div className="font-noto text-base text-text-primary leading-relaxed space-y-6">
            <p>{c.aboutIntro}</p>
            <p className="text-text-secondary">{c.aboutGoal}</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bg-primary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-10">{c.timelineTitle}</h2>
          <div className="relative">
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border-custom" />
            <div className="space-y-10">
              {c.timeline.map((item, i) => (
                <div key={i} className="relative pl-8 md:pl-12">
                  <div className="absolute left-0 md:left-4 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-text-muted hover:bg-text-secondary transition-colors duration-200" />
                  <div>
                    <span className="font-inter font-bold text-base text-text-primary block mb-1">{item.year}</span>
                    <h3 className="font-noto font-bold text-base text-text-primary mb-2">{item.title}</h3>
                    <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-bg-secondary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-10">{c.projectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* OGCP Card */}
            <Link
              to="/projects/ogcp"
              className="group block p-6 border border-border-custom rounded bg-bg-primary hover:border-text-secondary transition-colors duration-200"
            >
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.ogcpCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.ogcpCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* WalkingXiuxian Card */}
            <Link
              to="/projects/walking-xiuxian"
              className="group block p-6 border border-border-custom rounded bg-bg-primary hover:border-text-secondary transition-colors duration-200"
            >
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.walkingCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.walkingCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-bg-primary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-6">{c.contactTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-8">{c.contactDesc}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
              <Mail className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">{c.email}</span>
            </a>
            <a href={`https://${c.github}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
              <Github className="w-4 h-4" />
              <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">{c.github}</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
