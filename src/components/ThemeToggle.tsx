import { IoMoon, IoSunny } from 'react-icons/io5';
import React, { memo } from 'react';
import { useTheme } from '../theme/useTheme';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggle } = useTheme();
  const next: string = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label={`Switch to ${next} mode`}
      className={[
        // Layout / hit area
        'inline-flex items-center justify-center',
        'h-10 w-10 rounded-full',
        // Cursor + transitions
        'cursor-pointer select-none',
        'transition-transform duration-150 active:scale-95',
        // Current text colour
        'text-(--fg)',
        // Hover / active
        'bg-[color-mix(in_oklab,var(--fg)_10%,transparent)]',
        'hover:bg-[color-mix(in_oklab,var(--fg)_20%,transparent)]',
        // Accessibility
        'focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-water',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg)'
      ].join(' ')}
      onClick={toggle}
      title={`Switch to ${next} mode`}>
      {theme === 'dark' ? <IoSunny size={22} /> : <IoMoon size={22} />}
    </button>
  );
};

// Memo: this component only re-renders when usesTheme() changes
export default memo(ThemeToggleButton);
