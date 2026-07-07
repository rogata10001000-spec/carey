import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { SITE } from '../../config/site';

const COMPANY_ROWS = [
  { label: '屋号', value: SITE.name },
  { label: '代表者', value: SITE.representative },
  { label: '所在地', value: SITE.address },
  { label: '事業内容', value: SITE.business },
  { label: '対応エリア', value: SITE.area },
  { label: 'メール', value: SITE.email },
  { label: '開業年月', value: SITE.founded },
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
              <p className="mt-4 text-sm leading-loose text-slate-700">
                CAREYは、地域の小規模事業者が抱える日々の業務負担を、使いやすいWebアプリで軽くすることを目的にしています。
                高額で複雑なシステムではなく、今の業務に合った、使い続けられる仕組みをご提案します。
              </p>
              <p className="mt-5 whitespace-nowrap text-sm font-bold text-slate-800">
                {SITE.name} 代表 {SITE.representative}
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
      </div>
    </section>
  );
}
