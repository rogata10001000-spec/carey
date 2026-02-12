interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-18 ${align === 'center' ? 'text-center' : ''}`}>
      {label && (
        <p className={`text-sm font-medium tracking-widest mb-4 ${light ? 'text-teal-300' : 'text-teal-600'}`}>
          {label}
        </p>
      )}
      <h2
        className={`text-section-sp md:text-section ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-charcoal-300' : 'text-charcoal-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
