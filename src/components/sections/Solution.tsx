import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  Check,
  FileSpreadsheet,
  FileText,
  MessageCircle,
  Phone,
  PiggyBank,
  Puzzle,
  Sprout,
} from 'lucide-react';
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

const SCATTERED_TOOLS = [
  { icon: FileText, label: '紙の台帳' },
  { icon: FileSpreadsheet, label: 'Excel' },
  { icon: MessageCircle, label: 'LINE' },
  { icon: Phone, label: '電話・メモ' },
];

const APP_FEATURES = ['予約も申請も1つの画面に', '入力すれば自動で集計', 'スタッフ全員で共有できる'];

/** 図解: バラバラの管理 → ひとつのWebアプリ */
function TransformDiagram() {
  return (
    <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-10">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1.1fr]">
        {/* Before: バラバラの管理 */}
        <div>
          <p className="text-center text-sm font-bold text-slate-500">いまは、バラバラの管理</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {SCATTERED_TOOLS.map((tool, i) => (
              <div
                key={tool.label}
                className={`flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-3 shadow-soft ${
                  i % 2 === 1 ? 'translate-y-1.5' : ''
                }`}
              >
                <tool.icon className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
                <span className="whitespace-nowrap text-sm font-medium text-slate-600">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 矢印 */}
        <div className="flex flex-col items-center gap-1.5 text-brand-600" aria-hidden="true">
          <span className="whitespace-nowrap rounded-full bg-accent-200 px-3.5 py-1 text-xs font-bold text-slate-800">
            CAREYがまとめて設計
          </span>
          <ArrowDown className="h-7 w-7 md:hidden" />
          <ArrowRight className="hidden h-7 w-7 md:block" />
        </div>

        {/* After: ひとつのWebアプリ */}
        <div>
          <p className="text-center text-sm font-bold text-brand-700">ひとつのWebアプリに</p>
          <div className="mt-4 overflow-hidden rounded-xl border border-brand-100 bg-white shadow-card">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-brand-50/60 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-brand-200" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-brand-200" aria-hidden="true" />
              <span className="ml-2 flex items-center gap-1.5 text-xs font-bold text-brand-800">
                <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
                あなたの事業専用アプリ
              </span>
            </div>
            <ul className="space-y-2 p-4">
              {APP_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-line-500/10">
                    <Check className="h-3 w-3 text-line-600" aria-hidden="true" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

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

        <Reveal delay={120}>
          <TransformDiagram />
        </Reveal>

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
