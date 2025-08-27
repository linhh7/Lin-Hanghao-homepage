'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

// 让此页始终动态渲染，避免预渲染期取 searchParams 报错
export const dynamic = 'force-dynamic';

function UnlockForm() {
  const sp = useSearchParams();
  const next = sp?.get('next') ?? '/';
  const error = sp?.get('error') ?? null;
  const [pwd, setPwd] = useState('');

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
          <input type="hidden" name="next" value={next} />
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

export default function UnlockPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading…</div>}>
      <UnlockForm />
    </Suspense>
  );
}
