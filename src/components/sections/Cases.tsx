import type { ReactNode } from 'react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

/** 事例カード上部の「作る画面イメージ」ミニモック共通枠 */
function MockScreen({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50" aria-hidden="true">
      <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-slate-400">
        画面イメージ
      </span>
      <div className="flex items-center gap-1.5 border-b border-slate-200/70 bg-white px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="ml-1.5 whitespace-nowrap text-[11px] font-bold text-slate-500">{title}</span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

/** 原価計算のミニモック */
function CostMock() {
  const rows = [
    { label: '小麦粉 500g', value: '¥120' },
    { label: 'バター 200g', value: '¥340' },
    { label: '包装資材', value: '¥55' },
  ];
  return (
    <MockScreen title="原価計算">
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between rounded-md bg-white px-2.5 py-1.5 text-[11px]">
            <span className="text-slate-600">{r.label}</span>
            <span className="tabular-nums text-slate-500">{r.value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-md bg-brand-600 px-2.5 py-1.5 text-[11px] font-bold text-white">
          <span>原価合計（自動計算）</span>
          <span className="tabular-nums">¥515</span>
        </div>
      </div>
    </MockScreen>
  );
}

/** スタッフ稼働管理のミニモック */
function StaffMock() {
  const rows = [
    { name: '高橋', site: 'A社 倉庫', status: '稼働中', active: true },
    { name: '中村', site: 'B社 事務', status: '稼働中', active: true },
    { name: '小林', site: '—', status: '待機', active: false },
  ];
  return (
    <MockScreen title="スタッフ稼働状況">
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11px]">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[9px] font-bold text-brand-700">
              {r.name.slice(0, 1)}
            </span>
            <span className="w-9 shrink-0 font-medium text-slate-700">{r.name}</span>
            <span className="min-w-0 flex-1 truncate text-slate-400">{r.site}</span>
            <span
              className={`w-12 shrink-0 whitespace-nowrap rounded-full py-0.5 text-center text-[10px] font-bold ${
                r.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </MockScreen>
  );
}

/** 予約管理のミニモック */
function ReserveMock() {
  const rows = [
    { time: '10:00', name: '田中様', status: '確定' },
    { time: '13:30', name: '鈴木様', status: '確定' },
    { time: '15:00', name: '山本様', status: '新規' },
  ];
  return (
    <MockScreen title="予約一覧">
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.time} className="flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11px]">
            <span className="w-9 shrink-0 tabular-nums font-bold text-brand-700">{r.time}</span>
            <span className="min-w-0 flex-1 truncate text-slate-600">{r.name}</span>
            <span
              className={`w-10 shrink-0 whitespace-nowrap rounded-full py-0.5 text-center text-[10px] font-bold ${
                r.status === '新規' ? 'bg-accent-100 text-amber-700' : 'bg-emerald-50 text-emerald-700'
              }`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </MockScreen>
  );
}

const CASES = [
  {
    industry: '食品製造業',
    problem: '原価計算や材料費の集計に時間がかかっていた。',
    solution: '商品ごとの材料費、数量、原価を入力すると、自動で原価計算できる仕組みを構築。',
    effect: '計算ミスを減らし、価格設定や利益確認がしやすくなった。',
    mock: <CostMock />,
  },
  {
    industry: '人材派遣業',
    problem: 'スタッフ情報、勤務状況、案件情報の管理が分散していた。',
    solution: 'スタッフ管理、案件管理、稼働状況を一元管理できるシステムを構築。',
    effect: '確認作業が減り、案件ごとの対応状況が見えるようになった。',
    mock: <StaffMock />,
  },
  {
    industry: '予約受付業務',
    problem: '電話やLINEで予約を受け、手作業で管理していた。',
    solution: '予約フォーム、管理画面、通知機能を組み合わせた予約管理アプリを構築。',
    effect: '予約確認の手間と対応漏れを削減した。',
    mock: <ReserveMock />,
  },
];

const FIELD_LABELS = [
  { key: 'problem', label: '課題' },
  { key: 'solution', label: '解決' },
] as const;

export default function Cases() {
  return (
    <section id="cases" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="CASE"
          title={
            <>
              業種に合わせて、
              <br className="sm:hidden" />
              さまざまな業務を仕組み化できます。
            </>
          }
          lead="業種ごとの導入イメージです。似たような業務のお悩みは、そのままご相談ください。"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.industry} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <span className="self-start whitespace-nowrap rounded-full bg-brand-700 px-4 py-1 text-xs font-bold text-white">
                  {c.industry}
                </span>
                <div className="mt-4">{c.mock}</div>
                <dl className="mt-5 flex flex-1 flex-col gap-4">
                  {FIELD_LABELS.map((f) => (
                    <div key={f.key}>
                      <dt className="text-xs font-bold tracking-wider text-slate-400">{f.label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-slate-600">{c[f.key]}</dd>
                    </div>
                  ))}
                  <div className="mt-auto rounded-xl bg-accent-100/70 p-4">
                    <dt className="text-xs font-bold tracking-wider text-amber-700">効果</dt>
                    <dd className="mt-1 text-sm font-bold leading-relaxed text-slate-800">{c.effect}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
