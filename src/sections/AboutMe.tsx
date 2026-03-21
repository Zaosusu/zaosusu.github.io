import { useLang } from '../context/LanguageContext';

const t = {
  zh: {
    title: '研究者背景',
    intro: '我叫阿早，独立AI研究者。',
    whyTitle: '为什么做AI研究？',
    why: [
      '我不是科班出身，过去14年做过很多事：导演、MCN操盘手、淘宝店主',
      '写过10万多字的二次元cosplay行业研报',
      '做过网易、腾讯、美图秀秀的内容供应商',
      '2019-2025年，ToB业务爆发期带来主要财富积累；股市验证周期理论，做到稳定盈利',
      '2022年淘宝店因供应链崩盘关闭，抑郁了两年——那段时间让我意识到：依赖人的系统，永远是脆弱的',
      '有了时间和资源，决定做一件"不依赖人"的事：学AI，做开源项目',
    ],
    whyProjectTitle: '为什么做OpenGuitarChordProject？',
    whyProject: [
      '我喜欢吉他，但扒谱效率低',
      '市面上的工具不够好',
      '我想用技术解决自己的需求',
      '这是我学习音频AI + 深度学习的实践项目',
    ],
    goalsTitle: '我的目标：',
    goals: [
      '2026-2030：考研CS，获得学术资源和系统训练',
      '持续推进OpenGuitarChordProject',
      '发表论文，开源数据集',
      '成为独立AI研究者',
    ],
    notTitle: '我不是：',
    not: ['全职研究员', '创业者（不想融资、不想管团队）', '学术大牛（还在学习中）'],
    isTitle: '我是：',
    is: ['有清晰目标的自学者', '愿意开源分享的实践者', '相信技术可以替代人的信仰者'],
  },
  en: {
    title: 'About the Researcher',
    intro: "I'm Zaosusu, an independent AI researcher.",
    whyTitle: 'Why AI Research?',
    why: [
      "I'm not from a CS background — over the past 14 years I've been a director, MCN operator, and e-commerce seller",
      'Wrote 100,000+ words of industry research on the cosplay market',
      'Content supplier for NetEase, Tencent, and Meitu',
      '2019–2025: Major wealth accumulation from ToB business; validated cycle theory in the stock market',
      "In 2022, my Taobao store collapsed due to supply chain failure. Two years of depression taught me: systems that depend on people are always fragile",
      "With time and resources, I decided to build something that doesn't depend on people: learn AI, build open-source projects",
    ],
    whyProjectTitle: 'Why OpenGuitarChordProject?',
    whyProject: [
      'I play guitar but transcribing songs is painfully slow',
      "Existing tools aren't good enough",
      'I want to use technology to solve my own problem',
      'This is my hands-on project for learning audio AI + deep learning',
    ],
    goalsTitle: 'My Goals:',
    goals: [
      '2026–2030: Apply for CS graduate school to gain academic resources and structured training',
      'Continue developing OpenGuitarChordProject',
      'Publish papers, open-source datasets',
      'Become an independent AI researcher',
    ],
    notTitle: "I'm not:",
    not: ['A full-time researcher', 'An entrepreneur (no interest in fundraising or managing teams)', 'An academic expert (still learning)'],
    isTitle: "I am:",
    is: ['A self-taught learner with clear goals', 'A practitioner who believes in open source', 'Someone who believes technology can replace dependency on people'],
  },
};

export function AboutMe() {
  const { lang } = useLang();
  const c = t[lang];

  const Section = ({ title, items }: { title: string; items: string[] }) => (
    <div>
      <h3 className="font-bold text-text-primary mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-text-secondary mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="about" className="bg-bg-primary py-16 md:py-20 px-5">
      <div className="max-w-content mx-auto">
        <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-8">{c.title}</h2>
        <div className="font-noto text-base text-text-primary leading-relaxed space-y-6">
          <p>{c.intro}</p>
          <Section title={c.whyTitle} items={c.why} />
          <Section title={c.whyProjectTitle} items={c.whyProject} />
          <Section title={c.goalsTitle} items={c.goals} />
          <Section title={c.notTitle} items={c.not} />
          <Section title={c.isTitle} items={c.is} />
        </div>
      </div>
    </section>
  );
}
