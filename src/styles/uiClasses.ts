export const focusRing = [
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-water',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg)'
].join(' ');

export const iconButtonBase = [
  'inline-flex items-center justify-center',
  'h-10 w-10 rounded-full',
  'cursor-pointer select-none',
  'transition-transform duration-150 active:scale-95',
  'text-(--fg)',
  'bg-[color-mix(in_oklab,var(--fg)_10%,transparent)]',
  'hover:bg-[color-mix(in_oklab,var(--fg)_20%,transparent)]'
].join(' ');

export const linkButtonBase = [
  'inline-flex items-center justify-center',
  'rounded-sm',
  'transition-transform duration-150 active:scale-95'
].join(' ');
