import Button from '../ui/Button';

const templateLines = [
  '業種：',
  '困っていること：',
  '今のやり方（分かる範囲で）：',
  'こうなったら嬉しい：',
  '相談したい時期：',
];

export default function FinalCTA() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-teal-600">
      <div className="container-narrow text-center">
        <h2 className="text-section-sp md:text-section text-white mb-8">
          まずはお気軽にご相談ください
        </h2>

        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            まだ依頼が決まっていなくても大丈夫です。
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            「これ、仕組み化できる？」でOKです。
          </p>
          <p className="text-base text-white/80">
            無理な営業はいたしません。
          </p>
        </div>

        <Button size="lg" variant="secondary">
          公式LINEで相談する
        </Button>

        <div className="mt-10 sm:mt-16 max-w-lg mx-auto text-left">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card">
            <h3 className="font-semibold text-navy-900 mb-5 text-center text-base">
              相談テンプレート（コピーしてお使いください）
            </h3>

            <div className="space-y-0.5">
              {templateLines.map((line, index) => (
                <div key={index} className="flex items-start gap-3 py-2.5 border-b border-charcoal-100 last:border-0">
                  <span className="text-xs font-medium text-teal-600 bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-charcoal-600">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
