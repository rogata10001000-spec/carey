import { MessageCircle } from 'lucide-react';

const LINE_URL = 'https://line.me/R/ti/p/YOUR_LINE_ID';

const footerLinks = [
  { label: 'トップ', href: '#' },
  { label: 'サービス内容', href: '#services' },
  { label: '進め方', href: '#process' },
  { label: '事例・実績', href: '#cases' },
  { label: '料金目安', href: '#pricing' },
  { label: 'CAREYについて', href: '#about' },
  { label: 'お問い合わせ', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-wide py-12 sm:py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">CAREY</h2>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              受託システム開発<br />
              WEBアプリ構築 / スプレッドシート自動化 / 公式LINE連携
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>公式LINEで相談する</span>
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-100 mb-5 tracking-wider">ページ</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-100 mb-5 tracking-wider">お問い合わせ</h3>
            <p className="text-sm text-navy-200 mb-4 leading-relaxed">
              ご相談は公式LINEから承っております。<br />
              お気軽にメッセージをお送りください。
            </p>
            <p className="text-sm text-navy-300">
              まだ依頼が決まっていなくても大丈夫です。
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-navy-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-navy-300">
            &copy; {new Date().getFullYear()} CAREY. All rights reserved.
          </p>
          <a
            href="#privacy"
            className="text-sm text-navy-300 hover:text-white transition-colors"
          >
            プライバシーポリシー
          </a>
        </div>
      </div>
    </footer>
  );
}
