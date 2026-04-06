import {LuMoon, LuSun} from "react-icons/lu";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "")
  );

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
    else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <button 
      className="h-full rounded-xl ml-2 p-2 flex justify-center items-center dark:hover:bg-slate-600 hover:bg-slate-300 transition" 
      onClick={() => setTheme(theme === "dark" ? "" : "dark")}>
      {theme === "dark" ? <LuSun size={24} color="white"/> : <LuMoon size={24}/>}
    </button>
  );
}