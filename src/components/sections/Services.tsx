import { Monitor, FileSpreadsheet, MessageSquare, Link } from 'lucide-react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

const services = [
  {
    icon: Monitor,
    title: 'WEBアプリの構築',
    description: '案件管理、顧客管理、社内申請、集計ダッシュボードなど、業務に合わせたシステムを構築します。',
  },
  {
    icon: FileSpreadsheet,
    title: 'スプレッドシートの自動化',
    description: '集計、転記、通知、チェックなど、毎日・毎週の手作業を自動化します。',
  },
  {
    icon: MessageSquare,
    title: '公式LINE連携',
    description: '予約受付、問い合わせ対応、通知送信など、LINEを活用した業務の仕組み化を行います。',
  },
  {
    icon: Link,
    title: '既存ツール連携',
    description: 'Google Workspace、Chatworkなど、既にお使いのツールと連携して二重入力をなくします。',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="container-wide">
        <SectionTitle
          label="SERVICES"
          title="CAREYができること"
          subtitle="御社の業務に合わせて、必要な仕組みを構築します"
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card key={index} hover className="h-full flex flex-col">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-5">
                <service.icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal-500 leading-relaxed flex-1">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
