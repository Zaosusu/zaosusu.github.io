import { ExternalLink, ArrowLeft, Trophy, Code2, Database, Server, Box, Activity, Zap, Globe, Layout, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

const t = {
  zh: {
    back: '返回首页',
    heroTitle: '通用NPC Agent底座',
    heroSubtitle: 'Universal NPC Agent Base',
    heroDesc: 'AGENT BUILDER HACKATHON 南京站一等奖作品。通用NPC Agent底座，验证 Agent 如何热插拔进入不同游戏/故事世界。',
    status: '2026 · AGENT BUILDER HACKATHON 南京站 · 一等奖',
    heroLink: '查看项目',
    awardsBadge: '赛事与认可',
    awardsTitle: '赛事与认可',
    hackathonBadge: '2026 · 一等奖',
    hackathonTitle: 'AGENT BUILDER HACKATHON · 南京站 · 2026',
    hackathonDesc: 'StepFun（阶跃星辰）与 去探索 联合主办的 AI Agent 黑客松。4小时限时开发，从众多参赛项目中脱颖而出，斩获一等奖。',
    hackathonLink: 'https://luma.com/duqkma6w?tk=F2LgCx',
    viewLink: '查看赛事',
    archTitle: '技术架构',
    archDesc: 'FastAPI 后端 + 浏览器操作台。核心编排：RouterAgent -> WorldBuilderAgent / NpcAgent -> StateValidatorAgent -> CommandExecutor。',
    archLayers: [
      { title: 'API 层', desc: 'FastAPI · RESTful API · WebSocket · 静态文件服务' },
      { title: 'Agent Runtime', desc: 'RouterAgent · NpcAgent · StateValidatorAgent · CommandExecutor · 确定性护栏层' },
      { title: '世界适配层', desc: 'WorldAdapter · SandboxWorldAdapter · 热插拔 JSON 世界观' },
    ],
    modulesTitle: '核心模块',
    modules: [
      { icon: 'activity', title: 'Agent Runtime', desc: 'AgentRuntime 组装 WorldAdapter、LLMClient、MemoryStore、RuntimeSessionStore、CorrectiveRagPipeline、Planner、RouterAgent 等组件，提供 chat()、world_action()、autonomous_tick()、snapshot() 等入口。' },
      { icon: 'globe', title: '多 Agent 层', desc: 'RouterAgent 负责对话路由；NpcAgent 处理单 NPC 回复；StateValidatorAgent 校验并执行 command；NpcProtocolReviewAgent 修复 LLM 输出协议漂移。' },
      { icon: 'database', title: '记忆与 CRAG', desc: 'JsonVectorMemoryStore 提供长期检索记忆；CorrectiveRagPipeline 实现检索-评分-重写-再检索的 Corrective RAG 流程。' },
      { icon: 'zap', title: 'Command 校验与执行', desc: 'CommandValidator 中心化校验 LLM command 合法性；CommandExecutor 中心化执行状态变更。支持 set_player、grant_item、complete_task、switch_npc、set_flag、run_world_action。' },
      { icon: 'layout', title: 'Sandbox 世界', desc: 'SandboxWorldStore 管理世界配置；SandboxWorldValidator 保存前校验并修复；WorldBuilderAgent + MechanicsDesignAgent 生成世界；PlaytestAgent 自动试玩 quality gate。' },
      { icon: 'box', title: '世界适配器', desc: 'WorldAdapter 是世界热插拔协议。SandboxWorldAdapter 实现 create_initial_state、build_system_prompt、build_human_prompt、record_player_message、apply_llm_output 等方法。' },
    ],
    stackTitle: '技术栈',
    stack: [
      { icon: 'server', title: '后端', desc: 'Python · FastAPI · Uvicorn · LangChain · Pydantic' },
      { icon: 'database', title: '数据层', desc: 'JSON Vector Memory · Runtime Session Store · 文件型持久化' },
      { icon: 'code', title: '前端', desc: 'HTML5 · CSS3 · Vanilla JS · 浏览器操作台' },
    ],
    linksTitle: '相关链接',
    experience: '项目仓库',
    cardTitle: '通用NPC Agent底座',
    cardDesc: '验证通用NPC Agent底座如何热插拔进入不同游戏/故事世界。',
    teamBadge: '项目团队',
    teamTitle: '项目团队',
    teamDesc: '5人团队，分工覆盖技术开发、剧情策划与美术设计。',
    teamMembers: [
      { name: '阿早', role: '全栈 · 队长' },
      { name: '张紫悦', role: '视觉' },
      { name: '柳淇凯', role: '前端' },
      { name: '张天华', role: '剧情' },
      { name: '张芷萱', role: '剧情' },
    ],
    contactTitle: '联系',
    contactDesc: '对技术实现感兴趣？欢迎交流：',
    email: 'qinqiao2014@gmail.com',
  },
  en: {
    back: 'Back to Home',
    heroTitle: 'Universal NPC Agent Base',
    heroSubtitle: 'Universal NPC Agent Base',
    heroDesc: 'First prize winner of AGENT BUILDER HACKATHON Nanjing. A universal NPC Agent base validating how agents can hot-plug into different game/story worlds.',
    status: '2026 · AGENT BUILDER HACKATHON Nanjing · First Prize',
    heroLink: 'View Project',
    awardsBadge: 'Awards & Recognition',
    awardsTitle: 'Awards & Recognition',
    hackathonBadge: '2026 · First Prize',
    hackathonTitle: 'AGENT BUILDER HACKATHON · Nanjing · 2026',
    hackathonDesc: 'An AI Agent hackathon hosted by StepFun and Ququ. 4-hour timed development. Won first prize among numerous entries.',
    hackathonLink: 'https://luma.com/duqkma6w?tk=F2LgCx',
    viewLink: 'View Competition',
    archTitle: 'Architecture',
    archDesc: 'FastAPI backend + browser console. Core orchestration: RouterAgent -> WorldBuilderAgent / NpcAgent -> StateValidatorAgent -> CommandExecutor.',
    archLayers: [
      { title: 'API Layer', desc: 'FastAPI · RESTful API · WebSocket · Static file serving' },
      { title: 'Agent Runtime', desc: 'RouterAgent · NpcAgent · StateValidatorAgent · CommandExecutor · Deterministic Guardrails Layer' },
      { title: 'World Adapter', desc: 'WorldAdapter · SandboxWorldAdapter · Hot-pluggable JSON world views' },
    ],
    modulesTitle: 'Core Modules',
    modules: [
      { icon: 'activity', title: 'Agent Runtime', desc: 'AgentRuntime assembles WorldAdapter, LLMClient, MemoryStore, RuntimeSessionStore, CorrectiveRagPipeline, Planner, RouterAgent, etc. Provides chat(), world_action(), autonomous_tick(), snapshot() entry points.' },
      { icon: 'globe', title: 'Multi-Agent Layer', desc: 'RouterAgent handles dialogue routing; NpcAgent handles single NPC responses; StateValidatorAgent validates and executes commands; NpcProtocolReviewAgent repairs LLM output protocol drift.' },
      { icon: 'database', title: 'Memory & CRAG', desc: 'JsonVectorMemoryStore provides long-term retrieval memory; CorrectiveRagPipeline implements retrieve-grade-rewrite-retrieve Corrective RAG flow.' },
      { icon: 'zap', title: 'Command Validation & Execution', desc: 'CommandValidator centrally validates LLM command legality; CommandExecutor centrally executes state changes. Supports set_player, grant_item, complete_task, switch_npc, set_flag, run_world_action.' },
      { icon: 'layout', title: 'Sandbox World', desc: 'SandboxWorldStore manages world configs; SandboxWorldValidator validates and repairs before save; WorldBuilderAgent + MechanicsDesignAgent generate worlds; PlaytestAgent auto-playtests quality gate.' },
      { icon: 'box', title: 'World Adapter', desc: 'WorldAdapter is the hot-pluggable world protocol. SandboxWorldAdapter implements create_initial_state, build_system_prompt, build_human_prompt, record_player_message, apply_llm_output, etc.' },
    ],
    stackTitle: 'Tech Stack',
    stack: [
      { icon: 'server', title: 'Backend', desc: 'Python · FastAPI · Uvicorn · LangChain · Pydantic' },
      { icon: 'database', title: 'Data Layer', desc: 'JSON Vector Memory · Runtime Session Store · File-based persistence' },
      { icon: 'code', title: 'Frontend', desc: 'HTML5 · CSS3 · Vanilla JS · Browser console' },
    ],
    linksTitle: 'Links',
    experience: 'Project Repo',
    cardTitle: 'Universal NPC Agent Base',
    cardDesc: 'Validating how a universal NPC Agent base can hot-plug into different game/story worlds.',
    teamBadge: 'Team',
    teamTitle: 'Team',
    teamDesc: '5-person team covering tech development, story planning, and art design.',
    teamMembers: [
      { name: 'Zaosusu', role: 'Full Stack · Captain' },
      { name: 'Zhang Ziyue', role: 'Visual' },
      { name: 'Liu Qikai', role: 'Frontend' },
      { name: 'Zhang Tianhua', role: 'Story' },
      { name: 'Zhang Zhixuan', role: 'Story' },
    ],
    contactTitle: 'Contact',
    contactDesc: 'Interested in the technical implementation? Feel free to reach out:',
    email: 'qinqiao2014@gmail.com',
  },
};

function ModIcon({ type }: { type: string }) {
  if (type === 'activity') return <Activity className="w-5 h-5" />;
  if (type === 'globe') return <Globe className="w-5 h-5" />;
  if (type === 'database') return <Database className="w-5 h-5" />;
  if (type === 'zap') return <Zap className="w-5 h-5" />;
  if (type === 'layout') return <Layout className="w-5 h-5" />;
  return <Box className="w-5 h-5" />;
}

function StackIcon({ type }: { type: string }) {
  if (type === 'code') return <Code2 className="w-5 h-5" />;
  if (type === 'server') return <Server className="w-5 h-5" />;
  return <Database className="w-5 h-5" />;
}

export function NPCAgentProject() {
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-auto">
                {c.teamMembers.map((member, i) => (
                  <div key={i} className={`px-3 py-2 border rounded text-center ${i === 0 ? 'border-[#6cbcb2]/50 bg-[#6cbcb2]/10' : 'border-border-custom bg-bg-primary'}`}>
                    <span className="block text-sm font-noto text-text-primary">{member.name}</span>
                    {member.role && <span className="block text-xs font-noto text-text-secondary mt-0.5">{member.role}</span>}
                  </div>
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

      {/* Tech Stack */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.stackTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.stack.map((s, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2]/60 transition-colors">
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

      <Footer />
    </div>
  );
}
