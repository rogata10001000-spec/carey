import { PiggyBank, Puzzle, Sprout } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const VALUES = [
  {
    icon: PiggyBank,
    title: '安価に導入できる',
    body: 'AIコーディング支援ツールを活用し、開発工程を効率化。必要な機能に絞ることで、導入しやすい価格で提供します。',
  },
  {
    icon: Puzzle,
    title: '業務に合わせて作れる',
    body: '予約、問い合わせ、顧客管理、申請、集計など、現場の流れに合わせて設計します。',
  },
  {
    icon: Sprout,
    title: '導入後も改善できる',
    body: '作って終わりではなく、実際に使いながら改善。運用に合わせて使いやすく育てていきます。',
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="SOLUTION"
          title={
            <>
              業務に合わせて、
              <br className="sm:hidden" />
              必要な機能だけをつくる。
            </>
          }
          lead={
            <>
              CAREYは、最初から大きなシステムを作るのではなく、今の業務を整理し、本当に必要な機能に絞ってWebアプリを開発します。
              既製サービスに業務を合わせるのではなく、業務の流れに合わせて仕組みを作ることが特徴です。
              そのため、小規模事業者でも導入しやすく、無駄の少ない業務改善が可能です。
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                  <v.icon className="h-7 w-7 text-brand-600" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
