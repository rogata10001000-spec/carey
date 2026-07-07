import { CheckCircle2 } from 'lucide-react';

type TrustNoteProps = {
  items: string[];
  className?: string;
  tone?: 'light' | 'dark';
};

/** CTA付近に添える安心材料（相談・見積り無料 など） */
export default function TrustNote({ items, className = '', tone = 'light' }: TrustNoteProps) {
  const textClass = tone === 'dark' ? 'text-brand-100' : 'text-slate-500';
  const iconClass = tone === 'dark' ? 'text-accent-300' : 'text-line-500';

  return (
    <ul className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`flex items-center gap-1.5 text-xs sm:text-sm ${textClass}`}>
          <CheckCircle2 className={`h-4 w-4 shrink-0 ${iconClass}`} aria-hidden="true" />
          <span className="whitespace-nowrap">{item}</span>
        </li>
      ))}
    </ul>
  );
}
