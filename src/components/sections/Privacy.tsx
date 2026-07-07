import Reveal from '../ui/Reveal';
import { SITE } from '../../config/site';

const ITEMS = [
  {
    title: '取得する情報',
    body: 'お問い合わせ・ご相談の際にご提供いただく、お名前、会社名・屋号、連絡先（メールアドレス・LINEアカウント等）、ご相談内容を取得します。',
  },
  {
    title: '利用目的',
    body: 'ご相談への回答、お見積り・ご提案の作成、開発・サポートに関する連絡のために利用します。目的外には利用しません。',
  },
  {
    title: '第三者への提供',
    body: '法令に基づく場合を除き、ご本人の同意なく第三者に提供することはありません。',
  },
  {
    title: '業務情報の管理',
    body: '開発にあたりお預かりした業務資料・データは適切に管理し、契約終了後はご希望に応じて返却または削除します。',
  },
  {
    title: 'お問い合わせ窓口',
    body: `本ポリシーに関するお問い合わせは、公式LINEまたはメール（${SITE.email}）までご連絡ください。`,
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="border-t border-slate-100 bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-lg font-bold text-slate-900 sm:text-xl">
            プライバシーポリシー
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <dl className="mt-8 space-y-5">
            {ITEMS.map((item) => (
              <div key={item.title}>
                <dt className="text-sm font-bold text-slate-800">{item.title}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
