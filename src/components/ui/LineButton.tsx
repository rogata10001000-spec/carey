import { MessageCircle } from 'lucide-react';
import { SITE } from '../../config/site';

type LineButtonProps = {
  label?: string;
  size?: 'md' | 'lg';
  className?: string;
};

/** 最重要CTA: LINE無料相談ボタン（グリーンで統一） */
export default function LineButton({
  label = 'LINEで無料相談する',
  size = 'lg',
  className = '',
}: LineButtonProps) {
  const sizeClass =
    size === 'lg' ? 'px-8 py-4 text-base sm:text-lg' : 'px-5 py-2.5 text-sm';

  return (
    <a
      href={SITE.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-line-500 font-bold text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-line-600 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${sizeClass} ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      {label}
    </a>
  );
}
