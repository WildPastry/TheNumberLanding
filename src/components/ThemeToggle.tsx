import { IoMoon, IoSunny } from 'react-icons/io5';
import React, { memo } from 'react';
import { focusRing, iconButtonBase } from '../styles/uiClasses';
import { joinClass } from '../utils/joinClass';
import { useTheme } from '../theme/useTheme';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggle } = useTheme();
  const next: string = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label={`Switch to ${next} mode`}
      className={joinClass(iconButtonBase, focusRing)}
      onClick={toggle}
      title={`Switch to ${next} mode`}>
      {theme === 'dark' ? <IoSunny size={22} /> : <IoMoon size={22} />}
    </button>
  );
};

// Memo: this component only re-renders when usesTheme() changes
export default memo(ThemeToggleButton);
