import {
  ArrowLeft,
  BarChart3,
  Bot,
  Database,
  ExternalLink,
  Filter,
  Mail,
  Network,
  Server,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

const t = {
  zh: {
    back: '返回首页',
    title: '小红书蒲公英达人筛选系统',
    subtitle: 'Xiaohongshu KOL Filter',
    desc: '面向品牌投放的达人采集、筛选、分析与批量邀约工具。后端基于 FastAPI，结合蒲公英 API 与小红书浏览器自动化，沉淀可复用的达人数据资产。',
    status: '内部工具 · 已完成模块化重构与邀约流程',
    overviewTitle: '项目定位',
    overview:
      '这个项目解决的是投放前期“找人、验数、筛选、邀约”的重复劳动。系统把蒲公英商业数据、小红书真实笔记数据、达人主页信息和本地筛选规则合并到一个工作台里，减少人工复制、表格维护和重复校验。',
    workflowTitle: '工作流',
    workflow: [
      { title: '采集', desc: '关键词搜索或从种子达人出发做扩散式采集，自动拉取相似达人、笔记列表和达人详情。' },
      { title: '校验', desc: '用小红书浏览器自动化补充真实笔记、点赞、主页简介、邮箱和 IP 属地等信息。' },
      { title: '筛选', desc: '按粉丝数、互动率、报价、类目、关键词和自定义规则过滤，并支持保存筛选规则。' },
      { title: '邀约', desc: '把候选达人加入邀约队列，自动填写合作信息、联系方式、产品信息和发布日期范围。' },
    ],
    modulesTitle: '核心模块',
    modules: [
      { icon: 'network', title: '扩散式采集', desc: '从种子达人开始获取相似推荐，按队列持续扩展；已存在达人会更新数据但不重复计数。' },
      { icon: 'bot', title: '浏览器自动化', desc: 'Playwright 驱动登录态浏览器，处理扫码登录、主页采集、真实笔记抓取和表单自动填写。' },
      { icon: 'filter', title: '筛选规则', desc: '支持互动中位数、均赞、粉丝、报价、类目、标签、关键词等多维筛选与规则复用。' },
      { icon: 'bar', title: '统计与导出', desc: '提供类目、粉丝、互动率、报价分布统计，筛选结果可导出 JSON 或 CSV。' },
    ],
    stackTitle: '技术栈',
    stack: [
      { icon: 'server', title: 'FastAPI 服务端', desc: 'FastAPI · APIRouter · 后台任务 · Jinja2 页面路由' },
      { icon: 'database', title: '数据层', desc: 'SQLAlchemy · aiosqlite · SQLite · 数据新鲜度维护' },
      { icon: 'bot', title: '采集层', desc: 'Playwright · 蒲公英 HTTP API · 小红书登录态浏览器' },
    ],
    detailsTitle: '工程细节',
    details: [
      '服务聚合层位于 services/crawler_service.py，统一封装蒲公英 API 与小红书浏览器的数据来源。',
      'API 按 kols、crawler、filter_rules、statistics、invitations 拆分路由，页面与 JSON API 分离。',
      '邀约浏览器封装批量表单填写、日期范围、联系方式、提交状态和失败重试。',
      '数据新鲜度逻辑会重新验证已存在达人，剔除不再达标的数据，避免旧数据污染投放池。',
    ],
    contactTitle: '联系',
    contactDesc: '对投放自动化、数据采集或内部工具工程化感兴趣，欢迎交流：',
    email: 'qinqiao2014@gmail.com',
  },
  en: {
    back: 'Back to Home',
    title: 'Xiaohongshu KOL Filter',
    subtitle: 'PGY Creator Discovery System',
    desc: 'A brand-campaign tool for creator collection, filtering, analytics, and batch invitation. Built with FastAPI, combining PGY APIs with logged-in Xiaohongshu browser automation.',
    status: 'Internal tool · Modular crawler and invitation workflow implemented',
    overviewTitle: 'Positioning',
    overview:
      'The project compresses the repetitive pre-campaign workflow: finding creators, validating engagement, filtering candidates, and sending invitations. It merges commercial PGY data, real Xiaohongshu post data, profile data, and local rules into one workbench.',
    workflowTitle: 'Workflow',
    workflow: [
      { title: 'Collect', desc: 'Search by keyword or expand from seed creators with similar-creator recommendations, notes, and profile details.' },
      { title: 'Validate', desc: 'Use logged-in browser automation to collect real notes, likes, profile text, email, and IP location.' },
      { title: 'Filter', desc: 'Filter by followers, engagement, price, category, keywords, and reusable rule presets.' },
      { title: 'Invite', desc: 'Add candidates to an invitation queue and auto-fill campaign forms, contact details, product info, and date ranges.' },
    ],
    modulesTitle: 'Core Modules',
    modules: [
      { icon: 'network', title: 'Spread Crawling', desc: 'Expands from seed creators through recommendations; existing creators are refreshed without double-counting.' },
      { icon: 'bot', title: 'Browser Automation', desc: 'Playwright handles login state, QR login waiting, profile collection, real note scraping, and form filling.' },
      { icon: 'filter', title: 'Rule Engine', desc: 'Multi-dimensional filtering by median engagement, average likes, followers, price, category, tags, and keywords.' },
      { icon: 'bar', title: 'Analytics & Export', desc: 'Category, follower, engagement, and price distributions with filtered JSON/CSV export.' },
    ],
    stackTitle: 'Tech Stack',
    stack: [
      { icon: 'server', title: 'FastAPI Backend', desc: 'FastAPI · APIRouter · background tasks · Jinja2 pages' },
      { icon: 'database', title: 'Data Layer', desc: 'SQLAlchemy · aiosqlite · SQLite · freshness checks' },
      { icon: 'bot', title: 'Crawler Layer', desc: 'Playwright · PGY HTTP API · logged-in Xiaohongshu browser' },
    ],
    detailsTitle: 'Engineering Notes',
    details: [
      'services/crawler_service.py aggregates PGY API data and Xiaohongshu browser data behind one service layer.',
      'Routes are split by kols, crawler, filter_rules, statistics, and invitations, keeping pages and JSON APIs separate.',
      'The invitation browser encapsulates batch form filling, date ranges, contact fields, submission status, and retries.',
      'Freshness checks revalidate existing creators and remove stale candidates that no longer meet thresholds.',
    ],
    contactTitle: 'Contact',
    contactDesc: 'Interested in campaign automation, data collection, or internal tooling? Reach out:',
    email: 'qinqiao2014@gmail.com',
  },
};

function FeatureIcon({ type }: { type: string }) {
  if (type === 'network') return <Network className="w-5 h-5" />;
  if (type === 'bot') return <Bot className="w-5 h-5" />;
  if (type === 'filter') return <Filter className="w-5 h-5" />;
  if (type === 'bar') return <BarChart3 className="w-5 h-5" />;
  if (type === 'server') return <Server className="w-5 h-5" />;
  return <Database className="w-5 h-5" />;
}

export function XiaohongshuProject() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <div className="min-h-screen bg-bg-primary pt-14">
      <div className="max-w-content mx-auto px-5 pt-6">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text-primary transition-colors duration-200">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-noto">{c.back}</span>
        </Link>
      </div>

      <section className="relative py-12 md:py-24 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,188,178,0.14),transparent_38%),linear-gradient(180deg,rgba(244,241,232,0.04),transparent_56%)]" />
        <div className="relative max-w-content mx-auto animate-rise-in">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="font-inter text-sm text-text-muted mb-3">{c.subtitle}</p>
              <h1 className="font-noto font-bold text-4xl md:text-6xl text-text-primary tracking-tight mb-5">{c.title}</h1>
              <p className="font-noto text-sm md:text-base text-text-secondary leading-relaxed mb-6">{c.desc}</p>
              <span className="inline-block px-4 py-1.5 border border-[#6cbcb2]/40 bg-[#6cbcb2]/10 rounded text-xs text-[#9bd8cf]">{c.status}</span>
            </div>
            <div className="border border-border-custom rounded bg-bg-secondary p-5">
              <div className="grid grid-cols-2 gap-3">
                {['PGY API', 'XHS Browser', 'FastAPI', 'SQLite'].map((item) => (
                  <div key={item} className="h-24 rounded bg-bg-primary border border-border-custom flex items-center justify-center">
                    <span className="font-inter text-xs text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.overviewTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed rounded border border-border-custom bg-bg-primary/70 p-5 md:p-8">{c.overview}</p>
        </div>
      </section>

      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.workflowTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {c.workflow.map((item, i) => (
              <div key={item.title} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors">
                <span className="font-inter text-xs text-text-muted">0{i + 1}</span>
                <h3 className="font-noto font-bold text-base text-text-primary my-2">{item.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.modulesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.modules.map((m) => (
              <div key={m.title} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2]/60 transition-colors">
                <div className="flex items-center gap-2 text-text-primary mb-3">
                  <FeatureIcon type={m.icon} />
                  <h3 className="font-noto font-bold text-base">{m.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.stackTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.stack.map((s) => (
              <div key={s.title} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors">
                <div className="flex items-center gap-2 text-text-primary mb-3">
                  <FeatureIcon type={s.icon} />
                  <h3 className="font-noto font-bold text-base">{s.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.detailsTitle}</h2>
          <ul className="space-y-3">
            {c.details.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span className="font-noto text-sm text-text-primary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.contactTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-6">{c.contactDesc}</p>
          <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
            <Mail className="w-4 h-4" />
            <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">{c.email}</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
