import { useState, useCallback } from 'react';
import { ExternalLink, ArrowLeft, Trophy, Code2, Database, Server, Box, Activity, Zap, Globe, Layout, Users, GitBranch, Layers, Shield, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';
import { ImageLightbox } from '../components/ImageLightbox';

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
    storyboardBadge: '架构图册',
    storyboardTitle: '架构图册',
    storyboardDesc: '三个版本覆盖不同受众：总览故事版讲"整个底座是什么"；Agent 职责详解版逐个讲"每个 Agent 做什么"；技术详图版给研发看 pipeline 与校验链路。',
    storyboardTalkLabel: '讲解词',
    storyboardTabOverview: '总览故事版',
    storyboardTabAgentRoles: 'Agent 职责详解版',
    storyboardTabTechnical: '技术详图版',
    storyboardSlides: [
      { num: '01', title: '总图：这个底座到底是什么', kicker: '先讲定位：我们不是做一个固定游戏，而是做一个可接入的 NPC 智能内核。', img: '/projects/npc-agent/storyboard/01_foundation_overview.png', talk: '我们做的不是某一个游戏，而是一个"NPC 智能内核"。外部游戏、网页、剧本、世界观，都可以把自己的设定交给这个内核。内核里 AI 负责生成和对话，规则层负责约束，执行层负责真正改状态。这样它不是一次性 demo，而是可以被不同项目接入的底座。', tags: ['底座定位', '热插拔世界观', '可接入不同游戏'] },
      { num: '02', title: 'RouterAgent：总调度员', kicker: '先分流，再处理，避免所有能力混在一个函数里。', img: '/projects/npc-agent/storyboard/02_router_agent.png', talk: 'RouterAgent 像前台分诊台。玩家说话、生成世界、查看 UI、自动试玩，都不是混在一起处理，而是先判断这件事应该交给谁。它现在还比较朴素，但它代表了底座的核心方向：所有能力都走清晰编排，而不是写成一锅粥。', tags: ['编排', '分流', '多 Agent 协作'] },
      { num: '03', title: '世界生成：从一句想法到可运行沙盒', kicker: '重点不是写背景，而是生成"能跑"的 NPC、任务、行动和判定字段。', img: '/projects/npc-agent/storyboard/03_world_generation.png', talk: '用户可以只给一个主题，例如"废柴逆袭修仙"或"偶像出道"。AI 先生成一个世界草案，包括角色、地点、任务、行动线和判定字段。然后规则层会修复缺字段、补任务闭环、检查行动能不能推进。最后自动试玩，确认它不是只有背景，而是真的能跑。', tags: ['WorldBuilderAgent', 'Mechanics', 'Quality Gate'] },
      { num: '04', title: '剧本拆解：把文本剧本变成可玩的世界', kicker: '能力名是"剧本拆解"；案件型剧本只是当前优先落地的案例。', img: '/projects/npc-agent/storyboard/04_script_decomposition.png', talk: '剧本拆解不是"剧本杀专属"，而是一种把文本剧本编译成可运行世界的能力。当前最先支持的是案件型剧本：公共背景、真相、角色秘密、线索、地点、时间线、结局。系统会把这些拆出来，再变成 NPC、任务和搜证行动。', tags: ['剧本拆解', '案件型剧本', '可玩世界编译'] },
      { num: '05', title: 'NPC 对话：AI 说话，但不能乱改世界', kicker: 'NPC 可以灵活表达，但任务、道具、位置必须由规则确认。', img: '/projects/npc-agent/storyboard/05_npc_conversation.png', talk: 'NPC 可以用 AI 回复，所以它有灵活性。但它不能随便说"你已经完成任务"就真的完成了。AI 只能提出一个结构化意图，规则层会检查这个意图是否合法，执行层才会真正改玩家状态、物品、任务进度。', tags: ['NPC Agent', '协议检查', '运行护栏'] },
      { num: '06', title: '约束层：为什么重点是约束', kicker: 'AI 可以创造，但不能自己证明自己合规。', img: '/projects/npc-agent/storyboard/06_guardrails_quality_gate.png', talk: '这个项目最难的不是"让 AI 说话"，而是"让 AI 在可控边界内工作"。所以我们有协议校验、世界校验、运行护栏、任务完成规则、质量门。AI 可以创造内容，但是否能保存、能执行、能完成任务，必须由确定性规则裁决。', tags: ['确定性规则', 'Schema', 'Quality Gate'] },
      { num: '07', title: 'CommandExecutor：真正改状态的手', kicker: 'AI 只是申请，规则先检查，通过后执行器才改世界。', img: '/projects/npc-agent/storyboard/07_command_executor.png', talk: 'CommandExecutor 像游戏后台的操作员。AI 说"给玩家一个道具"，只是申请；CommandValidator 先检查是否允许；通过后，CommandExecutor 才把道具写进背包。这样以后换世界、换游戏、换供应商，也不会让状态修改散落在各处。', tags: ['CommandValidator', 'CommandExecutor', '状态变更'] },
      { num: '08', title: '记忆、UI、自动试玩：让世界能长期运行', kicker: '它不是聊天框，而是一套能运行、能检查、能展示的系统。', img: '/projects/npc-agent/storyboard/08_runtime_support.png', talk: '一个可用底座不能只有聊天。它还要有记忆，让 NPC 记得发生过什么；有 UI 投影，让前端知道该展示什么；有自动试玩，让生成的新世界先自己跑一遍。这样开发者接入时，不只是拿到一个聊天框，而是拿到一套能运行、能检查、能展示的 Agent 系统。', tags: ['CRAG 记忆', 'UI 投影', '自动试玩'] },
    ],
    agentRolesSlides: [
      { num: '01', title: 'AgentRuntime：运行总控台', kicker: '不是单个聪明 NPC，而是把对话、记忆、校验、执行、快照串起来的运行层。', img: '/projects/npc-agent/storyboard/agent-roles/01.png', talk: 'AgentRuntime 像游戏现场的导演台。玩家一句话进来，它会找到当前世界、当前 NPC、相关记忆和可用行动，再把回复交给校验层检查。最后它负责保存会话、生成 UI 快照，让前端知道现在该展示什么。', tags: ['运行编排', '会话状态', '记忆接入'] },
      { num: '02', title: 'RouterAgent：总调度员', kicker: '先判断"这件事属于哪条流水线"，再交给对应 Agent。', img: '/projects/npc-agent/storyboard/agent-roles/02.png', talk: 'RouterAgent 像服务台：有人来生成世界，就送到世界生成线；有人和 NPC 聊天，就送到 NPC 运行线；有人要看前端状态，就送到 UI 投影线；有人要验证能不能玩，就送到自动试玩线。', tags: ['分流', '编排入口', '能力地图'] },
      { num: '03', title: 'ProjectIntakeAgent + IntegrationAdapterAgent：外部项目接入分析', kicker: '当一个已有游戏要接入底座时，先读懂它，再设计适配方案。', img: '/projects/npc-agent/storyboard/agent-roles/03.png', talk: '这组 Agent 像接入顾问。它先总结外部项目：这个游戏有哪些状态、接口、NPC、任务、存档方式。然后再输出"怎么接入底座"的适配建议，让底座可以服务别人的游戏。', tags: ['项目盘点', '接口对齐', '热插拔准备'] },
      { num: '04', title: 'WorldBuilderAgent：世界生成 Agent', kicker: '从主题生成世界草案：NPC、地点、任务、行动、初始状态和目标。', img: '/projects/npc-agent/storyboard/agent-roles/04.png', talk: '用户不知道怎么手搓世界观时，WorldBuilderAgent 负责先起一个能玩的沙盒。比如"修仙逆袭""偶像出道""悬疑调查"，它要把想法变成角色、地点、任务和行动，而不是只写一段背景故事。', tags: ['世界草案', '任务闭环', '行动线'] },
      { num: '05', title: 'MechanicsDesignAgent：机制字段整理员', kicker: '把世界里的"可玩规则"整理成字段、别名、类型和行动效果。', img: '/projects/npc-agent/storyboard/agent-roles/05.png', talk: '故事要变成游戏，必须有可判断的字段。修仙可能有境界、灵力、宗门声望；偶像可能有唱功、舞台表现、人气。MechanicsDesignAgent 不替世界拍脑袋，而是把 WorldBuilder 已经生成的任务完成条件和行动效果整理成清晰机制表。', tags: ['字段抽象', '完成条件', '行动效果'] },
      { num: '06', title: 'ScriptDecompositionAgent：剧本拆解 Agent', kicker: '把剧本文本拆成可检索、可校验、可被 NPC 使用的结构化资产。', img: '/projects/npc-agent/storyboard/agent-roles/06.png', talk: '这不是"剧本杀专用 Agent"，而是"剧本拆解 Agent"。它读取剧本原文，把章节、人物台词、场景说明、暗线、规则和设定拆成结构化 JSON。这样 NPC 可以记住人物关系，任务系统可以追踪线索。', tags: ['剧本拆解', '角色关系', '线索结构化'] },
      { num: '07', title: 'NpcAgent：NPC 对话 Agent', kicker: '负责角色扮演和回复生成，但状态变更必须走命令协议。', img: '/projects/npc-agent/storyboard/agent-roles/07.png', talk: 'NpcAgent 是真正和玩家说话的角色。它会参考世界设定、当前 NPC 性格、玩家状态和记忆来回复。但它不能口头宣布世界改变；如果要给道具、切换 NPC、完成任务，必须输出结构化 command，让后面的规则层审批。', tags: ['角色扮演', '结构化意图', '多 NPC'] },
      { num: '08', title: 'NpcProtocolReviewAgent：NPC 输出协议修复员', kicker: '当 AI 输出不够规整时，先把它修成系统能读懂的 JSON。', img: '/projects/npc-agent/storyboard/agent-roles/08.png', talk: 'AI 有时会多说、漏字段、格式不标准。NpcProtocolReviewAgent 像格式审稿人：它不评价剧情好不好，而是先确认输出能不能被系统读取。如果不能，就按协议修复成合法结构；修不好才进入失败恢复。', tags: ['JSON 协议', '格式修复', '失败恢复'] },
      { num: '09', title: 'StateValidatorAgent + CommandExecutor：状态门禁与执行器', kicker: 'AI 只能申请 command；通过校验后，执行器才真正改世界。', img: '/projects/npc-agent/storyboard/agent-roles/09.png', talk: '这是底座里最重要的约束层之一。NPC 说"给玩家灵石"不等于真的给；它必须输出 grant_item 这类命令。StateValidatorAgent 先检查命令是否合法，CommandExecutor 再执行。这样游戏状态不会被 AI 随口改坏。', tags: ['状态门禁', '命令协议', '真实执行'] },
      { num: '10', title: 'WorldReviewAgent：世界结构审查员', kicker: '检查一个世界是否有基础闭环：NPC、任务、行动、完成条件、机制字段是否对得上。', img: '/projects/npc-agent/storyboard/agent-roles/10.png', talk: 'WorldReviewAgent 像世界上线前的质检。它不负责写新世界，而是检查世界有没有明显缺口：有没有 NPC、有没有任务、任务能不能完成、行动有没有产出、字段是否一致。它回答的是"这个世界为什么能跑"。', tags: ['质量门', '闭环检查', '结构审查'] },
      { num: '11', title: 'UiStateProjector + UiReviewAgent：前端状态投影与 UI 审查', kicker: '把复杂世界状态变成前端能直接消费的界面数据。', img: '/projects/npc-agent/storyboard/agent-roles/11.png', talk: '后端世界状态通常很复杂，前端不应该自己猜哪些字段该展示。UiStateProjector 把状态整理成玩家面板、任务面板、NPC 列表、可行动作等 UI 数据；UiReviewAgent 再检查是否缺关键展示项。', tags: ['前端契约', '状态投影', 'UI 审查'] },
      { num: '12', title: 'PlaytestAgent + FlowReviewAgent：自动试玩与流程审查', kicker: '生成世界后，系统要先自己跑一遍，确认任务不是纸面闭环。', img: '/projects/npc-agent/storyboard/agent-roles/12.png', talk: '自动试玩器像一个不会偷懒的测试玩家。它会按世界提供的行动尝试推进任务，看能不能从开始走到完成。FlowReviewAgent 再总结流程是否卡住、目标是否清楚、是否缺少关键行动。', tags: ['自动试玩', '流程检查', 'MVP 闭环'] },
      { num: '13', title: 'CorrectiveRagPipeline：记忆检索与纠偏', kicker: '不是把所有记忆都塞给 NPC，而是检索、评分、过滤、必要时改写查询。', img: '/projects/npc-agent/storyboard/agent-roles/13.png', talk: 'NPC 要记得玩家经历，但不能把无关记忆全塞进上下文。CorrectiveRagPipeline 会先检索记忆，再判断相关性和质量；如果结果太差，会结合提示重写查询。这样 NPC 更像"记得重点"，而不是"背一堆流水账"。', tags: ['记忆检索', '相关性评分', '查询纠偏'] },
      { num: '14', title: 'ExperienceLearningAgent：体验反馈学习', kicker: '把玩家或测试反馈沉淀成可复用的改进信号。', img: '/projects/npc-agent/storyboard/agent-roles/14.png', talk: '当玩家觉得目标不清楚、NPC 不像人、任务卡住、爽点不足，这些都不应该只停留在口头反馈。ExperienceLearningAgent 负责把体验问题变成结构化经验，让后续生成世界或审查世界时能复用。', tags: ['体验反馈', '问题归因', '长期改进'] },
    ],
    technicalSlides: [
      { num: '01', title: '当前架构总图', kicker: '从请求入口到 AgentRuntime，再到世界适配器和数据目录。', img: '/projects/npc-agent/storyboard/technical/01_system_overview.png', talk: 'app/main.py 只启动服务；app/api/routes.py 提供 API；UniversalNPCAgent 是门面；真正编排在 AgentRuntime；世界通过 WorldAdapter 热插拔。外部前端应该接 API，不应该绑死内置 demo UI。', tags: ['系统总图', 'FastAPI', 'WorldAdapter'] },
      { num: '02', title: '外部项目接入流程', kicker: '已有游戏或设定先被总结，再决定用 JSON 沙盒还是写真实 Adapter。', img: '/projects/npc-agent/storyboard/technical/02_project_intake_pipeline.png', talk: 'ProjectIntakeAgent 不直接生成世界，而是把外部项目整理成结构化上下文；IntegrationAdapterAgent 判断接入策略。只需要沙盒配置就输出 recommended_world_request；外部系统拥有真实状态则需要实现真实 WorldAdapter。', tags: ['ProjectIntake', 'IntegrationAdapter', '接入策略'] },
      { num: '03', title: '世界生成流水线', kicker: 'AI 生成候选世界，规则层修复与审查，最后自动试玩形成 quality gate。', img: '/projects/npc-agent/storyboard/technical/03_world_generation_pipeline.png', talk: 'WorldBuilderAgent 初步决定字段、NPC、任务和 action；MechanicsDesignAgent 只结构化确认和修正；Validator 做最低可运行兜底。AI 失败时走 fallback 模板，保存前先经过 protocol repair 和 schema repair，最终写入 metadata.quality_gate。', tags: ['WorldBuilder', 'Quality Gate', 'Fallback'] },
      { num: '04', title: '剧本拆解流水线', kicker: '能力名是"剧本拆解"；当前实现优先支持案件型剧本。', img: '/projects/npc-agent/storyboard/technical/04_script_decomposition_pipeline.png', talk: 'ScriptDecompositionAgent 把文本结构化为 Script IR；ScriptWorldCompiler 再编译成 SandboxWorldConfig。能力名：剧本拆解。当前实现：案件型剧本。"剧本杀"只是应用场景之一。', tags: ['Script IR', 'Compiler', 'SandboxWorldConfig'] },
      { num: '05', title: 'NPC 单聊运行链路', kicker: '玩家输入进入 Runtime 后，经过 RAG、NPC、协议修复、护栏、状态校验与响应构建。', img: '/projects/npc-agent/storyboard/technical/05_npc_chat_runtime.png', talk: 'NPC 的 AI 回复不是直接落地。它先经过协议检查，再经过地点/行动护栏，最后交给 StateValidatorAgent 决定 command 是否可以执行。每个 NPC 有独立 NpcRuntimeState，对话前注入 Corrective RAG 记忆，违规地点最多 retry 两次后确定性兜底。', tags: ['单聊链路', 'Guardrail', 'StateValidator'] },
      { num: '06', title: 'Command 校验与执行', kicker: 'LLM 只能提出 command，不能直接修改世界。', img: '/projects/npc-agent/storyboard/technical/06_command_validation_execution.png', talk: 'CommandValidator 是门禁，检查白名单、参数和引用对象；CommandExecutor 只执行已通过校验的 command。当前支持 set_player、grant_item、complete_task、switch_npc、set_flag、run_world_action。不合法 command 降级为 none 并写入记忆。', tags: ['CommandValidator', 'CommandExecutor', '白名单'] },
      { num: '07', title: 'Schema 修复与 Quality Gate', kicker: '世界不是生成完就信任，而是先修、再审、再试玩。', img: '/projects/npc-agent/storyboard/technical/07_schema_quality_gate.png', talk: '世界候选先经过 WorldGenerationProtocolTool 和 SandboxWorldValidator，再交给 WorldReviewAgent 与 PlaytestAgent。能修复且能跑通：quality_gate.passed=true；修复后仍跑不通则返回修复报告。后续可在 API 层拒绝保存失败世界。', tags: ['Schema Repair', 'Quality Gate', 'Protocol'] },
      { num: '08', title: 'CRAG 记忆链路', kicker: '不是简单拿最近消息，而是检索、评分、不可靠时改写查询再检索。', img: '/projects/npc-agent/storyboard/technical/08_crag_memory_pipeline.png', talk: 'CorrectiveRagPipeline 会先 retrieve，再 grade。如果结果不可靠，会 rewrite query 并二次 retrieve，最后写入 state.rag_context。记忆文件在 data/memory/{world_id}.vector.json，注入位置在 adapter.build_system_prompt()，Runtime 保留最近 30 条相关记忆。', tags: ['CRAG', 'Retrieve', 'Grade', 'Rewrite'] },
      { num: '09', title: 'UI 状态投影', kicker: '前端不应该直接猜世界 JSON，而应该读取 snapshot 和投影字段。', img: '/projects/npc-agent/storyboard/technical/09_ui_projection_pipeline.png', talk: 'UiStateProjector 把世界运行态投影成前端更好展示的数据；UiReviewAgent 检查任务 completion 需要的 UI 字段是否缺失。前端优先读 SessionSnapshotResponse，使用 nearby_npcs、speaker、suggested_actions。调试面板可展示 reviews。', tags: ['UI Projection', 'Snapshot', '前端契约'] },
      { num: '10', title: '自动试玩器', kicker: '当前是确定性 action 顺序试玩，不是 LLM 玩家。', img: '/projects/npc-agent/storyboard/technical/10_playtest_pipeline.png', talk: 'PlaytestAgent 复制初始状态，按 adapter.world_action_ids() 执行 action，记录每一步完成了哪些任务，最终判断闭环是否可达。不是智能玩家，不会自由探索复杂分支；能发现 action 顺序跑完仍无法完成的世界；后续可升级成目标搜索/分支图试玩。', tags: ['Playtest', 'Action 模拟', '闭环检测'] },
      { num: '11', title: 'AI 与确定性约束边界', kicker: '这是当前底座最核心的架构原则：AI 创造，规则裁决，执行器落地。', img: '/projects/npc-agent/storyboard/technical/11_ai_vs_rules_boundary.png', talk: 'AI 可以生成候选内容，但不能自己决定"我合规"。保存、修复、执行、任务完成判定，都必须落到确定性规则或 Tool/Executor。AI 负责想象，规则负责裁决，执行器负责改状态。', tags: ['AI/规则边界', '确定性', '架构原则'] },
    ],
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
    storyboardBadge: 'Architecture Storyboard',
    storyboardTitle: 'Architecture Storyboard',
    storyboardDesc: 'Three editions for different audiences: Overview explains "what the base is"; Agent Roles details "what each agent does"; Technical Diagrams shows pipelines and validation chains for engineers.',
    storyboardTalkLabel: 'Narrative',
    storyboardTabOverview: 'Overview',
    storyboardTabAgentRoles: 'Agent Roles',
    storyboardTabTechnical: 'Technical Diagrams',
    storyboardSlides: [
      { num: '01', title: 'Overview: What Is This Base', kicker: 'Positioning first: we are not building a fixed game, but a pluggable NPC intelligence kernel.', img: '/projects/npc-agent/storyboard/01_foundation_overview.png', talk: 'We are not building a specific game, but an "NPC intelligence kernel". External games, web pages, scripts, and worldviews can all hand their settings to this kernel. Inside, AI handles generation and dialogue, the rules layer enforces constraints, and the execution layer actually changes state. It is not a one-off demo, but a reusable base that different projects can plug into.', tags: ['Base Positioning', 'Hot-plug Worldview', 'Multi-game Support'] },
      { num: '02', title: 'RouterAgent: The Dispatcher', kicker: 'Dispatch first, then process. Avoid mixing all capabilities in one function.', img: '/projects/npc-agent/storyboard/02_router_agent.png', talk: 'RouterAgent acts like a triage desk. Player messages, world generation, UI queries, and auto-playtests are not handled in one big blob. Instead, it first decides whom to hand the task to. It is still simple, but it represents the core direction of the base: all capabilities follow clear orchestration, not a messy stew.', tags: ['Orchestration', 'Dispatch', 'Multi-agent Collaboration'] },
      { num: '03', title: 'World Generation: From an Idea to a Runnable Sandbox', kicker: 'The point is not writing lore, but generating runnable NPCs, quests, actions, and judgment fields.', img: '/projects/npc-agent/storyboard/03_world_generation.png', talk: 'Users can give just a theme, such as "underdog cultivates immortality" or "idol debut". AI first generates a world draft, including characters, locations, quests, action lines, and judgment fields. Then the rules layer fixes missing fields, closes quest loops, and checks whether actions can advance. Finally, auto-playtest confirms it is not just lore, but actually runnable.', tags: ['WorldBuilderAgent', 'Mechanics', 'Quality Gate'] },
      { num: '04', title: 'Script Decomposition: Turning Text into a Playable World', kicker: '"Script decomposition" is the capability; murder-mystery scripts are just the current prioritized case.', img: '/projects/npc-agent/storyboard/04_script_decomposition.png', talk: 'Script decomposition is not exclusive to murder-mystery games. It is a capability that compiles text scripts into runnable worlds. The current priority is case-type scripts: public background, truth, character secrets, clues, locations, timeline, endings. The system extracts these and turns them into NPCs, quests, and investigation actions.', tags: ['Script Decomposition', 'Case-type Script', 'Playable World Compiler'] },
      { num: '05', title: 'NPC Dialogue: AI Talks, But Cannot Mess with the World', kicker: 'NPCs can express flexibly, but quests, items, and locations must be confirmed by rules.', img: '/projects/npc-agent/storyboard/05_npc_conversation.png', talk: 'NPCs use AI replies, so they are flexible. But they cannot simply say "you have completed the quest" and make it true. AI can only propose a structured intent; the rules layer checks whether the intent is legal, and only then does the execution layer actually change player state, items, and quest progress.', tags: ['NPC Agent', 'Protocol Check', 'Runtime Guardrail'] },
      { num: '06', title: 'Guardrails: Why Constraints Are the Focus', kicker: 'AI can create, but cannot prove its own compliance.', img: '/projects/npc-agent/storyboard/06_guardrails_quality_gate.png', talk: 'The hardest part of this project is not "making AI talk", but "making AI work within controllable boundaries". That is why we have protocol validation, world validation, runtime guardrails, quest completion rules, and quality gates. AI can create content, but whether it can be saved, executed, and completed must be decided by deterministic rules.', tags: ['Deterministic Rules', 'Schema', 'Quality Gate'] },
      { num: '07', title: 'CommandExecutor: The Hand That Actually Changes State', kicker: 'AI only applies; rules check first; the executor changes the world only after approval.', img: '/projects/npc-agent/storyboard/07_command_executor.png', talk: 'CommandExecutor is like a game backend operator. When AI says "give the player an item", that is only an application. CommandValidator first checks whether it is allowed. Only after passing does CommandExecutor write the item into the inventory. This way, changing worlds, games, or vendors later will not scatter state modifications everywhere.', tags: ['CommandValidator', 'CommandExecutor', 'State Change'] },
      { num: '08', title: 'Memory, UI, Auto-playtest: Keeping Worlds Running Long-term', kicker: 'It is not a chat box, but a system that can run, inspect, and display.', img: '/projects/npc-agent/storyboard/08_runtime_support.png', talk: 'A usable base needs more than chat. It needs memory so NPCs remember what happened; UI projection so the frontend knows what to display; and auto-playtest so newly generated worlds run through themselves first. When developers plug in, they do not just get a chat box, but a runnable, inspectable, displayable Agent system.', tags: ['CRAG Memory', 'UI Projection', 'Auto-playtest'] },
    ],
    agentRolesSlides: [
      { num: '01', title: 'AgentRuntime: Runtime Console', kicker: 'Not a single smart NPC, but a runtime layer that strings together dialogue, memory, validation, execution, and snapshots.', img: '/projects/npc-agent/storyboard/agent-roles/01.png', talk: 'AgentRuntime is like a game director\'s desk. When a player speaks, it finds the current world, current NPC, relevant memories, and available actions, then hands the reply to the validation layer. Finally it saves the session and generates a UI snapshot so the frontend knows what to display.', tags: ['Runtime Orchestration', 'Session State', 'Memory Access'] },
      { num: '02', title: 'RouterAgent: The Dispatcher', kicker: 'First judge "which pipeline does this belong to", then hand it to the right agent.', img: '/projects/npc-agent/storyboard/agent-roles/02.png', talk: 'RouterAgent acts like a service desk: someone wants to generate a world → sent to world generation line; someone wants to chat with an NPC → sent to NPC runtime line; someone wants to see frontend state → sent to UI projection line; someone wants to verify playability → sent to auto-playtest line.', tags: ['Dispatch', 'Orchestration Entry', 'Capability Map'] },
      { num: '03', title: 'ProjectIntakeAgent + IntegrationAdapterAgent: External Project Intake', kicker: 'When an existing game wants to plug into the base, first understand it, then design an adapter plan.', img: '/projects/npc-agent/storyboard/agent-roles/03.png', talk: 'This agent pair acts like an integration consultant. It first summarizes the external project: what states, interfaces, NPCs, quests, and save methods does this game have. Then it outputs an adapter recommendation so the base can serve other games, not just its own demo.', tags: ['Project Inventory', 'Interface Alignment', 'Hot-plug Prep'] },
      { num: '04', title: 'WorldBuilderAgent: World Generation Agent', kicker: 'From a theme to a world draft: NPCs, locations, quests, actions, initial state, and goals.', img: '/projects/npc-agent/storyboard/agent-roles/04.png', talk: 'When users do not know how to hand-craft a worldview, WorldBuilderAgent is responsible for bootstrapping a playable sandbox. Themes like "underdog cultivates immortality", "idol debut", or "mystery investigation" become characters, locations, quests, and actions — not just background lore.', tags: ['World Draft', 'Quest Loop', 'Action Line'] },
      { num: '05', title: 'MechanicsDesignAgent: Mechanics Field Organizer', kicker: 'Turn "playable rules" in the world into fields, aliases, types, and action effects.', img: '/projects/npc-agent/storyboard/agent-roles/05.png', talk: 'Stories must become games with judgeable fields. Cultivation might have realm, spiritual power, and sect reputation; idols might have singing, stage presence, and popularity. MechanicsDesignAgent does not make up fields, but organizes the completion conditions and action effects that WorldBuilder already generated into a clean mechanics table.', tags: ['Field Abstraction', 'Completion Condition', 'Action Effect'] },
      { num: '06', title: 'ScriptDecompositionAgent: Script Decomposition Agent', kicker: 'Turn script text into retrievable, verifiable, NPC-usable structured assets.', img: '/projects/npc-agent/storyboard/agent-roles/06.png', talk: 'This is not a "murder-mystery-only" agent, but a "script decomposition" agent. It reads the original script, decomposing chapters, character lines, scene descriptions, hidden threads, rules, and settings into structured JSON. This way NPCs can remember relationships and the quest system can track clues.', tags: ['Script Decomposition', 'Character Relations', 'Clue Structuring'] },
      { num: '07', title: 'NpcAgent: NPC Dialogue Agent', kicker: 'Handles roleplay and reply generation, but state changes must go through the command protocol.', img: '/projects/npc-agent/storyboard/agent-roles/07.png', talk: 'NpcAgent is the character that actually talks to the player. It references world settings, current NPC personality, player state, and memory to reply. But it cannot verbally announce world changes; to give items, switch NPCs, or complete quests, it must output a structured command for the rules layer to approve.', tags: ['Roleplay', 'Structured Intent', 'Multi-NPC'] },
      { num: '08', title: 'NpcProtocolReviewAgent: NPC Output Protocol Repair', kicker: 'When AI output is not regular enough, fix it into JSON the system can read.', img: '/projects/npc-agent/storyboard/agent-roles/08.png', talk: 'AI sometimes talks too much, misses fields, or uses non-standard formats. NpcProtocolReviewAgent acts like a format editor: it does not judge whether the plot is good, but first confirms whether the output can be read by the system. If not, it repairs into a legal structure according to protocol; only if repair fails does it enter failure recovery.', tags: ['JSON Protocol', 'Format Repair', 'Failure Recovery'] },
      { num: '09', title: 'StateValidatorAgent + CommandExecutor: State Gate & Executor', kicker: 'AI can only apply for a command; after validation passes, the executor actually changes the world.', img: '/projects/npc-agent/storyboard/agent-roles/09.png', talk: 'This is one of the most important constraint layers in the base. An NPC saying "give the player a spirit stone" does not mean it really happens; it must output a command like grant_item. StateValidatorAgent first checks whether the command is legal, then CommandExecutor executes. This prevents AI from casually corrupting game state.', tags: ['State Gate', 'Command Protocol', 'Real Execution'] },
      { num: '10', title: 'WorldReviewAgent: World Structure Reviewer', kicker: 'Check whether a world has basic closure: NPCs, quests, actions, completion conditions, and mechanic fields all match.', img: '/projects/npc-agent/storyboard/agent-roles/10.png', talk: 'WorldReviewAgent is like pre-launch quality inspection. It does not write new worlds, but checks for obvious gaps: are there NPCs? Are there quests? Can quests be completed? Do actions have outputs? Are fields consistent? It answers "why can this world run".', tags: ['Quality Gate', 'Closure Check', 'Structure Review'] },
      { num: '11', title: 'UiStateProjector + UiReviewAgent: Frontend State Projection & UI Review', kicker: 'Turn complex world state into interface data the frontend can directly consume.', img: '/projects/npc-agent/storyboard/agent-roles/11.png', talk: 'Backend world state is usually complex; the frontend should not guess which fields to display. UiStateProjector organizes state into player panels, quest panels, NPC lists, and available actions; UiReviewAgent then checks whether key display items are missing.', tags: ['Frontend Contract', 'State Projection', 'UI Review'] },
      { num: '12', title: 'PlaytestAgent + FlowReviewAgent: Auto-playtest & Flow Review', kicker: 'After generating a world, the system must run through it itself to confirm quests are not just paper-closed.', img: '/projects/npc-agent/storyboard/agent-roles/12.png', talk: 'The auto-playtester is like a test player that never gets lazy. It tries to advance quests using the actions provided by the world, checking whether it can go from start to finish. FlowReviewAgent then summarizes whether the flow is stuck, goals are clear, or key actions are missing.', tags: ['Auto-playtest', 'Flow Check', 'MVP Closure'] },
      { num: '13', title: 'CorrectiveRagPipeline: Memory Retrieval & Correction', kicker: 'Not dumping all memories into the NPC, but retrieving, scoring, filtering, and rewriting queries when necessary.', img: '/projects/npc-agent/storyboard/agent-roles/13.png', talk: 'NPCs must remember player experiences, but cannot stuff irrelevant memories into context. CorrectiveRagPipeline first retrieves memories, then judges relevance and quality; if results are too poor, it rewrites the query with hints. This makes NPCs "remember the highlights" rather than "recite a transcript".', tags: ['Memory Retrieval', 'Relevance Scoring', 'Query Correction'] },
      { num: '14', title: 'ExperienceLearningAgent: Experience Feedback Learning', kicker: 'Turn player or test feedback into reusable improvement signals.', img: '/projects/npc-agent/storyboard/agent-roles/14.png', talk: 'When players feel goals are unclear, NPCs are unconvincing, quests are stuck, or excitement is lacking, these should not remain as verbal feedback only. ExperienceLearningAgent turns experience issues into structured knowledge so subsequent world generation or review can reuse them.', tags: ['Experience Feedback', 'Issue Attribution', 'Long-term Improvement'] },
    ],
    technicalSlides: [
      { num: '01', title: 'System Overview', kicker: 'From request entry to AgentRuntime, then to world adapter and data directories.', img: '/projects/npc-agent/storyboard/technical/01_system_overview.png', talk: 'app/main.py only starts the service; app/api/routes.py provides APIs; UniversalNPCAgent is the facade; real orchestration is in AgentRuntime; worlds plug in via WorldAdapter. External frontends should use APIs, not bind to the built-in demo UI.', tags: ['System Overview', 'FastAPI', 'WorldAdapter'] },
      { num: '02', title: 'External Project Intake Pipeline', kicker: 'Existing games or settings are first summarized, then decide between JSON sandbox or real Adapter.', img: '/projects/npc-agent/storyboard/technical/02_project_intake_pipeline.png', talk: 'ProjectIntakeAgent does not directly generate worlds, but structures external projects into context; IntegrationAdapterAgent decides the integration strategy. Sandbox-only needs output recommended_world_request; external systems with real state need a real WorldAdapter implementation.', tags: ['ProjectIntake', 'IntegrationAdapter', 'Integration Strategy'] },
      { num: '03', title: 'World Generation Pipeline', kicker: 'AI generates candidate worlds, rules layer repairs and reviews, finally auto-playtest forms quality gate.', img: '/projects/npc-agent/storyboard/technical/03_world_generation_pipeline.png', talk: 'WorldBuilderAgent preliminarily decides fields, NPCs, quests, and actions; MechanicsDesignAgent only structurally confirms and corrects; Validator provides minimum runnable fallback. On AI failure, use fallback template; before save, run protocol repair and schema repair; finally write metadata.quality_gate.', tags: ['WorldBuilder', 'Quality Gate', 'Fallback'] },
      { num: '04', title: 'Script Decomposition Pipeline', kicker: 'Capability name is "script decomposition"; current implementation prioritizes case-type scripts.', img: '/projects/npc-agent/storyboard/technical/04_script_decomposition_pipeline.png', talk: 'ScriptDecompositionAgent structures text into Script IR; ScriptWorldCompiler then compiles into SandboxWorldConfig. Capability: script decomposition. Current implementation: case-type scripts. "Murder mystery" is just one application scenario.', tags: ['Script IR', 'Compiler', 'SandboxWorldConfig'] },
      { num: '05', title: 'NPC Single-chat Runtime Chain', kicker: 'After player input enters Runtime, it passes through RAG, NPC, protocol repair, guardrail, state validation, and response construction.', img: '/projects/npc-agent/storyboard/technical/05_npc_chat_runtime.png', talk: 'NPC AI replies do not directly land. They first pass protocol checks, then location/action guardrails, and finally StateValidatorAgent decides whether the command can execute. Each NPC has independent NpcRuntimeState; Corrective RAG memory is injected before dialogue; illegal locations retry at most twice then deterministically fall back.', tags: ['Single-chat Chain', 'Guardrail', 'StateValidator'] },
      { num: '06', title: 'Command Validation & Execution', kicker: 'LLM can only propose commands, not directly modify the world.', img: '/projects/npc-agent/storyboard/technical/06_command_validation_execution.png', talk: 'CommandValidator is the gatekeeper, checking whitelist, parameters, and referenced objects; CommandExecutor only executes validated commands. Currently supports set_player, grant_item, complete_task, switch_npc, set_flag, run_world_action. Illegal commands downgrade to none and are written to memory.', tags: ['CommandValidator', 'CommandExecutor', 'Whitelist'] },
      { num: '07', title: 'Schema Repair & Quality Gate', kicker: 'Worlds are not trusted after generation; they are repaired, reviewed, and playtested first.', img: '/projects/npc-agent/storyboard/technical/07_schema_quality_gate.png', talk: 'World candidates first pass WorldGenerationProtocolTool and SandboxWorldValidator, then WorldReviewAgent and PlaytestAgent. If repairable and runnable: quality_gate.passed=true; if still broken after repair, return repair report. API layer can later reject failed worlds.', tags: ['Schema Repair', 'Quality Gate', 'Protocol'] },
      { num: '08', title: 'CRAG Memory Chain', kicker: 'Not simply taking recent messages, but retrieving, scoring, and rewriting queries when unreliable.', img: '/projects/npc-agent/storyboard/technical/08_crag_memory_pipeline.png', talk: 'CorrectiveRagPipeline first retrieves, then grades. If results are unreliable, it rewrites query and retrieves again, finally writing to state.rag_context. Memory files are at data/memory/{world_id}.vector.json; injection point is adapter.build_system_prompt(); Runtime keeps the latest 30 relevant memories.', tags: ['CRAG', 'Retrieve', 'Grade', 'Rewrite'] },
      { num: '09', title: 'UI State Projection', kicker: 'Frontends should not guess world JSON; they should read snapshot and projection fields.', img: '/projects/npc-agent/storyboard/technical/09_ui_projection_pipeline.png', talk: 'UiStateProjector projects runtime world state into frontend-friendly data; UiReviewAgent checks whether UI fields needed for task completion are missing. Frontends should prefer SessionSnapshotResponse, using nearby_npcs, speaker, suggested_actions. Debug panels can show reviews.', tags: ['UI Projection', 'Snapshot', 'Frontend Contract'] },
      { num: '10', title: 'Auto-playtester', kicker: 'Currently deterministic action-sequence playtest, not an LLM player.', img: '/projects/npc-agent/storyboard/technical/10_playtest_pipeline.png', talk: 'PlaytestAgent copies initial state, executes actions via adapter.world_action_ids(), records which quests are completed at each step, and finally judges whether closure is reachable. Not an intelligent player; cannot freely explore complex branches; can discover worlds where action sequences still cannot complete; future upgrade to goal search / branch graph playtest.', tags: ['Playtest', 'Action Simulation', 'Closure Detection'] },
      { num: '11', title: 'AI vs Deterministic Constraint Boundary', kicker: 'The core architectural principle of this base: AI creates, rules judge, executors land.', img: '/projects/npc-agent/storyboard/technical/11_ai_vs_rules_boundary.png', talk: 'AI can generate candidate content, but cannot decide "I am compliant". Save, repair, execute, and task completion must all land in deterministic rules or Tool/Executor. AI imagines, rules judge, executors change state.', tags: ['AI/Rules Boundary', 'Determinism', 'Architecture Principle'] },
    ],
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

  const [activeTab, setActiveTab] = useState<'overview' | 'agent-roles' | 'technical'>('overview');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentSlides = activeTab === 'overview' ? c.storyboardSlides : activeTab === 'agent-roles' ? c.agentRolesSlides : c.technicalSlides;
  const lightboxImages = currentSlides.map(s => ({ src: s.img, alt: s.title, title: s.title }));
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const prevImage = useCallback(() => setLightboxIndex(i => (i - 1 + lightboxImages.length) % lightboxImages.length), [lightboxImages.length]);
  const nextImage = useCallback(() => setLightboxIndex(i => (i + 1) % lightboxImages.length), [lightboxImages.length]);

  const tabs = [
    { key: 'overview' as const, label: c.storyboardTabOverview },
    { key: 'agent-roles' as const, label: c.storyboardTabAgentRoles },
    { key: 'technical' as const, label: c.storyboardTabTechnical },
  ];

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

      {/* Architecture Storyboard */}
      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <div className="flex items-center gap-2 text-[#9bd8cf] mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="font-noto text-sm">{c.storyboardBadge}</span>
          </div>
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-4">{c.storyboardTitle}</h2>
          <p className="font-noto text-base text-text-secondary mb-6 max-w-3xl">{c.storyboardDesc}</p>
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-noto font-medium border transition-colors duration-200 ${
                  activeTab === tab.key
                    ? 'border-[#6cbcb2]/70 bg-[#6cbcb2]/14 text-text-primary'
                    : 'border-border-custom bg-bg-primary text-text-secondary hover:border-[#6cbcb2]/40 hover:text-text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="space-y-8">
            {currentSlides.map((slide, i) => (
              <div key={i} className="rounded border border-border-custom bg-bg-primary overflow-hidden">
                {/* Header */}
                <div className="flex items-start gap-4 p-5 md:p-6 border-b border-border-custom">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center text-white font-inter font-bold text-lg">
                    {slide.num}
                  </div>
                  <div>
                    <h3 className="font-noto font-bold text-lg md:text-xl text-text-primary">{slide.title}</h3>
                    <p className="font-noto text-sm text-text-secondary mt-1">{slide.kicker}</p>
                  </div>
                </div>
                {/* Image */}
                <div className="p-5 md:p-6">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full rounded-lg border border-border-custom cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(i)}
                    loading="lazy"
                  />
                </div>
                {/* Talk track */}
                <div className="mx-5 md:mx-6 mb-6 p-5 rounded-lg bg-bg-secondary border border-border-custom">
                  <h4 className="font-noto font-bold text-sm text-text-primary mb-2">{c.storyboardTalkLabel}</h4>
                  <p className="font-noto text-sm text-text-secondary leading-relaxed">{slide.talk}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {slide.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-noto font-medium border border-[#6cbcb2]/30 bg-[#6cbcb2]/10 text-[#9bd8cf]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

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
