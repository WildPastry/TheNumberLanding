import { useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';
const STORAGE_KEY: string = 'theme';

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function useTheme() {
  const initial: Theme = useMemo<Theme>(() => {
    const saved: string | null = localStorage.getItem(STORAGE_KEY);
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  }, []);

  const [theme, setTheme] = useState<Theme>(initial);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () =>
    setTheme((theme: Theme) => (theme === 'dark' ? 'light' : 'dark'));

  return { setTheme, theme, toggle };
}
