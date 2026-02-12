import { Check } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const plans = [
  {
    name: '小規模GAS自動化プラン',
    initialCost: '5〜10万円',
    monthlyCost: '1〜2万円',
    description:
      'GoogleスプレッドシートやGASを活用し、通知自動化・データ整形・簡易ワークフローを構築します。小規模な業務改善をスピーディに実現したい方向けのプランです。',
    features: [
      '通知自動化',
      'データ集計／整形',
      '簡易承認フロー',
      'Chatwork／LINE連携',
    ],
  },
  {
    name: '小規模〜中規模Webシステム開発',
    initialCost: '50〜70万円',
    monthlyCost: '5〜7万円',
    description:
      'ログイン機能・データベース設計・権限管理を含む業務管理システムを構築します。業務フローを整理し、再現性のある仕組みに落とし込みます。',
    features: [
      '認証機能',
      'データベース設計',
      '権限管理（ロール設計）',
      'ダッシュボード',
      '基本的な保守／軽微改修',
    ],
  },
  {
    name: '大規模Webシステム／複数拠点対応',
    initialCost: '80〜150万円',
    monthlyCost: '7万円〜',
    description:
      '複数拠点管理、詳細な権限設計、外部サービス連携などを含む本格的な業務基盤を構築します。法人規模でのDX推進を見据えた設計を行います。',
    features: [
      '複数拠点管理',
      '高度なロール設計',
      'API連携',
      '監査ログ設計',
      '中長期運用サポート',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-32 bg-charcoal-50">
      <div className="container-narrow">
        <SectionTitle
          label="PRICING"
          title="料金プラン"
          subtitle="業務規模と目的に応じた最適なプランをご提案します"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 md:mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-charcoal-200 shadow-soft p-5 sm:p-6 md:p-8 flex flex-col transition-shadow duration-200 hover:shadow-card-hover"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                {plan.name}
              </h3>

              <p className="text-sm text-charcoal-500 leading-relaxed mb-6">
                {plan.description}
              </p>

              <div className="bg-charcoal-50 rounded-2xl p-5 mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-medium text-charcoal-400 tracking-wide">
                    初期費用
                  </span>
                  <span className="text-base font-semibold text-navy-900">
                    {plan.initialCost}
                  </span>
                </div>
                <div className="w-full h-px bg-charcoal-200 my-2" />
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-medium text-charcoal-400 tracking-wide">
                    月額保守
                  </span>
                  <span className="text-base font-semibold text-navy-900">
                    {plan.monthlyCost}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-600 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="sm" className="w-full">
                ご相談はこちら
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-charcoal-400">
          内容・規模によって費用は変動します。まずはお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
