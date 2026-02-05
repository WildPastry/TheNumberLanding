import React, { memo, useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';

const ScrollToTop: React.FC = () => {
  // Dependencies
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Sets the isVisible state based on the current scroll position.
     * If the scroll position is greater than or equal to 200, sets isVisible to true.
     * Otherwise, sets isVisible to false.
     */
    const onScroll = () => {
      setIsVisible(window.scrollY >= 200);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  if (!isVisible) return null;

  return (
    <button
      aria-label='Scroll to top'
      className={[
        // Position
        'fixed right-5 bottom-20 z-50',
        // Layout / hit area
        'inline-flex items-center justify-center',
        'h-10 w-10 rounded-full',
        // Cursor + transitions
        'cursor-pointer select-none',
        'transition-transform duration-150 active:scale-95',
        // Colors (semantic)
        'text-(--fg)',
        'bg-[color-mix(in_oklab,var(--fg)_10%,transparent)]',
        'hover:bg-[color-mix(in_oklab,var(--fg)_20%,transparent)]',
        // A little depth
        'shadow-sm',
        // Accessibility
        'focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-water',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg)'
      ].join(' ')}
      onClick={scrollToTop}
      title='Scroll to top'>
      <IoArrowUp size={22} />
    </button>
  );
};

// Memo: this component only re-renders when isVisible() changes
export default memo(ScrollToTop);
