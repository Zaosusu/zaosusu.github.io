import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  r: number;
  base: number;
  tw: number;
  phase: number;
  vx: number;
  vy: number;
  accent: boolean;
};

type Props = {
  className?: string;
  starCount?: number;
  maxOpacity?: number;
  /** 鼠标视差强度（px），0 关闭 */
  parallax?: number;
};

/**
 * 轻量 2D 星海背景：固定铺满视口、不拦截鼠标、尊重 prefers-reduced-motion。
 * 呼应「distance · 光年尺度」的宇宙隐喻，给官网一层克制的诗意底色。
 */
export function StarfieldBackground({
  className = 'fixed inset-0',
  starCount = 150,
  maxOpacity = 0.85,
  parallax = 16,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let stars: Star[] = [];
    let raf = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const makeStars = () => {
      stars = Array.from({ length: starCount }, () => {
        const accent = Math.random() < 0.22;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: accent ? 0.6 + Math.random() * 1.5 : 0.4 + Math.random() * 1.1,
          base: 0.25 + Math.random() * (maxOpacity - 0.25),
          tw: 0.4 + Math.random() * 1.3,
          phase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
          accent,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeStars();
    };

    const t0 = performance.now();
    const draw = (now: number) => {
      const time = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const px = mouse.x * parallax;
      const py = mouse.y * parallax;

      ctx.save();
      ctx.translate(px, py);
      for (const s of stars) {
        if (!reduce) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -2) s.x = w + 2;
          else if (s.x > w + 2) s.x = -2;
          if (s.y < -2) s.y = h + 2;
          else if (s.y > h + 2) s.y = -2;
        }
        const a = reduce ? s.base : s.base * (0.55 + 0.45 * Math.sin(time * s.tw + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        if (s.accent) {
          ctx.fillStyle = `rgba(155,216,207,${a})`;
          ctx.shadowColor = 'rgba(108,188,178,0.8)';
          ctx.shadowBlur = s.r * 3.5;
        } else {
          ctx.fillStyle = `rgba(244,241,232,${a})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.restore();

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };

    resize();
    if (reduce) draw(performance.now());
    else raf = requestAnimationFrame(draw);

    window.addEventListener('resize', resize);
    if (!reduce) window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [starCount, maxOpacity, parallax]);

  return (
    <div className={className} aria-hidden="true" style={{ pointerEvents: 'none', zIndex: 0 }}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
