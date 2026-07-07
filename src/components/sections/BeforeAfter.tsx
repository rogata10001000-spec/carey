import { ArrowDown } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const EXAMPLES = [
  {
    title: '予約管理',
    before: 'LINEや電話で予約を受け、Excelに手入力',
    after: '予約フォームから自動で一覧化し、確認漏れを防止',
  },
  {
    title: '問い合わせ管理',
    before: 'DM、電話、メールがバラバラで対応状況が不明',
    after: '問い合わせ内容と対応状況を一元管理',
  },
  {
    title: '集計業務',
    before: '月末にExcelを開いて手作業で集計',
    after: '入力データから自動で集計・グラフ化',
  },
  {
    title: '社内申請',
    before: '紙やLINEで申請し、確認が属人化',
    after: '申請、承認、履歴管理をアプリ内で完結',
  },
];

export default function BeforeAfter() {
  return (
    <section id="before-after" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="BEFORE / AFTER"
          title={
            <>
              人が頑張る業務から、
              <br className="sm:hidden" />
              仕組みが動く業務へ。
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {EXAMPLES.map((ex, i) => (
            <Reveal key={ex.title} delay={(i % 2) * 120}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="whitespace-nowrap text-base font-bold text-slate-900">{ex.title}</h3>
                <div className="mt-4 space-y-2.5">
                  <div className="rounded-xl bg-slate-100 p-4">
                    <p className="text-[11px] font-bold tracking-widest text-slate-400">BEFORE</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{ex.before}</p>
                  </div>
                  <div className="flex justify-center" aria-hidden="true">
                    <ArrowDown className="h-5 w-5 text-accent-500" />
                  </div>
                  <div className="rounded-xl border border-brand-100 bg-brand-50 p-4">
                    <p className="text-[11px] font-bold tracking-widest text-brand-500">AFTER</p>
                    <p className="mt-1 text-sm font-bold leading-relaxed text-brand-900">{ex.after}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-base font-bold leading-relaxed text-slate-800 sm:text-lg">
            毎日の小さな手間を減らすことが、
            <br className="sm:hidden" />
            事業全体の時間を生み出します。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
