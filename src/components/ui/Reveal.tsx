import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** 表示開始の遅延(ms)。並んだ要素は 60〜120ms ずつずらす */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * スクロールで画面に入ったときに1回だけフェードイン表示する。
 * 実際の見た目は index.css の .reveal / .is-shown で統一管理。
 * prefers-reduced-motion 時はCSS側でアニメーションを無効化する。
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver が使えない環境では即表示（内容を隠したままにしない）
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-shown' : ''} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
