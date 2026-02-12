import { Lightbulb, Clock, Heart, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const values = [
  {
    number: '01',
    icon: Lightbulb,
    title: '仕組みで人を楽にする',
    description:
      '手作業や属人化した業務を、誰でも使える仕組みに変えます。',
  },
  {
    number: '02',
    icon: Clock,
    title: '浮いた時間を、人にしかできない仕事へ',
    description:
      '自動化で生まれた時間を、もっと価値のある仕事に使えるようにします。',
  },
  {
    number: '03',
    icon: Heart,
    title: '作って終わりではなく、伴走で改善',
    description:
      '納品後も一緒に改善を続け、本当に使われるシステムを目指します。',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-teal-400/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container-wide relative z-10">
        <SectionTitle
          label="ABOUT"
          title="CAREYについて"
          subtitle="業務の仕組み化を通じて、働く人を楽にしたい"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mb-12 md:mb-20">
            <div className="md:col-span-2 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center border border-teal-200">
                  <span className="text-xl font-bold text-teal-600">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900">CAREY</h3>
                  <p className="text-charcoal-500 text-sm">受託システム開発</p>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-charcoal-200 to-transparent mb-6" />
              <p className="text-charcoal-600 text-sm leading-relaxed">
                中小企業・個人事業主に向けた業務システムの受託開発サービスです。
              </p>
            </div>

            <div className="md:col-span-3 space-y-5">
              <p className="text-charcoal-600 leading-relaxed text-base md:text-lg">
                市販のアプリでは解決できない、御社特有の業務課題に向き合います。WEBアプリの構築、スプレッドシートの自動化、公式LINE連携など、必要な仕組みをオーダーメイドで構築します。
              </p>
              <p className="text-charcoal-600 leading-relaxed text-base md:text-lg">
                「どこに相談すればいいか分からない」「高そうで踏み出せない」そんな方こそ、まずはお気軽にご相談ください。状況をお聞きしながら、一緒に最適な形を考えます。
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <ArrowRight className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold text-navy-900">
              大事にしていること
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-charcoal-200 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-charcoal-50 rounded-2xl p-5 sm:p-6 md:p-7 border border-charcoal-200 hover:border-teal-300 transition-all duration-200 hover:shadow-card"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-bold text-teal-600 bg-teal-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    {value.number}
                  </span>
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                    <value.icon className="w-4.5 h-4.5 text-teal-600" />
                  </div>
                </div>
                <h4 className="font-medium text-navy-900 mb-2 text-base">
                  {value.title}
                </h4>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
