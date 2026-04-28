import { ExternalLink, ArrowLeft, Smartphone, Server, Cloud, GitBranch, Database, WifiOff, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

const t = {
  zh: {
    back: '返回首页',
    heroTitle: '走路修仙',
    heroSubtitle: 'WalkingXiuxian',
    heroDesc: '跨端计步修仙 App。Flutter + FastAPI，事件驱动架构，增量云同步。',
    status: '开发中 · Android 真机计步验证通过',
    archTitle: '技术架构',
    archDesc: '整体采用前后端分离 + 自建后端持久化的三层架构。前端 Flutter 负责传感器数据采集与本地状态管理；后端 FastAPI 提供 RESTful API 与 WebSocket 实时通道；认证与业务数据全部自建，部署在国内可访问的服务器。',
    archLayers: [
      { title: 'Flutter 客户端', desc: 'Dart · flutter_riverpod · pedometer · event_bus · freezed' },
      { title: 'FastAPI 服务端', desc: 'Python · SQLAlchemy 2.0 · Pydantic · JWT · WebSocket' },
      { title: '数据持久化', desc: '自建 MySQL · SQLAlchemy 2.0 · JWT 认证 · 自托管 VPS' },
    ],
    modulesTitle: '核心模块',
    modules: [
      { icon: 'activity', title: '计步引擎', desc: '基于 pedometer 插件封装步数读取层，处理 Android / iOS / HarmonyOS 权限申请与传感器生命周期。后台保活通过 Service + WorkManager 实现，杀进程后通过系统计步器历史数据恢复。' },
      { icon: 'database', title: '修为计算引擎', desc: '纯函数式修为计算（cultivation_engine.dart）。输入原始步数，输出当前境界、突破状态、进度百分比。配置化境界表（realm_config.dart），支持任意扩展境界阶段与阈值。' },
      { icon: 'wifi-off', title: '同步引擎', desc: '离线优先设计。客户端本地缓存为事实来源（source of truth），网络恢复后执行增量同步。冲突解决策略：服务器时间戳优先 + 客户端离线队列重试。JWT 短令牌 + 刷新令牌双层认证。' },
      { icon: 'git-branch', title: '事件总线', desc: '全局 EventBus 解耦模块间通信。计步模块、修为模块、UI 层通过事件订阅解耦，避免 Riverpod Provider 过度嵌套。关键事件：StepUpdate、RealmBreakthrough、SyncCompleted。' },
    ],
    challengesTitle: '技术难点',
    challenges: [
      { title: '后台计步保活', desc: 'Android 各厂商杀后台策略差异大。方案：前台 Service + 通知栏保活；同时接入系统 Health Connect 作为 fallback；应用冷启动时读取系统计步器历史值做差额补偿。' },
      { title: '离线同步冲突', desc: '用户在断网期间行走，本地累计大量步数。重连后批量上传可能与服务器已有数据冲突。方案：每条记录带 local_id + client_timestamp + server_timestamp，服务端执行三路合并（three-way merge）。' },
      { title: '跨平台步数一致性', desc: 'iOS CMPedometer 与 Android SensorManager 返回值格式不同，且华为 HarmonyOS 的权限模型有差异。方案：平台抽象层（PlatformChannel + 统一接口），运行时检测平台类型调用对应实现。' },
    ],
    codeTitle: '代码组织',
    codeDesc: '采用模块化（Module-based）架构，按功能域垂直拆分，每个模块独立管理自身的接口、状态与业务逻辑：',
    codeItems: [
      '步数模块 — 传感器读取、平台抽象、权限管理',
      '修为模块 — 纯函数计算引擎、境界配置、突破判定',
      '用户模块 — 本地档案、持久化、认证状态',
      '同步模块 — 离线队列、增量上传、冲突合并',
      '核心层 — 全局事件总线、跨模块通信契约',
    ],
    stackTitle: '技术栈',
    stack: [
      { icon: 'mobile', title: 'Flutter 前端', desc: 'Flutter 3.41+ · Dart · Riverpod · Lottie · freezed · json_serializable' },
      { icon: 'server', title: 'FastAPI 后端', desc: 'Python 3.11+ · FastAPI · SQLAlchemy 2.0 · Pydantic 2 · JWT · WebSocket' },
      { icon: 'cloud', title: '基础设施', desc: '自建 MySQL · Uvicorn · Nginx · 自托管 VPS（国内线路）' },
    ],
    linksTitle: '相关链接',
    website: '项目官网',
    cardTitle: '走路修仙',
    cardDesc: '在AI时代，别忘了重塑肉身',
    contactTitle: '联系',
    contactDesc: '对技术实现感兴趣？欢迎交流：',
    email: 'qinqiao2014@gmail.com',
  },
  en: {
    back: 'Back to Home',
    heroTitle: '走路修仙',
    heroSubtitle: 'WalkingXiuxian',
    heroDesc: 'Cross-platform pedometer xianxia app. Flutter + FastAPI, event-driven architecture, incremental cloud sync.',
    status: 'In Development · Verified on Android devices',
    archTitle: 'Architecture',
    archDesc: 'Three-layer architecture: frontend-backend separation + self-hosted persistence. Flutter handles sensor data and local state; FastAPI provides RESTful API and WebSocket; auth and business data fully self-hosted on domestic-accessible servers.',
    archLayers: [
      { title: 'Flutter Client', desc: 'Dart · flutter_riverpod · pedometer · event_bus · freezed' },
      { title: 'FastAPI Server', desc: 'Python · SQLAlchemy 2.0 · Pydantic · JWT · WebSocket' },
      { title: 'Persistence', desc: 'Self-hosted MySQL · SQLAlchemy 2.0 · JWT auth · Self-hosted VPS' },
    ],
    modulesTitle: 'Core Modules',
    modules: [
      { icon: 'activity', title: 'Pedometer Engine', desc: 'Wrapped pedometer plugin with permission handling for Android/iOS/HarmonyOS. Background keep-alive via Service + WorkManager. Post-kill recovery via system pedometer history API.' },
      { icon: 'database', title: 'Cultivation Engine', desc: 'Pure functional power calculation (cultivation_engine.dart). Input raw steps, output realm, breakthrough state, progress percentage. Configurable realm table (realm_config.dart) supports arbitrary stage expansion.' },
      { icon: 'wifi-off', title: 'Sync Engine', desc: 'Offline-first design. Client local cache is source of truth; incremental sync on network recovery. Conflict resolution: server timestamp wins + client offline queue retry. JWT access + refresh token auth.' },
      { icon: 'git-branch', title: 'Event Bus', desc: 'Global EventBus decouples inter-module communication. Step module, cultivation module, UI layer subscribe to events instead of deep Riverpod nesting. Key events: StepUpdate, RealmBreakthrough, SyncCompleted.' },
    ],
    challengesTitle: 'Technical Challenges',
    challenges: [
      { title: 'Background Pedometer Keep-alive', desc: 'Android OEMs aggressively kill background apps. Solution: foreground Service + notification keep-alive; Health Connect fallback; cold-start delta compensation from system pedometer history.' },
      { title: 'Offline Sync Conflicts', desc: 'Users walk while offline, accumulating large local step batches. On reconnect, bulk upload may conflict with server data. Solution: each record carries local_id + client_timestamp + server_timestamp; server performs three-way merge.' },
      { title: 'Cross-platform Step Consistency', desc: 'iOS CMPedometer and Android SensorManager return different formats; Huawei HarmonyOS has different permission model. Solution: platform abstraction layer (PlatformChannel + unified interface), runtime platform detection.' },
    ],
    codeTitle: 'Code Organization',
    codeDesc: 'Module-based architecture, vertically split by functional domain. Each module manages its own interface, state, and business logic:',
    codeItems: [
      'Step module — sensor reading, platform abstraction, permission management',
      'Cultivation module — pure functional engine, realm config, breakthrough logic',
      'User module — local profile, persistence, auth state',
      'Sync module — offline queue, incremental upload, conflict merge',
      'Core layer — global event bus, cross-module communication contract',
    ],
    stackTitle: 'Tech Stack',
    stack: [
      { icon: 'mobile', title: 'Flutter Frontend', desc: 'Flutter 3.41+ · Dart · Riverpod · Lottie · freezed · json_serializable' },
      { icon: 'server', title: 'FastAPI Backend', desc: 'Python 3.11+ · FastAPI · SQLAlchemy 2.0 · Pydantic 2 · JWT · WebSocket' },
      { icon: 'cloud', title: 'Infrastructure', desc: 'Self-hosted MySQL · Uvicorn · Nginx · Self-hosted VPS (domestic line)' },
    ],
    linksTitle: 'Links',
    website: 'Project Website',
    cardTitle: 'WalkingXiuxian',
    cardDesc: "In the age of AI, don't forget to reshape your physical body.",
    contactTitle: 'Contact',
    contactDesc: 'Interested in the technical implementation? Feel free to reach out:',
    email: 'qinqiao2014@gmail.com',
  },
};

function ModIcon({ type }: { type: string }) {
  if (type === 'activity') return <Activity className="w-5 h-5" />;
  if (type === 'database') return <Database className="w-5 h-5" />;
  if (type === 'wifi-off') return <WifiOff className="w-5 h-5" />;
  return <GitBranch className="w-5 h-5" />;
}

function StackIcon({ type }: { type: string }) {
  if (type === 'mobile') return <Smartphone className="w-5 h-5" />;
  if (type === 'server') return <Server className="w-5 h-5" />;
  return <Cloud className="w-5 h-5" />;
}

export function WalkingXiuxian() {
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
      <section className="py-12 md:py-20 px-5">
        <div className="max-w-content mx-auto text-center">
          <img
            src="/walking-logo.png"
            alt="WalkingXiuxian Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-2xl object-cover"
          />
          <h1 className="font-inter font-bold text-3xl md:text-5xl text-text-primary tracking-tight mb-2">
            {c.heroTitle}
          </h1>
          <p className="font-inter text-lg text-text-secondary mb-4">{c.heroSubtitle}</p>
          <p className="font-noto text-sm md:text-base text-text-muted mb-6 max-w-lg mx-auto">
            {c.heroDesc}
          </p>
          <span className="inline-block px-4 py-1.5 border border-border-custom rounded text-xs text-text-muted">
            {c.status}
          </span>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-bg-secondary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-6">{c.archTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-8">{c.archDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.archLayers.map((l, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{l.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="bg-bg-primary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-8">{c.modulesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.modules.map((m, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-secondary">
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

      {/* Challenges */}
      <section className="bg-bg-secondary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-8">{c.challengesTitle}</h2>
          <div className="space-y-6">
            {c.challenges.map((cItem, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary">
                <h3 className="font-noto font-bold text-base text-text-primary mb-2">{cItem.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{cItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Organization */}
      <section className="bg-bg-primary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-6">{c.codeTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-6">{c.codeDesc}</p>
          <ul className="space-y-2">
            {c.codeItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span className="font-mono text-sm text-text-primary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-bg-secondary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-8">{c.stackTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.stack.map((s, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary">
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

      {/* Links */}
      <section className="bg-bg-primary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <img
              src="/walking-logo.png"
              alt="WalkingXiuxian Logo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-noto font-bold text-lg text-text-primary mb-2">{c.cardTitle}</h3>
              <p className="font-noto text-sm text-text-secondary mb-4">{c.cardDesc}</p>
              <a
                href="https://www.walkingxiuxian.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-custom rounded text-text-primary hover:border-text-secondary hover:text-text-secondary transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-noto text-sm">{c.website}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-bg-secondary py-16 md:py-20 px-5">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-4">{c.contactTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-6">{c.contactDesc}</p>
          <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-text-primary hover:text-text-secondary transition-colors duration-200 group">
            <span className="font-noto text-sm border-b border-transparent group-hover:border-text-secondary">{c.email}</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
