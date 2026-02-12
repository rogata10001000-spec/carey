import Accordion from '../ui/Accordion';
import SectionTitle from '../ui/SectionTitle';

const faqItems = [
  {
    question: 'まだ依頼が決まっていなくても相談できますか？',
    answer: 'はい、もちろんです。「こんなことで困っている」という段階からご相談いただけます。状況整理から一緒に行いますので、お気軽にお問い合わせください。',
  },
  {
    question: '期間はどれくらいかかりますか？',
    answer: '通常1週間〜1ヶ月が目安です。シンプルな自動化であれば短期間で、複雑なシステムの場合はもう少しお時間をいただくことがあります。',
  },
  {
    question: '費用はどれくらいですか？',
    answer: '初期費用3万円〜、開発費用は10〜30万円（小規模）、30〜80万円（中〜大規模）が目安です。まずは小さく始めることも可能ですので、ご予算に合わせてご提案します。',
  },
  {
    question: '運用後の改善はできますか？',
    answer: 'はい。月額3〜10万円の伴走支援プランで、運用中の改善や追加開発に対応します。使いながら見えてきた課題にも継続的に対応できます。',
  },
  {
    question: '何を準備すればいいですか？',
    answer: '現状のやり方と困っていることが分かれば大丈夫です。資料やデータがなくても、お話を聞きながら一緒に整理していきますのでご安心ください。',
  },
];

export default function FAQ() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <SectionTitle
          label="FAQ"
          title="よくあるご質問"
          subtitle="初めての方からよくいただくご質問にお答えします"
        />

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
