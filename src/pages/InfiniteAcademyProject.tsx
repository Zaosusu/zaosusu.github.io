import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Code2,
  Database,
  ExternalLink,
  FileJson,
  Gamepad2,
  GitBranch,
  Mail,
  PencilRuler,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { Footer } from '../sections/Footer';

const t = {
  zh: {
    back: '返回首页',
    title: '无限学园',
    subtitle: 'Infinite Academy · Kimi Agent Godot Edition',
    desc: '基于 Godot 4 的视觉小说/养成项目，配套 React 剧情编辑器与本地 AIGC 内容资产生产管线。编辑器负责角色、NPC、多剧情线和节点式剧情制作，Pipeline 负责剧情、立绘、语音等资产的生成与同步。',
    status: '原型开发中 · Godot 运行时 + React 编辑器已打通',
    pipelineTitle: '内容生产管线',
    pipelineDesc:
      '项目核心不是单个剧情脚本，而是一套“编辑器到游戏运行时”的内容管线：在 React 编辑器中制作角色模块、NPC 和剧情图，导出 Godot 可加载的模块文件，再由游戏端的 ModuleManager 与 StoryManager 解析播放。',
    pipeline: [
      { title: 'React 编辑器', desc: '节点画布、属性面板、角色管理、NPC 管理、多剧情线选择。' },
      { title: 'JSON 模块', desc: '.editor.json 保存编辑器工作状态，.module.json 面向 Godot 运行时。' },
      { title: 'Godot 加载', desc: 'ModuleManager 扫描 resources/modules，并自动识别角色立绘资源。' },
      { title: '剧情播放', desc: 'StoryManager 构建剧情图，VisualNovelPlayer 接收信号并驱动画面。' },
    ],
    aigcTitle: '本地 AIGC 驱动的内容资产生产管线',
    aigcDesc:
      '无限学园不是单纯的游戏 Demo，而是一套把“内容资产管理”和“本地部署 AIGC 生产能力”接起来的制作系统。剧情文本、基础立绘、参考音频、背景和 BGM 先作为源资产沉淀在 pipeline/pipeline/source，再由 Pipeline 转换、生成、同步为 Godot 可直接读取的运行时资源。',
    aigcFlow: [
      { title: '剧情资产', desc: 'source/stories/{角色}/ 下维护 txt 剧情，StoryConverter 扫描角色目录并转换为 godot/resources/data/stories/*.json。' },
      { title: '立绘资产', desc: 'source/sprites/{角色}/normal.png 作为基础立绘，SpriteGenerator 调用本地 ComfyUI，在统一画风下生成 normal、happy、shy、sad、angry 五种表情。' },
      { title: '语音资产', desc: 'VoiceGenerator 支持 GPT-SoVITS、ChatTTS、Edge TTS、EmotiVoice；默认偏向 GPT-SoVITS v2Pro，用角色参考音频批量生成对白语音。' },
      { title: '资源同步', desc: 'AssetSyncer 与 PipelineState 负责增量同步、缓存状态和强制重建，把剧情、立绘、背景、BGM、语音同步到 Godot resources。' },
    ],
    localTitle: '本地部署能力',
    local: [
      'ComfyUI 运行在 127.0.0.1:8188，负责图生图式表情立绘生成，可替换 checkpoint 模型。',
      'GPT-SoVITS v2Pro API 运行在 localhost:9880，通过角色模型、参考音频和 prompt_text 生成角色语音。',
      '语音管线保留 ChatTTS、Edge TTS、EmotiVoice 作为可切换后端，便于在效果、速度和稳定性之间取舍。',
      'pipeline.py 提供 story、sprite、voice、asset、sync、status、test-voice 命令，支持按角色、剧情、行号、情绪筛选生成。',
    ],
    modulesTitle: '核心模块',
    modules: [
      { icon: 'pencil', title: '节点式剧情编辑器', desc: 'React + Vite 实现剧情画布，支持对白、选择、背景/BGM 切换和节点属性编辑。' },
      { icon: 'boxes', title: '角色模块系统', desc: '以角色为单位组织剧情、NPC、立绘和多剧情线，方便扩展不同角色内容包。' },
      { icon: 'json', title: '双 JSON 格式', desc: '编辑器格式保留节点位置和工作状态；模块格式简化为 Godot 运行时需要的数据结构。' },
      { icon: 'branch', title: '分支剧情播放', desc: 'Godot 端使用 StoryGraph 管理节点与边，支持选项分支、故事结束和运行时信号。' },
    ],
    stackTitle: '技术栈',
    stack: [
      { icon: 'game', title: 'Godot 游戏端', desc: 'Godot 4.x · GDScript · Autoload · Signal-driven UI' },
      { icon: 'code', title: 'React 编辑器', desc: 'React 18 · Vite · Zustand · 节点画布组件' },
      { icon: 'database', title: '内容数据', desc: 'module.json · editor.json · 角色立绘自动扫描 · 背景/BGM 资源目录' },
    ],
    runtimeTitle: '运行时设计',
    runtime: [
      'ModuleManager 负责扫描 resources/modules，加载角色模块并提供角色数据、剧情图数据和立绘路径。',
      'CharacterModule 封装角色数据，并根据角色 ID 自动扫描 resources/girls/{id}/ 下的 normal、happy、sad 等表情立绘。',
      'StoryManager 负责 play_storyline 流程，发出 line_displayed、background_changed、choices_displayed、story_ended 等信号。',
      'VisualNovelPlayer 订阅剧情信号，控制文字、角色、背景和选择项的展示。',
    ],
    editorTitle: '编辑器能力',
    editor: [
      '保存 .editor.json，可恢复完整编辑状态和节点位置。',
      '导出 .module.json，可直接放入 Godot resources/modules 目录。',
      '支持角色库、NPC 管理、剧情线选择和导入已有模块。',
      '导入模块时会检测多故事结构并给出兼容性提示。',
    ],
    navPrev: '',
    navNext: '下一个：逃鸭！南京！',
    contactTitle: '联系',
    contactDesc: '对互动叙事、工具链或 Godot 内容管线感兴趣，欢迎交流：',
    email: 'qinqiao2014@gmail.com',
  },
  en: {
    back: 'Back to Home',
    title: 'Infinite Academy',
    subtitle: 'Kimi Agent Godot Edition',
    desc: 'A Godot 4 visual novel / simulation prototype with a React story editor and a locally deployed AIGC content-asset pipeline. The editor manages characters, NPCs, multiple storylines, and node-based stories, while the pipeline generates and syncs story, sprite, and voice assets.',
    status: 'Prototype · Godot runtime and React editor pipeline connected',
    pipelineTitle: 'Content Pipeline',
    pipelineDesc:
      'The core is a content pipeline rather than a single story script: author character modules, NPCs, and story graphs in the React editor, export Godot-loadable module files, then let ModuleManager and StoryManager parse and play them at runtime.',
    pipeline: [
      { title: 'React Editor', desc: 'Node canvas, property panel, character manager, NPC manager, and storyline selector.' },
      { title: 'JSON Modules', desc: '.editor.json preserves editor state; .module.json targets the Godot runtime.' },
      { title: 'Godot Loading', desc: 'ModuleManager scans resources/modules and auto-detects character sprite folders.' },
      { title: 'Story Playback', desc: 'StoryManager builds the graph; VisualNovelPlayer receives signals and drives the UI.' },
    ],
    aigcTitle: 'Local AIGC Content-Asset Pipeline',
    aigcDesc:
      'Infinite Academy is not just a game demo. It is a production system that connects content-asset management with locally deployed AIGC generation. Story text, base sprites, reference audio, backgrounds, and BGM are kept as source assets under pipeline/pipeline/source, then converted, generated, and synced into Godot-ready runtime resources.',
    aigcFlow: [
      { title: 'Story Assets', desc: 'txt scripts are maintained under source/stories/{character}/. StoryConverter scans character folders and emits godot/resources/data/stories/*.json.' },
      { title: 'Sprite Assets', desc: 'source/sprites/{character}/normal.png is used as the base portrait. SpriteGenerator calls local ComfyUI to generate normal, happy, shy, sad, and angry expressions in a consistent style.' },
      { title: 'Voice Assets', desc: 'VoiceGenerator supports GPT-SoVITS, ChatTTS, Edge TTS, and EmotiVoice. The preferred path uses GPT-SoVITS v2Pro with character reference audio for batch dialogue voice generation.' },
      { title: 'Asset Sync', desc: 'AssetSyncer and PipelineState handle incremental sync, cache state, and forced rebuilds, moving stories, sprites, backgrounds, BGM, and voices into Godot resources.' },
    ],
    localTitle: 'Local Deployment',
    local: [
      'ComfyUI runs on 127.0.0.1:8188 for img2img expression portrait generation, with checkpoint models configurable.',
      'GPT-SoVITS v2Pro API runs on localhost:9880 and generates character voices from character models, reference audio, and prompt_text.',
      'The voice pipeline keeps ChatTTS, Edge TTS, and EmotiVoice as switchable backends for different quality, speed, and stability tradeoffs.',
      'pipeline.py exposes story, sprite, voice, asset, sync, status, and test-voice commands, with filters by character, story, line, and emotion.',
    ],
    modulesTitle: 'Core Modules',
    modules: [
      { icon: 'pencil', title: 'Node Story Editor', desc: 'React + Vite editor for dialogue, choices, background/BGM changes, and node properties.' },
      { icon: 'boxes', title: 'Character Modules', desc: 'Stories, NPCs, sprites, and multiple storylines are packaged by character for scalable content packs.' },
      { icon: 'json', title: 'Dual JSON Formats', desc: 'Editor format keeps node positions and workspace state; module format is optimized for the Godot runtime.' },
      { icon: 'branch', title: 'Branching Runtime', desc: 'Godot StoryGraph manages nodes and edges, supporting choices, endings, and runtime signals.' },
    ],
    stackTitle: 'Tech Stack',
    stack: [
      { icon: 'game', title: 'Godot Runtime', desc: 'Godot 4.x · GDScript · Autoload · signal-driven UI' },
      { icon: 'code', title: 'React Editor', desc: 'React 18 · Vite · Zustand · node canvas components' },
      { icon: 'database', title: 'Content Data', desc: 'module.json · editor.json · automatic sprite scanning · background/BGM folders' },
    ],
    runtimeTitle: 'Runtime Design',
    runtime: [
      'ModuleManager scans resources/modules, loads character modules, and exposes character data, graph data, and sprite paths.',
      'CharacterModule wraps character data and auto-scans resources/girls/{id}/ for expression sprites such as normal, happy, and sad.',
      'StoryManager owns play_storyline and emits line_displayed, background_changed, choices_displayed, and story_ended signals.',
      'VisualNovelPlayer subscribes to story signals and renders text, character sprites, backgrounds, and choices.',
    ],
    editorTitle: 'Editor Features',
    editor: [
      'Save .editor.json to restore full editor state and node positions.',
      'Export .module.json for direct placement in Godot resources/modules.',
      'Manage character database, NPCs, storyline selection, and module imports.',
      'Detect multi-story module structures and surface compatibility warnings on import.',
    ],
    navNext: 'Next: Duck Escape: Nanjing',
    contactTitle: 'Contact',
    contactDesc: 'Interested in interactive narrative, tooling, or Godot content pipelines? Reach out:',
    email: 'qinqiao2014@gmail.com',
  },
};

