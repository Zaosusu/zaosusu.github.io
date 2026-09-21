// 把自动同步来的 star 数接到页面上。
//
// 优先用 scripts/fetch-stars.mjs 生成的快照；仓库不在快照里（或构建时没跑脚本）
// 时回退到源码里写的硬编码值，保证页面永远有数可显示。

import { SKILL_STARS } from '../data/skillStars';

const REPO_RE = /github\.com\/[^/]+\/([A-Za-z0-9._-]+)/;

export function resolveStars(repoUrl: string, fallback: number): number {
  const m = repoUrl.match(REPO_RE);
  if (!m) return fallback;
  const v = SKILL_STARS[m[1]];
  return typeof v === 'number' ? v : fallback;
}
