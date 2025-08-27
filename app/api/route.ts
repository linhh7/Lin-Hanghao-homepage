// app/api/unlock/route.ts
import { NextResponse } from 'next/server';

const COOKIE_NAME = 'ov_unlocked';

export async function POST(req: Request) {
  const form = await req.formData();
  const input = String(form.get('password') || '');
  // next 是相对路径，例如：/uploads/Research%20experiment/Metal/html/index.html
  const next = String(form.get('next') || '/');

  const PASS = process.env.OVERVIEW_PASS || '';
  if (input === PASS && PASS) {
    // 用当前请求的 origin 组装完整跳转地址，避免双重编码
    const target = new URL(next, new URL(req.url).origin);
    const res = NextResponse.redirect(target);
    res.cookies.set(COOKIE_NAME, '1', {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      maxAge: 60 * 60 * 24 * 30, // 30 天
      path: '/',
    });
    return res;
  }

  // 密码错误，跳回 /unlock 并保留相对 next
  const back = new URL('/unlock', new URL(req.url).origin);
  back.searchParams.set('next', next);
  back.searchParams.set('error', '1');
  return NextResponse.redirect(back);
}
