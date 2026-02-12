import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const navItems = [
  { label: 'トップ', href: '#' },
  { label: 'サービス', href: '#services' },
  { label: '進め方', href: '#process' },
  { label: '事例', href: '#cases' },
  { label: '料金', href: '#pricing' },
  { label: 'CAREYについて', href: '#about' },
];

const LINE_URL = 'https://line.me/R/ti/p/YOUR_LINE_ID';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-charcoal-200/60">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#" className="text-xl md:text-2xl font-bold text-navy-900 tracking-wide">
            CAREY
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-charcoal-600 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>LINEで相談</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-charcoal-600 hover:text-navy-900 transition-colors"
              aria-label="メニュー"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto overscroll-contain">
          <nav className="container-wide py-6 sm:py-8 pb-safe" style={{ paddingBottom: `max(24px, env(safe-area-inset-bottom, 24px))` }}>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 text-lg text-charcoal-700 hover:text-navy-900 border-b border-charcoal-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 flex items-center justify-center gap-2 w-full py-4 bg-teal-600 text-white text-lg font-medium rounded-full"
            >
              <MessageCircle className="w-5 h-5" />
              <span>公式LINEで相談する</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
