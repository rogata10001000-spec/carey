import { MessageCircle } from 'lucide-react';

const LINE_URL = 'https://line.me/R/ti/p/YOUR_LINE_ID';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 px-3 pt-3 bg-white border-t border-charcoal-200" style={{ paddingBottom: `max(12px, env(safe-area-inset-bottom, 12px))` }}>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span>公式LINEで相談する</span>
      </a>
    </div>
  );
}
