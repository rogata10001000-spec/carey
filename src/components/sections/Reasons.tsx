import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const REASONS = [
  {
    title: '現場目線で設計する',
    body: 'いきなり開発するのではなく、まず業務の流れを整理します。現場で本当に使える形を重視します。',
  },
  {
    title: '小さく始められる',
    body: '最初から大規模なシステムを作る必要はありません。一部の業務から導入し、段階的に拡張できます。',
  },
  {
    title: 'AI活用でスピーディーに開発',
    body: 'Claude CodeやCursor等のAIコーディング支援ツールを活用し、開発スピードを高めています。',
  },
  {
    title: 'ITが苦手でも相談しやすい',
    body: '専門用語をできるだけ使わず、業務の悩みから一緒に整理します。',
  },
  {
    title: '導入後も伴走',
    body: '納品後の使い方、改善、機能追加まで相談できます。',
  },
];

export default function Reasons() {
  return (
    <section id="reasons" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="REASON" title="CAREYが選ばれる理由" />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:items-center sm:gap-6 sm:p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-700 font-sans text-sm font-bold tabular-nums text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
