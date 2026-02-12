import { Zap, Users, RefreshCw } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const reasons = [
  {
    number: '01',
    icon: Zap,
    title: 'AIを活用して、早く形にできます',
    description: '最新のAI技術を開発に取り入れることで、従来よりも短い期間で、現実的な価格でシステムを構築できます。',
  },
  {
    number: '02',
    icon: Users,
    title: '現場のやり方を理解してから作ります',
    description: '技術ありきではなく、まず業務の流れをヒアリング。現場で実際に使われる形を目指して設計します。',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: '作って終わりではなく、一緒に改善します',
    description: '納品後も月額サポートで継続的に改善。使いながら見えてきた課題にも対応します。',
  },
];

export default function Reasons() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-charcoal-50">
      <div className="container-wide">
        <SectionTitle
          label="WHY CAREY"
          title="CAREYが選ばれる理由"
          subtitle="「早い・分かりやすい・寄り添う」の3つを大切にしています"
        />

        <div className="space-y-10 sm:space-y-12 md:space-y-16 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-10"
            >
              <div className="flex-shrink-0 flex items-start gap-4 md:gap-5">
                <span className="text-4xl md:text-5xl font-bold text-teal-200">
                  {reason.number}
                </span>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                  <reason.icon className="w-5 h-5 text-teal-600" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-navy-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-charcoal-500 leading-relaxed text-base md:text-lg">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
