import { UserX, Clock, Puzzle, CircleDollarSign } from 'lucide-react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const problems = [
  {
    icon: UserX,
    text: '「この業務、あの人しか分からない」',
  },
  {
    icon: Clock,
    text: '「毎回同じ作業に時間が取られる」',
  },
  {
    icon: Puzzle,
    text: '「市販のアプリだと合わない」',
  },
  {
    icon: CircleDollarSign,
    text: '「相談したいけど、高そうで踏み出せない」',
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-16 sm:py-20 md:py-32 bg-charcoal-50">
      <div className="container-wide">
        <SectionTitle
          label="PROBLEMS"
          title="こんなお悩みありませんか？"
          subtitle="一つでも当てはまれば、仕組み化で解決できるかもしれません"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <Card key={index} hover className="text-center h-full flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </div>
              <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed flex-1">
                {problem.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
