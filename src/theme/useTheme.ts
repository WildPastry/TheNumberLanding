import { useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';
const STORAGE_KEY: string = 'theme';

/**
 * Applies the given theme to the document.
 *
 * This function toggles the 'dark' class on the document's root element
 * based on the given theme. If the theme is 'dark', it adds the class;
 * otherwise, it removes it.
 *
 * @param {Theme} theme - The theme to apply. It must be either 'light' or 'dark'.
 */
function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

/**
 * A hook that provides the current theme and a function to toggle it.
 *
 * It uses the local storage to save the theme and restore it when the app is reloaded.
 *
 * The theme can be either 'light' or 'dark'. It defaults to 'dark' if no theme is saved.
 *
 * @returns An object containing the current theme and a function to toggle it.
 * @example
 * const { theme, toggle } = useTheme();
 * // theme is 'light' or 'dark'
 * // toggle toggles the theme between 'light' and 'dark'
 */
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

  /**
   * Toggles the theme between 'light' and 'dark'.
   */
  const toggle = () =>
    setTheme((theme: Theme) => (theme === 'dark' ? 'light' : 'dark'));

  return { setTheme, theme, toggle };
}
