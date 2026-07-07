/**
 * サイト全体で使う定数。
 *
 * ⚠️ 以下は【仮データ】です。公開前に必ず実際の値へ差し替えてください。
 * - LINE_URL: 公式LINEの友だち追加URL（lin.ee のURL）
 * - EMAIL: 問い合わせ用メールアドレス
 * - REPRESENTATIVE / ADDRESS / FOUNDED: 会社概要の未確定項目
 * - SITE_URL / OGP_IMAGE: 本番ドメイン確定後に差し替え（index.html 側も同様）
 */
export const SITE = {
  name: 'CAREY',
  tagline: '業務に合わせたオーダーメイドWebアプリ開発',

  /** TODO(仮): 公式LINEの友だち追加URLに差し替える */
  lineUrl: 'https://lin.ee/XXXXXXX',

  /** TODO(仮): 実際の問い合わせ用メールアドレスに差し替える */
  email: 'info@carey.example.com',

  /** TODO(仮): 代表者名に差し替える */
  representative: '（代表者名）',

  /** TODO(仮): 所在地に差し替える */
  address: '熊本県（所在地は準備中）',

  /** TODO(仮): 開業年月に差し替える */
  founded: '（開業年月は準備中）',

  area: '熊本県を中心に、オンラインで全国対応',
  business:
    'Webアプリ開発／スプレッドシート自動化／公式LINE連携／業務管理システム構築／データ集計・可視化／業務改善の相談',
};

/**
 * 差し替え用の画像スロット。
 * public/images/ に画像を置いてパスを設定すると、該当箇所に自動で表示される。
 * null のあいだは代替デザイン（アイコン表示）になり、未設定でも見た目は破綻しない。
 */
export const IMAGES = {
  /** TODO(仮): 代表近影（例: '/images/representative.jpg'）。会社概要の代表メッセージに表示 */
  representativePhoto: null as string | null,

  /** TODO(仮): LINE友だち追加のQRコード（例: '/images/line-qr.png'）。最終CTAに表示 */
  lineQr: null as string | null,
};

/** ページ内アンカーの一覧（ヘッダー・フッターのナビで共用） */
export const NAV_ITEMS = [
  { href: '#solution', label: 'できること' },
  { href: '#services', label: 'サービス' },
  { href: '#cases', label: '事例' },
  { href: '#pricing', label: '料金' },
  { href: '#flow', label: '制作の流れ' },
  { href: '#faq', label: 'よくある質問' },
  { href: '#company', label: '会社概要' },
] as const;
