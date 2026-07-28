import {
  ArrowLeft,
  Globe,
  Brain,
  Glasses,
  Database,
  Server,
  Boxes,
  GitBranch,
  Award,
  Users,
  Sparkles,
  Cpu,
  Play,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

const t = {
  zh: {
    back: '返回首页',
    title: 'distance',
    subtitle: '光年尺度下，人与人之间关系的距离',
    tag: 'AdventureX 2026 · PICO 赛道第二名',
    desc: 'distance 是一款社交关系可视化产品。你的每段经历、每个朋友、每段关系都会被编译成一颗「个人星球」，悬浮在三维宇宙中。关系越近，星球靠得越近；关系越淡，光年越远。',
    status: '团队作品 · AdventureX 2026 PICO 赛道 优胜 Web 应用创作者',

    awardTitle: '比赛成绩',
    award: 'AdventureX 2026 — PICO 赛道 第二名 · 优胜 Web 应用创作者',

    whatTitle: '这是什么',
    whatDesc:
      'distance 想回答一个问题：你和好友的关系，能不能「看见」？在这里，每个人都是一颗独一无二的星球。你的学历、经历、记忆、技能构成了星球的质量；你和谁常联系、关系好不好，决定了星球之间的距离。打开宇宙，你能直观看到自己的「关系地图」。',

    demoTitle: 'Demo 演示',
    demoDesc: '5 分钟体验完整流程',
    demoSteps: [
      {
        title: '注册并创建星球',
        desc: '填写个人资料，选择星球原型，输入描述词让 AI 优化参数。播放 Genesis 动画，你的星球在宇宙中诞生。',
      },
      {
        title: '建立关系连接',
        desc: '从已注册用户中选择朋友，设定关系类型和描述。系统会计算关系强度，并在星系中为你们分配距离。',
      },
      {
        title: '三层尺度漫游',
        desc: 'Planet 视角看自己的星球细节；Galaxy 视角看好友星系分布；Nebula 视角看更宏观的圈层网络。',
      },
      {
        title: '彗星跃迁旅行',
        desc: '选中好友星球，乘坐彗星前往。穿越星云的电影级过渡动画，抵达后可以查看对方星球并返回。',
      },
    ],

    vrTitle: 'PICO VR 空间计算',
    vrDesc:
      '戴上 PICO VR 头盔，进入 2.4m × 1.8m × 2.4m 的虚拟空间。你可以用手直接抓取星球、捏合缩放距离、旋转观察关系轨道。社交不再是一块屏幕，而是环绕在你身边的真实宇宙。',
    vrFeatures: [
      '自然手势交互：点击、拖拽、捏合缩放、旋转',
      '重力对齐的世界坐标系，无需额外校准',
      '普通浏览器自动降级为 R3F 桌面体验',
      '同一套代码同时支持 Web 和 VR',
    ],

    coreTitle: '核心体验',
    core: [
      {
        title: '3D 关系宇宙',
        desc: '每个人都是一颗星球。关系是轨道，记忆是质量。在三维空间中直观感受你与他人的距离远近。',
      },
      {
        title: 'AI 记忆闭环',
        desc: '你记录的记忆会被 AI 分析，影响星球质量和关系距离。记得越多，星球越「重」，关系网络越真实。',
      },
      {
        title: '电影级旅行',
        desc: '从自己的星球出发，乘彗星穿越星云，降落在朋友星球上。三段尺度切换 + 跃迁动画，像科幻电影一样漫游。',
      },
      {
        title: 'PICO VR 沉浸',
        desc: '支持 PICO OS 6 头显。在真实物理空间里用手抓取、拉近、旋转星球，体验空间计算带来的沉浸感。',
      },
    ],

    techTitle: '技术架构',
    tech: [
      { icon: 'server', title: 'FastAPI 后端', desc: 'FastAPI · Pydantic v2 · SQLAlchemy 2 · Alembic · 六边形架构' },
      { icon: 'database', title: '数据层', desc: 'PostgreSQL 事实源 · Neo4j 图投影 · OpenViking 派生记忆' },
      { icon: 'brain', title: 'AI 层', desc: '嵌入式记忆代理 · 语义召回 · 生态系统生成 · 对话 Agent' },
      { icon: 'glasses', title: '空间计算', desc: 'WebSpatial SDK · PICO OS 6 · 体积场景 · 自然手势交互' },
    ],

    mechanismTitle: '核心机制',
    mechanisms: [
      { name: '星球质量', desc: '综合个人档案、教育背景、工作经历、技能、记忆等维度计算。记忆会随时间衰减，持续更新才能保持质量。' },
      { name: '关系距离', desc: '根据互动频率、最近一次联系、共同经历、持续时间、双向互动和语义理解等信号，动态计算两人之间距离。' },
      { name: '空间布局', desc: '力导向算法模拟真实物理：关系好的星球靠得近，关系疏远的被推远。180 次迭代确保布局稳定不重叠。' },
      { name: '每小时演化', desc: '后台 Worker 每小时自动运行：衰减旧事件 → 重算星球质量 → 更新关系距离 → 重新布局空间位置。' },
    ],

    teamTitle: '团队',
    team: [
      { name: '周雨涵', role: '产品 / UI / UX', color: '#ffc08e' },
      { name: '詹丽', role: '视觉传达', color: '#e9818d' },
      { name: '丁羿然', role: '技术开发', color: '#5d477f' },
      { name: '阿早', role: '技术开发', color: '#ffe0bd' },
    ],

  },
  en: {
    back: 'Back to Home',
    title: 'distance',
    subtitle: 'The Distance Between People, at the Scale of Light-Years',
    tag: 'AdventureX 2026 · PICO Track 2nd Place',
    desc: 'distance is a social relationship visualization product. Every experience, friend, and relationship is compiled into a "personal planet" floating in a 3D universe. Closer relationships pull planets together; distant ones drift light-years apart.',
    status: 'Team Project · AdventureX 2026 PICO Track — Outstanding Web App Creator',

    awardTitle: 'Competition Result',
    award: 'AdventureX 2026 — PICO Track 2nd Place · Outstanding Web App Creator',

    whatTitle: 'What Is This',
    whatDesc:
      'distance asks: can you "see" your relationships? Here, everyone is a unique planet. Your education, experiences, memories, and skills form the planet\'s mass. Who you stay in touch with and how close you are determines the distance between planets. Open the universe and you can visually explore your relationship map.',

    demoTitle: 'Demo Walkthrough',
    demoDesc: 'A 5-minute full experience',
    demoSteps: [
      {
        title: 'Register & Create Your Planet',
        desc: 'Fill in your profile, choose a planet prototype, and enter a description for AI parameter optimization. Watch the Genesis animation as your planet is born in the universe.',
      },
      {
        title: 'Build Relationship Connections',
        desc: 'Select friends from registered users, set relationship types and descriptions. The system calculates relationship strength and assigns distance in the galaxy.',
      },
      {
        title: 'Navigate Three Scales',
        desc: 'Planet view for your own details; Galaxy view for friend distribution; Nebula view for the broader network of circles.',
      },
      {
        title: 'Comet Travel',
        desc: 'Select a friend\'s planet and ride a comet through the nebula. Cinematic transition takes you there; return home anytime.',
      },
    ],

    vrTitle: 'PICO VR Spatial Computing',
    vrDesc:
      'Put on a PICO VR headset and enter a 2.4m × 1.8m × 2.4m volumetric space. Grab planets with your hands, pinch to scale distances, and rotate to observe relationship orbits. Social interaction is no longer on a screen — it is a real universe surrounding you.',
    vrFeatures: [
      'Natural hand gestures: tap, drag, pinch-to-scale, rotate',
      'Gravity-aligned world coordinates, no calibration needed',
      'Graceful fallback to R3F on desktop browsers',
      'Single codebase supports both Web and VR',
    ],

    coreTitle: 'Core Experience',
    core: [
      {
        title: '3D Relationship Universe',
        desc: 'Everyone is a planet. Relationships are orbits, memories are mass. Feel your distance to others in three-dimensional space.',
      },
      {
        title: 'AI Memory Loop',
        desc: 'Recorded memories are analyzed by AI to affect planet mass and relationship distance. The more you record, the "heavier" your planet becomes.',
      },
      {
        title: 'Cinematic Travel',
        desc: 'Depart from your planet, ride a comet through nebulae, and land on a friend\'s planet. Three-scale navigation with cinematic transitions feels like a sci-fi movie.',
      },
      {
        title: 'PICO VR Immersion',
        desc: 'Supports PICO OS 6 headsets. Grab, pull, and rotate planets in real physical space. Experience the immersion of spatial computing.',
      },
    ],

    techTitle: 'Tech Architecture',
    tech: [
      { icon: 'server', title: 'FastAPI Backend', desc: 'FastAPI · Pydantic v2 · SQLAlchemy 2 · Alembic · Hexagonal Architecture' },
      { icon: 'database', title: 'Data Layer', desc: 'PostgreSQL source of truth · Neo4j graph projection · OpenViking derived memory' },
      { icon: 'brain', title: 'AI Layer', desc: 'Embedded memory agent · semantic recall · ecosystem generation · conversation agent' },
      { icon: 'glasses', title: 'Spatial Computing', desc: 'WebSpatial SDK · PICO OS 6 · volumetric scene · natural gesture interaction' },
    ],

    mechanismTitle: 'Core Mechanisms',
    mechanisms: [
      { name: 'Planet Mass', desc: 'Calculated from profile, education, experience, skills, and memories. Memories decay over time; continuous updates maintain mass.' },
      { name: 'Relationship Distance', desc: 'Dynamically computed from interaction frequency, recency, shared experiences, duration, reciprocity, and semantic signals.' },
      { name: 'Spatial Layout', desc: 'Force-directed physics simulation: close relationships pull planets together, distant ones push apart. 180 iterations for stable, collision-free layout.' },
      { name: 'Hourly Evolution', desc: 'Background worker runs every hour: decay old events → recalculate planet mass → update relationship distances → recompute spatial layout.' },
    ],

    teamTitle: 'Team',
    team: [
      { name: 'Zhou Yuhan', role: 'Product / UI / UX', color: '#ffc08e' },
      { name: 'Zhan Li', role: 'Visual Design', color: '#e9818d' },
      { name: 'Ding Yiran', role: 'Engineering', color: '#5d477f' },
      { name: 'Zaosusu', role: 'Engineering', color: '#ffe0bd' },
    ],

  },
};

function TechIcon({ type }: { type: string }) {
  switch (type) {
    case 'server':
      return <Server className="w-5 h-5" />;
    case 'database':
      return <Database className="w-5 h-5" />;
    case 'brain':
      return <Brain className="w-5 h-5" />;
    case 'glasses':
      return <Glasses className="w-5 h-5" />;
    default:
      return <Cpu className="w-5 h-5" />;
  }
}

export function DistanceProject() {
  const { lang } = useLang();
  const c = t[lang as 'zh' | 'en'] || t.zh;

  return (
    <div className="min-h-screen bg-bg-primary animate-fade-in">
      <main className="pt-16 pb-20">
        {/* Header */}
        <div className="max-w-content mx-auto px-5 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-[#9bd8cf] transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-noto text-sm">{c.back}</span>
          </Link>

          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-noto bg-[#0f8b8d]/12 text-[#0f8b8d] border border-[#0f8b8d]/25 mb-4">
              <Award className="w-3.5 h-3.5" />
              {c.tag}
            </span>
          </div>

          <h1 className="font-inter font-bold text-3xl md:text-5xl text-text-primary mb-3 tracking-tight">
            {c.title}
          </h1>
          <p className="font-noto text-lg md:text-xl text-text-secondary mb-4">
            {c.subtitle}
          </p>
          <p className="font-noto text-sm text-text-muted mb-6 max-w-2xl leading-relaxed">
            {c.desc}
          </p>
          <p className="font-noto text-xs text-text-muted/60 mb-4">{c.status}</p>
          <a
            href="https://www.distance3d.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded border border-[#0f8b8d]/60 bg-[#0f8b8d]/12 text-text-primary hover:bg-[#0f8b8d]/18 hover:border-[#0f8b8d] transition-colors duration-200 mb-16"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="font-noto text-sm">{lang === 'zh' ? '访问网站' : 'Visit Website'}</span>
          </a>
        </div>

        {/* Award */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <div className="p-6 rounded border border-[#0f8b8d]/20 bg-[#0f8b8d]/5">
            <h2 className="font-noto font-bold text-lg text-text-primary mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0f8b8d]" />
              {c.awardTitle}
            </h2>
            <p className="font-noto text-sm text-text-secondary">{c.award}</p>
          </div>
        </div>

        {/* What is this */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#6cbcb2]" />
            {c.whatTitle}
          </h2>
          <p className="font-noto text-sm text-text-secondary leading-relaxed max-w-2xl">
            {c.whatDesc}
          </p>
        </div>

        {/* Demo Walkthrough */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <Play className="w-5 h-5 text-[#6cbcb2]" />
            {c.demoTitle}
          </h2>
          <p className="font-noto text-sm text-text-muted mb-6">{c.demoDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.demoSteps.map((step, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary hover:border-[#6cbcb2]/40 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0f8b8d]/10 text-[#0f8b8d] text-xs font-bold font-inter">
                    {i + 1}
                  </span>
                  <h3 className="font-noto font-semibold text-base text-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed pl-8">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Experience */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#6cbcb2]" />
            {c.coreTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.core.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary hover:border-[#6cbcb2]/40 transition-colors duration-200"
              >
                <h3 className="font-noto font-semibold text-base text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PICO VR */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <div className="p-6 rounded border border-[#0f8b8d]/20 bg-[#0f8b8d]/5">
            <h2 className="font-noto font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
              <Glasses className="w-5 h-5 text-[#0f8b8d]" />
              {c.vrTitle}
            </h2>
            <p className="font-noto text-sm text-text-secondary leading-relaxed mb-4">
              {c.vrDesc}
            </p>
            <ul className="space-y-2">
              {c.vrFeatures.map((feat, i) => (
                <li
                  key={i}
                  className="font-noto text-sm text-text-muted flex items-start gap-2"
                >
                  <span className="text-[#0f8b8d] mt-0.5">◆</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <Boxes className="w-5 h-5 text-[#6cbcb2]" />
            {c.techTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.tech.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary hover:border-[#6cbcb2]/40 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 text-[#6cbcb2] mb-2">
                  <TechIcon type={item.icon} />
                  <h3 className="font-noto font-semibold text-base text-text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mechanisms */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-[#6cbcb2]" />
            {c.mechanismTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.mechanisms.map((m, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary"
              >
                <h3 className="font-noto font-semibold text-base text-[#9bd8cf] mb-2">
                  {m.name}
                </h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="max-w-content mx-auto px-5 mb-16">
          <h2 className="font-noto font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#6cbcb2]" />
            {c.teamTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.team.map((member, i) => (
              <div
                key={i}
                className="p-5 rounded border border-border-custom bg-bg-secondary text-center"
              >
                <div
                  className="w-12 h-12 rounded-full border-2 mx-auto mb-3 flex items-center justify-center text-lg font-bold"
                  style={{ borderColor: member.color }}
                >
                  <span style={{ color: member.color }}>{member.name[0]}</span>
                </div>
                <h4 className="font-noto font-semibold text-sm text-text-primary mb-1">
                  {member.name}
                </h4>
                <p className="font-noto text-xs text-text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>


      </main>

      <Footer />
    </div>
  );
}
