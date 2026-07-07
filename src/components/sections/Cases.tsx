import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const CASES = [
  {
    industry: '食品製造業',
    problem: '原価計算や材料費の集計に時間がかかっていた。',
    solution: '商品ごとの材料費、数量、原価を入力すると、自動で原価計算できる仕組みを構築。',
    effect: '計算ミスを減らし、価格設定や利益確認がしやすくなった。',
  },
  {
    industry: '人材派遣業',
    problem: 'スタッフ情報、勤務状況、案件情報の管理が分散していた。',
    solution: 'スタッフ管理、案件管理、稼働状況を一元管理できるシステムを構築。',
    effect: '確認作業が減り、案件ごとの対応状況が見えるようになった。',
  },
  {
    industry: '予約受付業務',
    problem: '電話やLINEで予約を受け、手作業で管理していた。',
    solution: '予約フォーム、管理画面、通知機能を組み合わせた予約管理アプリを構築。',
    effect: '予約確認の手間と対応漏れを削減した。',
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
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.industry} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <span className="self-start whitespace-nowrap rounded-full bg-brand-700 px-4 py-1 text-xs font-bold text-white">
                  {c.industry}
                </span>
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
