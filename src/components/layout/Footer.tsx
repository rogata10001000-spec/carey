import { NAV_ITEMS, SITE } from '../../config/site';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xl font-extrabold tracking-wide text-white">CAREY</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-200">
              紙・Excel・LINE・電話で回している業務を、事業に合わせたWebアプリに変えていきます。
            </p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="whitespace-nowrap text-sm text-brand-200 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-brand-900 pt-6 text-xs text-brand-300">
          <p>&copy; {new Date().getFullYear()} {SITE.name}</p>
        </div>
      </div>
    </footer>
  );
}
