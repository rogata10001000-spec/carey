import SectionTitle from '../ui/SectionTitle';

export default function Privacy() {
  return (
    <section id="privacy" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container-narrow">
        <SectionTitle title="プライバシーポリシー" />

        <div className="max-w-none space-y-6 text-charcoal-600 text-sm leading-relaxed">
          <div>
            <h3 className="text-base font-medium text-navy-900 mb-2">
              1. 個人情報の取り扱いについて
            </h3>
            <p>
              CAREY（以下「当事業」）は、お客様からお預かりした個人情報を適切に管理し、
              以下の目的以外には使用いたしません。
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-navy-900 mb-2">
              2. 個人情報の利用目的
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>お問い合わせへの対応</li>
              <li>サービスのご案内・ご提案</li>
              <li>ご契約に関するご連絡</li>
              <li>サービス提供・改善のため</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium text-navy-900 mb-2">
              3. 個人情報の第三者提供
            </h3>
            <p>
              当事業は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-navy-900 mb-2">
              4. 個人情報の管理
            </h3>
            <p>
              当事業は、個人情報の漏洩、滅失、毀損を防止するため、
              適切な安全管理措置を講じます。
            </p>
          </div>

          <div>
            <h3 className="text-base font-medium text-navy-900 mb-2">
              5. お問い合わせ
            </h3>
            <p>
              個人情報の取り扱いに関するお問い合わせは、公式LINEよりご連絡ください。
            </p>
          </div>

          <p className="text-xs text-charcoal-400 pt-4 border-t border-charcoal-100">
            制定日：2024年1月1日
          </p>
        </div>
      </div>
    </section>
  );
}
