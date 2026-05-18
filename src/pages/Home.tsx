import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

const t = {
  zh: {
    heroTitle: '阿早',
    heroSubtitle: '独立AI研究者 · 开源实践者',
    heroDesc: '15年商业历练后转型技术，相信"不依赖人"的系统才是未来。',
    heroCta: '查看项目',
    currentTitle: '现在在做什么',
    currentItems: [
      { label: '商业产品', title: '走路修仙', desc: '跨端计步修仙 App，Android / iOS / 小程序待正式运营，已入围 WAIC FutureTech 复赛。' },
      { label: 'AI研究', title: 'OpenGuitarChordProject', desc: '开源吉他和弦识别项目，推进音频AI、数据集和六线谱生成方向。' },
      { label: '内容工具链', title: '无限学园', desc: 'Godot 4 视觉小说/养成项目，配套 React 编辑器与本地 AIGC 内容资产生产管线。' },
      { label: '商业自动化', title: '小红书蒲公英达人筛选系统', desc: '面向品牌投放的达人采集、筛选、分析与批量邀约工具。' },
    ],
    aboutTitle: '关于我',
    aboutIntro: '我叫阿早（早叔），过去15年做过导演、MCN操盘手、淘宝店主，写过10万多字的行业研报，也曾是网易、腾讯、美图秀秀等公司的KOC、KOL供应商，服务美图至今已经10年。2022年供应链崩盘让我意识到：依赖人的系统永远是脆弱的。有了时间和资源，我决定做一件"不依赖人"的事——学AI，做项目，走独立研究这条路。',
    aboutGoal: '2026-2030年目标：考研CS，发表论文，成为能做深度研究的独立AI研究者。',
    timelineTitle: '转型之路',
    timeline: [
      { year: '2012-2022', title: '商业实践', desc: '影视、MCN、电商。积累认知，但看清「依赖人」的脆弱性' },
      { year: '2019-2025', title: '财务积累', desc: 'ToB业务爆发期带来主要资本积累；股市验证周期理论，做到稳定盈利' },
      { year: '2026', title: 'AI研究启动', desc: 'OpenGuitarChordProject立项。开始系统学习CS/数学/AI。准备2030考研' },
      { year: '2026-2030', title: '独立研究者之路', desc: '推进项目，发表论文，开源数据集和工具。目标：成为能做深度研究的独立AI研究者' },
    ],
    projectsTitle: '项目',
    ogcpCardTitle: 'OpenGuitarChordProject',
    ogcpCardDesc: '开源吉他和弦识别项目。996样本物理感知数据集，目标是从音频自动识别和弦并生成六线谱。',
    walkingCardTitle: '走路修仙',
    walkingCardDesc: '将真实步数转化为修仙修为的跨端App。Flutter + FastAPI，21阶境界系统，Android 真机计步验证通过。',
    xhsCardTitle: '小红书蒲公英达人筛选系统',
    xhsCardDesc: '面向品牌投放的达人采集、筛选、分析与批量邀约工具。FastAPI + Playwright + SQLAlchemy。',
    academyCardTitle: '无限学园',
    academyCardDesc: 'Godot 4 视觉小说/养成项目，配套 React 剧情编辑器与本地 AIGC 驱动的内容资产生产管线。',
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
    currentTitle: 'What I Am Building Now',
    currentItems: [
      { label: 'Commercial Product', title: 'WalkingXiuxian', desc: 'Cross-platform pedometer xianxia app, pending official rollout on Android / iOS / mini program, selected for the WAIC FutureTech semifinal.' },
      { label: 'AI Research', title: 'OpenGuitarChordProject', desc: 'Open-source guitar chord recognition project advancing audio AI, datasets, and tablature generation.' },
      { label: 'Content Toolchain', title: 'Infinite Academy', desc: 'Godot 4 visual novel / simulation project with a React editor and local AIGC content-asset pipeline.' },
      { label: 'Business Automation', title: 'Xiaohongshu KOL Filter', desc: 'Creator collection, filtering, analytics, and batch invitation tool for brand campaigns.' },
    ],
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
    xhsCardTitle: 'Xiaohongshu KOL Filter',
    xhsCardDesc: 'Creator discovery, filtering, analytics, and batch invitation tool for brand campaigns. FastAPI + Playwright + SQLAlchemy.',
    academyCardTitle: 'Infinite Academy',
    academyCardDesc: 'Godot 4 visual novel / simulation prototype with a React story editor and a local AIGC content-asset pipeline.',
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
      <section className="relative min-h-[86vh] flex items-center overflow-hidden px-5">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(67,120,116,0.18),transparent_34%),linear-gradient(180deg,rgba(244,241,232,0.04),transparent_46%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#6cbcb2]/50 to-transparent" />
        <div className="relative max-w-content w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center animate-rise-in">
          <div>
            <div className="inline-flex items-center gap-2 rounded border border-[#6cbcb2]/30 bg-[#6cbcb2]/10 px-3 py-1.5 text-xs text-[#9bd8cf] mb-7">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-noto">{c.heroSubtitle}</span>
            </div>
            <h1 className="font-inter font-bold text-5xl md:text-7xl text-text-primary tracking-tight mb-5">
              {c.heroTitle}
            </h1>
            <p className="font-noto text-base md:text-lg text-text-secondary leading-relaxed mb-9 max-w-2xl">
              {c.heroDesc}
            </p>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-5 py-3 rounded border border-[#6cbcb2]/60 bg-[#6cbcb2]/12 text-text-primary hover:bg-[#6cbcb2]/18 hover:border-[#9bd8cf] transition-colors duration-200 cursor-pointer"
            >
              <span className="font-noto text-sm">{c.heroCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <div className="rounded border border-border-custom bg-bg-secondary/80 p-5 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="font-noto font-bold text-lg text-text-primary">{c.currentTitle}</h2>
                <span className="h-px flex-1 bg-gradient-to-r from-[#6cbcb2]/60 to-transparent" />
              </div>
              <div className="space-y-3">
                {c.currentItems.map((item) => (
                  <div key={item.label} className="rounded border border-border-custom bg-bg-primary/70 p-4 hover:border-[#6cbcb2]/50 transition-colors">
                    <span className="font-noto text-xs text-[#9bd8cf]">{item.label}</span>
                    <h3 className="font-noto text-sm font-bold text-text-primary mb-1">{item.title}</h3>
                    <p className="font-noto text-xs leading-relaxed text-text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-[0.35fr_0.65fr] gap-8 md:gap-14">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary">{c.aboutTitle}</h2>
          <div className="font-noto text-base text-text-primary leading-relaxed space-y-6 border-l border-border-custom pl-6">
            <p>{c.aboutIntro}</p>
            <p className="text-text-secondary">{c.aboutGoal}</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-10">{c.timelineTitle}</h2>
          <div className="relative rounded border border-border-custom bg-bg-secondary/70 p-5 md:p-8">
            <div className="absolute left-5 md:left-9 top-8 bottom-8 w-px bg-gradient-to-b from-[#6cbcb2] via-border-custom to-transparent" />
            <div className="space-y-8">
              {c.timeline.map((item, i) => (
                <div key={i} className="relative pl-9 md:pl-14">
                  <div className="absolute left-0 md:left-1 top-1.5 w-3 h-3 rounded-full bg-[#6cbcb2] shadow-[0_0_18px_rgba(108,188,178,0.45)]" />
                  <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-7">
                    <span className="font-inter font-bold text-sm text-[#9bd8cf] block">{item.year}</span>
                    <div>
                    <h3 className="font-noto font-bold text-base text-text-primary mb-2">{item.title}</h3>
                    <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-10">{c.projectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* OGCP Card */}
            <Link
              to="/projects/ogcp"
              className="group block min-h-[220px] p-6 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
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
              className="group block min-h-[220px] p-6 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
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

            {/* Xiaohongshu Card */}
            <Link
              to="/projects/xiaohongshu"
              className="group block min-h-[220px] p-6 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.xhsCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.xhsCardDesc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                <span className="font-noto">查看详情</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Infinite Academy Card */}
            <Link
              to="/projects/infinite-academy"
              className="group block min-h-[220px] p-6 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2] hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2 group-hover:text-text-secondary transition-colors">
                {c.academyCardTitle}
              </h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
                {c.academyCardDesc}
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
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.contactTitle}</h2>
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
