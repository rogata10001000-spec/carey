import { Factory, Users, Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const cases = [
  {
    icon: Factory,
    industry: '食品製造業',
    challenge: '原材料の価格変動が頻繁で、原価計算に毎回時間がかかっていた',
    solution: '価格変動に応じた原価計算を自動化するシステムを構築',
    effect: '計算にかかる時間が大幅に短縮、価格改定への対応もスムーズに',
    metrics: ['作業時間 80%削減', '計算精度 向上'],
  },
  {
    icon: Users,
    industry: '人材派遣業',
    challenge: '登録スタッフの情報管理、案件とのマッチングが煩雑だった',
    solution: '登録スタッフ管理・案件管理システムを構築',
    effect: 'スタッフ情報の一元管理、案件マッチングの効率化を実現',
    metrics: ['マッチング 3倍速', '管理工数 60%削減'],
  },
  {
    icon: Calendar,
    industry: '採用/人事',
    challenge: '会社説明会・面接の日程調整に手間がかかっていた',
    solution: 'LINE連携×Googleカレンダーで日程調整を自動化',
    effect: '日程調整の手作業がなくなり、候補者対応がスピードアップ',
    metrics: ['調整時間 90%削減', '対応速度 即時化'],
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="container-wide">
        <SectionTitle
          label="CASES"
          title="導入事例"
          subtitle="同じような課題を解決してきた実績があります"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-charcoal-200 shadow-soft overflow-hidden transition-shadow hover:shadow-card-hover flex flex-col"
            >
              <div className="p-6 md:p-7 flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <caseItem.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-sm font-medium text-teal-600">
                    {caseItem.industry}
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-medium text-charcoal-400 mb-1.5">課題</p>
                    <p className="text-charcoal-700 text-sm leading-relaxed">
                      {caseItem.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-charcoal-400 mb-1.5">実施内容</p>
                    <p className="text-charcoal-700 text-sm leading-relaxed">
                      {caseItem.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-50 px-6 md:px-7 py-5 border-t border-charcoal-200">
                <p className="text-sm text-charcoal-700 leading-relaxed mb-3">
                  {caseItem.effect}
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseItem.metrics.map((metric, idx) => (
                    <span key={idx} className="text-xs font-semibold text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
