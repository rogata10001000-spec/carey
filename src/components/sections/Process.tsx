import { MessageCircle, ClipboardList, FileText, Code, Rocket, HeartHandshake, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const steps = [
  {
    icon: MessageCircle,
    title: 'LINEで相談',
    description: 'まずは状況をお聞かせください',
  },
  {
    icon: ClipboardList,
    title: 'ヒアリング',
    description: '現場の業務を詳しく理解します',
  },
  {
    icon: FileText,
    title: '提案',
    description: '費用・期間・やることをご提示',
  },
  {
    icon: Code,
    title: '開発',
    description: '早く使える形を作ります',
  },
  {
    icon: Rocket,
    title: '運用開始',
    description: '実際の業務でお使いいただきます',
  },
  {
    icon: HeartHandshake,
    title: '伴走改善',
    description: '使いながら一緒に改善します',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 md:py-32 bg-charcoal-50">
      <div className="container-wide">
        <SectionTitle
          label="PROCESS"
          title="ご相談から運用までの流れ"
          subtitle="最初から完璧を目指さず、まず使える形から始めます"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-10 items-start">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-5 text-charcoal-300">
                  {(index + 1) % 3 !== 0 && (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
              )}

              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-bold text-teal-600 bg-teal-100 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-charcoal-200 to-transparent" />
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-charcoal-200 hover:border-teal-300 transition-all duration-200 hover:shadow-card">
                <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
