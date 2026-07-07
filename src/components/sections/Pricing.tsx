import { Check } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import LineButton from '../ui/LineButton';
import TrustNote from '../ui/TrustNote';

const PLANS = [
  {
    name: '小規模アプリ',
    price: '10万〜30万円',
    priceNote: '（一括）',
    examples: ['予約管理', '問い合わせ管理', '簡易申請', '集計ツール'],
    note: 'まずは1つの業務から始めたい方に',
  },
  {
    name: '中規模アプリ',
    price: '30万〜80万円',
    priceNote: '（一括）',
    examples: ['顧客管理', 'スタッフ管理', '複数機能の業務管理システム'],
    note: '複数の業務をまとめて仕組み化したい方に',
  },
  {
    name: '伴走支援',
    price: '月額3万〜10万円',
    priceNote: '',
    examples: ['運用改善', '機能追加', 'データ集計支援', '保守管理'],
    note: '導入後も一緒に育てていきたい方に',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="PRICE"
          title={
            <>
              必要な機能だけだから、
              <br className="sm:hidden" />
              小さく始められます。
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <h3 className="whitespace-nowrap text-base font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-3 whitespace-nowrap">
                  <span className="text-2xl font-extrabold tracking-tight text-brand-800 sm:text-3xl">
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className="ml-1 text-xs text-slate-500">{plan.priceNote}</span>
                  )}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{plan.note}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {plan.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-line-500" aria-hidden="true" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-5 rounded-2xl bg-slate-50 px-6 py-8 text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              内容や機能数によって費用は変わります。
              <br className="sm:hidden" />
              まずは無料相談で、必要な機能と概算費用を整理します。
            </p>
            <LineButton label="LINEで概算費用を相談する" />
            <TrustNote items={['相談・見積り無料', '無理な営業は行いません']} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
