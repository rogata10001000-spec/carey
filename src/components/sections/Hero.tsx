import { Bell, CalendarCheck, TrendingUp } from 'lucide-react';
import Reveal from '../ui/Reveal';
import LineButton from '../ui/LineButton';
import TrustNote from '../ui/TrustNote';
import { SITE } from '../../config/site';

const FEATURE_CHIPS = ['必要な機能だけ', '業務に合わせて設計', '導入後も伴走', '代表が直接対応'];

const RESERVATIONS = [
  { name: '田中様', time: '10:00', status: '確定' },
  { name: '佐藤様', time: '11:30', status: '確定' },
  { name: '山本様', time: '14:00', status: '新規' },
];

/** 黄色マーカー風の強調（メインコピー用） */
function Marker({ children }: { children: string }) {
  return (
    <span className="[background:linear-gradient(transparent_62%,#fde047_62%)]">{children}</span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* 背景の淡い装飾（控えめに） */}
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-brand-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-72 h-64 w-64 rounded-full bg-brand-50/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:pb-24 lg:pt-20">
        {/* 左: コピーとCTA */}
        <div>
          <Reveal>
            <p className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-700 sm:text-sm">
              小規模事業者のための、オーダーメイドWebアプリ
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.35] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.3]">
              <span className="whitespace-nowrap">
                <Marker>1時間</Marker>かかる仕事を、
              </span>
              <br />
              <span className="whitespace-nowrap">
                <Marker>1分</Marker>で終わる仕組みに。
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-base font-bold leading-relaxed text-brand-800 sm:text-lg">
              市販のアプリでは手が届かない業務に、
              <br className="hidden sm:block" />
              あなたの事業専用のWebアプリを。
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              紙・Excel・LINE・電話で回している業務を、業務の流れに合わせて、使いやすい仕組みに変えていきます。
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <LineButton />
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-brand-200 bg-white px-8 py-4 text-base font-bold text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                まずはできることを聞いてみる
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <TrustNote
              className="mt-5 justify-start"
              items={['相談・見積り無料', '「この作業もアプリ化できる？」でもOK']}
            />
          </Reveal>

          <Reveal delay={460}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {FEATURE_CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 sm:text-sm"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* 右: 業務アプリのUIイメージ */}
        <Reveal delay={300} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative px-2 pb-9 pt-14 sm:px-6">
            {/* メイン: 予約管理アプリのカード */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift">
              <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" aria-hidden="true" />
                <span className="ml-3 text-xs font-medium text-slate-500">予約管理アプリ</span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <CalendarCheck className="h-4 w-4 text-brand-600" aria-hidden="true" />
                    本日の予約
                  </p>
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700">
                    3件
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {RESERVATIONS.map((r) => (
                    <li
                      key={r.name}
                      className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2.5"
                    >
                      <span className="text-sm font-medium text-slate-700">{r.name}</span>
                      <span className="flex items-center gap-2">
                        <span className="text-xs tabular-nums text-slate-500">{r.time}</span>
                        <span
                          className={`w-12 whitespace-nowrap rounded-full py-0.5 text-center text-[11px] font-bold ${
                            r.status === '新規'
                              ? 'bg-accent-100 text-amber-700'
                              : 'bg-emerald-50 text-emerald-700'
                          }`}
                        >
                          {r.status}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 浮かせた小カード: 通知 */}
            <Reveal
              delay={600}
              className="absolute right-0 top-0 w-56 rounded-xl border border-slate-100 bg-white p-3 shadow-card"
            >
              <p className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-line-500/10">
                  <Bell className="h-3.5 w-3.5 text-line-600" aria-hidden="true" />
                </span>
                LINEに通知が届きました
              </p>
              <p className="mt-1.5 pl-9 text-[11px] leading-relaxed text-slate-500">
                新しい予約が入りました（14:00 山本様）
              </p>
            </Reveal>

            {/* 浮かせた小カード: 自動集計 */}
            <Reveal
              delay={720}
              className="absolute -bottom-1 left-0 w-44 rounded-xl border border-slate-100 bg-white p-3 shadow-card"
            >
              <p className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <TrendingUp className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
                集計は自動で
              </p>
              <div className="mt-2 flex h-12 items-end gap-1.5" aria-hidden="true">
                {[40, 55, 45, 70, 60, 85].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm bg-brand-200 last:bg-brand-500"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
