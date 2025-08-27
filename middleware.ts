// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED_PREFIXES = [
  '/uploads/Research experiment/Metal/',
  '/uploads/Research%20experiment/Metal/',
  '/uploads/Research experiment/Slovent/',
  '/uploads/Research%20experiment/Slovent/',
]

const COOKIE_NAME = 'ov_unlocked'

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl

  // 只在命中受保护前缀时生效
  const needProtect = PROTECTED_PREFIXES.some(p => pathname.startsWith(p))
  if (!needProtect) return NextResponse.next()

  // 已解锁 → 放行
  const unlocked = req.cookies.get(COOKIE_NAME)?.value === '1'
  if (unlocked) return NextResponse.next()

  // 未解锁 → 跳到 /unlock，next 只带相对路径，避免双重编码
  const url = req.nextUrl.clone()
  url.pathname = '/unlock'
  const nextRelative = pathname + (search || '')
  url.search = '' // 清掉旧查询
  url.searchParams.set('next', nextRelative)
  return NextResponse.redirect(url)
}

// 只匹配受保护路径（Next 的 matcher 需用编码形式）
export const config = {
  matcher: [
    '/uploads/Research%20experiment/Metal/:path*',
    '/uploads/Research%20experiment/Slovent/:path*',
  ],
}
