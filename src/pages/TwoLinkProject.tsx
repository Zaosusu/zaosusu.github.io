import { ExternalLink, ArrowLeft, Smartphone, Code2, Database, Server, Zap, Globe, Layout, MessageSquare, Mic, Image, Shield, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

const t = {
  zh: {
    back: '返回首页',
    heroTitle: '2link 虚拟角色智能体',
    heroSubtitle: 'AI虚拟角色 · 声音克隆 · 实时通话',
    heroDesc: '面向普通用户的AI虚拟角色伴侣工具。自定义角色、人设记忆、声音克隆、实时语音通话、角色图片生成，支持豆包聊天记录一键迁移。',
    status: '2026 · 产品化落地',
    heroLink: '访问官网',
    heroLinkUrl: 'https://2link.walkingxiuxian.cn',
    featuresBadge: '核心功能',
    featuresTitle: '一个页面完成角色创建、聊天和语音互动',
    featuresDesc: '2link 面向想快速拥有虚拟角色智能体的用户，把复杂的模型调用、角色配置和工具能力集中到一个轻量网页里。',
    featureCards: [
      { title: 'AI角色聊天', desc: '设置角色名字、人设、关系、说话风格和开场白，让角色以稳定口吻与你对话。' },
      { title: '人设记忆与资料库', desc: '导入设定、聊天记录或角色资料，让智能体在长期互动中保持更一致的背景和关系。' },
      { title: '声音克隆', desc: '上传声音样本，为角色生成专属音色，用于朗读回复和更自然的语音体验。' },
      { title: '实时语音通话', desc: '通过网页直接与角色语音对话，适合陪伴、剧情互动、口语练习和沉浸式角色扮演。' },
      { title: '角色图片生成', desc: '根据外貌描述或参考图生成角色形象，让虚拟角色不只停留在文字里。' },
      { title: '本地优先保存', desc: '角色、聊天和素材优先保存在当前浏览器，登录后可使用云备份恢复重要数据。' },
    ],
    workflowBadge: '上手流程',
    workflowTitle: '不用研究 API，拿到授权码就能开始',
    workflowDesc: '适合想直接使用虚拟角色智能体的人，也适合把角色聊天、AI陪伴和语音互动做成服务交付的人。',
    workflowSteps: [
      { step: '1. 打开应用', desc: '进入网页端，不需要安装复杂环境。' },
      { step: '2. 登录账号', desc: '绑定授权码后开启在线模型能力。' },
      { step: '3. 创建角色', desc: '填写人设、外貌、关系和说话风格。' },
      { step: '4. 开始聊天', desc: '文字、朗读、图片和通话按需使用。' },
    ],
    compareBadge: '产品对比',
    compareTitle: 'Release 版更适合普通用户',
    compareDesc: '如果你不想注册模型平台、找 Key、填 Base URL 或处理报错，Release 版会更省心。',
    compareLeft: '自己折腾',
    compareLeftItems: ['注册模型平台并申请 API Key', '配置 Base URL、模型名和额度', '自己处理报错、限流和兼容问题', '图片、语音、通话能力需要分别接入'],
    compareRight: '使用 2link Release',
    compareRightItems: ['填写授权码即可开始', '聊天、图片、语音和通话集中在网页里', '角色配置和本地数据自动保存', '有基础使用、声音克隆和通话教程'],
    migratorBadge: '豆包迁移',
    migratorTitle: '豆包聊天一键迁移',
    migratorDesc: '已有豆包聊天的用户，可以安装浏览器插件，一键把历史聊天和角色上下文同步到 2link，换平台不用从零重建。',
    migratorLink: '查看迁移助手',
    archBadge: '技术架构',
    archTitle: '技术架构',
    archDesc: '本地优先 + 云端分层 + 多端适配。浏览器端承担主要存储与交互，服务端负责模型中转、授权管理和主动消息调度。',
    archLayers: [
      { title: '前端层', desc: 'HTML5 · PWA · IndexedDB · Vanilla JS · 浏览器本地存储优先' },
      { title: '模型中继层', desc: 'Node.js · Coze Bot API · OpenAI-Compatible · 后端relay统一中转 · 不暴露token' },
      { title: '服务端', desc: 'MySQL · 账号授权 · 云备份 · 主动消息调度(outbox) · 豆包迁移接口' },
    ],
    stackTitle: '技术栈',
    stack: [
      { icon: 'code', title: '前端', desc: 'HTML5 · CSS3 · Vanilla JS · PWA · IndexedDB · 浏览器本地存储' },
      { icon: 'server', title: '后端', desc: 'Node.js · Coze Bot API · OpenAI-Compatible Relay · MySQL' },
      { icon: 'smartphone', title: '移动端', desc: 'Flutter · 跨端适配 · 本地通知(计划)' },
    ],
    linksTitle: '相关链接',
    contactTitle: '联系',
    contactDesc: '对产品或技术实现感兴趣？欢迎交流：',
    email: 'qinqiao2014@gmail.com',
    navPrev: '上一个：通用NPC Agent底座',
  },
  en: {
    back: 'Back to Home',
    heroTitle: '2link Virtual Character Agent',
    heroSubtitle: 'AI Character · Voice Clone · Real-time Call',
    heroDesc: 'An AI virtual character companion tool for everyday users. Custom roles, persona memory, voice cloning, real-time voice calls, character image generation, with one-click Doubao chat history migration.',
    status: '2026 · Product Launch',
    heroLink: 'Visit Website',
    heroLinkUrl: 'https://2link.walkingxiuxian.cn',
    featuresBadge: 'Core Features',
    featuresTitle: 'Create, Chat, and Voice-interact in One Page',
    featuresDesc: '2link targets users who want a virtual character agent quickly, bundling complex model calls, role configuration, and tool capabilities into a lightweight web app.',
    featureCards: [
      { title: 'AI Character Chat', desc: 'Set name, persona, relationship, speaking style, and opening line for consistent dialogue.' },
      { title: 'Persona Memory & Database', desc: 'Import settings, chat logs, or character data for long-term consistent background and relationship.' },
      { title: 'Voice Cloning', desc: 'Upload voice samples to generate a unique timbre for reading replies and natural voice experience.' },
      { title: 'Real-time Voice Call', desc: 'Talk directly with the character via web browser, suitable for companionship, story interaction, and immersive roleplay.' },
      { title: 'Character Image Generation', desc: 'Generate character visuals from appearance descriptions or reference images.' },
      { title: 'Local-first Storage', desc: 'Characters, chats, and assets stored locally in browser; cloud backup available after login.' },
    ],
    workflowBadge: 'Getting Started',
    workflowTitle: 'No API Research Needed — Start with a License Code',
    workflowDesc: 'For users who want a virtual character agent directly, and for those who want to deliver role-chat and AI companionship as a service.',
    workflowSteps: [
      { step: '1. Open App', desc: 'Access the web app, no complex setup needed.' },
      { step: '2. Log In', desc: 'Bind license code to unlock online model capabilities.' },
      { step: '3. Create Character', desc: 'Fill in persona, appearance, relationship, and speaking style.' },
      { step: '4. Start Chatting', desc: 'Text, voice, images, and calls as needed.' },
    ],
    compareBadge: 'Comparison',
    compareTitle: 'Release Edition is Better for Regular Users',
    compareDesc: 'If you do not want to register model platforms, find API Keys, fill Base URLs, or handle errors, the Release edition is more convenient.',
    compareLeft: 'DIY Approach',
    compareLeftItems: ['Register model platform and apply for API Key', 'Configure Base URL, model name, and quota', 'Handle errors, rate limits, and compatibility yourself', 'Image, voice, and call capabilities need separate integration'],
    compareRight: 'Use 2link Release',
    compareRightItems: ['Start with just a license code', 'Chat, images, voice, and calls in one web app', 'Auto-save character config and local data', 'Tutorials for basics, voice clone, and calls'],
    migratorBadge: 'Doubao Migration',
    migratorTitle: 'One-click Doubao Chat Migration',
    migratorDesc: 'Users with existing Doubao chats can install a browser extension to sync chat history and character context to 2link — no need to rebuild from scratch when switching platforms.',
    migratorLink: 'View Migration Helper',
    archBadge: 'Architecture',
    archTitle: 'Architecture',
    archDesc: 'Local-first + Cloud layering + Multi-device. Browser handles primary storage and interaction; server handles model relay, licensing, and proactive messaging.',
    archLayers: [
      { title: 'Frontend', desc: 'HTML5 · PWA · IndexedDB · Vanilla JS · Browser local storage priority' },
      { title: 'Model Relay', desc: 'Node.js · Coze Bot API · OpenAI-Compatible · Backend relay · No token exposure' },
      { title: 'Server', desc: 'MySQL · Account & Licensing · Cloud Backup · Proactive Messaging (outbox) · Doubao Migration API' },
    ],
    stackTitle: 'Tech Stack',
    stack: [
      { icon: 'code', title: 'Frontend', desc: 'HTML5 · CSS3 · Vanilla JS · PWA · IndexedDB · Browser Storage' },
      { icon: 'server', title: 'Backend', desc: 'Node.js · Coze Bot API · OpenAI-Compatible Relay · MySQL' },
      { icon: 'smartphone', title: 'Mobile', desc: 'Flutter · Cross-platform · Local Notifications (planned)' },
    ],
    linksTitle: 'Links',
    contactTitle: 'Contact',
    contactDesc: 'Interested in the product or technical implementation? Feel free to reach out:',
    email: 'qinqiao2014@gmail.com',
    navPrev: 'Prev: Universal NPC Agent Base',
  },
};

function StackIcon({ type }: { type: string }) {
  if (type === 'code') return <Code2 className="w-5 h-5" />;
  if (type === 'server') return <Server className="w-5 h-5" />;
  if (type === 'smartphone') return <Smartphone className="w-5 h-5" />;
  return <Database className="w-5 h-5" />;
}

function FeatureIcon({ title }: { title: string }) {
  if (title.includes('聊天') || title.includes('Chat')) return <MessageSquare className="w-5 h-5" />;
  if (title.includes('声音') || title.includes('Voice') || title.includes('通话') || title.includes('Call')) return <Mic className="w-5 h-5" />;
  if (title.includes('图片') || title.includes('Image')) return <Image className="w-5 h-5" />;
  if (title.includes('本地') || title.includes('Storage')) return <Shield className="w-5 h-5" />;
  return <Zap className="w-5 h-5" />;
}

export function TwoLinkProject() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <div className="min-h-screen bg-bg-primary pt-14">
      {/* Back Link */}
      <div className="max-w-content mx-auto px-5 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-noto">{c.back}</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-12 md:py-20 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,139,141,0.10),transparent_38%),linear-gradient(180deg,rgba(244,241,232,0.04),transparent_56%)]" />
        <div className="relative max-w-content mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-rise-in">
              <h1 className="font-inter font-bold text-3xl md:text-5xl text-text-primary tracking-tight mb-3">
                {c.heroTitle}
              </h1>
              <p className="font-inter text-lg text-text-secondary mb-4">{c.heroSubtitle}</p>
              <p className="font-noto text-sm md:text-base text-text-muted mb-6 max-w-lg">
                {c.heroDesc}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 border border-[#0f8b8d]/40 bg-[#0f8b8d]/10 rounded text-xs text-[#0f8b8d]">
                  {c.status}
                </span>
                <a
                  href={c.heroLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#0f8b8d] text-white text-xs font-noto font-medium hover:bg-[#096466] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {c.heroLink}
                </a>
              </div>
            </div>
            <div className="animate-rise-in">
              <img
                src="/projects/2link/2link-product-preview.png"
                alt="2link product preview"
                className="w-full rounded-xl border border-border-custom shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#0f8b8d] mb-4">
            <Zap className="w-5 h-5" />
            <span className="font-noto text-sm">{c.featuresBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.featuresTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-10 max-w-3xl">{c.featuresDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.featureCards.map((card, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#0f8b8d]/40 transition-colors">
                <div className="flex items-center gap-2 text-[#0f8b8d] mb-3">
                  <FeatureIcon title={card.title} />
                  <h3 className="font-noto font-bold text-base">{card.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#6cbcb2] mb-4">
            <Layout className="w-5 h-5" />
            <span className="font-noto text-sm">{c.workflowBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.workflowTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-10 max-w-3xl">{c.workflowDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {c.workflowSteps.map((step, i) => (
              <div key={i} className="p-5 border-l-4 border-[#0f8b8d] bg-bg-secondary rounded-r border-y border-r border-border-custom">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{step.step}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#f4a261] mb-4">
            <Globe className="w-5 h-5" />
            <span className="font-noto text-sm">{c.compareBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.compareTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-10 max-w-3xl">{c.compareDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-border-custom rounded bg-bg-primary">
              <div className="flex items-center gap-2 text-[#f4a261] mb-4">
                <XCircle className="w-5 h-5" />
                <h3 className="font-noto font-bold text-lg">{c.compareLeft}</h3>
              </div>
              <ul className="space-y-3">
                {c.compareLeftItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <XCircle className="w-4 h-4 text-[#f4a261] shrink-0 mt-0.5" />
                    <span className="font-noto">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border border-[#0f8b8d]/30 rounded bg-bg-primary">
              <div className="flex items-center gap-2 text-[#0f8b8d] mb-4">
                <CheckCircle className="w-5 h-5" />
                <h3 className="font-noto font-bold text-lg">{c.compareRight}</h3>
              </div>
              <ul className="space-y-3">
                {c.compareRightItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-[#0f8b8d] shrink-0 mt-0.5" />
                    <span className="font-noto">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Doubao Migrator */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#9bd8cf] mb-4">
            <Zap className="w-5 h-5" />
            <span className="font-noto text-sm">{c.migratorBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.migratorTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-6 max-w-3xl">{c.migratorDesc}</p>
          <a
            href="https://2link.walkingxiuxian.cn/doubao-migrator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#0f8b8d]/40 bg-[#0f8b8d]/10 text-[#0f8b8d] text-sm font-noto font-medium hover:bg-[#0f8b8d]/20 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {c.migratorLink}
          </a>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#6cbcb2] mb-4">
            <Layout className="w-5 h-5" />
            <span className="font-noto text-sm">{c.archBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.archTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-8">{c.archDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.archLayers.map((l, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#0f8b8d]/40 transition-colors">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{l.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.stackTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.stack.map((s, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#0f8b8d]/40 transition-colors">
                <div className="flex items-center gap-2 text-text-primary mb-3">
                  <StackIcon type={s.icon} />
                  <h3 className="font-noto font-bold text-base">{s.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.contactTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-6">{c.contactDesc}</p>
          <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
            <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">{c.email}</span>
          </a>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-bg-secondary border-t border-border-custom py-6 px-5">
        <div className="max-w-content mx-auto flex justify-between items-center">
          <Link
            to="/projects/npc-agent"
            className="inline-flex items-center gap-2 font-noto text-sm text-text-muted hover:text-[#9bd8cf] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{c.navPrev}</span>
          </Link>
          <span />
        </div>
      </section>

      <Footer />
    </div>
  );
}
