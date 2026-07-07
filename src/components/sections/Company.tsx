import { FileCheck, Lock, MessagesSquare, User } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { IMAGES, SITE } from '../../config/site';

const COMPANY_ROWS = [
  { label: '屋号', value: SITE.name },
  { label: '代表者', value: SITE.representative },
  { label: '所在地', value: SITE.address },
  { label: '事業内容', value: SITE.business },
  { label: '対応エリア', value: SITE.area },
  { label: 'メール', value: SITE.email },
  { label: '開業年月', value: SITE.founded },
];

/** 取引にあたっての方針（安心材料） */
const POLICIES = [
  {
    icon: FileCheck,
    title: '着手前に見積りを明確に',
    body: '作る範囲と費用を書面で確認してから開発を始めます。途中で勝手に費用が増えることはありません。',
  },
  {
    icon: Lock,
    title: '業務情報の取り扱いに配慮',
    body: 'ご相談内容や社内資料は、開発の目的以外に使用しません。秘密保持契約にも対応します。',
  },
  {
    icon: MessagesSquare,
    title: 'やり取りはLINE・メールで完結',
    body: '打ち合わせはオンライン中心。日々の連絡は使い慣れたLINEで気軽にやり取りできます。',
  },
];

export default function Company() {
  return (
    <section id="company" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="COMPANY" title="会社概要" />

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <Reveal>
            <div className="rounded-2xl bg-brand-50/60 p-7 sm:p-8">
              <p className="text-sm font-bold tracking-widest text-brand-600">MESSAGE</p>

              <div className="mt-5 flex items-center gap-4">
                {/* 代表近影: IMAGES.representativePhoto を設定すると写真に切り替わる */}
                {IMAGES.representativePhoto ? (
                  <img
                    src={IMAGES.representativePhoto}
                    alt={`${SITE.name} 代表 ${SITE.representative}`}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-soft"
                  />
                ) : (
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-100">
                    <User className="h-9 w-9 text-brand-400" aria-hidden="true" />
                  </span>
                )}
                <div className="min-w-0">
                  <p className="text-xs text-slate-500">代表</p>
                  <p className="mt-0.5 text-base font-bold text-slate-900">{SITE.representative}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    ご相談から開発、導入後のサポートまで、代表がすべて担当します。
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-loose text-slate-700">
                CAREYは、地域の小規模事業者が抱える日々の業務負担を、使いやすいWebアプリで軽くすることを目的にしています。
                高額で複雑なシステムではなく、今の業務に合った、使い続けられる仕組みをご提案します。
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white px-6 shadow-soft sm:px-7">
              {COMPANY_ROWS.map((row) => (
                <div key={row.label} className="flex gap-4 py-4">
                  <dt className="w-24 shrink-0 whitespace-nowrap text-sm font-bold text-slate-500">
                    {row.label}
                  </dt>
                  <dd className="min-w-0 text-sm leading-relaxed text-slate-700">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {POLICIES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <p.icon className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                  {p.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