function Icon({ type }: { type: string }) {
  if (type === 'pencil') return <PencilRuler className="w-5 h-5" />;
  if (type === 'boxes') return <Boxes className="w-5 h-5" />;
  if (type === 'json') return <FileJson className="w-5 h-5" />;
  if (type === 'branch') return <GitBranch className="w-5 h-5" />;
  if (type === 'game') return <Gamepad2 className="w-5 h-5" />;
  if (type === 'code') return <Code2 className="w-5 h-5" />;
  return <Database className="w-5 h-5" />;
}

export function InfiniteAcademyProject() {
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
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-center">
            <div>
              <p className="font-inter text-sm text-text-muted mb-3">{c.subtitle}</p>
              <h1 className="font-noto font-bold text-4xl md:text-6xl text-text-primary tracking-tight mb-5">{c.title}</h1>
              <p className="font-noto text-sm md:text-base text-text-secondary leading-relaxed mb-6">{c.desc}</p>
              <span className="inline-block px-4 py-1.5 border border-[#6cbcb2]/40 bg-[#6cbcb2]/10 rounded text-xs text-[#9bd8cf]">{c.status}</span>
            </div>
            <div className="border border-border-custom rounded bg-bg-secondary p-5">
              <div className="h-64 rounded bg-bg-primary border border-border-custom p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-text-muted text-xs font-inter">
                  <span>StoryCanvas</span>
                  <span>module.json</span>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                  {['角色', '对白', '分支', '背景', 'BGM', '结局'].map((item) => (
                    <div key={item} className="h-14 rounded border border-border-custom bg-bg-secondary flex items-center justify-center">
                      <span className="font-noto text-xs text-text-secondary">{lang === 'zh' ? item : item === '角色' ? 'Character' : item === '对白' ? 'Line' : item === '分支' ? 'Choice' : item === '背景' ? 'BG' : item === '结局' ? 'End' : 'BGM'}</span>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-border-custom" />
                <div className="flex items-center justify-between text-text-muted text-xs font-inter">
                  <span>Godot 4</span>
                  <span>VisualNovelPlayer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.pipelineTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed mb-8">{c.pipelineDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {c.pipeline.map((item, i) => (
              <div key={item.title} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2]/60 transition-colors">
                <span className="font-inter text-xs text-text-muted">0{i + 1}</span>
                <h3 className="font-noto font-bold text-base text-text-primary my-2">{item.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.aigcTitle}</h2>
          <p className="font-noto text-base text-text-primary leading-relaxed rounded border border-border-custom bg-bg-secondary/70 p-5 md:p-8 mb-8">
            {c.aigcDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            {c.aigcFlow.map((item, i) => (
              <div key={item.title} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors">
                <span className="font-inter text-xs text-[#9bd8cf]">0{i + 1}</span>
                <h3 className="font-noto font-bold text-base text-text-primary my-2">{item.title}</h3>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded border border-border-custom bg-bg-secondary/70 p-5 md:p-8">
            <h3 className="font-noto font-bold text-lg text-text-primary mb-5">{c.localTitle}</h3>
            <ul className="space-y-3">
              {c.local.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#9bd8cf] mt-1">•</span>
                  <span className="font-noto text-sm text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.modulesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.modules.map((m) => (
              <div key={m.title} className="p-5 border border-border-custom rounded bg-bg-secondary hover:border-[#6cbcb2]/60 transition-colors">
                <div className="flex items-center gap-2 text-text-primary mb-3">
                  <Icon type={m.icon} />
                  <h3 className="font-noto font-bold text-base">{m.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto">
          <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-8">{c.stackTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.stack.map((s) => (
              <div key={s.title} className="p-5 border border-border-custom rounded bg-bg-primary hover:border-[#6cbcb2]/60 transition-colors">
                <div className="flex items-center gap-2 text-text-primary mb-3">
                  <Icon type={s.icon} />
                  <h3 className="font-noto font-bold text-base">{s.title}</h3>
                </div>
                <p className="font-noto text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-primary py-16 md:py-24 px-5">
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.runtimeTitle}</h2>
            <ul className="space-y-3">
              {c.runtime.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-text-secondary mt-1">•</span>
                  <span className="font-noto text-sm text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-noto font-bold text-2xl md:text-3xl text-text-primary mb-6">{c.editorTitle}</h2>
            <ul className="space-y-3">
              {c.editor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-text-secondary mt-1">•</span>
                  <span className="font-noto text-sm text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-16 md:py-24 px-5">
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

      {/* Navigation */}
      <section className="bg-bg-secondary border-t border-border-custom py-6 px-5">
        <div className="max-w-content mx-auto flex justify-between items-center">
          <span />
          <Link
            to="/projects/duck-escape"
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
