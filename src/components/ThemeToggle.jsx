import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme } from "../theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  return (
    <button className="btn btn--ghost" onClick={toggle} aria-label="Alternar tema">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
