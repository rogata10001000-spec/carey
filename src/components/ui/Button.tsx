import { MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
}

const LINE_URL = 'https://line.me/R/ti/p/YOUR_LINE_ID';

export default function Button({
  children,
  href = LINE_URL,
  variant = 'primary',
  size = 'md',
  showIcon = true,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors duration-200';

  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-card',
    secondary: 'bg-navy-900 text-white hover:bg-navy-800 shadow-card',
    outline: 'bg-white text-navy-900 border-2 border-charcoal-300 hover:border-teal-500 hover:text-teal-600',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClassName}>
        {showIcon && <MessageCircle className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={combinedClassName}
    >
      {showIcon && <MessageCircle className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      {children}
    </a>
  );
}
