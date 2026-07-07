import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../config/site';
import LineButton from '../ui/LineButton';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // ドロワー表示中は背面のスクロールを止める
  useEffect(() => {
    if (!drawerOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [drawerOpen]);

  // Escで閉じる
  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="text-xl font-extrabold tracking-wide text-brand-800">CAREY</span>
          <span className="hidden whitespace-nowrap text-[11px] font-medium text-slate-500 sm:inline">
            事業専用のWebアプリ開発
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="メインナビゲーション">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LineButton size="md" label="LINEで無料相談" className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
            aria-label="メニューを開く"
            aria-expanded={drawerOpen}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {drawerOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="メニュー">
            <button
              type="button"
              className="absolute inset-0 bg-slate-900/50"
              onClick={() => setDrawerOpen(false)}
              aria-label="メニューを閉じる"
            />
            <div className="absolute inset-y-0 right-0 flex w-72 max-w-[85vw] flex-col bg-white shadow-lift">
              <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5">
                <span className="text-lg font-extrabold tracking-wide text-brand-800">CAREY</span>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100"
                  aria-label="メニューを閉じる"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4" aria-label="メニュー">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block rounded-lg px-3 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div
                className="border-t border-slate-100 p-5"
                style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}
              >
                <LineButton size="md" className="w-full" />
                <p className="mt-3 text-center text-xs text-slate-500">相談・見積り無料</p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
