import Reveal from '../ui/Reveal';
import LineButton from '../ui/LineButton';
import TrustNote from '../ui/TrustNote';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-900 py-16 sm:py-24">
      {/* 控えめな背景装飾 */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-800"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-800/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold leading-snug text-white sm:text-4xl">
            その業務、
            <br />
            <span className="whitespace-nowrap">アプリに任せられる</span>
            <span className="whitespace-nowrap">かもしれません。</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-brand-100 sm:text-base">
            確認、転記、集計、予約、問い合わせ、申請、顧客管理。
            毎日の面倒な作業を、あなたの事業に合った仕組みに変えていきます。
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-4 text-sm font-bold text-white sm:text-base">
            まずは、今の業務の悩みをLINEでお聞かせください。
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9">
            <LineButton className="px-10 py-5 text-lg" />
          </div>
        </Reveal>
        <Reveal delay={380}>
          <TrustNote
            tone="dark"
            className="mt-6"
            items={['相談・見積り無料', '無理な営業は行いません', '「この作業もできる？」だけでもOK']}
          />
        </Reveal>
      </div>
    </section>
  );
}
