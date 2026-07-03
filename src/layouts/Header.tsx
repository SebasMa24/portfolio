import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../components/ThemeToggle";

export default function Header() {
  const { t } = useTranslation();
  const links = [
    { href: "#home", label: t("nav.home") },
    { href: "#education", label: t("nav.education") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper/80 dark:bg-paper/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-display text-sm font-semibold tracking-tight text-ink dark:text-ink no-underline shrink-0">
          SM<span className="text-accent">.</span>
        </a>
        <nav className="flex items-center gap-2 md:gap-5 flex-nowrap">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] md:text-xs uppercase tracking-wider md:tracking-widest text-muted hover:text-accent transition-colors no-underline whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-1 md:ml-2 shrink-0">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
