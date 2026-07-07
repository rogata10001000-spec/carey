import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const FAQS = [
  {
    q: 'ITに詳しくなくても相談できますか。',
    a: 'はい。専門用語を使わず、今の業務の悩みから整理します。',
  },
  {
    q: '何を作ればいいか決まっていなくても大丈夫ですか。',
    a: '大丈夫です。まずは現状の業務をお聞きし、アプリ化できる部分をご提案します。',
  },
  {
    q: '小さな業務だけでも依頼できますか。',
    a: '可能です。予約管理、問い合わせ管理、集計業務など、一部の業務から始められます。',
  },
  {
    q: 'スマホでも使えますか。',
    a: 'はい。スマホで使いやすい画面設計にも対応します。',
  },
  {
    q: 'LINEとの連携はできますか。',
    a: '内容によって可能です。予約、問い合わせ、通知、顧客管理などの連携をご相談いただけます。',
  },
  {
    q: '導入後の修正はできますか。',
    a: '可能です。実際に使いながら改善していくことを前提にしています。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="よくある質問" />

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-3 px-5 py-4 text-left"
                  >
                    <span className="shrink-0 font-sans text-sm font-bold text-brand-600">Q</span>
                    <span className="flex-1 text-sm font-bold leading-relaxed text-slate-800 sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="flex gap-3 px-5 pb-5 pt-0.5">
                        <span className="shrink-0 font-sans text-sm font-bold text-accent-500">A</span>
                        <span className="text-sm leading-relaxed text-slate-600">{faq.a}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
