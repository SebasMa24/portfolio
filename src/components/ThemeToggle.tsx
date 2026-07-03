import { LuMoon, LuSun } from "react-icons/lu";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "")
  );

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <button
      className="text-muted hover:text-accent transition-colors p-1"
      onClick={() => setTheme(theme === "dark" ? "" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <LuSun size={16} /> : <LuMoon size={16} />}
    </button>
  );
}
