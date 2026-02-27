interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2012-2022",
    title: "商业实践",
    description: "影视、MCN、电商。积累认知，但看清「依赖人」的脆弱性"
  },
  {
  year: "2019-2025",
  title: "财务自由",
  description: "ToB业务（MCN+供应商）爆发期，带来主要财富积累。股市验证周期理论，做到稳定盈利。"
},

  {
    year: "2026",
    title: "AI研究启动",
    description: "OpenGuitarChordProject立项。开始系统学习CS/数学/AI。准备2030考研"
  },
  {
    year: "2026-2030",
    title: "独立研究者之路",
    description: "推进项目，发表论文。开源数据集和工具。考研获得学术资源。目标：成为能做深度研究的独立AI研究者"
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="bg-bg-secondary py-16 md:py-20 px-5">
      <div className="max-w-content mx-auto">
        {/* Title */}
        <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-10">
          转型之路
        </h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border-custom" />
          
          {/* Timeline Items */}
          <div className="space-y-10">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Dot */}
                <div className="absolute left-0 md:left-4 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-text-muted hover:bg-text-secondary transition-colors duration-200" />
                
                {/* Content */}
                <div>
                  <span className="font-inter font-bold text-base text-text-primary block mb-1">
                    {item.year}
                  </span>
                  <h3 className="font-noto font-bold text-base text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="font-noto text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
