import {
  ClipboardCopy,
  FileSearch,
  MessageSquareWarning,
  CalendarX2,
  Users,
  PackageX,
  Calculator,
  Banknote,
} from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const PROBLEMS = [
  { icon: ClipboardCopy, text: 'Excelへの転記が多い' },
  { icon: FileSearch, text: '紙の管理で探す時間がかかる' },
  { icon: MessageSquareWarning, text: 'LINEや電話対応が煩雑' },
  { icon: CalendarX2, text: '予約や問い合わせの確認漏れがある' },
  { icon: Users, text: 'スタッフ間で情報共有ができていない' },
  { icon: PackageX, text: '市販ツールが自社の業務に合わない' },
  { icon: Calculator, text: '集計や報告に毎回時間がかかる' },
  { icon: Banknote, text: '高額なシステム導入は不安' },
];

export default function Problems() {
  return (
    <section id="problems" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="PROBLEM"
          title={
            <>
              その確認、その転記、その集計。
              <br />
              まだ手作業で続けますか。
            </>
          }
          lead={
            <>
              毎日の業務の中には、本当は人が頑張らなくてもよい作業が多くあります。
              紙、Excel、LINE、電話、Googleフォームなどを組み合わせて何とか回している業務も、
              専用のWebアプリにまとめることで、確認漏れや転記ミス、対応遅れを減らせます。
            </>
          }
        />

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <Reveal as="li" key={p.text} delay={(i % 4) * 80}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                  <p.icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium leading-relaxed text-slate-700">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-xl rounded-2xl border border-accent-300 bg-accent-100/60 px-6 py-5 text-center text-sm font-bold leading-relaxed text-slate-800 sm:text-base">
            ひとつでも当てはまるなら、
            <br className="sm:hidden" />
            その業務はアプリ化できる可能性があります。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
