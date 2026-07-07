import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import LineButton from '../ui/LineButton';
import TrustNote from '../ui/TrustNote';

const STEPS = [
  {
    title: '無料相談',
    body: '今の業務の悩みをお聞きします。「何を作るべきか分からない」という段階でも問題ありません。',
  },
  {
    title: '業務整理',
    body: '紙、Excel、LINE、電話など、現在の業務の流れを整理します。',
  },
  {
    title: '設計・ご提案',
    body: '必要な機能、画面構成、運用方法、費用感をご提案します。',
  },
  {
    title: '開発・テスト',
    body: 'Webアプリを開発し、実際の運用に合うか確認します。',
  },
  {
    title: '導入・運用支援',
    body: '納品後も、使い方や改善点を確認しながらサポートします。',
  },
];

export default function Flow() {
  return (
    <section id="flow" className="bg-brand-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FLOW"
          title={
            <>
              相談から導入まで、
              <br className="sm:hidden" />
              シンプルに進めます。
            </>
          }
        />

        <ol className="mx-auto mt-12 max-w-2xl">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6">
              {/* 縦の進行ライン */}
              {i < STEPS.length - 1 && (
                <span
                  className="absolute left-[22px] top-12 bottom-0 w-0.5 bg-brand-200"
                  aria-hidden="true"
                />
              )}
              <span className="z-10 flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-full bg-brand-700 text-white shadow-soft">
                <span className="text-[9px] font-bold leading-none opacity-80">STEP</span>
                <span className="text-sm font-bold leading-tight tabular-nums">{i + 1}</span>
              </span>
              <div className="pt-1">
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <LineButton label="まずは無料相談から始める" />
            <TrustNote items={['相談・見積り無料', 'ITに詳しくなくても大丈夫']} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
