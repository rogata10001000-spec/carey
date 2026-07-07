import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  /** 小さな英字/かなラベル（例: SERVICE） */
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'center' | 'left';
};

/** セクション見出しの共通スタイル。黄色の短いバーで視線を止める */
export default function SectionHeading({ eyebrow, title, lead, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClass}`}>
      {eyebrow && (
        <Reveal>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-brand-600">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <span className="mt-5 inline-block h-1 w-10 rounded-full bg-accent-400" aria-hidden="true" />
      </Reveal>
      {lead && (
        <Reveal delay={160} className={align === 'center' ? 'mx-auto' : ''}>
          <p className="mt-6 max-w-2xl leading-relaxed text-slate-600">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
