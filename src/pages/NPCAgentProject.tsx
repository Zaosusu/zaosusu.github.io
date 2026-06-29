import { ExternalLink, ArrowLeft, ArrowRight, Trophy, Code2, Database, Server, Box, Activity, Zap, Globe, Layout, Users, GitBranch, Layers, Shield } from 'lucide-react';
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
    archDesc: '三层架构：API 层 → Agent Runtime 层 → 世界适配层。Agent Runtime 包含运行时链路、世界生成链路、外部项目接入链路三条独立编排。',
    archLayers: [
      { title: 'API 层', desc: 'FastAPI · RESTful API · WebSocket · 静态文件服务 · Swagger 文档' },
      { title: 'Agent Runtime', desc: '运行时链路：RouterAgent → NpcAgent → NpcProtocolReviewAgent → StateValidatorAgent → NpcReviewAgent。世界生成链路：WorldBuilderAgent → MechanicsDesignAgent → WorldReviewAgent → PlaytestAgent。接入链路：ProjectIntakeAgent → IntegrationAdapterAgent。' },
      { title: '世界适配层', desc: 'WorldAdapter 热插拔协议 · SandboxWorldAdapter · Deterministic Guardrails Layer' },
    ],
    pipelineTitle: '三条 Agent 编排链路',
    pipelineDesc: '框架不是单一 Agent，而是三条独立编排链路的组合。',
    pipelines: [
      { icon: 'activity', title: '运行时链路（对话链路）', desc: 'RouterAgent.route_chat() 分发单聊/群聊 → NpcAgent.respond() 生成回复 → AgentLLMOutput schema gate 校验（valid 通过 / invalid 触发 NpcProtocolReviewAgent.repair_raw_output() 修复）→ WorldRuntimeGuardrail 拦截未登记地点（最多2次重试）→ StateValidatorAgent.apply()（CommandValidator.validate() → CommandExecutor.execute()）→ NpcReviewAgent.review()。群聊时每个 NPC 独立走完整链路。' },
      { icon: 'globe', title: '世界生成链路（Quality Gate）', desc: 'RouterAgent 分发 → WorldBuilderAgent.generate() 初步决定世界状态字段 → _repair_world_config() → WorldGenerationProtocolTool.repair → SandboxWorldValidator.ensure_valid() 自动修复最低可运行字段 → MechanicsDesignAgent 整理 metadata.mechanics 并对齐 completion/action.effect → WorldReviewAgent.review() 一致性审查 → PlaytestAgent.simulate_adapter() 自动试玩 → 写入 metadata.quality_gate（validator_passed / world_review_passed / playtest_passed）。先修，再测。' },
      { icon: 'git-branch', title: '外部项目接入链路', desc: 'RouterAgent 分发 → ProjectIntakeAgent.summarize() 分析外部项目描述、文档、API → IntegrationAdapterAgent.plan() 输出 adapter_plan → 转交 WorldBuilderAgent / WorldAdapter 开发。这条链路负责把已有游戏/设定/接口文档结构化，判断是需要 sandbox JSON 还是需要实现真实 WorldAdapter 映射外部 API。' },
    ],
    modulesTitle: '核心设计',
    modules: [
      { icon: 'zap', title: '统一 JSON 输出协议与 Schema Gate', desc: 'NpcAgent.respond() 返回的必须是固定 JSON 结构（AgentLLMOutput：action_type / content / inner_thought / command / suggested_actions）。AgentLLMOutputProtocolTool 做确定性校验（不是让 LLM 自己判断），检测字段缺失、类型错误、字段漂移。校验失败触发 NpcProtocolReviewAgent：支持从 Markdown fenced JSON、普通 JSON、字段别名、纯文本四种格式恢复。修复后再校验；若仍失败，command 降级为 none，由 world adapter 生成兜底回复。' },
      { icon: 'activity', title: '字段级规则校验与自动修复', desc: 'StateValidatorAgent 读取 CommandValidator 的规则定义做确定性校验：set_player 必须有 args.patch object；complete_task 的 task_id 必须在当前世界 tasks 中存在；switch_npc 的 npc_id 必须在当前世界 NPCs 中存在；grant_item 的 item 必须非空；set_flag 必须有 key；run_world_action 的 action_id 必须存在。不合法的 command 被降级为 {"name":"none","args":{}}，绝不会让非法状态变更进入 CommandExecutor 执行层。所有约束在代码层判断，不只写在 prompt 里。' },
      { icon: 'shield', title: 'Deterministic Guardrails Layer（确定性护栏层）', desc: 'AgentLLMOutputProtocolTool（校验+修复 NPC 输出）、WorldGenerationProtocolTool（校验+修复世界生成）、CommandValidator（门卫，只判断不执行）、CommandExecutor（执行器，只执行已校验的）、SandboxWorldValidator（保存前自动修复最低可运行字段：补齐最低玩家字段、NPC、任务、action、completion、地点闭环）、WorldRuntimeGuardrail（运行时拦截未登记地点，NPC 引导去不存在地点时触发最多2次 LLM 重试，仍失败则返回安全地点引导）、evaluate_task_completions（代码判定任务完成，NPC 不允许直接写任务进度）。Agent / ReviewAgent 只提建议，最终合规/修复/执行必须落到确定性代码。' },
      { icon: 'layout', title: 'Per-NPC 私有状态与群聊', desc: 'AgentRuntime 维护 npc_agents: dict[str, NpcAgent] 和 npc_sessions: dict[str, NpcRuntimeState]。每个 NPC id 懒加载一个 NpcAgent 实例，拥有独立 NpcRuntimeState（emotion、memories、goals、turn_count、last_reply）。adapter.build_system_prompt() 将当前 NPC 私有状态注入 prompt；output.new_memories 写入该 NPC 私有记忆，不广播到世界级 RAG。群聊时同一轮玩家输入触发多个 NPC 顺序回复，每个 NPC 独立经过 schema gate → guardrail → validator → executor → review 完整链路，command 统一经过 StateValidatorAgent 和 CommandExecutor。' },
      { icon: 'box', title: '热插拔世界适配协议（WorldAdapter）', desc: 'WorldAdapter 定义统一接口：create_initial_state()、build_system_prompt()、build_human_prompt()、record_player_message()、apply_llm_output()、build_chat_response()、allowed_commands()、world_action_ids()、handle_world_action()。每个新世界只需实现这个协议即可接入，无需修改 Agent Runtime。SandboxWorldAdapter 实现了完整的 JSON 世界热插拔：data/worlds/{world_id}.json 加载后即运行。当前支持 command：none / set_player / grant_item / complete_task / switch_npc / set_flag / run_world_action。' },
      { icon: 'layers', title: 'Corrective RAG 记忆系统', desc: 'JsonVectorMemoryStore 提供长期检索记忆（data/memory/{world_id}.vector.json）。CorrectiveRagPipeline 实现检索-评分-重写-再检索的 CRAG 流程：retrieve → grade → if unreliable 则 rewrite query → retrieve again → return RagContext。RuntimeSessionStore 实现运行态持久化：AgentSessionState（emotion、memories、goals、plan、quest_progress、world_state）和每个 NPC 的 NpcRuntimeState 保存为 data/sessions/{world_id}.session.json，支持跨进程重启恢复。' },
    ],
    stackTitle: '技术栈',
    stack: [
      { icon: 'server', title: '后端', desc: 'Python · FastAPI · Uvicorn · LangChain · Pydantic · OpenAI-Compatible LLM' },
      { icon: 'database', title: '数据层', desc: 'JSON Vector Memory · Runtime Session Store · 文件型持久化 · Corrective RAG' },
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
    navPrev: '上一个：逃鸭！南京！',
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
    archDesc: 'Three-layer architecture: API Layer → Agent Runtime Layer → World Adapter Layer. Agent Runtime contains three independent orchestration chains: runtime chain, world generation chain, and external project intake chain.',
    archLayers: [
      { title: 'API Layer', desc: 'FastAPI · RESTful API · WebSocket · Static file serving · Swagger docs' },
      { title: 'Agent Runtime', desc: 'Runtime chain: RouterAgent → NpcAgent → NpcProtocolReviewAgent → StateValidatorAgent → NpcReviewAgent. World generation chain: WorldBuilderAgent → MechanicsDesignAgent → WorldReviewAgent → PlaytestAgent. Intake chain: ProjectIntakeAgent → IntegrationAdapterAgent.' },
      { title: 'World Adapter', desc: 'WorldAdapter hot-pluggable protocol · SandboxWorldAdapter · Deterministic Guardrails Layer' },
    ],
    pipelineTitle: 'Three Agent Orchestration Chains',
    pipelineDesc: 'The framework is not a single agent, but a combination of three independent orchestration chains.',
    pipelines: [
      { icon: 'activity', title: 'Runtime Chain (Dialogue Chain)', desc: 'RouterAgent.route_chat() dispatches single/group chat → NpcAgent.respond() generates reply → AgentLLMOutput schema gate validation (valid passes / invalid triggers NpcProtocolReviewAgent.repair_raw_output()) → WorldRuntimeGuardrail intercepts unregistered locations (max 2 retries) → StateValidatorAgent.apply() (CommandValidator.validate() → CommandExecutor.execute()) → NpcReviewAgent.review(). Each NPC independently walks the full chain in group chat.' },
      { icon: 'globe', title: 'World Generation Chain (Quality Gate)', desc: 'RouterAgent dispatches → WorldBuilderAgent.generate() decides world state fields → _repair_world_config() → WorldGenerationProtocolTool.repair → SandboxWorldValidator.ensure_valid() auto-repairs minimum runnable fields → MechanicsDesignAgent organizes metadata.mechanics and aligns completion/action.effect → WorldReviewAgent.review() consistency check → PlaytestAgent.simulate_adapter() auto-playtest → writes metadata.quality_gate (validator_passed / world_review_passed / playtest_passed). Fix first, then test.' },
      { icon: 'git-branch', title: 'External Project Intake Chain', desc: 'RouterAgent dispatches → ProjectIntakeAgent.summarize() analyzes external project description, documents, APIs → IntegrationAdapterAgent.plan() outputs adapter_plan → hands over to WorldBuilderAgent / WorldAdapter development. This chain structures existing games/settings/API docs and decides whether sandbox JSON or a real WorldAdapter mapping external APIs is needed.' },
    ],
    modulesTitle: 'Core Design',
    modules: [
      { icon: 'zap', title: 'Unified JSON Output Protocol & Schema Gate', desc: 'NpcAgent.respond() must return a fixed JSON structure (AgentLLMOutput: action_type / content / inner_thought / command / suggested_actions). AgentLLMOutputProtocolTool performs deterministic validation (not letting the LLM self-check), detecting missing fields, type errors, field drift. On validation failure, NpcProtocolReviewAgent triggers: supports recovery from Markdown fenced JSON, plain JSON, field aliases, and raw text. Re-validates after repair; if still failing, command downgrades to none, world adapter generates a fallback reply.' },
      { icon: 'activity', title: 'Field-Level Rule Validation & Auto-Repair', desc: 'StateValidatorAgent reads CommandValidator rule definitions for deterministic checks: set_player must have args.patch object; complete_task task_id must exist in current world tasks; switch_npc npc_id must exist in current world NPCs; grant_item item must be non-empty; set_flag must have key; run_world_action action_id must exist. Invalid commands downgrade to {"name":"none","args":{}} — illegal state changes never enter the CommandExecutor execution layer. All constraints enforced in code, not just in prompts.' },
      { icon: 'shield', title: 'Deterministic Guardrails Layer', desc: 'AgentLLMOutputProtocolTool (validate+repair NPC output), WorldGenerationProtocolTool (validate+repair world generation), CommandValidator (gatekeeper, judge only), CommandExecutor (executor, validated commands only), SandboxWorldValidator (auto-repair minimum runnable fields before save:补齐最低玩家字段、NPC、任务、action、completion、地点闭环), WorldRuntimeGuardrail (runtime interception of unregistered locations, triggers up to 2 LLM retries when NPC guides to non-existent locations, falls back to safe location guidance), evaluate_task_completions (code-based task completion, NPCs cannot directly write task progress). Agents propose; compliance/repair/execution must land in deterministic code.' },
      { icon: 'layout', title: 'Per-NPC Private State & Group Chat', desc: 'AgentRuntime maintains npc_agents: dict[str, NpcAgent] and npc_sessions: dict[str, NpcRuntimeState]. Each NPC id lazily loads one NpcAgent instance with independent NpcRuntimeState (emotion, memories, goals, turn_count, last_reply). adapter.build_system_prompt() injects current NPC private state into prompt; output.new_memories writes to that NPC\'s private memory, not broadcast to world-level RAG. Group chat: one player input triggers multiple NPCs to respond sequentially, each independently through schema gate → guardrail → validator → executor → review, commands unified through StateValidatorAgent and CommandExecutor.' },
      { icon: 'box', title: 'Hot-Pluggable World Adapter Protocol (WorldAdapter)', desc: 'WorldAdapter defines a unified interface: create_initial_state(), build_system_prompt(), build_human_prompt(), record_player_message(), apply_llm_output(), build_chat_response(), allowed_commands(), world_action_ids(), handle_world_action(). Each new world only needs to implement this protocol to plug in, no Agent Runtime modifications needed. SandboxWorldAdapter implements full JSON world hot-plug: load data/worlds/{world_id}.json and run. Current commands: none / set_player / grant_item / complete_task / switch_npc / set_flag / run_world_action.' },
      { icon: 'layers', title: 'Corrective RAG Memory System', desc: 'JsonVectorMemoryStore provides long-term retrieval memory (data/memory/{world_id}.vector.json). CorrectiveRagPipeline implements retrieve-grade-rewrite-retrieve CRAG flow: retrieve → grade → if unreliable rewrite query → retrieve again → return RagContext. RuntimeSessionStore implements runtime persistence: AgentSessionState (emotion, memories, goals, plan, quest_progress, world_state) and each NPC\'s NpcRuntimeState saved to data/sessions/{world_id}.session.json, supporting cross-process restart recovery.' },
    ],
    stackTitle: 'Tech Stack',
    stack: [
      { icon: 'server', title: 'Backend', desc: 'Python · FastAPI · Uvicorn · LangChain · Pydantic · OpenAI-Compatible LLM' },
      { icon: 'database', title: 'Data Layer', desc: 'JSON Vector Memory · Runtime Session Store · File-based persistence · Corrective RAG' },
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
    navPrev: 'Prev: Duck Escape: Nanjing',
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
  if (type === 'box') return <Box className="w-5 h-5" />;
  if (type === 'layers') return <Layers className="w-5 h-5" />;
  if (type === 'shield') return <Shield className="w-5 h-5" />;
  if (type === 'git-branch') return <GitBranch className="w-5 h-5" />;
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

      {/* Three Pipeline Chains */}
      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.pipelineTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-8">{c.pipelineDesc}</p>
          <div className="grid grid-cols-1 gap-6">
            {c.pipelines.map((p, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors">
                <div className="flex items-center gap-2 text-text-primary mb-3">
                  <ModIcon type={p.icon} />
                  <h3 className="font-noto font-bold text-base">{p.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.modulesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.modules.map((m, i) => (
              <div key={i} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2]/60 transition-colors">
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
            to="/projects/duck-escape"
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
