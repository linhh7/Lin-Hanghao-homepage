// pages/api/unlock.ts
import type { NextApiRequest, NextApiResponse } from 'next'

const COOKIE_NAME = 'ov_unlocked';

// 把秒数换成 Max-Age 的数字（这里 半天）
const MAX_AGE = 60 * 60 * 12;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const pass = process.env.OVERVIEW_PASS || '';
  const input = typeof req.body?.password === 'string' ? req.body.password : '';
  const next = typeof req.body?.next === 'string' ? req.body.next : '/';

  // 密码正确 → 写 Cookie 并重定向
  if (pass && input === pass) {
    // 注意：开发环境下没有 https，也能先用 Secure; 浏览器会忽略
    res.setHeader('Set-Cookie', `${COOKIE_NAME}=1; Path=/; Max-Age=${MAX_AGE}; HttpOnly; SameSite=Lax; Secure`);
    // 302 或 303 都可；这里用 303 保证表单 POST 后转 GET
    res.writeHead(303, { Location: next });
    return res.end();
  }

  // 密码错误 → 回到 /unlock 并带错误提示
  try {
    const base = new URL(next, 'http://localhost'); // 仅作解析，不会真正用到这个域名
    const back = new URL('/unlock', `${base.protocol}//${base.host}`);
    back.searchParams.set('next', next);
    back.searchParams.set('error', '1');
    res.writeHead(303, { Location: back.pathname + back.search });
    return res.end();
  } catch {
    // 兜底返回 /unlock
    res.writeHead(303, { Location: '/unlock?error=1' });
    return res.end();
  }
}
