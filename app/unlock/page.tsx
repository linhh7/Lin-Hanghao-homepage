'use client';

import { useEffect, useState } from 'react';

// 可选：强制动态，避免被预渲染
export const dynamic = 'force-dynamic';

export default function UnlockPage() {
  // 初始给出稳定的默认值，保证 SSR 与首帧一致
  const [nextUrl, setNextUrl] = useState<string>('/');
  const [error, setError] = useState<string | null>(null);
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    // 只在客户端读取 URL 查询参数，避免 SSR 阶段差异
    try {
      const sp = new URLSearchParams(window.location.search);
      setNextUrl(sp.get('next') ?? '/');
      setError(sp.get('error'));
    } catch {
      // 忽略
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow p-6">
        <h1 className="text-xl font-semibold mb-3 text-center">Enter Password</h1>

        {error && (
          <div className="mb-3 text-sm text-red-600">
            Wrong password. Please try again.
          </div>
        )}

        <form method="POST" action="/api/unlock">
          <input type="hidden" name="next" value={nextUrl} />
          <input
            name="password"
            type="password"
            className="w-full border rounded px-3 py-2 mb-3"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full rounded bg-black text-white py-2 font-medium"
          >
            Unlock
          </button>
        </form>

        <p className="mt-3 text-xs text-gray-500 text-center">
          Protected resource. You only need to unlock once.
        </p>
      </div>
    </main>
  );
}
