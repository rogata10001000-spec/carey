import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-charcoal-50 to-white pt-16 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-teal-400/15 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="hidden sm:block absolute top-20 left-10 w-2 h-2 bg-teal-400/20 rounded-full" />
      <div className="hidden sm:block absolute top-40 right-20 w-1.5 h-1.5 bg-teal-300/15 rounded-full" />

      <div className="container-narrow text-center py-16 sm:py-20 md:py-28 relative z-10">
        <div className="animate-fade-in-up">
          <p className="text-teal-600 text-sm font-medium tracking-wide mb-6 md:mb-10">
            中小企業・個人事業主向け
          </p>
        </div>

        <h1 className="text-hero-sp md:text-hero text-navy-900 mb-8 leading-tight md:leading-tight animate-fade-in-up animate-delay-100 max-w-4xl mx-auto">
          市販のアプリでは手が届かない業務に、<span className="text-teal-600">御社専用</span>のWEBアプリを作ります。
        </h1>

        <p className="text-base md:text-lg text-charcoal-500 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          業務の属人化や手作業を、仕組みでシンプルに。
        </p>

        <div className="animate-scale-in animate-delay-300">
          <Button size="lg">
            公式LINEで相談する
          </Button>
        </div>

        <p className="mt-6 text-sm text-charcoal-400 animate-fade-in animate-delay-300">
          まだ依頼が決まっていなくてもOKです
        </p>
      </div>

      <a
        href="#problems"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-charcoal-400 hover:text-teal-600 transition-colors z-10"
        aria-label="下へスクロール"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
