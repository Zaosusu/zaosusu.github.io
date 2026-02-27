export function AboutMe() {
  return (
    <section id="about" className="bg-bg-primary py-16 md:py-20 px-5">
      <div className="max-w-content mx-auto">
        {/* Title */}
        <h2 className="font-noto font-bold text-xl md:text-2xl text-text-primary mb-8">
          研究者背景
        </h2>
        
        {/* Content */}
        <div className="font-noto text-base text-text-primary leading-relaxed space-y-6">
          <p>
            我叫阿早，独立AI研究者。
          </p>
          
          {/* Why AI Research */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">为什么做AI研究？</h3>
            <p className="text-text-secondary mb-4">
              我不是科班出身，过去14年做过很多事：
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>导演、MCN操盘手、淘宝店主</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>写过10万字行业研报</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>做过美图秀秀的供应商</span>
              </li>
            </ul>
            <p className="mb-4">
              2022年，我的淘宝店因供应链崩盘而关闭，我抑郁了两年。
            </p>
            <p className="mb-4 text-text-secondary">
              那段时间我意识到：<span className="text-text-primary">依赖人的系统，永远是脆弱的。</span>
            </p>
            <p className="mb-4">
              2024年，我在股市验证了自己的理论，实现了财务自由。
            </p>
            <p>
              有了时间和资源，我决定做一件"不依赖人"的事：<span className="text-text-primary">学AI，做开源项目。</span>
            </p>
          </div>
          
          {/* Why This Project */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">为什么做OpenGuitarChordProject？</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li>我喜欢吉他，但扒谱效率低</li>
              <li>市面上的工具不够好</li>
              <li>我想用技术解决自己的需求</li>
              <li>这是我学习音频AI + 深度学习的实践项目</li>
            </ol>
          </div>
          
          {/* Goals */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">我的目标：</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>2026-2030：考研CS，获得学术资源和系统训练</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>持续推进OpenGuitarChordProject</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>发表论文，开源数据集</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>成为独立AI研究者</span>
              </li>
            </ul>
          </div>
          
          {/* I am not */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">我不是：</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>全职研究员</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>创业者（不想融资、不想管团队）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>学术大牛（还在学习中）</span>
              </li>
            </ul>
          </div>
          
          {/* I am */}
          <div>
            <h3 className="font-bold text-text-primary mb-3">我是：</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>有清晰目标的自学者</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>愿意开源分享的实践者</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-secondary mt-1">•</span>
                <span>相信技术可以替代人的信仰者</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
