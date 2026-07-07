import { MessageCircle } from 'lucide-react';
import { SITE } from '../../config/site';

/** スマホ用: 画面下部の固定CTAバー（md以上では非表示） */
export default function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-sm md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center gap-2 px-3 py-2.5">
        <a
          href="#pricing"
          className="flex h-12 w-28 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-brand-200 bg-white text-sm font-bold text-brand-700"
        >
          料金を見る
        </a>
        <a
          href={SITE.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-line-500 text-[15px] font-bold text-white shadow-cta"
        >
          <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          LINEで無料相談する
        </a>
      </div>
    </div>
  );
}
