"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./switch";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex space-x-2">
      <span>🌑</span>
      <Switch
        aria-label="Toggle Theme Switch"
        checked={theme === "light"}
        onCheckedChange={(v) => setTheme(v ? "light" : "dark")}
      />
      <span>☀️</span>
    </div>
  );
};

export default ThemeSwitcher;
