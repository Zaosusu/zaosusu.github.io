import { ExternalLink, ArrowLeft, ArrowRight, Trophy, Code2, Database, Server, Smartphone, GitBranch, Box, Activity, Zap, Globe, Layout, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { ImageLightbox } from '../components/ImageLightbox';
import { useState } from 'react';

const t = {
  zh: {
    back: '返回首页',
    heroTitle: '逃鸭！南京！',
    heroSubtitle: 'Duck Escape: Nanjing',
    heroDesc: '抖音AI创变者大赛一等奖作品。纯前端文字冒险游戏，基于自研 YaNanjing Framework 构建，JSON驱动剧情流程，Express提供内容管理后台。',
    status: '2026 · 抖音AI创变者大赛 · 南京城市交流赛一等奖',
    heroLink: '访问游戏',
    awardsBadge: '赛事与认可',
    awardsTitle: '赛事与认可',
    hackathonBadge: '2026 · 城市交流赛一等奖',
    hackathonTitle: '抖音AI创变者大赛 · 南京站 · 2026',
    hackathonDesc: '字节跳动官方举办的AI创意大赛，在南京城市交流赛中，从众多参赛项目中脱颖而出，斩获一等奖。',
    hackathonLink: 'https://aiia.douyin.com/',
    viewLink: '查看赛事',
    archTitle: '技术架构',
    archDesc: '三层架构：纯前端表现层 + IIFE模块化核心引擎 + JSON配置驱动层 + Express管理后台。零框架依赖，所有逻辑手写实现。',
    archLayers: [
      { title: '前端表现层', desc: 'HTML5 · CSS3 · Vanilla JS (ES6+) · 无框架 · 像素风UI（ZCOOL KuaiLe + Press Start 2P）· 移动端9:16比例锁定' },
      { title: 'YaNanjing Framework', desc: 'IIFE模块化核心引擎（core.js）。封装数值、存档、标志、API和事件子系统，通过 Ya.stats / Ya.save / Ya.flags 等全局API暴露给游戏逻辑层。' },
      { title: 'Express管理后台', desc: 'Node.js + Express 4。提供静态文件服务、JSON剧情模块读写API、multer文件上传、basic-auth管理员认证。' },
    ],
    modulesTitle: '核心模块',
    modules: [
      { icon: 'activity', title: '数值系统 (Ya.stats)', desc: '四维度数值模型：体力(stamina)、香气(scent)、警觉(alertness)、魅力(charm)。支持min/max边界约束、增量修改(delta)、条件检查({stat, op, value})和localStorage持久化。' },
      { icon: 'git-branch', title: '标志系统 (Ya.flags)', desc: '剧情标志管理，set/unset/has/hasAll/hasAny/list/clear全套操作。标志持久化到localStorage，驱动分支剧情和结局判定。' },
      { icon: 'database', title: '存档系统 (Ya.save)', desc: '基于localStorage的存档槽设计。save/load/delete/list四操作，每个存档记录游戏ID、玩家数值、剧情标志和时间戳。exportAll/importAll支持完整存档数据的导出与迁移。' },
      { icon: 'zap', title: '事件系统 (Ya.events)', desc: '内部发布订阅模式（_emit/_on）。数值变化(statChange)、剧情推进等关键节点通过事件解耦，模块间零直接依赖。' },
      { icon: 'globe', title: 'API 封装 (Ya.api)', desc: '封装fetch，统一处理GET/POST/upload。getGames支持后端降级：先尝试/api/games，失败时回退到本地硬编码列表。所有请求带credentials和no-store缓存策略。' },
      { icon: 'layout', title: 'UI 与路由 (Ya.ui / Ya.router)', desc: 'UI: renderStatBar渲染四维度数值条、alert/confirm自定义弹窗替代原生对话框。Router: go()页面跳转、back()返回、getGameId()从URL提取游戏ID。' },
    ],
    backendTitle: '后端设计',
    backendDesc: 'Express提供轻量但完整的内容管理接口，支持剧情模块的读写、版本控制和文件上传。',
    backendItems: [
      { title: '乐观锁版本控制', desc: '剧情数据采用文件mtime作为版本号。POST /api/story时对比客户端X-Story-Version与服务器版本，冲突返回409，避免多人同时编辑覆盖。' },
      { title: '模块化JSON存储', desc: '剧情数据拆分为ducks.json（角色）、nodes.json（节点）、endings.json（结局）、config.json（数值配置）。读时合并，写时拆分，降低单文件冲突概率。' },
      { title: '路径安全校验', desc: 'safePath函数对相对路径做normalize和segment过滤，拒绝包含".."的路径段，防止目录遍历攻击。' },
      { title: '管理员认证', desc: 'express-basic-auth保护写操作（POST /api/story、/api/upload）。读取接口公开，写接口需HTTP Basic认证。' },
    ],
    storyTitle: '故事配置系统',
    storyDesc: '剧情完全由JSON配置驱动，无需修改代码即可调整角色、节点、结局和数值规则。',
    storyNote: '剧情故事开发系统基于「无限学院」项目重构。',
    storyItems: [
      { title: 'ducks.json — 角色配置', desc: '定义5种鸭子角色（初始鸭/学霸鸭/打工鸭/游客鸭/本地鸭），含名称、描述、立绘、灵瑞守护兽、能力说明、初始数值和初见对话数组。' },
      { title: 'nodes.json — 剧情节点', desc: '55个节点构成的剧情网络。每个节点定义文本、选项、条件分支、数值修改器和下一节点ID。支持条件判定（requires：{stat, op, value}）驱动分支。' },
      { title: 'endings.json — 结局配置', desc: '6种结局定义：烤鸭/盐水鸭/鸭血粉丝汤（死亡结局）+ 公务员/玄武湖收编/活着逃出（生存结局）。每个结局包含标题、类型、文本、图片和灵瑞告别语。' },
      { title: 'config.json — 规则引擎', desc: 'statsConfig定义四维度数值的icon/default/min/max。endingRules定义结局触发条件，支持多条件组合（AND逻辑），如：stamina<=0 触发烤鸭结局。' },
      { title: 'manifest.json — 游戏清单', desc: '游戏元数据：id、名称、版本、作者、入口文件、图标、描述、标签和关联数值key列表。被/api/games接口读取，用于游戏列表展示。' },
      { title: '旧版兼容层', desc: 'loadStoryModules优先读取模块化JSON；若模块缺失，自动降级到旧版story.json。saveStoryModules始终写入模块化格式，完成平滑迁移。' },
    ],
    visualTitle: '视觉设计',
    visualDesc: '纯CSS实现，无UI框架。大量采用队友提供的美术资源，结合像素风设计系统和响应式布局。',
    visualItems: [
      { title: '美术资源集成', desc: '大量使用队友提供的立绘、背景、UI素材和角色卡片。通过CSS filter: drop-shadow为立绘添加动态阴影，background-size: cover实现全屏背景适配，保持美术资源原始风格的同时增强视觉层次。' },
      { title: '像素风设计系统', desc: 'Google Fonts引入ZCOOL KuaiLe和Press Start 2P。木牌按钮使用inset/outset box-shadow模拟3D像素边框，active状态translate(2px, 2px)模拟按下。成就系统采用星露谷风格像素UI，radial-gradient圆点背景 + 2列CSS Grid。' },
      { title: '移动端适配', desc: 'viewport锁定user-scalable=no，touch-action: manipulation消除300ms延迟。游戏容器max-width: calc(100vh * 9 / 16)，强制竖屏9:16比例。' },
      { title: '小游戏嵌入', desc: '三个小游戏（过马路/跳船/唱歌）作为独立HTML页面放在minigames/目录下，通过iframe或页面跳转嵌入主游戏。每个小游戏独立维护JS/CSS/Assets。' },
    ],
    stackTitle: '技术栈',
    stack: [
      { icon: 'code', title: '前端', desc: 'HTML5 · CSS3 · Vanilla JavaScript (ES6+) · 零框架 · Google Fonts · localStorage' },
      { icon: 'server', title: '后端', desc: 'Node.js · Express 4 · multer · express-basic-auth · 静态文件服务' },
      { icon: 'smartphone', title: '适配', desc: 'Viewport锁 · touch-action · 9:16竖屏 · backdrop-filter blur' },
    ],
    linksTitle: '相关链接',
    experience: '游戏官网',
    cardTitle: '逃鸭！南京！',
    cardDesc: '在南京，做一只不入味的鸭子。',
    teamBadge: '项目团队',
    teamTitle: '项目团队',
    teamDesc: '5人创意团队，分工覆盖技术开发、剧情策划与美术设计。',
    teamMembers: [
      { name: '袁涛', role: '' },
      { name: '江婷芳', role: '' },
      { name: '王晓萱', role: '' },
      { name: '王怡南', role: '' },
      { name: '阿早', role: '技术' },
    ],
    contactTitle: '联系',
    contactDesc: '对技术实现感兴趣？欢迎交流：',
    email: 'qinqiao2014@gmail.com',
    navPrev: '← 上一个：无限学园',
    navNext: '下一个：通用NPC Agent底座 →',
    galleryTitle: '配套编辑器',
    galleryDesc: 'YaNanjing Framework 配套的可视化剧情编辑器，覆盖节点编辑、角色管理、结局配置、素材管理和数据分析全链路。',
    gallery: [
      { src: '/projects/duck-escape/editor-node-detail.png', alt: '剧情节点编辑', title: '剧情节点编辑', desc: '配置节点背景图、鸭子表情动画、对话文本和选项跳转逻辑。', portrait: false },
      { src: '/projects/duck-escape/editor-node-dialogue.png', alt: '对话与跳转配置', title: '对话与跳转配置', desc: '逐行编写剧情对白，设置自动跳转节点和背景音乐。', portrait: false },
      { src: '/projects/duck-escape/editor-character.png', alt: '角色管理', title: '角色管理', desc: '定义鸭子角色的头像、卡片图、描述和四维度初始属性。', portrait: false },
      { src: '/projects/duck-escape/editor-ending.png', alt: '结局配置', title: '结局配置', desc: '配置结局ID、类型、展示图片和结局文本，支持好坏结局分类。', portrait: false },
      { src: '/projects/duck-escape/editor-assets-image.png', alt: '图片素材管理', title: '图片素材管理', desc: '统一管理游戏背景图、角色立绘等美术资源的拖拽上传与路径引用。', portrait: false },
      { src: '/projects/duck-escape/editor-assets-audio.png', alt: '音频素材管理', title: '音频素材管理', desc: 'BGM 和音效的上传、列表管理与在线试听。', portrait: false },
      { src: '/projects/duck-escape/editor-config.png', alt: '属性配置', title: '属性配置', desc: '自定义游戏数值维度（体力/香气/警觉/魅力），设置图标、默认值和边界。', portrait: true },
      { src: '/projects/duck-escape/editor-analytics.png', alt: '运营数据后台', title: '运营数据后台', desc: '可视化查看总用户、总开局、达成结局数等核心数据，追踪用户游玩路径。', portrait: false },
    ],
  },
  en: {
    back: 'Back to Home',
    heroTitle: '逃鸭！南京！',
    heroSubtitle: 'Duck Escape: Nanjing',
    heroDesc: 'First prize winner of the Douyin AI Innovator Competition. Pure frontend text adventure built on the self-developed YaNanjing Framework, with JSON-driven story flow and an Express content management backend.',
    status: '2026 · Douyin AI Innovator Competition · Nanjing City Exchange First Prize',
    heroLink: 'Play the Game',
    awardsBadge: 'Awards & Recognition',
    awardsTitle: 'Awards & Recognition',
    hackathonBadge: '2026 · City Exchange First Prize',
    hackathonTitle: 'Douyin AI Innovator Competition · Nanjing · 2026',
    hackathonDesc: 'An AI creativity competition hosted by ByteDance. Won first prize in the Nanjing city exchange, standing out from numerous entries.',
    hackathonLink: 'https://aiia.douyin.com/',
    viewLink: 'View Competition',
    archTitle: 'Architecture',
    archDesc: 'Three-layer architecture: pure frontend presentation + IIFE modular core engine + JSON config-driven layer + Express management backend. Zero framework dependencies; all logic hand-written.',
    archLayers: [
      { title: 'Frontend Layer', desc: 'HTML5 · CSS3 · Vanilla JS (ES6+) · Zero frameworks · Pixel-style UI (ZCOOL KuaiLe + Press Start 2P) · Mobile 9:16 aspect ratio lock' },
      { title: 'YaNanjing Framework', desc: 'IIFE modular core engine (core.js). Encapsulates stats, save, flags, API, and event subsystems. Exposed via global APIs like Ya.stats / Ya.save / Ya.flags to the game logic layer.' },
      { title: 'Express Backend', desc: 'Node.js + Express 4. Static file serving, JSON story module read/write API, multer file upload, and basic-auth admin protection.' },
    ],
    modulesTitle: 'Core Modules',
    modules: [
      { icon: 'activity', title: 'Stats System (Ya.stats)', desc: 'Four-dimension stat model: stamina, scent, alertness, charm. Supports min/max boundary constraints, delta modification, condition checking ({stat, op, value}), and localStorage persistence.' },
      { icon: 'git-branch', title: 'Flags System (Ya.flags)', desc: 'Story flag management with full set/unset/has/hasAll/hasAny/list/clear operations. Flags persist to localStorage to drive branching narratives and ending determination.' },
      { icon: 'database', title: 'Save System (Ya.save)', desc: 'localStorage-based save slot design. save/load/delete/list operations. Each save records game ID, player stats, story flags, and timestamp. exportAll/importAll supports full save data export and migration.' },
      { icon: 'zap', title: 'Event System (Ya.events)', desc: 'Internal pub/sub pattern (_emit/_on). Key milestones like stat changes and story progression are decoupled via events, zero direct dependencies between modules.' },
      { icon: 'globe', title: 'API Client (Ya.api)', desc: 'Wrapped fetch with unified GET/POST/upload handling. getGames supports backend fallback: tries /api/games first, falls back to local hardcoded list. All requests carry credentials and no-store cache policy.' },
      { icon: 'layout', title: 'UI & Router (Ya.ui / Ya.router)', desc: 'UI: renderStatBar renders four-dimension stat bars, alert/confirm custom modals replace native dialogs. Router: go() page navigation, back() history back, getGameId() extracts game ID from URL.' },
    ],
    backendTitle: 'Backend Design',
    backendDesc: 'Express provides a lightweight but complete content management interface supporting story module read/write, versioning, and file upload.',
    backendItems: [
      { title: 'Optimistic Locking', desc: 'Story data uses file mtime as version number. POST /api/story compares client X-Story-Version with server version; on conflict returns 409 to prevent simultaneous edit overwrites.' },
      { title: 'Modular JSON Storage', desc: 'Story data split into ducks.json (characters), nodes.json (nodes), endings.json (endings), config.json (stats config). Read merges, write splits — reducing single-file collision probability.' },
      { title: 'Path Security', desc: 'safePath function normalizes relative paths and filters segments, rejecting any containing ".." to prevent directory traversal attacks.' },
      { title: 'Admin Authentication', desc: 'express-basic-auth protects write operations (POST /api/story, /api/upload). Read endpoints are public; write requires HTTP Basic auth.' },
    ],
    storyTitle: 'Story Config System',
    storyDesc: 'The entire story is driven by JSON configuration — no code changes needed to adjust characters, nodes, endings, or stat rules.',
    storyNote: 'Story development system rebuilt based on the Infinite Academy project.',
    storyItems: [
      { title: 'ducks.json — Character Config', desc: 'Defines 5 duck roles (default, scholar, workhorse, tourist, local), each with name, description, portraits, guardian spirit, ability, initial stats, and first-meet dialogue array.' },
      { title: 'nodes.json — Story Nodes', desc: '55-node story network. Each node defines text, choices, conditional branches, stat modifiers, and next node ID. Supports condition evaluation (requires: {stat, op, value}) to drive branches.' },
      { title: 'endings.json — Ending Config', desc: '6 ending definitions: roast duck / salted duck / duck-blood vermicelli soup (death endings) + civil servant / Xuanwu Lake recruitment / alive escape (survival endings). Each includes title, type, text, image, and spirit farewell.' },
      { title: 'config.json — Rule Engine', desc: 'statsConfig defines four-dimension stat icons, defaults, min, max. endingRules define ending triggers with multi-condition AND logic, e.g. stamina<=0 triggers roast duck ending.' },
      { title: 'manifest.json — Game Manifest', desc: 'Game metadata: id, name, version, author, entry file, icon, description, tags, and associated stat key list. Read by /api/games for game list display.' },
      { title: 'Legacy Compatibility', desc: 'loadStoryModules prefers modular JSON; if modules are missing, auto-falls back to legacy story.json. saveStoryModules always writes modular format, completing smooth migration.' },
    ],
    visualTitle: 'Visual Design',
    visualDesc: 'Pure CSS, zero UI frameworks. Heavy use of team-provided art assets combined with a pixel-art design system and responsive layout.',
    visualItems: [
      { title: 'Art Asset Integration', desc: 'Extensive use of team-provided character portraits, backgrounds, UI elements, and role cards. CSS filter: drop-shadow adds dynamic shadows to portraits; background-size: cover enables fullscreen background adaptation while preserving original art style and enhancing visual depth.' },
      { title: 'Pixel Art Design System', desc: 'Google Fonts imports ZCOOL KuaiLe and Press Start 2P. Wooden plaque buttons use inset/outset box-shadow to simulate 3D pixel borders; active state uses translate(2px, 2px) to simulate press-down. Achievement screen uses Stardew Valley-style pixel UI with radial-gradient dot background + two-column CSS Grid.' },
      { title: 'Mobile Adaptation', desc: 'Viewport locks user-scalable=no; touch-action: manipulation eliminates 300ms delay. Game container max-width: calc(100vh * 9 / 16) enforces portrait 9:16 ratio.' },
      { title: 'Mini-game Embedding', desc: 'Three mini-games (cross-road, boat-jump, singing) are independent HTML pages in minigames/ directory, embedded via iframe or page navigation. Each mini-game maintains its own JS/CSS/Assets.' },
    ],
    stackTitle: 'Tech Stack',
    stack: [
      { icon: 'code', title: 'Frontend', desc: 'HTML5 · CSS3 · Vanilla JavaScript (ES6+) · Zero frameworks · Google Fonts · localStorage' },
      { icon: 'server', title: 'Backend', desc: 'Node.js · Express 4 · multer · express-basic-auth · Static file serving' },
      { icon: 'smartphone', title: 'Mobile', desc: 'Viewport lock · touch-action · 9:16 portrait · backdrop-filter blur' },
    ],
    linksTitle: 'Links',
    experience: 'Game Website',
    cardTitle: 'Duck Escape: Nanjing',
    cardDesc: 'In Nanjing, be a duck that refuses to become delicious.',
    teamBadge: 'Team',
    teamTitle: 'Team',
    teamDesc: '5-person creative team covering tech development, story planning, and art design.',
    teamMembers: [
      { name: 'Yuan Tao', role: '' },
      { name: 'Jiang Tingfang', role: '' },
      { name: 'Wang Xiaoxuan', role: '' },
      { name: 'Wang Yinan', role: '' },
      { name: 'Zaosusu', role: 'Tech Lead' },
    ],
    contactTitle: 'Contact',
    contactDesc: 'Interested in the technical implementation? Feel free to reach out:',
    email: 'qinqiao2014@gmail.com',
    navPrev: '← Prev: Infinite Academy',
    navNext: 'Next: Universal NPC Agent Base →',
    galleryTitle: 'Companion Editor',
    galleryDesc: 'The visual story editor bundled with YaNanjing Framework, covering node editing, character management, ending config, asset management, and analytics.',
    gallery: [
      { src: '/projects/duck-escape/editor-node-detail.png', alt: 'Story node editing', title: 'Story Node Editor', desc: 'Configure node background, duck expression animation, dialogue text, and choice jump logic.', portrait: false },
      { src: '/projects/duck-escape/editor-node-dialogue.png', alt: 'Dialogue and jump config', title: 'Dialogue & Jump Config', desc: 'Write line-by-line dialogue, set auto-jump nodes and background music.', portrait: false },
      { src: '/projects/duck-escape/editor-character.png', alt: 'Character management', title: 'Character Management', desc: 'Define duck avatars, card images, descriptions, and four-dimension initial stats.', portrait: false },
      { src: '/projects/duck-escape/editor-ending.png', alt: 'Ending configuration', title: 'Ending Config', desc: 'Configure ending ID, type, display image, and ending text with good/bad classification.', portrait: false },
      { src: '/projects/duck-escape/editor-assets-image.png', alt: 'Image asset management', title: 'Image Asset Management', desc: 'Unified drag-and-drop upload and path reference for backgrounds and character portraits.', portrait: false },
      { src: '/projects/duck-escape/editor-assets-audio.png', alt: 'Audio asset management', title: 'Audio Asset Management', desc: 'BGM and sound effect upload, list management, and online preview.', portrait: false },
      { src: '/projects/duck-escape/editor-config.png', alt: 'Stat configuration', title: 'Stat Configuration', desc: 'Customize game stat dimensions (stamina/scent/alertness/charm), icons, defaults, and bounds.', portrait: true },
      { src: '/projects/duck-escape/editor-analytics.png', alt: 'Analytics dashboard', title: 'Analytics Dashboard', desc: 'Visualize total users, total starts, endings reached, and track player journey paths.', portrait: false },
    ],
  },
};

function ModIcon({ type }: { type: string }) {
  if (type === 'activity') return <Activity className="w-5 h-5" />;
  if (type === 'git-branch') return <GitBranch className="w-5 h-5" />;
  if (type === 'database') return <Database className="w-5 h-5" />;
  if (type === 'zap') return <Zap className="w-5 h-5" />;
  if (type === 'globe') return <Globe className="w-5 h-5" />;
  if (type === 'layout') return <Layout className="w-5 h-5" />;
  return <Box className="w-5 h-5" />;
}

function StackIcon({ type }: { type: string }) {
  if (type === 'code') return <Code2 className="w-5 h-5" />;
  if (type === 'server') return <Server className="w-5 h-5" />;
  return <Smartphone className="w-5 h-5" />;
}

export function DuckEscapeProject() {
  const { lang } = useLang();
  const c = t[lang];
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const galleryImages = c.gallery.map((item) => ({ src: item.src, alt: item.alt, title: item.title }));
  const isLightboxOpen = lightboxIndex >= 0;

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
      <section className="relative py-12 md:py-24 px-5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(108,188,178,0.14),transparent_38%),linear-gradient(180deg,rgba(244,241,232,0.04),transparent_56%)]" />
        <div className="relative max-w-content mx-auto text-center animate-rise-in">
          <h1 className="font-inter font-bold text-4xl md:text-6xl text-text-primary tracking-tight mb-3">
            {c.heroTitle}
          </h1>
          <p className="font-inter text-lg text-text-secondary mb-4">{c.heroSubtitle}</p>
          <p className="font-noto text-sm md:text-base text-text-muted mb-6 max-w-lg mx-auto">
            {c.heroDesc}
          </p>
          <div className="flex items-center justify-center mb-5">
            <a
              href="https://ya.walkingxiuxian.cn/games/ya-nanjing-text/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#6cbcb2]/70 bg-[#6cbcb2]/14 rounded text-text-primary hover:border-[#9bd8cf] hover:bg-[#6cbcb2]/20 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-noto text-sm">{c.heroLink}</span>
            </a>
          </div>
          <span className="inline-block px-4 py-1.5 border border-[#f4a261]/40 bg-[#f4a261]/10 rounded text-xs text-[#f4a261]">
            {c.status}
          </span>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#f4a261] mb-4">
            <Trophy className="w-5 h-5" />
            <span className="font-noto text-sm">{c.awardsBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.awardsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded border border-border-custom bg-bg-secondary/80 p-5 md:p-6 flex flex-col">
              <div className="flex items-center gap-2 text-[#f4a261] mb-3">
                <Trophy className="w-4 h-4" />
                <span className="font-noto text-xs">{c.hackathonBadge}</span>
              </div>
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2">{c.hackathonTitle}</h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4 flex-grow">{c.hackathonDesc}</p>
              <a href={c.hackathonLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#9bd8cf] hover:text-[#6cbcb2] transition-colors">
                <ExternalLink className="w-3 h-3" />
                <span>{c.viewLink}</span>
              </a>
            </div>
            <div className="rounded border border-border-custom bg-bg-secondary/80 p-5 md:p-6 flex flex-col">
              <div className="flex items-center gap-2 text-[#9bd8cf] mb-3">
                <Users className="w-4 h-4" />
                <span className="font-noto text-xs">{c.teamBadge}</span>
              </div>
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2">{c.teamTitle}</h3>
              <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4 flex-grow">{c.teamDesc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {c.teamMembers.map((member, i) => (
                  <span key={i} className="px-3 py-1.5 border border-border-custom rounded bg-bg-primary text-xs font-noto text-text-primary">
                    {member.name}{member.role ? ` · ${member.role}` : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.archTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-8">{c.archDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.archLayers.map((l, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2]/60 transition-colors">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{l.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-2">{c.galleryTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-10">{c.galleryDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.gallery.map((item, idx) => (
              <div key={item.src} className="border border-border-custom rounded bg-bg-secondary overflow-hidden cursor-pointer group" onClick={() => setLightboxIndex(idx)}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full ${item.portrait ? 'max-h-[420px] object-contain bg-bg-primary' : ''} group-hover:opacity-90 transition-opacity`}
                  loading="lazy"
                />
                <div className="p-4 border-t border-border-custom">
                  <h3 className="font-noto font-bold text-sm text-text-primary mb-1">{item.title}</h3>
                  <p className="font-noto text-xs text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setLightboxIndex(-1)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))}
      />

      {/* Core Modules */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.modulesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.modules.map((m, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors">
                <div className="flex items-center gap-2 text-text-primary mb-3">
                  <ModIcon type={m.icon} />
                  <h3 className="font-noto font-bold text-base">{m.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backend */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.backendTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-8">{c.backendDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.backendItems.map((item, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2]/60 transition-colors">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{item.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Config */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.storyTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-4">{c.storyDesc}</p>
          <div className="mb-8 p-4 border-l-2 border-[#6cbcb2] bg-[#6cbcb2]/5 rounded-r">
            <Link to="/projects/infinite-academy" className="font-noto text-sm text-[#9bd8cf] hover:text-[#6cbcb2] transition-colors inline-flex items-center gap-1">
              <span>{c.storyNote}</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.storyItems.map((item, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{item.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Design */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.visualTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-8">{c.visualDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.visualItems.map((item, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{item.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
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
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors">
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
      <section className="bg-bg-primary py-16 md:py-24 px-5">
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
            to="/projects/infinite-academy"
            className="inline-flex items-center gap-2 font-noto text-sm text-text-muted hover:text-[#9bd8cf] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{c.navPrev}</span>
          </Link>
          <Link
            to="/projects/npc-agent"
            className="inline-flex items-center gap-2 font-noto text-sm text-text-muted hover:text-[#9bd8cf] transition-colors group"
          >
            <span>{c.navNext}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
