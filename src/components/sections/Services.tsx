import {
  MonitorSmartphone,
  FileSpreadsheet,
  MessageCircle,
  ClipboardList,
  BarChart3,
  SearchCheck,
} from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const SERVICES = [
  {
    icon: MonitorSmartphone,
    title: 'Webアプリ開発',
    body: '予約管理、注文管理、問い合わせ管理、顧客管理、業務進捗管理など、事業に合わせたWebアプリを開発します。',
  },
  {
    icon: FileSpreadsheet,
    title: 'スプレッドシート自動化',
    body: 'Googleスプレッドシートを活用し、入力、集計、通知、レポート作成などを自動化します。',
  },
  {
    icon: MessageCircle,
    title: '公式LINE連携',
    body: 'LINEからの予約、注文、問い合わせ、通知、顧客管理などを業務システムと連携します。',
  },
  {
    icon: ClipboardList,
    title: '業務管理システム構築',
    body: '社内申請、案件管理、スタッフ管理、売上管理、タスク管理などを一元化します。',
  },
  {
    icon: BarChart3,
    title: 'データ集計・可視化',
    body: '売上、実績、予約数、問い合わせ数などを見える化し、判断しやすい形に整理します。',
  },
  {
    icon: SearchCheck,
    title: '既存業務の改善提案',
    body: '今の業務フローをヒアリングし、どこをアプリ化すべきか整理します。',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="SERVICE"
          title="こんな業務を、Webアプリにできます。"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <s.icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
