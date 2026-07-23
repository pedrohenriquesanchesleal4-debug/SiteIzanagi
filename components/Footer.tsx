"use client"

import { useI18n } from "@/lib/i18n"

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <span className="text-white/20">&copy; 2026 IzanagiIA</span>
          <span className="text-white/20 text-xs">{t("footer.tagline")}</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/pedrohenriquesanchesleal4-debug/izanagi-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/60 transition-colors text-xs"
            >
              {t("links.github_repo")}
            </a>
            <a
              href="https://www.npmjs.com/package/izanagi-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/60 transition-colors text-xs"
            >
              {t("links.npm_package")}
            </a>
            <a
              href="https://github.com/pedrohenriquesanchesleal4-debug"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/60 transition-colors text-xs"
            >
              {t("links.github_profile")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
