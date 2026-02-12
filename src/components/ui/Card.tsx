import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-charcoal-200 shadow-soft
        ${hover ? 'transition-shadow duration-200 hover:shadow-card-hover' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
